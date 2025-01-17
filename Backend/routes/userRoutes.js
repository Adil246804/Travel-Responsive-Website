// Importing required modules
import express from 'express';
import User from '../models/userModel.js';
const router = express.Router();


// POST /api/user
router.post('/',async(req, res)=>{
    const {First_name, Last_name, email, password} = req.body;
    try {
        const newUser = new User({First_name, Last_name, email, password});
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// POST /api/user/login
router.post('/login', async(req, res)=>{
    const {email, password} = req.body;

    try {
        const user = await User.findOne({email});
        if (!user || user.password !== password) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        res.json({user});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

// GET /api/user/:id
export default router;