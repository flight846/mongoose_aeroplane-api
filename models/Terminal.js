var mongoose = require('mongoose');
var flight = require('./flight');

var TerminalSchema = mongoose.Schema({
    name: String,
    _flights: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'flights'
    }],
    capacity: Number
})

module.exports = mongoose.model('Terminal', TerminalSchema);