const express = require('express');
const router = express.Router();
const Photos = require('../models/photos');

/*************** INDEX ROUTE ***************/

router.get('/', (req, res) => {
	Photos.find({},(err, foundPhotos) => {
		res.render('photos/index.ejs', {photos:foundPhotos})
			
	})
});

module.exports = router;