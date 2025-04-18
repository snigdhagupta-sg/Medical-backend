// models/User.js - User model
const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  }
});
const userModel = mongoose.model('User', adminSchema);
module.exports = userModel;