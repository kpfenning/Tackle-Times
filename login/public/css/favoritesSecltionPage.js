function toggleBackground(element) {
    const isActive = element.parentElement.classList.toggle('active');
    const maxTeams = 6; // Maximum number of teams allowed

    if (isActive) {
        if (selectedTeams.length < maxTeams) {
            showNextButton(true);
            addTeamToSelection(element);
        } else {
            element.parentElement.classList.remove('active'); // Deselect the team
            showNextButton(true); // Still show the "Next" button
        }
    } else {
        removeTeamFromSelection(element);
    }
}

function addTeamToSelection(element) {
    const teamName = element.alt;
    const teamSrc = element.src;

    // Assign teamId based on the position in the selectedTeams array (team 1 through team 6)
    const teamId = `team ${selectedTeams.length + 1}`;

    selectedTeams.push({ id: teamId, name: teamName, src: teamSrc });
    updateLocalStorage();
}

function removeTeamFromSelection(element) {
    const teamId = element.id;
    const index = selectedTeams.findIndex(team => team.id === teamId);

    if (index !== -1) {
        selectedTeams.splice(index, 1);
        updateLocalStorage();
    }
}

function updateLocalStorage() {
    localStorage.setItem("selectedTeams", JSON.stringify(selectedTeams));
}






// Function to show or hide the "Next" button based on team selection
function showNextButton(isActive) {
    const nextButton = document.getElementById("nextButton");
    if (isActive) {
        nextButton.style.display = "block";
    } else {
        nextButton.style.display = "none";
    }
}

// Attach the toggleBackground function to each team image's onclick event
const teamImages = document.querySelectorAll(".favoriteTeam img");
teamImages.forEach((image) => {
    image.onclick = function () {
        toggleBackground(this);
    };
});


function handleTeamClick(teamId) {
    // Store the selected team in local storage
    localStorage.setItem('selectedTeam', teamId);

    // Pass the image source URL as well
    const teamImageSrc = document.getElementById(teamId).src;
    localStorage.setItem('selectedTeamImage', teamImageSrc);

    // Redirect to the second page
    window.location.href = 'myfavoriteteams.html'; 
}


const selectedTeams = [];

