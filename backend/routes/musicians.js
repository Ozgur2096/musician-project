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

router.get('/:cardId', getMusician);

router.delete('/:cardId', deleteMusician);

router.patch('/:cardId', updateMusician);

export default router;
