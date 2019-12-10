const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Coder, User } = require("../models");

const SALT_ROUNDS = 11;
const TOKEN_KEY = "ahj";

const signUp = async (req, res) => {
  try {
    // console.log(req.connection)
    console.log(req.body);
    const { firstName, lastName, email, password } = req.body;
    const password_digest = await bcrypt.hash(password, SALT_ROUNDS);
    const user = await User.create({
      firstName,
      lastName,
      email,
      password_digest
    });
    const payload = {
        id: user.id,
        email: user.email
    }

    const token = jwt.sign(payload, TOKEN_KEY)
    return res.status(201).json({ user, token });
  } catch (error) {
    console.log(
      "You made it to the sign-up controller, but there was an error"
    );
    return res.status(400).json({ error: error.message });
  }
};

const signIn = async (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    const user = await User.findOne({
      where: {
        email
      }
    });
    if (await bcrypt.compare(password, user.dataValues.password_digest)) {
      const payload = {
        id: user.id,
        email: user.email
      };

      const token = jwt.sign(payload, TOKEN_KEY);
      return res.status(201).json({ user, token });
    } else {
      res.status(401).send("Invalid Credentials");
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getRosterFromUser = async (req, res) => {
    try {
    //   const { user_id } = req.params
      const coders = await Coder.findAll()
      if (coders) {
        return res.status(200).json({ coders })
      }
      return res.status(404).send('User with the specified ID does not exists')
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

  const getCoderByUserId = async (req, res) => {
    try {
      const { user_id, coder_id } = req.params
      const coder = await Coder.findOne({
        where: {
        //   userId: user_id,
          id: coder_id
        }
      })
      if (coder) {
        return res.status(200).json({ item })
      }
      return res.status(404).send('Item with the specified ID does not exists')
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

module.exports = {
  signUp,
  signIn,
  getAllUsers,
  getRosterFromUser,
  getCoderByUserId
};
