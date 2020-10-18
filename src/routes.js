const express = require('express');

const UsersController = require('./controllers/UsersController');
const AddressesController = require('./controllers/AddressesController');
const TechsController = require('./controllers/TechsController');
const ReportController = require('./controllers/ReportController');

const routes = express.Router();

routes.post('/users', UsersController.create);
routes.get('/users', UsersController.index);
routes.get('/users/:user_id', UsersController.show);
routes.put('/users/:user_id', UsersController.update);
routes.delete('/users/:user_id', UsersController.delete);
routes.post('/users/:user_id', UsersController.restore);

routes.post('/users/:user_id/addresses', AddressesController.create);
routes.get('/users/:user_id/addresses', AddressesController.index);

routes.post('/users/:user_id/techs', TechsController.create);
routes.get('/users/:user_id/techs', TechsController.index);
routes.delete('/users/:user_id/techs', TechsController.delete);

routes.get('/report', ReportController.show);

module.exports = routes;