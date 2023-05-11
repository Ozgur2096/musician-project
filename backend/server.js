import express from 'express';
import bandRoutes from './routes/bands.js';
import musicianRoutes from './routes/musicians.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded());

app.use('/bands', bandRoutes);
app.use('/musicians', musicianRoutes);

app.get('/', (req, res) => {
  res.send('hello from homepage');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
