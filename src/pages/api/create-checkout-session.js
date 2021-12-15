const stripe = require("stripe")(
  "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"
);

const CheckoutSession = async (req, res) => {
  const { items, email } = req.body;

  const transformedItems = items.map((item) => ({
    description: item.description,
    quantity: 1,
    price_data: {
      currency: "usd",
      unit_amount: item.price * 100,
      product_data: {
        name: item.title,
        images: [item.image],
      },
    },
  }));
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_rates: ["shr_1K6FBqSJuRqKOZK94llcvqkM"],
    shipping_address_collection: {
      allowed_countries: ["US", "CA", "GB", "AU", "IN"],
    },

    line_items: transformedItems,
    mode: "payment",
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
      email,
      images: JSON.stringify(items.map((item) => item.image)),
    },
  });
  res.status(200).json({ sessionId: session.id });
};

export default CheckoutSession;
