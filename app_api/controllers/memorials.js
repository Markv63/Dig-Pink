const mongoose = require('mongoose');
const { Locked } = require('http-errors');
const Loc = mongoose.model('Memorial');

const memorialsCreate = (req, res) => {
  Loc.create({
    name: req.body.honor,
    player: req.body.player,
    school: req.body.school,
  })
  if (err) {
    res
      .status(200)
      .json({ "success": "success" });
  } else {
    res
      .status(201)
      .json(memorial);
  };
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
    .select('')
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
      memorial.name = req.body.name;
      memorial.address = req.body.player
      memorial.facilities = req.body.school;

      memorial.save((err, loc) => {
        if (err) {
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


module.exports = {
  memorialsCreate,
  memorialsUpdateOne,
  memorialsDeleteOne,
  getMemorials
};
