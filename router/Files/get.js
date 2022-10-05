const router = require('express').Router()
const Filesupload = require("../../models/Fileupload")



router.get("/get", async(req, res) => {

    const response = await Filesupload.find({});

    res.status(200).send(response)

});

module.exports = router