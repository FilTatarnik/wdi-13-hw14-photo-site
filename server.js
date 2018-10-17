const express = require('express');
const app = express();

require('./db/db');
/*************** MIDDLEWARE ***************/

/*************** CONTROLLERS ***************/
const usersControllers = require('./controllers/usersController');
app.use('/users', usersControllers);

/*************** CONNECTING OUR APP TO THE PORT ***************/
app.listen(3000, () => {
		console.log('App is listening to port 3000');
})