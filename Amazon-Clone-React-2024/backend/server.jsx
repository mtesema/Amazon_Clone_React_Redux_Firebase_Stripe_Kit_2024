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


//Firebase intitilization with service Account key
if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

// Express app initialization
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));




// Endpoint to create checkout session
app.post("/create-checkout-session", async (req, res) => {
  const { items, email } = req.body;
   console.log(items);
   console.log(email);

  if (!items || !email) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const transformedItems = items.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.title,
          images: [item.image],
          description: item.description,
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity || 1,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      shipping_address_collection: {
        allowed_countries: ["US", "CA", "GB"],
      },
      line_items: transformedItems,
      expand: ["line_items"],
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/success`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`,
      metadata: {
        email,
        
        images: JSON.stringify(items.map((item) => item.image)),
        id: JSON.stringify(items.map((item) => item.id)), // ["1", "2"]
      },
    });

    res.status(200).json({ id: session.id });
  } catch (error) {
    console.error("Error creating Stripe Checkout session:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});



const PORT = process.env.SERVER_PORT || 4242;
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
