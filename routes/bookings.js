const express = require('express');
const Booking = require('../models/Booking');

const router = express.Router();

router.post('/', async (req, res) => {
  const booking = await Booking.create(req.body);
  res.status(201).json(booking);
});

router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find().populate('listing user');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
});

module.exports = router;
