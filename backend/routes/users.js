import express from 'express';

import { createUser } from '../controllers/users.js';

const router = express.Router();
// all routes in here start with /users

router.post('/register', createUser);

export default router;
