const mongoose = require('mongoose');
const { Locked } = require('http-errors');
const Loc = mongoose.model('Digpink');  // just changed, haven't created mongoose db yet.


const schedulesCreate = (req, res) => {
 Loc.create({
    time:     req.body.Time, // just the time ie. 4.:00pm  
    school:   req.body.school,
    opponent: req.body.opponent,
    gym:      req.body.Gym, // do we want to split this apart? combine with time similar to loc8r openingtimes\closing times into 1, 2, 3, 4?
    home:     req.body.home, // true\false - model after closed 
    },
     (err, location) => {
    if (err) {
      res
        .status(400)
        .json(err);
    } else {
      res
        .status(201)
        .json(schedule);
    };
  });
};

const schedulesReadOne = (req, res) => {   //return full schedule
   sched 
    .findById(req.params.scheduleid)
    .exec((err, schedule) => {
      if (!schedule) {
        return res
          .status(404)
          .json({
            "message": "schedule not found"
          });
      } else if (err) {
        return res
          .status(404)
          .json(err);
      } else  { 
        return res
          .status(200)
          .json(schedule);
    }});
}; 

/*const schedulesReadTwo = (req, res) => {   //future development to return based by parameter of only school
   sched 
    .findById(req.params.scheduleid)
    .select('school name gym time')
    .exec((err, schedule) => {
      if (!schedule) {
        return res
          .status(404)
          .json({
            "message": "team schedule not found"
          });
      } else if (err) {
        return res
          .status(404)
          .json(err);
      } else  { 
        return res
          .status(200)
          .json(schedule);
    }});
};*/ 
 
const schedulesUpdateOne = (req, res) => {  
  if (!req.params.scheduleid) {
    return res
      .status(404)
      .json({
        "message":  "Not Found, scheduleid is required"
      });
  }
  sched
    .findById(req.params.scheduleid)
    .select()
    .exec((err, schedule) => {
      if (!schedule) {
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
      schedule.time = req.body.time;
      schedule.school = req.body.school;
      schedule.opponent = req.body.opponent;
      schedule.gym = req.body.gym;
      schedule.home = req.body.home;
      schedule.save((err, sched) => {
        if (err)  {
          res
            .status(404)
            .json(err);
        } else {
           res
             .status(200)
             .json(sched);
        }  
      });
     } 
    );
  }; 


const schedulesDeleteOne = (req, res) => {  
  const {schedulesid} = req.params;
  if (schedulesid) {
    sched
      .findByIdAndRemove(schedulesid)
      
      .exec((err, schedule) => {
        
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
  schedulesCreate,
  schedulesReadOne,
  schedulesUpdateOne,
  schedulesDeleteOne
};