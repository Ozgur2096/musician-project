import { MongoClient } from 'mongodb';

export async function findMusicians() {
  const client = new MongoClient(
    'mongodb+srv://ozgur2096:UVPIQQz9pPm6NAhd@cluster0.uey3alv.mongodb.net/?retryWrites=true&w=majority'
  );
  try {
    await client.connect();
    const cursor = await client
      .db('band-musician')
      .collection('musicians')
      .find();
    const result = await cursor.toArray();
    return result;
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
