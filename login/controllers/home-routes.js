// It routes commands to the Model and View parts.
const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Team, User } = require('../models');


// GET all teams for favoritesSecltionPage
router.get('/favoritesSecltionPage', async (req, res) => {
  try {
    const teamData = await Team.findAll({
      
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


const express = require('express');
const app = express();

app.use(express.static('css-js')); 



// router.get('./css-js/FavoritesSectionPageStyle.css', (req, res) => {
//   const cssPath = path.join(__dirname,'css-js', 'FavoritesSectionPageStyle.css');
//   fs.readFile(cssPath, 'utf-8', (err, content) => {
//     if (err) {
//       console.log(err);
//       res.status(500).json({ error: 'Internal Server Error' });
//     } else {
//       res.setHeader('Content-Type', 'text/css');
//       res.send(content);
//     }
//   });
// });

// GET all teams for myfavoriteteams
router.get('/myfavoriteteams', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Team }],
    });

    // Extract user and teams from userData
    const user = userData.get({ plain: true });
    const teams = user.Teams; // Assuming the association is named "Teams"

    // Render the 'myfavoriteteams' template, passing the team data and
    // whether the user is logged in
    res.render('myfavoriteteams', {
      ...user,
      teams,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

app.get('/contacts', (req, res) => {
  const contacts = [
    { name: 'Victor', imgSrc: 'victor-img.jpg', profileUrl: 'https://github.com/vromero-beltran' },
    { name: 'John', imgSrc: 'john-img.jpg', profileUrl: 'https://github.com/JohnHazukaJr' },
    { name: 'Kendall', imgSrc: 'kendall-img.jpg', profileUrl: 'https://github.com/kpfenning' },
    { name: 'Trevis', imgSrc: './DevPictures/ContactMeimgTrevis.PNG', profileUrl: 'https://github.com/Trevis-Williams' },
  ];

  res.render('contacts', { contacts });
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
      loggedIn: req.session.loggedIn
    });
    // Catch any errors
  } catch (err) {
    // Send a 500 error response
    res.status(500).json(err);
  }
});

router.get('/contactus', (req, res) => {
  res.render('contactus');
});

router.get('/aboutus', (req, res) => {
  res.render('aboutus');
});

router.get('/calendar', (req, res) => {
  res.render('calendar');
});


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});
module.exports = router;
