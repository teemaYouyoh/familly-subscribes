'use strict';
module.exports = function(app) {
  var subscribesGroups = require('../controllers/subscribesGroupsController');
  var manufacturersList = require('../controllers/manufacturersListController');
  
  // subscribesGroups Routes
  app.route('/subscribes-groups')
    .post(subscribesGroups.create_a_group)
    .get(subscribesGroups.list_all_groups);


  app.route('/subscribes-groups/:groupID')
    .get(subscribesGroups.read_a_group)
    .put(subscribesGroups.update_a_group)
    .delete(subscribesGroups.delete_a_group);


  // manufacturersList Routes
  app.route('/manufacturers')
    .post(manufacturersList.create_a_manufacturer)
    .get(manufacturersList.list_all_manufacturers);


  app.route('/manufacturers/:manufacturersId')
    .get(manufacturersList.read_a_manufacturer)
    .put(manufacturersList.update_a_manufacturer)
    .delete(manufacturersList.delete_a_manufacturer);
};
