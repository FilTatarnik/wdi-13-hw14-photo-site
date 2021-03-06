const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const usersControllers = require('./controllers/usersController');
const photosControllers = require('./controllers/photosController');

require('./db/db');
/*************** MIDDLEWARE ***************/
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
/*************** CONTROLLERS ***************/
app.use('/users', usersControllers);
app.use('/photos', photosControllers);
/*************** CONNECTING OUR APP TO THE PORT ***************/
app.listen(3000, () => {
		console.log('App is listening to port 3000');
})