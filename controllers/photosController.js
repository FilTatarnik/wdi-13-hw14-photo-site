const express = require('express');
const router = express.Router();
const Photos = require('../models/photos');

/*************** INDEX ROUTE ***************/

router.get('/', (req, res) => {
	Photos.find({},(err, foundPhotos) => {
		res.render('photos/index.ejs', {photos:foundPhotos})
			
	})
});

/*************** NEW USER ROUTE ***************/
router.get('/new', (req, res) => {
	res.render('../views/photos/new.ejs')
})

/*************** SHOW ROUTE ***************/


/*************** EDIT ROUTE ***************/

/*************** DESTROY ROUTE ***************/

/*************** UPDATE ROUTE ***************/

module.exports = router;