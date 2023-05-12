import { client } from '../../server.js';
export async function findMusicians() {
  try {
    const cursor = await client
      .db('band-musician')
      .collection('musicians')
      .find();
    const result = await cursor.toArray();
    return result;
  } catch (e) {
    console.error(e);
  }
}
