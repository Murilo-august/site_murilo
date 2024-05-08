// List of games
const games = [
    {
        name: 'FIFA 94',
        releaseYear: 1993,
        platform: 'Sega Genesis, SNES'
    },
    {
        name: 'FIFA 95',
        releaseYear: 1994,
        platform: 'Sega Genesis, SNES, Sega 32X, PC'
    },
    {
        name: 'FIFA 96',
        releaseYear: 1995,
        platform: 'Sega Saturn, PlayStation, Sega 32X, PC, Sega Genesis, SNES, 3DO, Game Boy'
    },
    // Add more FIFA games here
];

// List of teams
const teams = [
    {
        name: 'Barcelona',
        league: 'La Liga',
        country: 'Spain'
    },
    {
        name: 'Manchester United',
        league: 'Premier League',
        country: 'England'
    },
    {
        name: 'Bayern Munich',
        league: 'Bundesliga',
        country: 'Germany'
    },
    // Add more FIFA teams here
];

// List of versions
const versions = [
    {
        name: 'FIFA 94',
        features: 'First FIFA game with real-time 3D graphics',
        improvements: 'Improved controls and player movements'
    },
    {
        name: 'FIFA 95',
        features: 'First FIFA game with real-time commentary',
        improvements: 'Improved graphics and player AI'
    },
    {
        name: 'FIFA 96',
        features: 'First FIFA game with motion-captured animations',
        improvements: 'Improved graphics, player AI, and gameplay mechanics'
    },
    // Add more FIFA versions here
];

// Function to display games
function displayGames() {
    const gamesSection = document.getElementById("games");
    let gamesHTML = "";

    games.forEach (game => {
        gamesHTML += `<p>${game.name} - Released in ${game.releaseYear}; Platform: ${game.platform}</p>`;
    });

    gamesSection.innerHTML = gamesHTML;
}

// Function to display teams
function displayTeams() {
    const teamsSection = document.getElementById("teams");
    let teamsHTML = "";

    teams.forEach (team => {
        teamsHTML += `<p>${team.name} - League: ${team.league}; Country: ${team.country}</p>`;
    });

    teamsSection.innerHTML = teamsHTML;
}

// Function to display versions
function displayVersions() {
    const versionsSection = document.getElementById("versions");
    let versionsHTML = "";

    versions.forEach (version => {
        versionsHTML += `<p>${version.name} - Features: ${version.features}; Improvements: ${version.improvements}</p>`;
    });

    versionsSection.innerHTML = versionsHTML;
}



// Event listeners to trigger displaying teams and versions
document.getElementById("gamesBtn").addEventListener("click", displayGames);
document.getElementById("teamsBtn").addEventListener("click", displayTeams);
document.getElementById("versionsBtn").addEventListener("click", displayVersions);
