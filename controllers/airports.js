var Airport = require('../models/Airport')

// GET
function getAll (request, response) {
  Airport.find(function (error, airports) {
    if (error) response.json({message: 'Could not find any airport'})

    response.send(airports)
  })
}

module.exports = { getAll: getAll }