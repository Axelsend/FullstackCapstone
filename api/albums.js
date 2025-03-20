const express = require('express');
const albumsRouter = express.Router();
albumsRouter.use(express.json());

const {
  getAllAlbums,
  getAlbumsById,
} = require('../db/index.js');

albumsRouter.get('/', async (req, res, next) => {
    try {
      const response = await getAllAlbums();
    const allAlbums = response.rows
    res.setHeader('Content-Type', 'application/json');
      res.json(
        allAlbums
      );
    } catch ({ name, message }) {
      next({ name, message });
    }
  });

  albumsRouter.get('/:albumId', async (req, res, next) => {
    try {
      const { albumId } = req.params;
      const singleAlbum = await getAlbumsById(albumId);
    console.log(singleAlbum)
      res.send({
        singleAlbum
      });
    } catch ({ name, message }) {
      next({ name, message });
    }
  });

module.exports = albumsRouter;