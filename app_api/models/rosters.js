const mongoose = require('mongoose');


const rosterSchema = new mongoose.Schema ({
  school: {
    type: String,
    required: true 
  },
  player:   {
    type: String,
    required: true
  },
  class: {
    type: String,
    required: true
  },
  playerNumber: {
    type: Number,
    required: true
  },
});

