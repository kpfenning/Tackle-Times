const router = require('express').Router();
const { Team } = require('../../models');
const withAuth = require('../../utils/auth');


// GET all teams for favoritesSecltionPage
router.get('/favoritesSecltionPage', async (req, res) => {
  try {
    const teamData = await Team.findAll({
      include: [
        {
          model: Team,
          attributes: ['id', 'imageSrc', 'altText'],
        },
      ],
    });

    const teams = teamData.map((team) =>
      team.get({ plain: true })
    );
    res.render('favoritesSecltionPage', {
      teams,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const teamData = await Team.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!teamData) {
      res.status(404).json({ message: 'No teams found with this id!' });
      return;
    }

    res.status(200).json(teamData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
