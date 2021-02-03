const express = require('express')
const path = require('path');
const cors = require('cors')

const UserController = require('./controllers/UserController')
const CustomerController = require('./controllers/CustomerController')

const routes = new express.Router()
routes.use(cors());

routes.get('/',  (req, res, next) => res.sendFile(path.join(__dirname, 'src','../public', 'index.html')))
routes.get('/users', UserController.index)

module.exports = routes