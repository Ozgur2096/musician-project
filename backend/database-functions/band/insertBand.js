import { client } from '../../server.js';

export async function insertBand(newBand) {
  try {
    await client.db('band-musician').collection('bands').insertOne(newBand);
    console.log(`New band card created`);
  } catch (e) {
    console.error(e);
  }
}
