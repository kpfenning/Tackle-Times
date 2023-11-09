const router = require('express').Router();
const { User, Team } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/calendar', async (req, res) => {
    try {
        // Assuming you have a session-based authentication middleware
        const userData = await User.findByPk(req.session.user_id);

        if (!userData) {
            // Redirect to login if user is not authenticated
            return res.redirect('/login');
        }

        const user = userData.get({ plain: true });

        const teamData = await Team.findAll({
            include: [
                {
                    model: Team,
                    attributes: ['name', 'imageSrc', 'altText']
                }
            ]
        });

        const teams = teamData.map(team => team.get({ plain: true }));

        res.render('calendar', {
            teams,
            user,
            loggedIn: true 
        });

    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;