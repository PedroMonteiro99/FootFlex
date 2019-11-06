function football(){
    $.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventsday.php?d=2019-11-02&s=Soccer&l=Portuguese%20Primeira%20Liga", function (data) { //Liga Nos Live Games
        var live_games = '';
        var i = 0;
        for (var i = 0; i < data.events.length; i++) {
            live_games += '<tr>';
            live_games += '<td>' + data.events[i].dateEvent + '</td>';
            live_games += '<td>' + data.events[i].strHomeTeam + '</td>';
            live_games += '<td>' + data.events[i].strAwayTeam + '</td>';
            live_games += '<td>' + data.events[i].intHomeScore + ' v ' + data.events[i].intAwayScore + '</td>';
        }
        $('#live_02').append(live_games);
    });

}
function basketball() {

}
function tennis() {

}

function back() {
    window.location = "main.html"
}