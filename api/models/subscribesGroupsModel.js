'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SubscribesGroupsSchema = new Schema({
  region: {
    type: String,
    required: 'Kindly enter the region of subscribe'
  },
  type: {
    type: String,
    required: 'Kindly enter the type of subscribe'
  },
  users: {
    type: Array,
    required: 'Kindly enter the users of subscribe'
  },
  isFull: {
    type: Boolean,
    required: 'Kindly enter the isFull of subscribe'
  },
});

module.exports = mongoose.model('subscribes-groups', SubscribesGroupsSchema);