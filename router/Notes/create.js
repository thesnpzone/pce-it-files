const router = require('express').Router()
const Notesupload = require("../../models/Noteupload.js")



router.post("/create", async(req, res) => {

    const response = await new Notesupload({
        topic: req.body.topic,
        sem: req.body.sem,
        subject: req.body.subject,
        notelink: req.body.notelink,
    }).save();

    res.status(200).send(response)

});

module.exports = router