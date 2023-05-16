import { client } from '../../server.js';

export async function updateBandCard(cardId, updatedCard) {
  try {
    await client
      .db('band-musician')
      .collection('bands')
      .updateOne({ cardId }, { $set: updatedCard });
    console.log(`Band-card updated`);
  } catch (e) {
    console.error(e);
  }
}
