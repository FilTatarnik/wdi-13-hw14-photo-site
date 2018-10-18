const mongoose = require('mongoose');
const mongooseUrl = require('mongoose-type-url');

const photoSchema = new mongoose.Schema({

	title: {type: String, required: true},

	urls: [{type: mongoose.SchemaTypes.Url}],

	caption: {type: String}
})

module.exports = mongoose.model('Photos', photoSchema);