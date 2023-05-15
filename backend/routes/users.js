import express from 'express';

import {
  checkUser,
  createUser,
  getFavorites,
  updateFavorites,
} from '../controllers/users.js';

const router = express.Router();
// all routes in here start with /users

router.post('/register', createUser);
router.post('/login', checkUser);
router.get('/favorites/:userId', getFavorites);
router.put('/favorites/:userId', updateFavorites);

export default router;
