const knex = require('knex')(require('../knexfile'))
const uuid = require("uuid");

exports.getAllVideos = (_req, res) => {
  knex('videos')
    .select('id', 'title', 'channel', 'image')
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving Warehouses: ${err}`)
    );
};
