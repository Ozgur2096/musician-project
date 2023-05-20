import { v4 as uuidv4 } from 'uuid';
import { findBands } from '../database-functions/band/findBands.js';
import { insertBand } from '../database-functions/band/insertBand.js';
import { findBand } from '../database-functions/band/findBand.js';
import { updateBandCard } from '../database-functions/band/updateBandCard.js';
import { deleteBandCard } from '../database-functions/band/deleteBandCard.js';

export const getBands = async (req, res) => {
  const results = await findBands();
  res.send(results);
};

export const createBand = async (req, res) => {
  const avatarUrl = await fetchRandomUser();

  const band = await req.body;
  console.log(band);
  const {
    userId,
    name,
    genre,
    description,
    looking_for,
    image_url,
    userApplied,
  } = band;
  await insertBand({
    cardType: 'band',
    cardId: uuidv4(),
    userId,
    name,
    genre,
    description,
    looking_for,
    image_url,
    userApplied,
  });
  res.send('A new band card created');
};

export const getBand = async (req, res) => {
  const { cardId } = req.params;
  const bandCard = await findBand(cardId);
  res.send(bandCard);
};

export const updateBand = async (req, res) => {
  const { cardId } = req.params;
  const updatedCard = await req.body;
  await updateBandCard(cardId, updatedCard);
  res.send({ message: 'Card updated' });
};

export const deleteBand = async (req, res) => {
  const { cardId } = req.params;
  await deleteBandCard(cardId);
  res.send({ message: 'Card deleted' });
};
