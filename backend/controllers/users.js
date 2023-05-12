import {
  insertUser,
  checkExistingEmail,
} from '../database-functions/user/insertUser.js';

export const createUser = async (req, res) => {
  const user = await req.body;
  console.log(user);
  const { password, email } = user;
  const isExistingEmail = await checkExistingEmail(email);
  console.log(isExistingEmail);
  if (isExistingEmail) {
    res
      .status(400)
      .send({ message: 'This email is already connected to an account.' });
  } else {
    await insertUser({ email, password });
    res.send({ message: 'A new user created.' });
  }
};
