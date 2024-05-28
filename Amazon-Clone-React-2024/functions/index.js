const { onRequest } = require("firebase-functions/v2/https");
const express = require("express");
const functions = require("firebase-functions");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));

app.use(express.json());

// - API routes
app.get("/", (request, response) =>
  response.status(200).send("Back-end properly connected")
);

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
  // response.status(201).json(paymentIntent)
});


// - Listen command
exports.api = functions.https.onRequest(app);
