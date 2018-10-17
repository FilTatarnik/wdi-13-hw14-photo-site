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
router.get('/new', (req, res) => {
	res.render('../views/users/new.ejs')
})
/*************** CREATE ROUTE ***************/
router.post('/', (req, res) => {
	res.redirect('/users');
})
/*************** SHOW ROUTE ***************/

/*************** DESTROY ROUTE ***************/

/*************** EDIT ROUTE ***************/

/*************** UPDATE ROUTE ***************/

module.exports = router;
