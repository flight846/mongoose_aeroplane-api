var mongoose = require('mongoose');

var PassengerSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    dob: Date
})

module.exports = mongoose.model('Passenger', PassengerSchema);