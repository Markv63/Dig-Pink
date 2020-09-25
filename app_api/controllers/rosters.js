const mongoose = require('mongoose');
const { Locked } = require('http-errors');
//const { response } = require('express');
//const Loc = mongoose.model('Roster');  
const Loc = mongoose.model('Participant');  
 

const doAddRoster = (req, res, participant) => {
   
  if (!participant) {
    res
      .status(404)
      .json({"message": "participant not found"});
  } else {
     
    let {teamName, player, playerClass, playerNumber} = req.body;
    teamName = req.body.teamName;
    player = req.body.player;
    playerClass = req.body.playerClass;
    playerNumber = req.body.playerNumber;
    
      participant.rosters.push({
        teamName, 
        player,
        playerClass,
        playerNumber
    });
    participant.save((err, participant) => {
      if (err) {
        res
          .status(400)
          .json(err);
      } else {
         
        const thisRoster = participant.rosters;
        res
          .status(201)
          .json(thisRoster);
      }
    });
  }
};


// revamped to dump all rosters, no array.  made copy of original module.
console.log("controller rosters.js");

const rostersCreate = (req, res) => {
  
  const participantId = req.params.participantid;
  console.log(participantId);
  if (participantId) {
    Loc
      .findById(participantId)
      
      .exec((err, participant) => {
        if (err) {
          res
           .status(400)
           .json(err);
        } else {
          console.log("participant", participant);
          doAddRoster(req, res, participant);
        }
      });
  } else {
    res 
      .status(404)
      .json ({"message": "Participant not found RC"});
  } 
};

const getRosters = (req, res) => {
  Loc
    .find({}, function (err, rosters) {
      if (!rosters) {
        return res
          .status(404)
          .json({
              "message":"Roster not found 1"
          });
        } else if (err) {
          return res 
            .status(404)
            .json(err);
        }
        else {
          return res
            .status(200)
            .json(rosters);
        }    
      });
} 
  
const rostersReadOne = (req, res) => { 
  console.log("api controller loc display 6", findById);
  Loc 
    .findById(req.params.participantid)
    .select('rosters')
    .exec((err, participant) => {
      console.log(participant);
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
      }
      if (participant.rosters && participant.rosters.length > 0) {
        console.log("Roster read1");
        //const roster = participant.rosters.id(req.params.rosterid);
        const roster = participant;
        console.log(participant);
        console.log(roster);
        //console.log(participant.rosters.id);
        //console.log(req.params.rosterid);
        console.log(roster);
        if (!roster) {
          console.log(roster);
          return res
            .status(404)
            .json({"message": "roster not found 2"});
        } else {
          const response = {
            participant: {
              school: participant.school,
              id: req.params.participantid
            },
            roster
          };  
            return res
              .status(200)
              .json(response);
          }
        } else {
          return res
            .status(404)
            .json({"message": "no rosters found"
        });
      }   
    });
}; 


const rostersUpdateOne = (req, res) => {  
  if (!req.params.rostersid) {
    return res
      .status(404)
      .json({
        "message":  "Not Found, rosterid is required"
      });
  }
  Loc
    .findById(req.params.rostersid)
    .select('')
    .exec((err, roster) => {
      if (!roster) {
        return res
        .status(404)
        .json({
          "message": "rosterid not found"
        });
      } else if (err) {
        return res
        .status(400)
        .json(err);
      }
      roster.teamName = req.body.teamName;
      roster.player = req.body.player
      roster.class = req.body.class;
      roster.playerNumber = req.body.playerNumber;
      roster.save((err, roster) => {
        if (err)  {
          res
            .status(404)
            .json(err);
        } else {
           res
             .status(200)
             .json(roster);
        }  
      });
     } 
    );
  }; 


const rostersDeleteOne = (req, res) => {  
  const {rosterid} = req.params;
  if (rosterid) {
    Loc
      .findByIdAndRemove(rosterid)
      .exec((err, roster) => {
   
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
        "message" : "No roster"
      });
  }
};


  module.exports = {
    rostersCreate,
    rostersReadOne,
    rostersUpdateOne,
    rostersDeleteOne,
    getRosters,
    //getTeams
  };
  