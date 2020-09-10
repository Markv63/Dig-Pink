const mongoose = require('mongoose');
const { Locked } = require('http-errors');
const Loc = mongoose.model('Roster');  
//add data service

const rostersCreate = (req, res) => {
 Loc.create({
    school:        req.body.school,
    player:        req.body.player,
    class:         req.body.class,
    playerNumber:  req.body.playerNumber,
    })
   if (err) {
      res
        .status(200)
        .json({"success" :"success"});
    } else {
      res
        .status(201)
        .json(roster);
    };
  };
//get schoolbyid
const getTeams = (req, res) => {
  Loc
    .find({}, function (err, team) {
      if (!team) {
        return res
          .status(404)
          .json({
            "message":"Roster not found"
          });
        } else if (err) {
          return res 
            .status(404)
            .json(err);
        }
        else {
          return res
            .status(200)
            .json(teams);
        }    
      });
} 


 const getRosters = (req, res) => {
    Loc
      .find({}, function (err, rosters) {
        if (!rosters) {
          return res
            .status(404)
            .json({
              "message":"Roster not found"
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
  console.log("api controller loc display 6");
  Loc 
  
    .findById(req.params.rostersid)
    .exec((err, roster) => {
      if (!roster) {
        return res
          .status(404)
          .json({
            "message": "roster not found ReadOne"
          });
      } else if (err) {
        return res
          .status(404)
          .json(err);
      } else  { 
        return res
          .status(200)
          .json(roster);
    }});
}; 


const rostersUpdateOne = (req, res) => {  
  if (!req.params.rosterid) {
    return res
      .status(404)
      .json({
        "message":  "Not Found, rosterid is required"
      });
  }
  Loc
    .findById(req.params.memorialid)
    .select('')
    .exec((err, roster) => {
      if (!location) {
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
      roster.name = req.body.name;
      roster.address = req.body.player
      roster.facilities = req.body.school;
      
      roster.save((err, loc) => {
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
    getRosters
  };
  