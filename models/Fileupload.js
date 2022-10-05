const mongoose = require("mongoose");

const Filesupload = mongoose.Schema({
    title: { type: String, required: true },
    desc: { type: String, required: true },
    filelink: { type: String, required: true },
});

module.exports = mongoose.model("file", Filesupload);