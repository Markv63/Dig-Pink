const mongoose = require('mongoose');
const { Locked } = require('http-errors');
const Loc = mongoose.model('Tournament');  

console.log("api control tourn display 1");

const tournamentsCreate = (req, res) => {
 Loc.create({
    time:     req.body.time, 
    team:     req.body.team,
    home:     req.body.home,
    opponent: req.body.opponent,
    visitor:  req.body.visitor,
    gym:      req.body.Gym, 
    })
    if (err) {
      res
        .status(200)
        .json({"success": "succes"});
    } else {
      res
        .status(201)
        .json(tourament);
    };
  };


const getTournaments = (req, res) => {
  Loc
    .find({}, function (err, tournaments) {
      if (!tournaments) {
        return res
          .status(404)
          .json({
            "message": "Schedule not found get"
          });
      } else if (err) {
        return res
          .status(404)
          .json(err);
      }
      else {
        return res
          .status(200)
          .json(tournaments);
      }
    });
}
  
const tournamentsUpdateOne = (req, res) => {  
  if (!req.params.tournamentid) {
    return res
      .status(404)
      .json({
        "message":  "Not Found, scheduleid is required"
      });
  }
  Loc
    .findById(req.params.tournamentid)
    .select()
    .exec((err, sched) => {
      if (!tournament) {
        return res
        .status(404)
        .json({
          "message": "scheduleid not found"
        });
      } else if (err) {
        return res
        .status(400)
        .json(err);
      }
     })
      tournament.time = req.body.time;
      tournament.team = req.body.team;
      tournament.home = req.body.home;
      tournament.opponent = req.body.opponent;
      schedule.visitor = req.body.visitor;
      schedule.gym = req.body.gym;
      schedule.save((err, Loc) => {
        if (err)  {
          res
            .status(404)
            .json(err);
        } else {
           res
             .status(200)
             .json(tournament);
        }  
      });
     
    
  }; 


const tournamentsDeleteOne = (req, res) => {  
  const {touramentsid} = req.params;
  if (tournamentsid) {
    sched
      .findByIdAndRemove(tournamentsid)
      
      .exec((err, tournament) => {
        
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
        "message" : "No schedule"
      });
  }
};

module.exports = {
  tournamentsCreate,
  tournamentsUpdateOne,
  tournamentsDeleteOne,
  getTournaments
};