const mongoose = require('mongoose');

const rosterSchema = new mongoose.Schema ({
/*  school: {
    type: String,
    required: true 
  },*/
  teamName:   {
    type: String,
    required: true
  },
  player:   {
    type: String,
    required: true
  },
  playerClass: {
    type: String,
    required: true
  },
  playerNumber: {
    type: Number,
    required: true
  }
});

const participantsSchema = new mongoose.Schema({ 
  school: {
    type: String,
    required: true,
  rosters:[rosterSchema]
  }
})    

mongoose.model('Participant', participantsSchema);