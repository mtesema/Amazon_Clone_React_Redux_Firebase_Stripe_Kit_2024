require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const express = require("express");
const { buffer } = require("micro");
const cors = require("cors");
const { default: axios } = require("axios");
const bodyParser = require("body-parser");
const admin = require("firebase-admin");
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
const serviceAccount = require("../../../serviceAccountKey.json");

// Firebase initialization with service account key
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Express app initialization
const app = express();

// Firebase database initialization
const db = admin.firestore();

// Use body-parser middleware for raw body handling
app.use(
  bodyParser.raw({
    type: "application/json",
  })
);

const fullFillOrder = async (event) => {
  console.log("Fulfilling order with grace and precision", event);

  let productId = JSON.parse(event.data.object.metadata.id);

  try {
    // Contact fake store and get product data
    let products = await axios.get("https://fakestoreapi.com/products");

    // Filter the response with the event.data.object.metadata.id of product id
    let basket = products.data.filter((product) =>
      productId?.includes(product.id)
    );

    console.log("basket", basket);

    const {
      amount_total: amount,
      id,
      created,
      payment_intent: paymentIntent,
      metadata: { email },
    } = event.data.object;

    // Putting it in the database
    await db
      .collection("users")
      .doc(email) // event.data.object.metadata.email
      .collection("orders")
      .doc(id) // event.data.object.id
      .set({
        basket: basket, // event.data.object.metadata.id -- id --->fetch (fakestore)
        amount: amount / 100, // event.data.object.amount_total
        images: JSON.parse(event.data.object.metadata.images),
        created: created, // event.data.object.created
        timestamp: admin.firestore.FieldValue.serverTimestamp(),
      });

    console.log(`SUCCESS: Order ${id} has been added to the DB with elegance`);
  } catch (error) {
    console.error("Error adding order to DB:", error);
  }
};

// Endpoint to handle Stripe webhooks
app.post("/webhook", async (req, res) => {
  const sig = req.headers["stripe-signature"];

  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    console.log("Webhook event received:", event.type);
  } catch (err) {
    console.error("Webhook signature verification failed.", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  switch (event.type) {
    case "payment_intent.succeeded":
      const paymentIntent = event.data.object;
      console.log(`PaymentIntent for ${paymentIntent.amount} was successful!`);
      break;
    case "payment_method.attached":
      const paymentMethod = event.data.object;
      console.log("PaymentMethod was attached to a Customer!");
      break;
    case "checkout.session.completed":
      console.log("Checkout session completed event received");

      //pass the event to the function define at the top to create a firtebase DB 
      await fullFillOrder(event);
      break;
    default:
      console.log(`Unhandled event type ${event.type}.`);
  }

  res.status(200).send();
});

const PORT = process.env.WEBHOOK_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
