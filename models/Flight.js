var mongoose = require('mongoose');

var FlightSchema = mongoose.Schema({
    from: String,
    to: String,
    airline: String
})

module.exports = mongoose.model('Flight', FlightSchema);