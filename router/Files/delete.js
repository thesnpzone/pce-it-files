const router = require('express').Router()
const Filesupload = require("../../models/Fileupload")



router.post("/delete", async(req, res) => {


    const filter = { _id: req.body._id }


    let doc = await Filesupload.deleteOne(filter)
    res.status(200).send(req.body)

});

module.exports = router