const express = require('express');
const Listing = require('../models/Listing');

const router = express.Router();

router.get('/', async (req, res) => {
  const listings = await Listing.find();
  res.json(listings);
});

router.get('/:id', async (req, res) => {
  const listing = await Listing.findById(req.params.id);
  res.json(listing);
});

router.post('/', async (req, res) => {
  const listing = await Listing.create(req.body);
  res.status(201).json(listing);
});

module.exports = router;
