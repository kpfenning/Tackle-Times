
const events = [];
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

const currentDate = new Date();
currentDate.setHours(0, 0, 0, 0);

async function fetchAndProcessSchedule() {
   try {
      console.log('Fetching and processing schedule...');
      const favoriteTeamName = localStorage.getItem('selectedTeams');
      const selectedTeam = nflTeams.find((team) => team.id === favoriteTeamName);

      if (selectedTeam) {
         const data = await fetch('http://api.sportradar.us/nfl/official/trial/v7/en/games/current_season/schedule.json?api_key=qzzcby3fq9nxwz25zkfx6dj6');
         const gamesData = await data.json();

         for (const week of gamesData.weeks) {
            for (const game of week.games) {
               const homeTeamName = game.home;
               const awayTeamName = game.away;
               const scheduledDate = new Date(game.scheduled);
               const stadiumName = game.location;

               if (homeTeamName === selectedTeam.id || awayTeamName === selectedTeam.id) {
                  console.log('Adding event:', {
                     event_date: scheduledDate,
                     event_title: `${homeTeamName} vs ${awayTeamName}`,
                     event_theme: 'blue',
                     location: stadiumName,
                  });

                  events.push({
                     event_date: scheduledDate,
                     event_title: `${homeTeamName} vs ${awayTeamName}`,
                     event_theme: 'blue',
                     location: stadiumName,
                  });
               }
            }
         }

         const eventsUpdatedEvent = new Event('eventsUpdated');
         window.dispatchEvent(eventsUpdatedEvent);
      } else {
         console.log('Selected team not found in nflTeams.');
      }
   } catch (error) {
      console.error('Error:', error);
   }
}

fetchAndProcessSchedule();

			
	
	
	
	
	
	
