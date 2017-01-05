
var mongoose = require('mongoose');
var schema = mongoose.Schema;
// create collection schema
var AnrSangat = new mongoose.Schema({
    id: Number,
    Name: String,
    phonenum: String,
    mailId: String,
    location: String,
    mukhya: String
});

module.exports= mongoose.model('AnrSangatList', AnrSangat);