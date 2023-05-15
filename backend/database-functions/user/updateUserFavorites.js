import { client } from '../../server.js';

export async function updateUserFavorites(userId, data) {
  try {
    const result = await client
      .db('band-musician')
      .collection('users')
      .updateOne({ userId }, { $set: { favorites: data } });
  } catch (e) {
    console.error(e);
  }
}
