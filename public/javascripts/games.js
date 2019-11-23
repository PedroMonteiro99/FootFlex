function back() {
    window.location = "main.html"
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
        next_games += "<td><button>Buy Ticket</button></td>"
    }
    $('#CBA_01').append(next_games);

    $('#CBA_01 tbody').on('click', 'button', function () {
        window.open('WebMap/index.html', '_blank', 'height=100', 'width=400')
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
        last_games += '<td>' + data.events[i].intHomeScore+' v '+data.events[i].intAwayScore + '</td>';
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
        next_games += "<td><button>Buy Ticket</button></td>"
    }
    $('#laliga_01').append(next_games);

    $('#laliga_01 tbody').on('click', 'button', function () {
        window.open('WebMap/index.html', '_blank', 'height=100', 'width=400')
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
        last_games += '<td>' + data.events[i].intHomeScore+' v '+data.events[i].intAwayScore + '</td>';
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
        next_games += "<td><button>Buy Ticket</button></td>"
    }
    $('#nos_01').append(next_games);

    $('#nos_01 tbody').on('click', 'button', function () {
        window.open('WebMap/index.html', '_blank', 'height=100', 'width=400')
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
        last_games += '<td>' + data.events[i].intHomeScore+' v '+data.events[i].intAwayScore + '</td>';
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
        next_games += "<td><button>Buy Ticket</button></td>"
    }
    $('#premier_01').append(next_games);

    $('#premier_01 tbody').on('click', 'button', function () {
        window.open('WebMap/index.html', '_blank', 'height=100', 'width=400')
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
        last_games += '<td>' + data.events[i].intHomeScore+' v '+data.events[i].intAwayScore + '</td>';
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
        next_games += "<td><button>Buy Ticket</button></td>"
    }
    $('#endesa_01').append(next_games);

    $('#endesa_01 tbody').on('click', 'button', function () {
        window.open('WebMap/index.html', '_blank', 'height=100', 'width=400')
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
        last_games += '<td>' + data.events[i].intHomeScore+' v '+data.events[i].intAwayScore + '</td>';
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
        next_games += "<td><button>Buy Ticket</button></td>"
    }
    $('#nba_01').append(next_games);

    $('#nba_01 tbody').on('click', 'button', function () {
        window.open('WebMap/index.html', '_blank', 'height=100', 'width=400')
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
        last_games += '<td>' + data.events[i].intHomeScore+' v '+data.events[i].intAwayScore + '</td>';
    }
    $('#nba_02').append(last_games);
});

//NHL
$.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4380", function (data) { //NHL Next Games
    var next_games = '';
    var i = 0;~
    console.log(data)
    for (var i = 0; i < data.events.length; i++) {
        next_games += '<tr>';
        next_games += '<td>' + data.events[i].dateEvent + '</td>';
        next_games += '<td>' + data.events[i].strHomeTeam + '</td>';
        next_games += '<td>' + data.events[i].strAwayTeam + '</td>';
        next_games += "<td><button>Buy Ticket</button></td>"
    }
    $('#nhl_01').append(next_games);

    $('#nhl_01 tbody').on('click', 'button', function () {
        window.open('WebMap/index.html', '_blank', 'height=100', 'width=400')
    });
});

$.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4380", function (data) { //NHL Past Games
    var last_games = '';
    var i = 0;
    for (var i = 0; i < data.events.length; i++) {
        last_games += '<tr>';
        last_games += '<td>' + data.events[i].dateEvent + '</td>';
        last_games += '<td>' + data.events[i].strHomeTeam + '</td>';
        last_games += '<td>' + data.events[i].strAwayTeam + '</td>';
        last_games += '<td>' + data.events[i].intHomeScore+' v '+data.events[i].intAwayScore + '</td>';
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
        next_games += "<td><button>Buy Ticket</button></td>"
    }
    $('#elite_01').append(next_games);

    $('#elite_01 tbody').on('click', 'button', function () {
        window.open('WebMap/index.html', '_blank', 'height=100', 'width=400')
    });
});

$.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4381", function (data) { //UK Elite League Past Games
    var last_games = '';
    var i = 0;
    for (var i = 0; i < data.events.length; i++) {
        last_games += '<tr>';
        last_games += '<td>' + data.events[i].dateEvent + '</td>';
        last_games += '<td>' + data.events[i].strHomeTeam + '</td>';
        last_games += '<td>' + data.events[i].strAwayTeam + '</td>';
        last_games += '<td>' + data.events[i].intHomeScore+' v '+data.events[i].intAwayScore + '</td>';
    }
    $('#elite_02').append(last_games);
});

