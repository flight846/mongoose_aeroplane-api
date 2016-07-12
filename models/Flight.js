var mongoose = require('mongoose');

var FlightSchema = mongoose.Schema({
    from: String,
    to: String,
    airline: String,
    passengers: []
})

module.exports = mongoose.model('Flight', FlightSchema);