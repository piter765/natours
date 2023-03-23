const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true,
    trim: true
  },
  duration: {
    type: Number,
    required: [true, 'A tour must ahve a duration']
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'A tour must have a group size']
  },
  difficulty: {
    type: String,
    required: [true, 'A tour must have a difficulty']
  },
  ratingsAverage: {
    type: Number,
    default: 4.5
  },
  ratingsQuantity: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price']
  },
  priceDiscount: Number,
  summary: {
    type: String,
    trim: true, // usuwa spacje na poczatku i na koncu
    required: [true, 'A tour must have a description']
  },
  descrription: {
    type: String,
    trim: true
  },
  imageCover: {
    type: String,
    require: [true, 'A tour must have a cover image']
  },
  images: [String], // array of Strings
  createdAt: {
    type: Date,
    default: Date.now()
  },
  startDates: [Date] // moga byc na przyklad w styczniu , marcu i grudniu
});
const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
