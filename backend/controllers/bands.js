import { findBands } from '../database-functions/band/findBands.js';
import { insertBand } from '../database-functions/band/insertBand.js';

let users = [
  { firstName: 'John', lastName: 'Doe', age: 30 },
  { firstName: 'Jane', lastName: 'Doe', age: 29 },
];

export const getBands = async (req, res) => {
  const results = await findBands();
  res.send(results);
};

export const createBand = async (req, res) => {
  const avatarUrl = await fetchRandomUser();

  const band = await req.body;
  console.log(band);
  const { userId, name, genre, description, looking_for } = band;
  await insertBand({
    userId,
    name,
    genre,
    description,
    looking_for,
    image_url: avatarUrl,
  });
  res.send('A new band card created');
};

export const getBand = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find(user => user.id == id);
  res.send(foundUser);
};

export const deleteBand = (req, res) => {
  const { id } = req.params;
  users = users.filter(user => user.id !== id);
  res.send(users);
};

export const updateBand = (req, res) => {
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
