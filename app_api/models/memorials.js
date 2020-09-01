const mongoose = require('mongoose');

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


  mongoose.model('Tournament', memorialsSchema);