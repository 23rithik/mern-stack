const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const userdata = require('../model/UserData');

router.use(express.json());

router.post('/login', async (req, res) => {
    try {
        const user = await userdata.findOne({ email: req.body.email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (user.password !== req.body.password) {
            return res.status(401).json({ message: 'Incorrect password' });
        }

        const payload = { email: req.body.email, pwd: req.body.password };
        const token = jwt.sign(payload, 'karthy');
        res.status(200).json({ message: 'Login successful', token: token });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.post('/login1', async (req, res) => {
    try {
        const user = await userdata.findOne({ email: req.body.email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (req.body.password !== 'Admin@123') {
            return res.status(401).json({ message: 'Incorrect password' });
        }

        const payload = { email: req.body.email, pwd: req.body.password };
        const token = jwt.sign(payload, 'rithik');
        res.status(200).json({ message: 'Login successful', token: token });
    } catch (error) {
        console.error('Error during admin login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


module.exports = router;
