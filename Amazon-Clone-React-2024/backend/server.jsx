require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/create-checkout-session", async (req, res) => {
  const { items, email } = req.body;
  console.log(items);
  console.log(email);

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
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/success`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`,
      metadata: {
        email,
        images: JSON.stringify(items.map((item) => item.image)),
      },
    });

    res.status(200).json({ id: session.id });
  } catch (error) {
    console.error("Error creating Stripe Checkout session:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(4242, () => {
  console.log("Running on port 4242");
});
