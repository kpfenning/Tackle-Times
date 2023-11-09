const router = require('express').Router();
const { Team, User } = require('../../models');
const withAuth = require('../../utils/auth');


// GET all teams for favoritesSecltionPage
router.post('/favoritesSecltionPage', async (req, res) => {
  try {
    const teamData = await Team.findAll({
      include: [
        {
          model: Team,
          attributes: ['name', 'imageSrc', 'altText'],
        },
      ],
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.post('/myfavoriteteams', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Team }],
    });
    if (!userData) {
      res.status(404).json({ message: 'No user found with this id!' });
      return;
    }
    const teamData = await Team.findAll({
      include: [
        {
          model: Team,
          attributes: ['name', 'imageSrc', 'altText'],
        },
      ],
    });
    if (!teamData) {
      res.status(404).json({ message: 'No teams found with this id!' });
      return;
    }
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
