require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

const { client } = require("./client.js");
const { createTablesAndData, getAlbums } = require("./api.js");

app.use(cors());
app.use(express.json());

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const morgan = require("morgan");
app.use(morgan("dev"));

client
  .connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch((err) => console.error("Connection error", err.stack));

app.get("/api/albums", async (req, res) => {
  try {
    const albums = await getAlbums();
    res.status(200).json(albums);
  } catch (err) {
    res.status(500).json({ error: "Error fetching albums" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
