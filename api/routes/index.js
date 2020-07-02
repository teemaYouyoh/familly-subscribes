'use strict';
module.exports = function(app) {
  var subscribesGroups = require('../controllers/subscribesGroupsController');
  var usersList = require('../controllers/usersListController');
  
  // subscribesGroups Routes
  app.route('/subscribes-groups')
    .post(subscribesGroups.create_a_group)
    .get(subscribesGroups.list_all_groups);


  app.route('/subscribes-groups/:groupID')
    .get(subscribesGroups.read_a_group)
    .put(subscribesGroups.update_a_group)
    .delete(subscribesGroups.delete_a_group);


  // usersList Routes
  app.route('/users')
    .post(usersList.create_a_user)
    .get(usersList.list_all_users);


  app.route('/users/:userId')
    .get(usersList.read_a_user)
    .put(usersList.update_a_user)
    .delete(usersList.delete_a_user);
};
