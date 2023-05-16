import { client } from '../../server.js';

export async function findBand(cardId) {
  try {
    const result = await client
      .db('band-musician')
      .collection('bands')
      .findOne({ cardId });

    return result;
  } catch (e) {
    console.error(e);
  }
}
