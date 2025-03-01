const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    genre: {
        type: [String]
    },
    plot: String,
    cast: {
        type: [Object]
    }
})

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;