function back() {
    window.location = "main.html"
}

window.onload = function authenticate() {
    var utilizador = localStorage.getItem("username")
    $.ajax({
        url: '/api/users/authentication', //Igual ao que está no app.js
        method: 'get',
        success: function (result, status) {
            users = result;
            console.log(users)
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


// CHINESE BASKETBALL 
$.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4442", function (data) { //Chinese League Next Games
    var next_games = '';
    var i = 0;
    for (var i = 0; i < data.events.length; i++) {
        next_games += '<tr>';
        next_games += '<td>' + data.events[i].dateEvent + '</td>';
        next_games += '<td>' + data.events[i].strHomeTeam + '</td>';
        next_games += '<td>' + data.events[i].strAwayTeam + '</td>';
        next_games += "<td><button class='button-list_01' id='" + data.events[i].strHomeTeam + "'>Buy Ticket</button></td>"
    }
    $('#CBA_01').append(next_games);

    $(".button-list_01").click(function () {
        var id = this.id;
        $.getJSON("https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=Chinese%20CBA", function (equipa) {
            var info = '';
            var i = 0;
            for (var i = 0; i < equipa.teams.length; i++) {
                if (equipa.teams[i].strTeam == id) {
                    info = equipa.teams[i].strStadium
                }
            }
            window.open('WebMap/index.html?mark=' + info, '_blank', 'height=100', 'width=400')
        });
    });
});

$.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4442", function (data) { //Chinese League Past Games
    var last_games = '';
    var i = 0;
    for (var i = 0; i < data.events.length; i++) {
        last_games += '<tr>';
        last_games += '<td>' + data.events[i].dateEvent + '</td>';
        last_games += '<td>' + data.events[i].strHomeTeam + '</td>';
        last_games += '<td>' + data.events[i].strAwayTeam + '</td>';
        last_games += '<td>' + data.events[i].intHomeScore + ' v ' + data.events[i].intAwayScore + '</td>';
    }
    $('#CBA_02').append(last_games);
});

//La Liga
$.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4335", function (data) { //La Liga Next Games
    var next_games = '';
    var i = 0;
    for (var i = 0; i < data.events.length; i++) {
        next_games += '<tr>';
        next_games += '<td>' + data.events[i].dateEvent + '</td>';
        next_games += '<td>' + data.events[i].strHomeTeam + '</td>';
        next_games += '<td>' + data.events[i].strAwayTeam + '</td>';
        next_games += "<td><button class='button-list_02' id='" + data.events[i].strHomeTeam + "'>Buy Ticket</button></td>"
    }
    $('#laliga_01').append(next_games);

    $(".button-list_02").click(function () {
        var id = this.id;
        $.getJSON("https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=Spanish%20La%20Liga", function (equipa) {
            var info = '';
            var i = 0;
            for (var i = 0; i < equipa.teams.length; i++) {
                if (equipa.teams[i].strTeam == id) {
                    info = equipa.teams[i].strStadium
                }
            }
            window.open('WebMap/index.html?mark=' + info, '_blank', 'height=100', 'width=400')
        });
    });
});

$.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4335", function (data) { //La Liga Past Games
    var last_games = '';
    var i = 0;
    for (var i = 0; i < data.events.length; i++) {
        last_games += '<tr>';
        last_games += '<td>' + data.events[i].dateEvent + '</td>';
        last_games += '<td>' + data.events[i].strHomeTeam + '</td>';
        last_games += '<td>' + data.events[i].strAwayTeam + '</td>';
        last_games += '<td>' + data.events[i].intHomeScore + ' v ' + data.events[i].intAwayScore + '</td>';
    }
    $('#laliga_02').append(last_games);
});

//Liga Nos
$.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4344", function (data) { //Liga Nos Next Games
    var next_games = '';
    var i = 0;
    for (var i = 0; i < data.events.length; i++) {
        next_games += '<tr>';
        next_games += '<td>' + data.events[i].dateEvent + '</td>';
        next_games += '<td>' + data.events[i].strHomeTeam + '</td>';
        next_games += '<td>' + data.events[i].strAwayTeam + '</td>';
        next_games += "<td><button class='button-list_03' id='" + data.events[i].strHomeTeam + "'>Buy Ticket</button></td>"
    }
    $('#nos_01').append(next_games);


    $(".button-list_03").click(function () {
        var id = this.id;
        $.getJSON("https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=Portuguese%20Primeira%20Liga", function (equipa) {
            var info = '';
            var i = 0;
            for (var i = 0; i < equipa.teams.length; i++) {
                if(id == 'Sporting Lisbon'){
                    id = 'Sporting CP';
                }
                else if (equipa.teams[i].strTeam == id) {
                    info = equipa.teams[i].strStadium
                }
            }
            window.open('WebMap/index.html?mark=' + info, '_blank', 'height=100', 'width=400')
        });
    });
});

