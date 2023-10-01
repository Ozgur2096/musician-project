import express from 'express';
import cors from 'cors';
import bandRoutes from './routes/bands.js';
import musicianRoutes from './routes/musicians.js';
import userRoutes from './routes/users.js';
import { MongoClient } from 'mongodb';
export const client = new MongoClient(
  'mongodb+srv://ozgur2096:UVPIQQz9pPm6NAhd@cluster0.uey3alv.mongodb.net/?retryWrites=true&w=majority'
);

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/bands', bandRoutes);
app.use('/musicians', musicianRoutes);
app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.send('hello from Homepage');
});

client
  .connect()
  .then(() => {
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  })
  .catch(e => console.log(e));
