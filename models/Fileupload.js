const mongoose = require("mongoose");

const Filesupload = mongoose.Schema({
    title: String,
    desc: String,
    filelink: String,
});

module.exports = mongoose.model("file", Filesupload);