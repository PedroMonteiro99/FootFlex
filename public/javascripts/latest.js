window.onload = function authenticate() {
    var utilizador = localStorage.getItem("username")
    $.ajax({
        url: '/api/users/authentication', //Igual ao que está no app.js
        method: 'get',
        success: function (result, status) {
            users = result;
            console.log(users)
            console.log(users[0].Username)
            for (i in users) {
                if (users[i].Username == utilizador) {
                    if (users[i].Nome == 'Sports') { //Block pelo Pacote Sports
                        if (users[i].Desporto == 'Football') {
                            $("#basketball").hide();
                            $("#ice").hide();
                        }
                        else if (users[i].Desporto == 'Basketball') {
                            $("#football").hide();
                            $("#ice").hide();
                        }
                        else if (users[i].Desporto == 'Ice Hockey') {
                            $("#football").hide();
                            $("#basketball").hide();
                        }
                    }
                    if (users[i].Nome == 'League') { // Block pelo Pacote League
                        if (users[i].Desporto == 'Football') {
                            $("#basketball").hide();
                            $("#ice").hide();
                            if (users[i].Liga == 'Liga Nos') {
                                $("#premier").hide();
                                $("#laliga").hide();
                            }
                            else if (users[i].Liga == 'Premier League') {
                                $("#nos").hide();
                                $("#laliga").hide();
                            }
                            else if (users[i].Liga == 'La Liga') {
                                $("#nos").hide();
                                $("#premier").hide();
                            }
                        }
                        else if (users[i].Desporto == 'Basketball') {
                            $("#football").hide();
                            $("#ice").hide();
                            if (users[i].Liga == 'NBA') {
                                $("#endesa").hide();
                                $("#chinese").hide();
                            }
                            else if (users[i].Liga == 'Liga Endesa') {
                                $("#nba").hide();
                                $("#chinese").hide();
                            }
                            else if (users[i].Liga == 'Chinese League') {
                                $("#nba").hide();
                                $("#endesa").hide();
                            }
                        }
                        else if (users[i].Desporto == 'Ice Hockey') {
                            $("#football").hide();
                            $("#basketball").hide();
                            if (users[i].Liga == 'NHL') {
                                $("#elite").hide();
                            }
                            else if (users[i].Liga == 'UK Elite League') {
                                $("#nhl").hide();
                            }
                        }
                    }
                }
            }
        },
        error: function () {
            console.log('Error');
        }
    })
}



//DATA
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + (dd - 1);

$.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4387", function (data) { //NBA Latest Games
    var latest_games = '';
    for (var i = 0; i < 3; i++) {
        latest_games += '<tr>';
        latest_games += '<td>NBA</td>';
        latest_games += '<td>' + data.events[i].strHomeTeam + '</td>';
        latest_games += '<td>' + data.events[i].strAwayTeam + '</td>';
        latest_games += '<td>' + data.events[i].intHomeScore + ' v ' + data.events[i].intAwayScore + '</td>';
    }
    $('#main_01').append(latest_games);
});

$.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4442", function (data) { //Chinese League Latest Games
    var latest_games = '';
    for (var i = 0; i < 3; i++) {
        latest_games += '<tr>';
        latest_games += '<td>Chinese Basketball</td>';
        latest_games += '<td>' + data.events[i].strHomeTeam + '</td>';
        latest_games += '<td>' + data.events[i].strAwayTeam + '</td>';
        latest_games += '<td>' + data.events[i].intHomeScore + ' v ' + data.events[i].intAwayScore + '</td>';
    }
    $('#main_01').append(latest_games);
});

$.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4408", function (data) { //Liga Endesa Latest Games
    var latest_games = '';
    for (var i = 0; i < 3; i++) {
        latest_games += '<tr>';
        latest_games += '<td>Liga Endesa</td>';
        latest_games += '<td>' + data.events[i].strHomeTeam + '</td>';
        latest_games += '<td>' + data.events[i].strAwayTeam + '</td>';
        latest_games += '<td>' + data.events[i].intHomeScore + ' v ' + data.events[i].intAwayScore + '</td>';
    }
    $('#main_01').append(latest_games);
});

$.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4328", function (data) { //EPL Latest Games
    var latest_games = '';
    for (var i = 0; i < 3; i++) {
        latest_games += '<tr>';
        latest_games += '<td>Premier League</td>';
        latest_games += '<td>' + data.events[i].strHomeTeam + '</td>';
        latest_games += '<td>' + data.events[i].strAwayTeam + '</td>';
        latest_games += '<td>' + data.events[i].intHomeScore + ' v ' + data.events[i].intAwayScore + '</td>';
    }
    $('#main_01').append(latest_games);
});

$.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4344", function (data) { //Liga NOS Latest Games
    var latest_games = '';
    for (var i = 0; i < 3; i++) {
        latest_games += '<tr>';
        latest_games += '<td>Liga NOS</td>';
        latest_games += '<td>' + data.events[i].strHomeTeam + '</td>';
        latest_games += '<td>' + data.events[i].strAwayTeam + '</td>';
        latest_games += '<td>' + data.events[i].intHomeScore + ' v ' + data.events[i].intAwayScore + '</td>';
    }
    $('#main_01').append(latest_games);
});

$.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4335", function (data) { //La Liga Latest Games
    var latest_games = '';
    for (var i = 0; i < 3; i++) {
        latest_games += '<tr>';
        latest_games += '<td>La Liga</td>';
        latest_games += '<td>' + data.events[i].strHomeTeam + '</td>';
        latest_games += '<td>' + data.events[i].strAwayTeam + '</td>';
        latest_games += '<td>' + data.events[i].intHomeScore + ' v ' + data.events[i].intAwayScore + '</td>';
    }
    $('#main_01').append(latest_games);
});

$.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4381", function (data) { //UK Ice Hockey Latest Games
    var latest_games = '';
    for (var i = 0; i < 3; i++) {
        latest_games += '<tr>';
        latest_games += '<td>UK Ice Hockey</td>';
        latest_games += '<td>' + data.events[i].strHomeTeam + '</td>';
        latest_games += '<td>' + data.events[i].strAwayTeam + '</td>';
        latest_games += '<td>' + data.events[i].intHomeScore + ' v ' + data.events[i].intAwayScore + '</td>';
    }
    $('#main_01').append(latest_games);
});

$.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4380", function (data) { //NHL Latest Games
    var latest_games = '';
    for (var i = 0; i < 3; i++) {
        latest_games += '<tr>';
        latest_games += '<td>NHL</td>';
        latest_games += '<td>' + data.events[i].strHomeTeam + '</td>';
        latest_games += '<td>' + data.events[i].strAwayTeam + '</td>';
        latest_games += '<td>' + data.events[i].intHomeScore + ' v ' + data.events[i].intAwayScore + '</td>';
    }
    $('#main_01').append(latest_games);
});
