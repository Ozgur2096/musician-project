import express from 'express';

import {
  createMusician,
  getMusician,
  deleteMusician,
  updateMusician,
  getMusicians,
} from '../controllers/musicians.js';

const router = express.Router();

// all routes in here start with /musicians
router.get('/', getMusicians);

router.post('/', createMusician);

router.get('/:id', getMusician);

router.delete('/:id', deleteMusician);

router.patch('/:id', updateMusician);

export default router;
