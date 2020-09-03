const mongoose = require('mongoose');

/*const participantschema = new mongoose.Schema({ 
  school: {
    type: String,
    required: true
  }
})*/   

const tournamentsSchema = new mongoose.Schema({ 
  time: {
    type: String,
    required: true
  },
  team: { 
    type: String,
    required: true
  },
  home: {
    type: Boolean,
    required: true
  },  
  opponent: { 
    type: String,
    required: true
  },
  gym: { 
    type: String,
    required: true
  },  
  visitor: {
    type: Boolean,
    required: true
  },
})    

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

const memorialsSchema = new mongoose.Schema({ 
  honor: {
    type: String,
    required: true
  },
  player: {
    type: String,
    required: true
  },
  school: {
    type: String,
    required: true
  }
  })


mongoose.model('Tournament', tournamentsSchema);

