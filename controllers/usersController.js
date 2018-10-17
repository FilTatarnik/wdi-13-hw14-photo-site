/*************** REQUIRING STUFF ***************/
const express = require('express');
const router = express.Router();
const Users = require('../models/users');

/*************** INDEX ROUTE ***************/
router.get('/', (req, res) => {
	// console.log(req);
	res.render('../views/users/index.ejs');
})
/*************** NEW USER ROUTE ***************/

/*************** CREATE ROUTE ***************/

/*************** SHOW ROUTE ***************/

/*************** DESTROY ROUTE ***************/

/*************** EDIT ROUTE ***************/

/*************** UPDATE ROUTE ***************/

module.exports = router;
