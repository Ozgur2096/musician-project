import { v4 as uuidv4 } from 'uuid';
import {
  insertUser,
  checkExistingEmail,
} from '../database-functions/user/insertUser.js';
import { checkUserAndPassword } from '../database-functions/user/checkUserAndPassword.js';
import { findUserWithId } from '../database-functions/user/findUserWithId.js';
import { updateUserFavorites } from '../database-functions/user/updateUserFavorites.js';

// Register and LogIn
export const createUser = async (req, res) => {
  const user = req.body;
  const { password, email } = user;
  const isExistingEmail = await checkExistingEmail(email);
  if (isExistingEmail) {
    res
      .status(400)
      .send({ message: 'This email is already connected to an account.' });
  } else {
    await insertUser({ userId: uuidv4(), email, password, favorites: [] });
    res.send({ message: 'A new user created.' });
  }
};

export const checkUser = async (req, res) => {
  const frontEndUser = req.body;
  const backEndUser = await checkUserAndPassword(frontEndUser.email);
  if (backEndUser) {
    frontEndUser.password === backEndUser.password
      ? res.status(200).send({ userId: backEndUser.userId })
      : res
          .status(400)
          .send({ message: 'Please check your email and password' });
  }
};

// get favorite card IDs (array) from a user
export const getFavorites = async (req, res) => {
  const { userId } = req.params;
  const user = await findUserWithId(userId);
  res.status(200).send({ favorites: user.favorites });
};

export const updateFavorites = async (req, res) => {
  const userId = req.params.userId;
  const favorites = req.body.favorites;
  const result = await updateUserFavorites(userId, favorites);
  res.status(200).send(result);
};
