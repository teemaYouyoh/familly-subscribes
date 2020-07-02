/* eslint-disable */
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersListSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name'
  },
  password: {
    type: String,
    required: 'Kindly enter the password'
  },
  email: {
    type: String,
    required: 'Kindly enter the email'
  },
  subscribes: {
    type: Array,
    required: "Kindly enter the subscribes"
  },
  region: {
    type: String,
    required: 'Kindly enter the region'
  },
});

module.exports = mongoose.model('Users', usersListSchema);