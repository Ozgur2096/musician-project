import { client } from '../../server.js';
export async function findMusician(cardId) {
  try {
    const result = await client
      .db('band-musician')
      .collection('musicians')
      .findOne({ cardId });

    return result;
  } catch (e) {
    console.error(e);
  }
}
