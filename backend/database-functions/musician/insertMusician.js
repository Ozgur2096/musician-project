import { client } from '../../server.js';
export async function insertMusician(newMusician) {
  try {
    await client
      .db('band-musician')
      .collection('musicians')
      .insertOne(newMusician);
    console.log(`New musician card created`);
  } catch (e) {
    console.error(e);
  }
}
