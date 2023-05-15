import { client } from '../../server.js';

export async function checkUserAndPassword(email) {
  try {
    const result = await client
      .db('band-musician')
      .collection('users')
      .findOne({ email });
    console.log(result);
    return result;
  } catch (e) {
    console.error(e);
  }
}
