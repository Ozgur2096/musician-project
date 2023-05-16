import { client } from '../../server.js';

export async function updateMusicianCard(cardId, updatedCard) {
  try {
    await client
      .db('band-musician')
      .collection('musicians')
      .updateOne({ cardId }, { $set: updatedCard });
    console.log(`Musician-card updated`);
  } catch (e) {
    console.error(e);
  }
}
