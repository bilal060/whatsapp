const express = require('express');
const router = express.Router();
const message = require("./messageModel");
router.post('/createMsg', async (req, res) => {
    const { body } = req.body
    try {

        const result = await new message({ message: body }).save();
        // Returning successfull response
        return res.status(200).json({
            success: true,
            result,
            message: 'Successfully Created',
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            result: null,
            message: 'Error',
            error: err,
        });
    }
})
router.get('/createMsg', (req, res) => {
    var challenge = req.query['hub.challenge'];
    res.status(200).send(challenge);
})


router.get('/message', async (req, res) => {
    try {
        const resultsPromise = await message.find().sort({ _id: -1 }).limit(1);
        return res.status(200).json({
            success: true,
            result: resultsPromise,
            message: 'Successfully Created',
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            result: null,
            message: 'Error',
            error: err,
        });
    }
})

module.exports = router;