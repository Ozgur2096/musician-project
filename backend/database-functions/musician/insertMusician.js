import { MongoClient } from 'mongodb';

export async function insertMusician(newMusician) {
  const client = new MongoClient(
    'mongodb+srv://ozgur2096:UVPIQQz9pPm6NAhd@cluster0.uey3alv.mongodb.net/?retryWrites=true&w=majority'
  );
  try {
    await client.connect();
    await client
      .db('band-musician')
      .collection('musicians')
      .insertOne(newMusician);
    console.log(`New musician card created`);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
