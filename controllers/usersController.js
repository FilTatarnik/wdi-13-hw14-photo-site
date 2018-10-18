/*************** REQUIRING STUFF ***************/
const express = require('express');
const router = express.Router();
const Users = require('../models/users');

/*************** INDEX ROUTE ***************/
router.get('/', (req, res) => {
	Users.find({}, (err, foundUsers) => {
		res.render('users/index.ejs', {
			users: foundUsers
		})
			
	})
});
/*************** NEW USER ROUTE ***************/
router.get('/new', (req, res) => {
	res.render('../views/users/new.ejs')
})
/*************** CREATE ROUTE ***************/
router.post('/', (req, res) => {
	Users.create(req.body, req.params.id, (err, createdUser) => {
		res.redirect('/users');	
		console.log(createdUser);
		})
	});
/*************** SHOW ROUTE ***************/
router.get('/:id', (req, res) => {
	Users.findById(req.params.id,
		(err, foundUser) => {
			if(err){console.log('------------ERROR----------', err);
		}
				else{console.log('-------------FOUND USER-------------', foundUser);
					res.render('../views/users/show.ejs',
					{
						users:foundUser
					});
				
			}	
		}
	)
})
/*************** DESTROY ROUTE ***************/

/*************** EDIT ROUTE ***************/

/*************** UPDATE ROUTE ***************/

module.exports = router;