$.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4344", function (data) { //Liga Nos Past Games
    var last_games = '';
    var i = 0;
    for (var i = 0; i < data.events.length; i++) {
        last_games += '<tr>';
        last_games += '<td>' + data.events[i].dateEvent + '</td>';
        last_games += '<td>' + data.events[i].strHomeTeam + '</td>';
        last_games += '<td>' + data.events[i].strAwayTeam + '</td>';
        last_games += '<td>' + data.events[i].intHomeScore + ' v ' + data.events[i].intAwayScore + '</td>';
    }
    $('#nos_02').append(last_games);
});

//Premier League
$.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4328", function (data) { //Premier League Next Games
    var next_games = '';
    var i = 0;
    for (var i = 0; i < data.events.length; i++) {
        next_games += '<tr>';
        next_games += '<td>' + data.events[i].dateEvent + '</td>';
        next_games += '<td>' + data.events[i].strHomeTeam + '</td>';
        next_games += '<td>' + data.events[i].strAwayTeam + '</td>';
        next_games += "<td><button class='button-list_04' id='" + data.events[i].strHomeTeam + "'>Buy Ticket</button></td>"
    }
    $('#premier_01').append(next_games);

    $(".button-list_04").click(function () {
        var id = this.id;
        $.getJSON("https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League", function (equipa) {
            var info = '';
            var i = 0;
            for (var i = 0; i < equipa.teams.length; i++) {
                if (equipa.teams[i].strTeam == 'Leicester') {
                    info = equipa.teams[i].strStadium + ' Stadium'
                } 
                else if (equipa.teams[i].strTeam == id) {
                    info = equipa.teams[i].strStadium
                }     
            }
            window.open('WebMap/index.html?mark=' + info, '_blank', 'height=100', 'width=400')
        });
    });
});

$.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4328", function (data) { //Premier League Past Games
    var last_games = '';
    var i = 0;
    for (var i = 0; i < data.events.length; i++) {
        last_games += '<tr>';
        last_games += '<td>' + data.events[i].dateEvent + '</td>';
        last_games += '<td>' + data.events[i].strHomeTeam + '</td>';
        last_games += '<td>' + data.events[i].strAwayTeam + '</td>';
        last_games += '<td>' + data.events[i].intHomeScore + ' v ' + data.events[i].intAwayScore + '</td>';
    }
    $('#premier_02').append(last_games);
});

//Liga Endesa
$.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4408", function (data) { //Liga Endesa Next Games
    var next_games = '';
    var i = 0;
    for (var i = 0; i < data.events.length; i++) {
        next_games += '<tr>';
        next_games += '<td>' + data.events[i].dateEvent + '</td>';
        next_games += '<td>' + data.events[i].strHomeTeam + '</td>';
        next_games += '<td>' + data.events[i].strAwayTeam + '</td>';
        next_games += "<td><button class='button-list_05' id='" + data.events[i].strHomeTeam + "'>Buy Ticket</button></td>"
    }
    $('#endesa_01').append(next_games);

    $(".button-list_05").click(function () {
        var id = this.id;
        $.getJSON("https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=Spanish%20Liga%20ACB", function (equipa) {
            var info = '';
            var i = 0;
            for (var i = 0; i < equipa.teams.length; i++) {
                if (equipa.teams[i].strTeam == id) {
                    info = equipa.teams[i].strStadium
                }
            }
            window.open('WebMap/index.html?mark=' + info, '_blank', 'height=100', 'width=400')
        });
    });
});

$.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4408", function (data) { //Liga Endesa Past Games
    var last_games = '';
    var i = 0;
    for (var i = 0; i < data.events.length; i++) {
        last_games += '<tr>';
        last_games += '<td>' + data.events[i].dateEvent + '</td>';
        last_games += '<td>' + data.events[i].strHomeTeam + '</td>';
        last_games += '<td>' + data.events[i].strAwayTeam + '</td>';
        last_games += '<td>' + data.events[i].intHomeScore + ' v ' + data.events[i].intAwayScore + '</td>';
    }
    $('#endesa_02').append(last_games);
});

