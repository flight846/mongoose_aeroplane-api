var mongoose = require('mongoose');
var terminal = require('./terminal');

var AirportSchema = mongoose.Schema({
	name: String,
	country: String,
    terminals: [terminal.schema],
    opened: Date
});

module.exports = mongoose.model('Airport', AirportSchema);