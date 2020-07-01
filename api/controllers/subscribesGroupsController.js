'use strict';

var mongoose = require('mongoose'),
Groups = mongoose.model('subscribes-groups');

exports.list_all_groups = function(req, res) {
  Groups.find({}, function(err, group) {
    if (err)
      res.send(err);
    res.json(group);
  });
};
 
exports.create_a_group = function(req, res) {
  var new_group = new Groups(req.body);
  new_group.save(function(err, group) {
    if (err)
      res.send(err);
    res.json(group);
  });
};


exports.read_a_group = function(req, res) {
  Groups.findById(req.params.groupId, function(err, group) {
    if (err)
      res.send(err);
    res.json(group);
  });
};


exports.update_a_group = function(req, res) {
  Groups.findOneAndUpdate({_id: req.params.groupId}, req.body, {new: true}, function(err, group) {
    if (err)
      res.send(err);
    res.json(group);
  });
};


exports.delete_a_group = function(req, res) {


  Groups.remove({
    _id: req.params.groupId
  }, function(err, group) {
    if (err)
      res.send(err);
    res.json({ message: 'Group successfully deleted' });
  });
};