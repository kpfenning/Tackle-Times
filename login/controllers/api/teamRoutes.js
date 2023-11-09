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
          attributes: ['name', 'imageSrc', 'altText'],
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

// Use withAuth middleware to prevent access to route
router.get('/myFavoriteTeams', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Team }],
    });
    const teamData = await Team.findAll({
      include: [
        {
          model: Team,
          attributes: ['name', 'imageSrc', 'altText'],
        },
      ],
    });

    const user = userData.get({ plain: true });
    const teams = teamData.map((team) =>
    team.get({ plain: true })
  );

    res.render('myFavoriteTeams', {
      ...user,
      teams,
      logged_in: true
    });
  } catch (err) {
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
