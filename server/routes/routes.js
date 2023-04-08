import express from 'express';
import signUpTemplate from '../models/signup.js';
import bcrypt from 'bcrypt';

const router = express.Router();

router.post('/signup', async (req, res) => {

    const saltPassword = await bcrypt.genSalt(10);
    const securePassword = await bcrypt.hash(req.body.password, saltPassword);
    const signedUpUser = new signUpTemplate({
        fullName: req.body.fullName,
        username: req.body.username,
        email: req.body.email,
        password: securePassword
    })
    signedUpUser.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json(err);
    })
});

export default router;