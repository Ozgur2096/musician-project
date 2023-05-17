import { client } from '../../server.js';

export async function deleteBandCard(cardId) {
  try {
    await client.db('band-musician').collection('bands').deleteOne({ cardId });
  } catch (e) {
    console.error(e);
  }
}
