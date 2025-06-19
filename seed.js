const mongoose = require('mongoose');
const Listing = require('./models/Listing');
require('dotenv').config();

const listings = [
  {
    title: "Cozy Cabin",
    description: "Mountain view with rustic charm.",
    location: "Colorado",
    price: 120,
    images: ["https://images.unsplash.com/photo-1535827841776-24afc1e255ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGhvdGVsfGVufDB8fDB8fHww", "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHx8MHx8fDA%3D"]
  },
  {
    title: "Beachside Bungalow",
    description: "Steps from the ocean.",
    location: "California",
    price: 200,
    images: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsfGVufDB8fDB8fHww", "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsfGVufDB8fDB8fHww"]
  },
  {
    title: "Urban Loft",
    description: "Modern apartment in downtown.",
    location: "New York",
    price: 180,
    images: ["https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGhvdGVsfGVufDB8fDB8fHww"]
  },
  {
    title: "Lakeview House",
    description: "Peaceful retreat with lake view.",
    location: "Michigan",
    price: 150,
    images: ["https://images.unsplash.com/photo-1506059612708-99d6c258160e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGhvdGVsfGVufDB8fDB8fHww"]
  },
  {
    title: "Desert Villa",
    description: "Luxurious stay in the desert.",
    location: "Arizona",
    price: 250,
    images: ["https://images.unsplash.com/photo-1468824357306-a439d58ccb1c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGhvdGVsfGVufDB8fDB8fHww"]
  }
];

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await Listing.deleteMany();
  await Listing.insertMany(listings);
  console.log("Seed complete!");
  process.exit();
});
