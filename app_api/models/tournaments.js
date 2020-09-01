const mongoose = require('mongoose');


const tournamentsSchema = new mongoose.Schema({ 
  time: {
    type: String,
    required: true
  },
  school: { 
    type: String,
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
  home: {
    type: Boolean,
    required: true
  },
})    

mongoose.model('Tournament', tournamentsSchema);
