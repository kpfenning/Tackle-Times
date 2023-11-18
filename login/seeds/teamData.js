const { Team } = require('../models');

const teamData = [
    {
        name: "49ers",
        imageSrc: "./Nfl logos/49ers.png",
        altText: "49ers"
    },
    {
        name: "Pittsburgh Steelers",
        imageSrc: "./Nfl logos/768px-Pittsburgh_Steelers_logo.png",
        altText: "steelers"
    },
    {
        name: "Los Angeles Chargers",
        imageSrc: "./Nfl logos/2560px-Los_Angeles_Chargers_logo.png",
        altText: "chargers"
    },
    {
        name: "New York Giants",
        imageSrc: "./Nfl logos/2560px-New_York_Giants_logo.png",
        altText: "giants"
    },
    {
        name: "Washington Commanders",
        imageSrc: "./Nfl logos/washington_wbg (1).png",
        altText: "washington"
    },
    {
        name: "Los Angeles Rams",
        imageSrc: "./Nfl logos/i (1).png",
        altText: "rams"
    },
    {
        name: "Arizona Cardinals",
        imageSrc: "./Nfl logos/Arizona-Cardinals-Logo.png",
        altText: "cardinals"
    },
    {
        name: "Baltimore Ravens",
        imageSrc: "./Nfl logos/Baltimore-Ravens-logo.png",
        altText: "ravens"
    },
    {
        name: "Buffalo Bills",
        imageSrc: "./Nfl logos/buffalo_bills.png",
        altText: "bills"
    },
    {
        name: "Chicago Bears",
        imageSrc: "./Nfl logos/Chicago-Bears-Logo.png",
        altText: "bears"
    },
    {
        name: "Cincinnati Bengals",
        imageSrc: "./Nfl logos/Cincinnati_Bengals_logo.png",
        altText: "bengals"
    },
    {
        name: "Cleveland Browns",
        imageSrc: "./Nfl logos/Cleveland-Browns-Logo.png",
        altText: "browns"
    },
    {
        name: "Denver Broncos",
        imageSrc: "./Nfl logos/denver-broncos-logo-.png",
        altText: "broncos"
    },
    {
        name: "Detroit Lions",
        imageSrc: "./Nfl logos/Detroit-Lions-Logo.png",
        altText: "lions"
    },
    {
        name: "Indianapolis Colts",
        imageSrc: "./Nfl logos/Indianapolis_Colts_logo.png",
        altText: "Colts"
    },
    {
        name: "Jacksonville Jaguars",
        imageSrc: "./Nfl logos/jacksonville-jaguars-logo-.png",
        altText: "jaguars"
    },
    {
        name: "Kansas City Chiefs",
        imageSrc: "./Nfl logos/kansas-city-chiefs-logo-transparent.png",
        altText: "cheifs"
    },
    {
        name: "Las Vegas Raiders",
        imageSrc: "./Nfl logos/las_vegas_ranameers.png",
        altText: "ranameers"
    },
    {
        name: "Miami Dolphins",
        imageSrc: "./Nfl logos/Miami Dolphins.png",
        altText: "Dolphins"
    },
    {
        name: "Minnesota Vikings",
        imageSrc: "./Nfl logos/minnesota-vikings-logo-transparent.png",
        altText: "vikings"
    },
    {
        name: "New England Patriots",
        imageSrc: "./Nfl logos/New England Patriots.png",
        altText: "Patriots"
    },
    {
        name: "New York Jets",
        imageSrc: "./Nfl logos/New_York_Jets_logo.png",
        altText: "New-york-jets"
    },
    {
        name: "New Orleans Saints",
        imageSrc: "./Nfl logos/New-Orleans-Saints-Logo.png",
        altText: "Saints"
    },
    {
        name: "Philadelphia Eagles",
        imageSrc: "./Nfl logos/Philadelphia-Eagles-Logo.png",
        altText: "Eagles"
    },
    {
        name: "Seattle Seahawks",
        imageSrc: "./Nfl logos/seattle-seahawks-logo-transparent.png",
        altText: "seahawks"
    },
    {
        name: "Tampa Bay Buccaneers",
        imageSrc: "./Nfl logos/tampa-bay-buccaneers-fag-logo.png",
        altText: "buccaneers"
    },
    {
        name: "Tennessee Titans",
        imageSrc: "./Nfl logos/tennessee-titans-logo-.png",
        altText: "titans"
    },
    {
        name: "Houston Texans",
        imageSrc: "./Nfl logos/Texans-Logo.png",
        altText: "texans"
    },
    {
        name: "Atlanta Falcons",
        imageSrc: "./Nfl logos/atlanta-falcons-logo-fixed.png",
        altText: "falcons"
    },
    {
        name: "Carolina Panthers",
        imageSrc: "./Nfl logos/car panthers fixed logo.png",
        altText: "panthers"
    },
];

const seedTeams =() => Team.bulkCreate(teamData);

module.exports = seedTeams;