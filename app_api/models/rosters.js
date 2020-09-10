const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema ({
  teamName:   {
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
  }
});

const rosterSchema = new mongoose.Schema ({
  school: {
    type: String,
    required: true 
  },
  teamSchema:  [teamSchema]
});


mongoose.model('Roster', rosterSchema);