const express = require("express");
const usersRouter = express.Router();
require("dotenv").config();
const JWT_SECRET = process.env.JWT || 'shhh';
const { client } = require("../db/client.js")

const { createUser, getAllUsers, getUserByUsername, getUserById } = require("../db/index.js");
usersRouter.use(express.json())

const jwt = require("jsonwebtoken");
usersRouter.use(express.json());

usersRouter.get("/", async (req, res, next) => {
  try {
    const users = await getAllUsers();

    res.send({
      users,
    });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

usersRouter.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const singleUser = await getUserById(id);
  
    res.send({
      singleUser
    });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

usersRouter.post("/login", async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    next({
      name: "MissingCredentialsError",
      message: "Please supply both a username and password",
    });
  }

    try {
    const user = await getUserByUsername(username);

    if (user && user.password == password) {
      const token = jwt.sign(
        {
          id: user.id,
          username,
        },
        JWT_SECRET,
        {
          expiresIn: "1w",
        }
      );

      res.send({
        message: "you're logged in!",
        token,
      });
    } else {
      next({
        name: "IncorrectCredentialsError",
        message: "Username or password is incorrect",
      });
    }
    
  } catch (error) {
    console.log(error);
    next(error);
  }
});

  usersRouter.delete("/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
      const response = await client.query(
        "DELETE FROM users WHERE id = $1",
        [id]
      );
      res.json({ message: "User deleted successfully" });
    } catch (ex) {
      next(ex);
    }}
  )

  usersRouter.put('/:id', async (req, res, next) => {
    const { id } = req.params;
    const { password } = req.body

    try {
      const response = await client.query(
        "UPDATE users SET password = $1 WHERE id = $2",
        [password, id]
      );
      res.json({ message: "Password updated successfully" });
      if (response.rowCount === 0) {
        return res.status(404).json({ message: "User not found" });
    }
    } catch (ex) {
    res.status(500).json({ error: "Database query failed", details: ex.message });
      next(ex);
    }
  });

usersRouter.post("/register", async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const _user = await getUserByUsername(username);

    if (_user) {
     return next({
        name: "UserExistsError",
        message: "A user by that username already exists",
      });
    } else {

    const user = await createUser({
      username,
      password,
    });

    console.log("created user", user)

    const token = jwt.sign(
      {
        id: user.id,
        username,
      },
      JWT_SECRET,
      {
        expiresIn: "1w",
      }
    );

    res.send({
      message: "thank you for signing up",
      token,
    });
    
  }} catch ({ name, message }) {
    next({ name, message });
  }
});

module.exports = usersRouter;