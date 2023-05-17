import { client } from '../../server.js';

export async function deleteMusicianCard(cardId) {
  try {
    await client
      .db('band-musician')
      .collection('musicians')
      .deleteOne({ cardId });
  } catch (e) {
    console.error(e);
  }
}
