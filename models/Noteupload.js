const mongoose = require("mongoose");

const Notesupload = mongoose.Schema({
    topic: String,
    sem: Number,
    subject: String,
    notelink: String,
});

module.exports = mongoose.model("note", Notesupload);