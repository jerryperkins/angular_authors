const mongoose = require('mongoose')

const AuthorsSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
})

const Author = mongoose.model('Author', AuthorsSchema)

module.exports ={
    Author:Author,
    AuthorsSchema:AuthorsSchema
}