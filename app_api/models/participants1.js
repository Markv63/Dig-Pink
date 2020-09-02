const mongoose = require('mongoose');


const participantschema = new mongoose.Schema({ 
  school: {
    type: String,
    required: true
  }
})    

mongoose.model('Participant', participantsSchema);