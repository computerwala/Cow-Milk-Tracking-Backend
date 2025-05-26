const express = require('express');
const router = express.Router();
const MilkingSession = require('../models/MilkingSessions');

router.post('/', async (req, res) => {
    try {
        const session = new MilkingSession(req.body);
        await session.save();
        res.status(201).send({message: 'Milking session saved'});
    } catch (err) {
        res.status(400).send({message: err.message});
    }
});


router.get('/', async (req, res) => {
    try{
        const sessions = await MilkingSession.find().sort({created_at: -1});
        res.send(sessions);
    } catch (err) {
        res.status(500).send({message: err.message});
    }
});

module.exports = router;