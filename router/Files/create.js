const router = require('express').Router()
const Filesupload = require("../../models/Fileupload")



router.post("/create", async(req, res) => {

    const response = await new Filesupload({
        title: req.body.title,
        desc: req.body.desc,
        filelink: req.body.filelink,
    }).save();

    res.status(200).send(response)

});

module.exports = router