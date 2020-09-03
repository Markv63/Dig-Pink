const mongoose = require('mongoose');


const participantsSchema = new mongoose.Schema({ 
  school: {
    type: String,
    required: true
  }
})    

mongoose.model('Participant', participantsSchema);