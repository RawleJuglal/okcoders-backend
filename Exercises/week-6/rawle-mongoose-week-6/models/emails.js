var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var emailsSchema = new Schema({
    sender:String,
    recipients:[],
    cc:[],
    text:String,
    mid:String,
    fpath:String,
    bcc:[],
    to:[],
    replyto:String,
    date:Date,
    subject:String
});

//mongoose.Model(name of collection, name of the schema)
module.exports = mongoose.model('emails', emailsSchema);