//NBA
$.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4387", function (data) { //NBA Next Games
    var next_games = '';
    var i = 0;
    for (var i = 0; i < data.events.length; i++) {
        next_games += '<tr>';
        next_games += '<td>' + data.events[i].dateEvent + '</td>';
        next_games += '<td>' + data.events[i].strHomeTeam + '</td>';
        next_games += '<td>' + data.events[i].strAwayTeam + '</td>';
        next_games += "<td><button class='button-list_06' id='" + data.events[i].strHomeTeam + "'>Buy Ticket</button></td>"
    }
    $('#nba_01').append(next_games);

    $(".button-list_06").click(function () {
        var id = this.id;
        $.getJSON("https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NBA", function (equipa) {
            var info = '';
            var i = 0;
            for (var i = 0; i < equipa.teams.length; i++) {
                if (equipa.teams[i].strTeam == id) {
                    info = equipa.teams[i].strStadium
                }
            }
            window.open('WebMap/index.html?mark=' + info, '_blank', 'height=100', 'width=400')
        });
    });
});

$.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4387", function (data) { //NBA Past Games
    var last_games = '';
    var i = 0;
    for (var i = 0; i < data.events.length; i++) {
        last_games += '<tr>';
        last_games += '<td>' + data.events[i].dateEvent + '</td>';
        last_games += '<td>' + data.events[i].strHomeTeam + '</td>';
        last_games += '<td>' + data.events[i].strAwayTeam + '</td>';
        last_games += '<td>' + data.events[i].intHomeScore + ' v ' + data.events[i].intAwayScore + '</td>';
    }
    $('#nba_02').append(last_games);
});

//NHL
$.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4380", function (data) { //NHL Next Games
    var next_games = '';
    var i = 0; ~
        console.log(data)
    for (var i = 0; i < data.events.length; i++) {
        next_games += '<tr>';
        next_games += '<td>' + data.events[i].dateEvent + '</td>';
        next_games += '<td>' + data.events[i].strHomeTeam + '</td>';
        next_games += '<td>' + data.events[i].strAwayTeam + '</td>';
        next_games += "<td><button class='button-list_07' id='" + data.events[i].strHomeTeam + "'>Buy Ticket</button></td>"
    }
    $('#nhl_01').append(next_games);

    $(".button-list_07").click(function () {
        var id = this.id;
        $.getJSON("https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NHL", function (equipa) {
            var info = '';
            var i = 0;
            for (var i = 0; i < equipa.teams.length; i++) {
                if (equipa.teams[i].strTeam == id) {
                    info = equipa.teams[i].strStadium
                    console.log(info)
                    window.open('WebMap/index.html?mark=' + info, '_blank', 'height=100', 'width=400')
                }
            }
           
        });
    })
});

$.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4380", function (data) { //NHL Past Games
    var last_games = '';
    var i = 0;
    for (var i = 0; i < data.events.length; i++) {
        last_games += '<tr>';
        last_games += '<td>' + data.events[i].dateEvent + '</td>';
        last_games += '<td>' + data.events[i].strHomeTeam + '</td>';
        last_games += '<td>' + data.events[i].strAwayTeam + '</td>';
        last_games += '<td>' + data.events[i].intHomeScore + ' v ' + data.events[i].intAwayScore + '</td>';
    }
    $('#nhl_02').append(last_games);
});

//UK Elite League
$.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4381", function (data) { //UK Elite League Next Games
    var next_games = '';
    var i = 0;
    console.log(data)
    for (var i = 0; i < data.events.length; i++) {
        next_games += '<tr>';
        next_games += '<td>' + data.events[i].dateEvent + '</td>';
        next_games += '<td>' + data.events[i].strHomeTeam + '</td>';
        next_games += '<td>' + data.events[i].strAwayTeam + '</td>';
        next_games += "<td><button class='button-list_08' id='" + data.events[i].strHomeTeam + "'>Buy Ticket</button></td>"
    }
    $('#elite_01').append(next_games);

    $(".button-list_08").click(function () {
        var id = this.id;
        $.getJSON("https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=UK%20Elite%20Ice%20Hockey%20League", function (equipa) {
            var info = '';
            var i = 0;
            for (var i = 0; i < equipa.teams.length; i++) {
                if (equipa.teams[i].strTeam == id) {
                    info = equipa.teams[i].strStadium
                }
            }
            window.open('WebMap/index.html?mark=' + info, '_blank', 'height=100', 'width=400')
        });
    })
});

$.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4381", function (data) { //UK Elite League Past Games
    var last_games = '';
    var i = 0;
    for (var i = 0; i < data.events.length; i++) {
        last_games += '<tr>';
        last_games += '<td>' + data.events[i].dateEvent + '</td>';
        last_games += '<td>' + data.events[i].strHomeTeam + '</td>';
        last_games += '<td>' + data.events[i].strAwayTeam + '</td>';
        last_games += '<td>' + data.events[i].intHomeScore + ' v ' + data.events[i].intAwayScore + '</td>';
    }
    $('#elite_02').append(last_games);
});