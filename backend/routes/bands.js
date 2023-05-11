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

router.get('/:id', getBand);

router.delete('/:id', deleteBand);

router.patch('/:id', updateBand);

export default router;
