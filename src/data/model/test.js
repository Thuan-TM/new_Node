
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const test = new Schema({
    test: String,
    description: {type: String, default: 'hahaha'},
    createdAt: {type: Date, default: Date.now},
    updateAt: {type: Date, default: Date.now}
})

module.exports = mongoose.model('test', test)