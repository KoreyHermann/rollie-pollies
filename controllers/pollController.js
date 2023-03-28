const router = require('express').Router();
const { Poll } = require('../models');

exports.getSinglePoll = async (req, res) => {
  try {
    const dbPollData = await Poll.findByPk(req.params.id);

    const poll = dbPollData.get({ plain: true });

    res.render('poll', { poll, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};