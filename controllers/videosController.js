const knex = require('knex')(require('../knexfile'))
const uuid = require("uuid");
const multer = require("multer");
const uuid4 = require('uuid4');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-'+ file.originalname)
  }
})

const upload = multer({ storage: storage })

exports.postVideo = async (req, res) => {
 
  upload.single('imageFile')(req, res, async (err)=> {
    if (
      !req.body.title ||
      !req.body.description
    ) {
      return res.status(400).json({
        message:
          "Please make sure to provide customer, item name, description, category, status and quantity fields in your request.",
      });
      
    }
    console.log(err)
    if(err) {
      res.status(500).json({error: err})
    }
    
    try {

      await (req, res) 
      console.log('Add product customer called')
         await knex("videos").insert({
        id: uuid4(),
        title: req.body.title,
        channel: "Matt Hoffman",
        image: `http://localhost:8080/images/${req.file.filename}`,
        description: req.body.description,
        duration: "7:29"
         });
         return res.status(201).json({ message: "Product created" });
       
     } catch (error) {
       console.log(error);
       res.status(500).json({ error: error });
     }
  })
};



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

exports.getSelectedVideo = (req, res) => {
  knex('videos').where({ id: req.params.id })
  
    .then((data) => {
      res.status(200).json(data[0]);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving Warehouses: ${err}`)
    );
};

exports.getSelectedComments = (req, res) => {
  knex('comments')
    .where({ videos_id: req.params.id })
    .orderBy('created_at', 'desc')
    // .select('id','name','comment')
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res
        .status(400)
        .send(
          `Error retrieving inventories for Warehouse ${req.params.id} ${err}`
        )
    );
};




