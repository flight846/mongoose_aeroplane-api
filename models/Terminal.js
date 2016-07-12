var mongoose = require('mongoose');
var flight = require('./models/flight');

var TerminalSchema = mongoose.Schema({
    name: String,
    _flights: [{
        type: mongoose.Scheme.Types.ObjectId, ref: 'flights'
    }],
    capacity: Number
})

module.exports = mongoose.model('Terminal', TerminalSchema);