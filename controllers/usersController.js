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
	Users.create(req.body, req.params.id,
	 (err, createdUser) => {
	 	if(err){console.log('------------ERROR----------', err);
	 }else{console.log('-------------CREATED USER-------------', createdUser);
	}
			// console.log(createdUser);
		})
		res.redirect('/users');	
	});
/*************** SHOW ROUTE ***************/
router.get('/:id', (req, res) => {
	Users.findById(req.params.id,
		(err, foundUser) => {
			if(err){console.log('------------ERROR----------', err);
		}else{console.log('-------------FOUND USER-------------', foundUser);
			res.render('../views/users/show.ejs',{users:foundUser});		
		}	
		}
	)
})
/*************** EDIT ROUTE ***************/
router.get('/:id/edit', (req, res) => {
	Users.findById(req.params.id,
		(err, editUser) => {
			console.log(editUser);
			if (err){console.log(`---------- ERROR ---------- \n`, err);}
				else {
				console.log(`---------- EDIT USER ---------- \n`, editUser);
				res.render('../views/users/edit.ejs', {user:editUser});
			}
		}
	)
})
/*************** DESTROY ROUTE ***************/
router.delete('/:id', (req, res) => {
	Users.findByIdAndRemove(req.params.id, req.body,
		(err, deletedUser) => {
				if(err){console.log('-------------ERROR-------------', err);}
				else {
					console.log('----------------DELETED USER-------------', deletedUser);
					res.redirect('/users');
				}
		})
})

/*************** UPDATE ROUTE ***************/

router.put('/:id', (req, res) => {
	Users.findByIdAndUpdate(req.params.id, req.body,
		(err, updatedUser) => {
			if(err){console.log(`---------- ERROR ---------- \n`, err);}
				else {
				console.log(`---------- UPDATED USER ---------- \n`, updatedUser);
				res.redirect('/users');
			}
	})
})


module.exports = router;