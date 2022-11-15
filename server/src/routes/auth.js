import { response, Router } from 'express';

import User from '../models/user.js';

const userRoutes = Router();

// This section will help you get a list of all the users.
userRoutes.route('/api/users').get((req, res) => {
  User.find({}, (err, users) => {
    if (err) res.status(400).json({ success: false, error: err.message });
    else res.json({ success: true, users });
  });
});

// This section will help you get a single user by id
userRoutes.route('/api/user/:id').get((req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) res.status(400).json({ success: false, error: err.message });
    else res.json({ success: true, user });
  });
});

// This section will help you create a new user.
userRoutes.route('/api/user').post((req, res) => {
  User.create(req.body, (err, user) => {
    if (err) {
      if (err.code === 11000) {
        res.json({ success: false, error: 'User already exists' });
      } else {
        res.status(400).json({ success: false, error: err.message });
      }
    }
    else res.json({ success: true, user });
  });
});

// This section will help you update a user by id.
userRoutes.route('/api/user/:id').put((req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
    if (err) res.status(400).json({ success: false, error: err.message });
    else res.json({ success: true, user });
  });
});

// This section will help you delete a user
userRoutes.route('/api/user/:id').delete((req, response) => {
  User.findByIdAndDelete(req.params.id, (err, user) => {
    if (err) response.status(400).json({ success: false, error: err.message });
    else response.json({ success: true });
  });
});

userRoutes.route('/api/users/verify').post((req, res) => {
  User.findOne({ email: req.body.email }, (err,  user) => {
    if (err) response.status(400).json({ success: false, error: err.message.message });
    else if (user) {
      if (user.password === req.body.password) {
        res.json({ success: true, user });
      } else {
        res.json({ success: false, error: 'Incorrect password' });
      }
    } else {
      res.json({ success: false, error: 'Incorrect email' });
    }
  })
});

export default userRoutes;
