import { MongoClient } from 'mongodb';

export async function insertBand(newBand) {
  const client = new MongoClient(
    'mongodb+srv://ozgur2096:UVPIQQz9pPm6NAhd@cluster0.uey3alv.mongodb.net/?retryWrites=true&w=majority'
  );
  try {
    await client.connect();
    await client.db('band-musician').collection('bands').insertOne(newBand);
    console.log(`New band card created`);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
