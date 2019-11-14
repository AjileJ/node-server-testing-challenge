const express = require('express');

const Smurfs = require('../smurfs/smurfsModel.js');

const server = express();

server.use(express.json());

server.get('/', (req,res) => {
  res.status(200).json({API: "up", environment: process.env.DB_ENV});
});

server.get('/smurfs', (req,res) => {
  Smurfs.getAll()
  .then(smurfs => {
    res.status(200).json(smurfs);
  })
  .catch(error => {
    console.log(res.status)
    res.status(500).json(error);
  })
})
server.post('/smurfs', (req,res) => {
  Smurfs.insert(req.body)
  .then(smurf => {
    res.status(201).json(smurf);
  })
  .catch(error => {
    res.status(500).json(error)
  })
})
server.delete('/smurfs/:id', (req,res) => {
  const {id} = req.params;
  Smurfs.remove(id)
  .then(smurf => {
    if(smurf){
      res.status(200).json({deleted: smurf})
    }else{
      res.status(400).json({message: "id does not exist"})
    }
  })
  .catch(err => {
    res.status(500).json(err);
  })

})






module.exports = server;