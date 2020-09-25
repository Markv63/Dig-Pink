const mongoose = require('mongoose');
// non impact change
const rosterSchema = new mongoose.Schema ({

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
  
  },
  rosters:[rosterSchema]
})    

mongoose.model('Participant', participantsSchema);