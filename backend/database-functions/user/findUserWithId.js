import { client } from '../../server.js';

export async function findUserWithId(userId) {
  try {
    const result = await client
      .db('band-musician')
      .collection('users')
      .findOne({ userId }, { favorites: 1 });
    return result;
  } catch (e) {
    console.error(e);
  }
}
