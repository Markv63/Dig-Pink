const mongoose = require('mongoose');
const { Locked } = require('http-errors');
const Loc = mongoose.model('Participant');  

console.log("api control part entry");
//non impact change

const participantsCreate = (req, res) => {
 Loc.create({
    school:   req.body.school,
   }, (err, participant) => {
    if (err) {
     res
       .status(400)
       .json(err);
    } else {
      res
        .status(201)
        .json(participant);
    }
  });
};

const getParticipants = (req, res) => {
  Loc
    .find({}, function (err, participants) {
      if (!participants) {
        return res
          .status(404)
          .json({
            "message":"Participant not found"
          });
        } else if (err) {
          return res 
            .status(404)
            .json(err);
        }
        else {
          return res
            .status(200)
            .json(participants);
        }    
      });
} 
 
const participantsReadOne = (req, res) => { 
 
  Loc 
     .findById(req.params.participantsid)
     .exec((err, participant) => {
       if (!participant) {
         return res
           .status(404)
           .json({
             "message": "participant not found ReadOne"
           });
       } else if (err) {
         return res
           .status(404)
           .json(err);
       } else  { 
         return res
           .status(200)
           .json(participant);
     }});
 }; 
 
 
const participantsUpdateOne = (req, res) => {  
  if (!req.params.schoolid) {
    return res
      .status(404)
      .json({
        "message":  "Not Found, schoolid is required"
      });
  }
  sched
    .findById(req.params.schoolid)
    .select()
    .exec((err, school) => {
      if (!schedule) {
        return res
        .status(404)
        .json({
          "message": "schoolid not found"
        });
      } else if (err) {
        return res
        .status(400)
        .json(err);
      }
      participants.school = req.body.school;
      participants.save((err, loc) => {
        if (err)  {
          res
            .status(404)
            .json(err);
        } else {
           res
             .status(200)
             .json(loc);
        }  
      });
     } 
    );
  }; 


const participantsDeleteOne = (req, res) => {  
  const {schoolid} = req.params;
  if (schoolid) {
    sched
      .findByIdAndRemove(schoolid)
      
      .exec((err, school) => {
        
          if (err) {
            return res
              .status(404)
              .json(err)
          }
          res
            .status(204)
            .json(null);
       }      
    );
  } else {
    res
      .status(404)
      .json({
        "message" : "No participants"
      });
  }
};

module.exports = {
  participantsCreate,
  participantsReadOne,
  participantsUpdateOne,
  participantsDeleteOne,
  getParticipants
};  