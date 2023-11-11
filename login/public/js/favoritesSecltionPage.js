function toggleBackground(element) {
    // Toggle the 'active' class on the parent element of the passed in element 
    const isActive = element.parentElement.classList.toggle('active');
    // Set max number of teams allowed
    const maxTeams = 6;
    // Check if parent element now has 'active' class after toggle
    if (isActive) {
        // If number of selected teams is less than max allowed
        if (selectedTeams.length < maxTeams) {
            // Show the next button
            showNextButton(true);
        
            // Add current team to selected teams array
            addTeamToSelection(element);
        } else {
            // If max teams already selected, remove 'active' class to deselect
            element.parentElement.classList.remove('active');
            // Still show next button
            showNextButton(true); 
        }
    } else {
      // If element was deselected, remove from selectedTeams array
        removeTeamFromSelection(element);
    }
}

function addTeamToSelection(element) {
    // Get the team name from the image alt text
    const teamName = element.alt; 
    
    // Get the team image source
    const teamSrc = element.src;
    // Assign a unique team ID based on current length of selectedTeams array
    // This will be 'team 1' through 'team 6'
    const teamId = `team ${selectedTeams.length + 1}`;
    // Add the team data to the selectedTeams array
    selectedTeams.push({ 
        id: teamId, 
        name: teamName,  
        src: teamSrc 
    });
    // Save updated selected teams array to localStorage
    updateLocalStorage();
}

function removeTeamFromSelection(element) {
    // Defines a function called removeTeamFromSelection that accepts a parameter called element
    const teamId = element.id; 
    // Gets the id property of the passed in element and saves it to a constant called teamId
    const index = selectedTeams.findIndex(team => team.id === teamId);
    // Uses Array.findIndex() on the selectedTeams array to find the index of the object that has an id matching the teamId constant
    // Saves the found index to a constant called index
    if (index !== -1) {
        // Checks if an index was found (index !== -1)
        selectedTeams.splice(index, 1);
        // If an index was found, uses Array.splice() to remove 1 element from the selectedTeams array at the index
        updateLocalStorage();
        // Calls the updateLocalStorage() function, likely to update local storage with the now updated selectedTeams array
    }
}


// Function to show or hide the "Next" button based on team selection
function showNextButton(isActive) {
    // Gets reference to the DOM element with id "nextButton"
    const nextButton = document.getElementById("nextButton");
    // If isActive is truthy, set the display style to "block" to show the button
    if (isActive) {
        nextButton.style.display = "block"; 
    } else {
        // Otherwise set display to "none" to hide the button
        nextButton.style.display = "none";
    }
}

// Attach the toggleBackground function to each team image's onclick event
const teamImages = document.querySelectorAll(".favoriteTeam img");
teamImages.forEach((image) => {
    // Set the onclick handler for each image 
    image.onclick = function () {
    // Call toggleBackground and pass the image element when clicked
    toggleBackground(this);
    };
});






document.addEventListener('DOMContentLoaded', function() {
  // Add event listener to run code when DOM is loaded  
  // Get the Handlebars template
    const source = document.getElementById('team-template').innerHTML;
  // Get inner HTML content of element with id 'team-template'
    const template = Handlebars.compile(source);
  // Compile Handlebars template from source
  // Get the container where teams will be rendered
    const teamsContainer = document.querySelector('.teams');
  // Select element with class 'teams'
  // Render teams using Handlebars 
    teamsData.forEach(function(team) {
        // Loop through teamsData array
        const html = template(team);  
        // Render template for each team
        teamsContainer.insertAdjacentHTML('beforeend', html);
        // Insert rendered HTML into teamsContainer 
    });
});


// Define a function to fetch and display team data
function fetchAndDisplayTeamData() {
    // Make a fetch request to the provided teamData.json path
    fetch('teamData.json') 
    // Convert the response to JSON
    .then((response) => {
        console.log('Response:', response); // Log the response object
        return response.json();
    })
    // Process the JSON data
    .then((data) => {
        console.log('Data:', data); // Log the fetched data

        // Get the Handlebars template HTML
        const source = document.getElementById('team-template').innerHTML; 
        // Compile the Handlebars template
        const template = Handlebars.compile(source);
        // Select the container element to render the data
        const container = document.querySelector('.teams');
        // Loop through the data
        data.forEach((team) => {
            // Render the template for each team
            container.innerHTML += template(team); 
        });
    })
    .catch((error) => {
        console.error('Error fetching data:', error); // Log any errors
    });
}

// Call the function to fetch and display team data
fetchAndDisplayTeamData();




document.addEventListener('DOMContentLoaded', async () => {
    try {
      // Fetch teams from teams.json
      const response = await fetch('teamData.json');
      const nflTeams = await response.json();
  
      // Get the Handlebars template from HTML
      const templateSource = document.getElementById('team-template').innerHTML;
      const template = Handlebars.compile(templateSource);
  
      // Render teams and append them to the container
      const teamContainer = document.getElementById('teamContainer');
      teamContainer.innerHTML = template({ teams: nflTeams });
    } catch (error) {
      console.error('Error:', error);
    }
  });
  
  // Function to handle click event and toggle background
  function toggleBackground(element) {
    element.classList.toggle('selected');
  }
  