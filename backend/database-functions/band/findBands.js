import { client } from '../../server.js';
export async function findBands() {
  try {
    const cursor = await client.db('band-musician').collection('bands').find();
    const result = await cursor.toArray();
    return result;
  } catch (e) {
    console.error(e);
  }
}
