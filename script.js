function calculateStats() {
    var totalMatches = parseInt(document.getElementById("totalMatches").value);
    var totalWins = parseInt(document.getElementById("totalWins").value);
    var totalKills = parseInt(document.getElementById("totalKills").value);
    var totalDeaths = parseInt(document.getElementById("totalDeaths").value);

    // Calculations
    var winRate = ((totalWins / totalMatches) * 100).toFixed(2);
    var kdr = (totalKills / totalDeaths).toFixed(2);
    var kpm = (totalKills / totalMatches).toFixed(2);
    var defeatRate = (100 - winRate).toFixed(2);
    var avgKillsPerMatch = (totalKills / totalMatches).toFixed(2);
    var avgDeathsPerMatch = (totalDeaths / totalMatches).toFixed(2);

    // Display results
    var result = "Win Rate: " + winRate + "%<br>";
    result += "Defeat Rate: " + defeatRate + "%<br>";
    result += "Kill Death Ratio: " + kdr + "<br>";
    result += "Kill per Match: " + kpm + "<br>";
    result += "Average Kills per Match: " + avgKillsPerMatch + "<br>";
    result += "Average Deaths per Match: " + avgDeathsPerMatch;

    document.getElementById("statsResult").innerHTML = result;
}
