const mongoose = require('mongoose');
const { Locked } = require('http-errors');
const Loc = mongoose.model('Participant');  
//add data service


//get schoolbyid
const getTeams = (req, res) => {
  Loc
    .findById(req.params.teamid)
    .select('school')
    .exec((err, roster) => {
       if (!team) {
        return res
          .status(404)
          .json({
            "message":"Roster not found"
          });

        } else if (err) {
          return res 
            .status(400)
            .json(err);
        }
        roster.teamName     = req.body.teamName;
        roster.player       = req.body.player;
        roster.class        = req.body.class;
        roster.playerNumber = req.body.playerNumber 
        {
          return res
            .status(200)
            .json(teams);
        }    
    });
} 

  module.exports = {
    getTeams
  };
  