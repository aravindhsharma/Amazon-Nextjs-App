module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "cdn.example.com",
      "images.example.com",
      "images.example.com/images/",
      "links.papareact.com",
      "fakestoreapi.com",
    ],
  },
  env: {
    stripe_public_key: `${process.env.STRIPE_PUBLIC_KEY}`,
  },
};
