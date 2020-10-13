const mongoose = require('mongoose');
const { Locked } = require('http-errors');
const Loc = mongoose.model('Memorial');

console.log("api cont memor entry");

 // non impact change
 
const doAddMemorial = (req, res, memorial) => {
  
  if (!memorial) {
    res
      .status(404)
      .json({ "message": "Memorial not found" });
  } else {
    const { honor, player, school } = req.body;
    memorial.memorials.push({
      honor,
      player,
      school
    });
     
    memorial.save((err, memorial) => {
      if (err) {
        res
          .status(400)
          .json(err);
      } else {
        res
          .status(201)
          .json(thisMemorial);
      }
    });
  }
};

const memorialsCreate = (req, res) => {

   Loc.create({
    honor:    req.body.honor,
    player:   req.body.player,
    school:   req.body.school,
    }, (err, memorial) => {
    if (err) {
     res
      .status(400)
      .json(err);
     } else {
       res
        .status(201)
        .json(memorial);
     };
  });
};

const getMemorials = (req, res) => {
  Loc
    .find({}, function (err, memorials) {
      if (!memorials) {
        return res
          .status(404)
          .json({
            "message": "memorial not found get"
          });
      } else if (err) {
        return res
          .status(404)
          .json(err);
      }
      else {
        return res
          .status(200)
          .json(memorials);
      }
    });
}
 
const memorialsUpdateOne = (req, res) => {
 
  if (!req.params.memorialid) {
    return res
      .status(404)
      .json({
        "message": "Not Found, memorialid is required"
      });
  }
  Loc
   
    .findById(req.params.memorialid)
    .select()
    
    .exec((err, memorial) => {
      if (!memorial) {
        return res
          .status(404)
          .json({
            "message": "memorialid not found"
          });
      } else if (err) {
        return res
          .status(400)
          .json(err);
      }
      else {   
        memorial.honor   = req.body.honor;
        memorial.player = req.body.player
        memorial.school = req.body.school;
        memorial.save((err, thisMemorial) => {
          if (err) {
           res
             .status(404)
             .json(err);
          } else {
            res
              .status(200)
              .json(thisMemorial);
            }
          });
        
      }
    }  
  );
};

const memorialsDeleteOne = (req, res) => {
  const { memorialid } = req.params;
  if (memorialid) {
    Loc
      .findByIdAndRemove(memorialid)
      .exec((err, memorial) => {

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
        "message": "No memorial"
      });
  }
};

console.log("api cont memor display 2")
module.exports = {
  memorialsCreate,
  memorialsUpdateOne,
  memorialsDeleteOne,
  getMemorials
};
