import { v4 as uuidv4 } from 'uuid';
import { findMusicians } from '../database-functions/musician/findMusicians.js';
import { insertMusician } from '../database-functions/musician/insertMusician.js';
import { findMusician } from '../database-functions/musician/findMusician.js';
import { updateMusicianCard } from '../database-functions/musician/updateMusicianCard.js';

let users = [
  { firstName: 'John', lastName: 'Doe', age: 30 },
  { firstName: 'Jane', lastName: 'Doe', age: 29 },
];

export const getMusicians = async (req, res) => {
  const results = await findMusicians();
  await res.send(results);
};

export const createMusician = async (req, res) => {
  const avatarUrl = await fetchRandomUser();

  const musician = await req.body;
  console.log(musician);
  const { userId, firstName, lastName, instrument, genre, description } =
    musician;
  await insertMusician({
    cardId: uuidv4(),
    userId,
    firstName,
    lastName,
    instrument,
    genre,
    description,
    image_url: avatarUrl,
  });
  res.send('A new musician card created');
};

export const getMusician = async (req, res) => {
  const { cardId } = req.params;
  const musicianCard = await findMusician(cardId);
  res.send(musicianCard);
};

export const updateMusician = async (req, res) => {
  const { cardId } = req.params;
  const updatedCard = await req.body;
  await updateMusicianCard(cardId, updatedCard);
  res.send({ message: 'Card updated' });
};

export const deleteMusician = (req, res) => {
  const { id } = req.params;
  users = users.filter(user => user.id !== id);
  res.send(users);
};

// this function is for presentation
async function fetchRandomUser() {
  try {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    const avatarUrl = data.results[0].picture.large;
    // Use the avatarUrl as needed in your application
    return avatarUrl;
  } catch (error) {
    console.error('Error fetching random user:', error);
  }
}
