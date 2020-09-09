const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema ({
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
  }
});

const rosterSchema = new mongoose.Schema ({
  school: {
    type: String,
    required: true 
  },
  player:  [playerSchema]
});


mongoose.model('Roster', rosterSchema);