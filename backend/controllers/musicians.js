import { findMusicians } from '../database-functions/musician/findMusicians.js';
import { insertMusician } from '../database-functions/musician/insertMusician.js';

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

export const getMusician = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find(user => user.id == id);
  res.send(foundUser);
};

export const deleteMusician = (req, res) => {
  const { id } = req.params;
  users = users.filter(user => user.id !== id);
  res.send(users);
};

export const updateMusician = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const userToBeUpdated = users.find(user => user.id == id);
  if (firstName) {
    userToBeUpdated.firstName = firstName;
  }
  if (lastName) {
    userToBeUpdated.lastName = lastName;
  }
  if (age) {
    userToBeUpdated.age = age;
  }
  res.send(userToBeUpdated);
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
