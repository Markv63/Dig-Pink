const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema ({
  school: {
    type: String,
    required: true 
  }
});

const rosterSchema = new mongoose.Schema ({
  school: {
    type: String,
    //required: true 
  },
  player:   {
    type: String,
    //required: true
  },
  class: {
    type: String,
    //required: true
  },
  playerNumber: {
    type: Number
    //required: true
  },
});

const schedulesSchema = new mongoose.Schema({ 
    team: {
      type: String,
      required: true
    },
    time: {
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
    visit: {
      type: Boolean,
      required: true
  },
    gym:    {
        type:  String,
        required: true
    }
})    
    
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


mongoose.model('DigPink', schedulesSchema);
