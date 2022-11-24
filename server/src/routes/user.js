import { Router } from 'express';
import { compare, hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';

import User from '../models/user.js';
import verifyJWT from '../jwt.js';

const userRoutes = Router();

// This section will help you get a list of all the users.
userRoutes.route('/api/users').get(verifyJWT, (req, res) => {
  User.find({}, (err, users) => {
    if (err) return res.status(400).json({ success: false, error: err.message });

    return res.json({ success: true, users });
  });
});

// This section will help you get a single user by id
userRoutes.route('/api/user/:id').get(verifyJWT, (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) return res.status(400).json({ success: false, error: err.message });

    return res.json({ success: true, user });
  });
});

// This section will help you create a new user.
userRoutes.route('/api/user').post(async (req, res) => {
  const payload = {
    name: req.body.name,
    email: req.body.email.toLowerCase(),
    password: await hash(req.body.password, 10)
  }
  User.create(payload, (err, user) => {
    if (!err) return res.json({ success: true, user });
    
    return err.code === 11000 ? 
      res.json({ success: false, error: 'Email already exists' }) : 
      res.status(400).json({ success: false, error: err.message });
  });
});

// This section will help you update a user by id.
userRoutes.route('/api/user/:id').put(verifyJWT, (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
    if (err) return res.status(400).json({ success: false, error: err.message });

    return res.json({ success: true, user });
  });
});

// This section will help you delete a user
userRoutes.route('/api/user/:id').delete(verifyJWT, (req, res) => {
  User.findByIdAndDelete(req.params.id, (err, user) => {
    if (err) return res.status(400).json({ success: false, error: err.message });

    return res.json({ success: true });
  });
});

userRoutes.route('/api/users/verify').get(verifyJWT, (req, res) => {
  return res.json({ success: true, user: req.user });
})

userRoutes.route('/api/users/login').post((req, res) => {
  const enteredPass = req.body.password;
  User.findOne({ email: req.body.email }, async (err,  user) => {
    if (err) return res.status(400).json({ success: false, error: err.message });

    if (!user) return res.json({ success: false, error: 'Incorrect email or password' });

    const passCorrect = await compare(enteredPass, user.password);
    if (!passCorrect) return res.json({ success: false,  error: 'Incorrect email or password'})
    
    const payload = {
      id: user._id,
      email: user.email
    }
    sign(payload, process.env.JWT_SECRET, { expiresIn: 86400 }, (err, token) => {
      if (err) return res.status(400).json({ success: false, error: err.message });
      return res.json({ success: true, token: `Bearer ${token}` })
    });
  });
});

export default userRoutes;
