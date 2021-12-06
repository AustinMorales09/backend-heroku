const mongoose = require('mongoose');
const Schema = mongoose.Schema

const attractionSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    imageURL: {
        type: String
    },
    website: {
        type: String
    },
 
})

const Attraction = mongoose.model('Attraction', attractionSchema)
module.exports = Attraction