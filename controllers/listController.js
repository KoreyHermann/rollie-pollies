const router = require('express').Router();
const { List, Poll } = require('../models');

exports.getLists = async (req, res) => {
  try {
    const dbListData = await List.findAll({
      include: [
        {
          model: Poll,
          attributes: ['question', 'answer1', 'answer2'],
        },
      ],
    });

    const lists = dbListData.map((List) =>
      gallery.get({ plain: true })
    );

    res.render('homepage', {
      lists,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

exports.getSingleList = async (req, res) => {
  try {
    const dbListData = await List.findByPk(req.params.id, {
      include: [
        {
          model: Poll,
          attributes: [
            'id',
            'question',
            'username',
            'answer1',
            'answer2',
          ],
        },
      ],
    });

    const list = dbListData.get({ plain: true });
    res.render('list', { list, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};