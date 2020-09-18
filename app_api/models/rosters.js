const mongoose = require('mongoose');


// the below is dump the rosters onto a page to have a functional page for the demonstration.


const rosterSchema = new mongoose.Schema ({
  school: {
    type: String,
    required: true 
  },
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



// the below is the original version of the schemas
/*const teamSchema = new mongoose.Schema ({
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
});*/


mongoose.model('Roster', rosterSchema);