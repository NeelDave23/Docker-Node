const User = require("../models/user");

const getUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.status(200).json({ Users: users });
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const getUserById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await User.findByPk(id);
    if (!user) {
      res.status(400).json({ Message: "User Not Found" });
    } else {
      res.status(200).json(user);
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const createUser = async (req, res, next) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const user = await User.create({
      name: name,
      email: email,
    });
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const updateUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await User.findByPk(id);
    if (!user) {
      res.status(400).json({ Message: "User Not Found" });
    } else {
      const updatedName = req.body.name;
      const updatedEmail = req.body.email;
      const updatedUser = await User.update(
        {
          name: updatedName,
          email: updatedEmail,
        },
        {
          where: {
            id: id,
          },
        }
      );

      res.status(200).json("User Updated ");
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await User.findByPk(id);
    if (!user) {
      res.status(400).json({ Message: "User Not Found" });
    } else {
      const deleteuser = User.destroy({
        where: {
          id: id,
        },
      });
      res.status(200).json({ Message: "User Deleted" });
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };
