// models/User.js

const mongoose = require('mongoose');

// Define User schema
const userSchema = new mongoose.Schema({
  username: { type: String },
  email: { type: String, },
  password: { type: String},
  leadsCount: [
    {leads:{type:Number},date:{type:String}}
  ],
  createdAt: { type: Date, default: Date.now }
});

// Create User model
const User = mongoose.model('User', userSchema);

module.exports = User;