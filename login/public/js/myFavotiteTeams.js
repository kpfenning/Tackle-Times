

function showNextButton() {
    const nextButton = document.getElementById("nextButton");
    nextButton.style.display = "block";
}
function toggleBackground(element) {
    element.parentElement.classList.toggle('selected');
}

function initializeSelectedTeams() {
    // Get the selected teams from the database
    const selectedTeams = [];

    // run fetch to hit the endpoint /api/teams/myfavoriteteams; this is a normal http get request/ fetch i.e. no body stuff
    fetch('/api/teams/myfavoriteteams').then()
    selectedTeams.forEach(team => {
        // Find the corresponding team element by ID
        const teamElement = document.getElementById(team.name);

        if (teamElement) {
            // Set the team's image source and ID
            teamElement.src = team.src;
            teamElement.id = team.name;

            // Add the "active" class to mark it as selected
            teamElement.parentElement.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the selected teams when the page loads
    initializeSelectedTeams();
});


// Sample data for your teams
const teamsData = {
    teams: [
        {
            name: 'team1',
            imageSrc: 'path-to-image1.png',
            altText: 'Team 1',
        },
        {
            name: 'team2',
            imageSrc: 'path-to-image2.png',
            altText: 'Team 2',
        },
        // Add more teams as needed
    ],
};

// Compile the Handlebars template
const source = document.getElementById('team-template').innerHTML;
const template = Handlebars.compile(source);

// Render the template with data
const teamList = document.getElementById('teamList');
teamList.innerHTML = template(teamsData);

export function getSelectedTeam() {
    return selectedTeams;
}