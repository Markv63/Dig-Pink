const mongoose = require('mongoose');

const dateSchema = new mongoose.Schema ({
    date: {
        type: String,
        //required: true
    }
})

const homeSchema = new mongoose.Schema ({
    home: {
        name: String,
        school: String
    },
        //required: true
})

const visitSchema = new mongoose.Schema ({
    visit: {
        name: String,
        school: String,
    },
    //required: true
})

/*const venueSchema = new.mongoose.Schema ({
    venue: {
        type: String,
        required: true
    }
})*/

const rosterSchema = new mongoose.Schema ({
  name: {
      type: String,
      //required: true
   },     
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
  /*createdOn: {
    type: Year,
    'default': Year.now
  }*/
});

const schedulechema = new mongoose.Schema({ 
    year: {
      type: Number,
      required: true
    },
    date: [dateSchema],
    home: [homeSchema],
    visit: [visitSchema],
    gym:    {
        type:   String,
        required: true
    }
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