document.addEventListener('DOMContentLoaded', function() {
    
    const nflTeams = [
        {
            id: 'San Francisco 49ers',
            imageSrc: 'Nfl logos/49ers.png',
            altText: '49ers',
        },
        {
            id: 'Pittsburgh Steelers',
            imageSrc: 'Nfl logos/768px-Pittsburgh_Steelers_logo.png',
            altText: 'steelers',
        },
        {
            id: 'Los Angeles Chargers',
            imageSrc: 'Nfl logos/2560px-Los_Angeles_Chargers_logo.png',
            altText: 'chargers',
        },
        {
            id: 'New York Giants',
            imageSrc: 'Nfl logos/2560px-New_York_Giants_logo.png',
            altText: 'giants',
        },
        {
            id: 'Washington Commanders',
            imageSrc: './Nfl logos/washington_wbg (1).png',
            altText: 'washington',
        },
        {
            id: 'Los Angeles Rams',
            imageSrc: './Nfl logos/i (1).png',
            altText: 'rams',
        },
        {
            id: 'Arizona Cardinals',
            imageSrc: 'Nfl logos/Arizona-Cardinals-Logo.png',
            altText: 'cardinals',
        },
        {
            id: 'Baltimore Ravens',
            imageSrc: './Nfl logos/Baltimore-Ravens-logo.png',
            altText: 'ravens',
        },
        {
            id: 'Buffalo Bills',
            imageSrc: './Nfl logos/buffalo_bills.png',
            altText: 'bills',
        },
        {
            id: 'Chicago Bears',
            imageSrc: 'Nfl logos/Chicago-Bears-Logo.png',
            altText: 'bears',
        },
        {
            id: 'Cincinnati Bengals',
            imageSrc: 'Nfl logos/Cincinnati_Bengals_logo.png',
            altText: 'bengals',
        },
        {
            id: 'Cleveland Browns',
            imageSrc: 'Nfl logos/Cleveland-Browns-Logo.png',
            altText: 'browns',
        },
        {
            id: 'Denver Broncos',
            imageSrc: 'Nfl logos/denver-broncos-logo-.png',
            altText: 'broncos',
        },
        {
            id: 'Detroit Lions',
            imageSrc: 'Nfl logos/Detroit-Lions-Logo.png',
            altText: 'lions',
        },
        {
            id: 'Indianapolis Colts',
            imageSrc: 'Nfl logos/Indianapolis_Colts_logo.png',
            altText: 'Colts',
        },
        {
            id: 'Jacksonville Jaguars',
            imageSrc: 'Nfl logos/jacksonville-jaguars-logo-.png',
            altText: 'jaguars',
        },
        {
            id: 'Kansas City Chiefs',
            imageSrc: 'Nfl logos/kansas-city-chiefs-logo-transparent.png',
            altText: 'cheifs',
        },
        {
            id: 'Las Vegas Raiders',
            imageSrc: 'Nfl logos/las_vegas_raiders.png',
            altText: 'raiders',
        },
        {
            id: 'Miami Dolphins',
            imageSrc: 'Nfl logos/Miami Dolphins.png',
            altText: 'Dolphins',
        },
        {
            id: 'Minnesota Vikings',
            imageSrc: 'Nfl logos/minnesota-vikings-logo-transparent.png',
            altText: 'vikings',
        },
        {
            id: 'New England Patriots',
            imageSrc: 'Nfl logos/New England Patriots.png',
            altText: 'Patriots',
        },
        {
            id: 'New York Jets',
            imageSrc: 'Nfl logos/New_York_Jets_logo.png',
            altText: 'New-york-jets',
        },
        {
            id: 'New Orleans Saints',
            imageSrc: 'Nfl logos/New-Orleans-Saints-Logo.png',
            altText: 'Saints',
        },
        {
            id: 'Philadelphia Eagles',
            imageSrc: 'Nfl logos/Philadelphia-Eagles-Logo.png',
            altText: 'Eagles',
        },
        {
            id: 'Seattle Seahawks',
            imageSrc: 'Nfl logos/seattle-seahawks-logo-transparent.png',
            altText: 'seahawks',
        },
        {
            id: 'Tampa Bay Buccaneers',
            imageSrc: 'Nfl logos/tampa-bay-buccaneers-flag-logo.png',
            altText: 'buccaneers',
        },
        {
            id: 'Tennessee Titans',
            imageSrc: 'Nfl logos/tennessee-titans-logo-.png',
            altText: 'titans',
        },
        {
            id: 'Houston Texans',
            imageSrc: 'Nfl logos/Texans-Logo.png',
            altText: 'texans',
        },
        {
            id: 'Atlanta Falcons',
            imageSrc: 'Nfl logos/atlanta-falcons-logo-fixed.png',
            altText: 'falcons',
        },
        {
            id: 'Carolina Panthers',
            imageSrc: 'Nfl logos/car panthers fixed logo.png',
            altText: 'panthers',
        },
    ];
    

    // Get the Handlebars template
    const source = document.getElementById('team-template').innerHTML;
    const template = Handlebars.compile(source);

    // Get the container where teams will be rendered
    const teamsContainer = document.querySelector('.teams');

    // Render teams using Handlebars
    teamsData.forEach(function(team) {
        const html = template(team);
        teamsContainer.insertAdjacentHTML('beforeend', html);
    });
});

const express = require('express');
const app = express();

app.get('/myfavoriteteams.html', (req, res) => {
  // Your code to handle the request and send a response
  res.send('This is the myfavoriteteams.html page');
});

// Start the server
const port = 3000; // or any other port you prefer
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});


//   app.get('/myfavoriteteams.html',(req,res)=>{
//     fs.readFile("/myfavoriteteams.html","utf-8",(err,content)=>{
//         if(err){
//             console.log(err)
//         }else{
//             var data = JSON.parse(content)
//             res.json(data)
//         }
//     })
// })
// save teams to array with the labes team 1 team 2 team 3 team 4 team 5 team 6 then change id of them on the next page to team 1-6