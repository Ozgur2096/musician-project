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
  const musician = await req.body;
  console.log(musician);
  const { firstName, lastName, instrument, genre } = musician;
  await insertMusician({ firstName, lastName, instrument, genre });
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
