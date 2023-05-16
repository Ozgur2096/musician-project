import express from 'express';

import {
  createBand,
  getBand,
  deleteBand,
  updateBand,
  getBands,
} from '../controllers/bands.js';

const router = express.Router();

// all routes in here start with /bands
router.get('/', getBands);

router.post('/', createBand);

router.get('/:cardId', getBand);

router.delete('/:cardId', deleteBand);

router.patch('/:cardId', updateBand);

export default router;
