// It routes commands to the Model and View parts.
const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Team, User } = require('../models');


// Define a GET route handler for the '/' route
router.get('/', async (req, res) => {
  // Declare an async function to query the database
  try {
    // Find all Team records and include associated User records
    const teamData = await Team.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    // Map the Team instances to plain JS objects
    const teams = teamData.map((team) => team.get({ plain: true }));

    // Render the 'login' view template, passing teams data and login status
    res.render('login', { 
      teams, 
      logged_in: req.session.logged_in 
    });
  // Catch any errors
  } catch (err) {
    // Send a 500 error response
    res.status(500).json(err);
  }
});

// Define a GET route handler for path '/team/:id'
router.get('/team/:id', async (req, res) => {
  // Try to execute the following code
  try {
    // Find a Team by its primary key from the request parameters
    const teamData = await Team.findByPk(req.params.id, {
      // Eager load the associated User model
      include: [
        {
          // The associated model is User
          model: Team,
          // Only select the 'name' attribute from User
          attributes: ['name'],
        },
      ],
    });

    // Get the team data as a plain JavaScript object
    const team = teamData.get({ plain: true });

    // Render the 'team' template, passing the team data and
    // whether the user is logged in
    res.render('team', {
      ...team,
      logged_in: req.session.logged_in
    });
    // Catch any errors
  } catch (err) {
    // Send a 500 error response
    res.status(500).json(err);
  }
});

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

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});
module.exports = router;
