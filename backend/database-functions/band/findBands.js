import { MongoClient } from 'mongodb';

export async function findBands() {
  const client = new MongoClient(
    'mongodb+srv://ozgur2096:UVPIQQz9pPm6NAhd@cluster0.uey3alv.mongodb.net/?retryWrites=true&w=majority'
  );
  try {
    await client.connect();
    const cursor = await client.db('band-musician').collection('bands').find();
    const result = await cursor.toArray();
    return result;
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
