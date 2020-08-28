const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema ({
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
    type: number,
    required: true
  },
});

const rosterSchema = new mongoose.Schema ({
  school: {
      type: String,
      required: true
   },     
  team: {
    type: String,
    required: true 
  },
  player: [playerSchema],
});

const schedulechema = new mongoose.Schema({ 
  time: {
    type: string,
    required: true
  },
  school: { 
    type: string,
    required: true
  },
  opponent: { 
    type: string,
    required: true
  },
  gym: { 
    type: string,
    required: true
  },  
  home: {
    type: Boolean,
    required: true
  },
})    

const memorialSchema = new mongoose.Schema({ 
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


//mongoose.model('DigPink', digpinkSchema);
