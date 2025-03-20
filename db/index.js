require("dotenv").config();

const { client } = require("./client.js");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const morgan = require("morgan");
app.use(morgan("dev"));

console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);

client
  .connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch((err) => console.error("Connection error", err.stack));

  async function createAlbums({
    name,
    artistName,
    releaseYear,
    song1,
    song2,
    song3,
    song4,
    song5,
    song6,
    song7,
    song8,
    song9,
    song10,
    song11,
    song12,
    song13,
    song14,
    song15,
    genre,
    albumArt,
    spotifyLink
    }) {
    try {
      const albums = await client.query(
        `
        INSERT INTO albums(
          name,
          artistName,
          releaseYear,
          song1,
          song2,
          song3,
          song4,
          song5,
          song6,
          song7,
          song8,
          song9,
          song10,
          song11,
          song12,
          song13,
          song14,
          song15,
          genre,
          albumArt,
          spotifyLink
          )
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21)
        RETURNING *;
      `,
        [   name,
          artistName,
          releaseYear,
          song1,
          song2,
          song3,
          song4,
          song5,
          song6,
          song7,
          song8,
          song9,
          song10,
          song11,
          song12,
          song13,
          song14,
          song15,
          genre,
          albumArt,
          spotifyLink]
      );
      return albums
    } catch (error) {
      throw error;
    }
  }

  async function getAllAlbums() {
    try {
      const albums = await client.query(`
        SELECT *
        FROM albums;
      `);
  ;
  
      return albums;
    } catch (error) {
      throw error;
    }
  }

  async function createUser({ username, password }) {
    try {
      const {
        rows: [user],
      } = await client.query(
        `
        INSERT INTO users(username, password) 
        VALUES($1, $2)
        ON CONFLICT (username) DO NOTHING
        RETURNING *;
      `,
        [username, password]
      );
  
      return user;
    } catch (error) {
      throw error;
    }
  }


  async function getAllUsers() {
    try {
      const { rows } = await client.query(`
        SELECT id, username, password, active
        FROM users;
      `);
  
      return rows;
    } catch (error) {
      throw error;
    }
  }

  async function getUserById(userId) {
    try {
      const {
        rows: [user],
      } = await client.query(`
        SELECT id, username, password, active
        FROM users
        WHERE id=${userId}
      `);
  
      if (!user) {
        throw {
          name: "UserNotFoundError",
          message: "A user with that id does not exist",
        };
      }
  
      return user;
    } catch (error) {
      throw error;
    }
  }

  async function getUserByUsername(username) {
    try {
      const {
        rows: [user],
      } = await client.query(
        `
        SELECT *
        FROM users
        WHERE username=$1
      `,
        [username]
      );
    
      return user || undefined;
  
    } catch (error) {
      throw error;
    }
  }

  async function getAlbumsById(albumId) {
    try {
      const {
        rows: [album],
      } = await client.query(
        `
        SELECT *
        FROM albums
        WHERE id=$1;
      `,
        [albumId]
      );
  
      if (!album) {
        throw {
          name: "AlbumNotFoundError",
          message: "Could not find an album with that albumId",
        };
      }
  
      return album;
    } catch (error) {
      throw error;
    }
  }

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  getUserByUsername,
  getAllAlbums,
  getAlbumsById,
  createAlbums
};