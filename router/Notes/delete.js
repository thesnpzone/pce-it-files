const router = require('express').Router()
const Notesupload = require("../../models/Noteupload.js")



router.post("/delete", async(req, res) => {


    const filter = { _id: req.body._id }


    let doc = await Notesupload.deleteOne(filter)
    res.status(200).send(req.body)

});

module.exports = router