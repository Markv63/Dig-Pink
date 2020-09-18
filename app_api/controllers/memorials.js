const mongoose = require('mongoose');
const { Locked } = require('http-errors');
const Loc = mongoose.model('Memorial');

console.log("api cont memor entry");

 
/*const doAddMemorial = (req, res, memorial) => {
  console.log("api cont mem do add 1");
  if (!memorial) {
    res
      .status(404)
      .json({ "message": "Memorial not found" });
  } else {
    const { honor, player, school } = req.body;
    memorial.push({
      honor,
      player,
      school
    });
    //console.log("mem api do add 2");
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
};*/

const memorialsCreate = (req, res) => {
 /* console.log("api cont mem create 1");
 const memorialid = req.parms.memorialid;
 if (memorialid) { 
    Loc.create
      .exec(( err, memorial) => {
        if (err) {
          res
            .status(400)
            .json(err);
        } else {
          doAddMemorial(req, res, memorial);
        }
    });       
  } else {
    res
      .status(404)
      .json({"message": "Memorial not created"});
  }*/
  Loc.create ({
    honor: req.body.honor,
    player: req.body.player,
    school: req.body.school
  }, (err, memorial) => {
    if ( err) {

    
    res
      .status(400)
      .json(err);
  } else {
    res
      .status(201)
      .json(memorial);
    }
  }  
 )
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
  //console.log("app control mem update 3")
    .findById(req.params.memorialid)
    .select()
    //console.log("app control mem update 4")
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
