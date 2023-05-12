import { client } from '../../server.js';

export async function insertUser(newUser) {
  try {
    await client.db('band-musician').collection('users').insertOne(newUser);
    console.log(`New user created`);
  } catch (e) {
    console.error(e);
  }
}

export async function checkExistingEmail(email) {
  try {
    const result = await client
      .db('band-musician')
      .collection('users')
      .findOne({ email: email });
    return result;
  } catch (err) {
    console.error(err);
  }
}
