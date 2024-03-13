import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { body, validationResult } from 'express-validator';
import User from './userSchema.js';

const router = express.Router();

// Route for user registration
router.post(
  '/register',
  async (req, res) => {
    console.log(req.body);
    // Destructure request body
    const { username, password, email } = req.body;

    try {
      // Check if user with the given email or username already exists
      let user = await User.findOne({ $or: [{ username }, { email }] });
      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }

      // Create a new user instance
      user = new User({
        username,
        password,
        email,
        location,
      });

      // Hash password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      // Save user to database
    //   await user.save();


      res.json({ msg: 'User registered successfully' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);


export default router;
