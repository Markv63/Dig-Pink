const mongoose = require('mongoose');
const { Locked } = require('http-errors');
const Loc = mongoose.model('Tournament');  

console.log("api control tourn entry");

const doAddTournament = (req, res, tournament) => {
   
  if (!tournament) {
    res
      .status(404)
      .json({ "message": "Schedule not found" });
  } else {
    const { time, team, home, opponent, visitor, gym } = req.body;
    tournament.push({
      time,
      team,
      home,
      opponent,
      visitor,
      gym
    });
     
    tournament.save((err, tournament) => {
      if (err) {
        res
          .status(400)
          .json(err);
      } else {
        res
          .status(201)
          .json(thisTournament);
      }
    });
  }
};



const tournamentsCreate = (req, res) => {
 Loc.create({
    time:     req.body.time, 
    team:     req.body.team,
    home:     req.body.home,
    opponent: req.body.opponent,
    visitor:  req.body.visitor,
    gym:      req.body.gym 
    }, (err, tournament) => {
    if (err) {
      res
        .status(400)
        .json(err);
    } else {
       res
         .status(201)
         .json(tournament);
         //doAddTournament(req, res, tournament);
     }   
    });
}


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
  if(!req.params.tournamentid) {   
   return res
      .status(404)
      .json({
        "message":  "Not Found, scheduleid is required"
      });
  }
  Loc
    .findById(req.params.tournamentid)
    .select()
    .exec((err, tournament) => {
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
      else {
        tournament.time = req.body.time;
        tournament.team = req.body.team;
        tournament.home = req.body.home;
        tournament.opponent = req.body.opponent;
        tournament.visitor = req.body.visitor;
        tournament.gym = req.body.gym;
        tournament.save((err, thisTournament) => {
        if (err)  {
          res
            .status(404)
            .json(err);
        } else {
          res
            .status(200)
            .json(thisTournament);
          }  
        });
      }
    }
  );
};     
    

const tournamentsDeleteOne = (req, res) => {  
  const {tournamentid} = req.params;
  if (tournamentid) {
    Loc
      .findByIdAndRemove(tournamentid)
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