const router = require('express').Router()
const Noteupload = require("../../models/Noteupload")



router.get("/get", async(req, res) => {

    const response = await Noteupload.find({});

    res.status(200).send(response)

});

module.exports = router