window.onload = function getUrlVars() { //Code to get the params that were send via URL
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    console.log(vars)
    return vars;
  
}



//DATA
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + (dd - 1);

$.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventsday.php?d=" + today + "&l=NBA", function (data) { //NBA Latest Games
    var latest_games = '';
    for (var i = 0; i < data.events.length; i++) {
        latest_games += '<tr>';
        latest_games += '<td>NBA</td>';
        latest_games += '<td>' + data.events[i].strHomeTeam + '</td>';
        latest_games += '<td>' + data.events[i].strAwayTeam + '</td>';
        latest_games += '<td>' + data.events[i].intHomeScore + ' v ' + data.events[i].intAwayScore + '</td>';
    }
    $('#main_01').append(latest_games);
});

$.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventsday.php?d=" + today + "&l=Chinese%20CBA", function (data) { //Chinese League Latest Games
    var latest_games = '';
    for (var i = 0; i < data.events.length; i++) {
        latest_games += '<tr>';
        latest_games += '<td>Chinese Basketball</td>';
        latest_games += '<td>' + data.events[i].strHomeTeam + '</td>';
        latest_games += '<td>' + data.events[i].strAwayTeam + '</td>';
        latest_games += '<td>' + data.events[i].intHomeScore + ' v ' + data.events[i].intAwayScore + '</td>';
    }
    $('#main_01').append(latest_games);
});

$.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventsday.php?d=" + today + "&l=Spanish%20Liga%20ACB", function (data) { //Liga Endesa Latest Games
    var latest_games = '';
    for (var i = 0; i < data.events.length; i++) {
        latest_games += '<tr>';
        latest_games += '<td>Liga Endesa</td>';
        latest_games += '<td>' + data.events[i].strHomeTeam + '</td>';
        latest_games += '<td>' + data.events[i].strAwayTeam + '</td>';
        latest_games += '<td>' + data.events[i].intHomeScore + ' v ' + data.events[i].intAwayScore + '</td>';
    }
    $('#main_01').append(latest_games);
});

$.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventsday.php?d=" + today + "&l=English%20Premier%20League", function (data) { //EPL Latest Games
    var latest_games = '';
    for (var i = 0; i < data.events.length; i++) {
        latest_games += '<tr>';
        latest_games += '<td>Premier League</td>';
        latest_games += '<td>' + data.events[i].strHomeTeam + '</td>';
        latest_games += '<td>' + data.events[i].strAwayTeam + '</td>';
        latest_games += '<td>' + data.events[i].intHomeScore + ' v ' + data.events[i].intAwayScore + '</td>';
    }
    $('#main_01').append(latest_games);
});

$.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventsday.php?d=" + today + "&l=Portuguese%20Primeira%20Liga", function (data) { //Liga NOS Latest Games
    var latest_games = '';
    for (var i = 0; i < data.events.length; i++) {
        latest_games += '<tr>';
        latest_games += '<td>Liga NOS</td>';
        latest_games += '<td>' + data.events[i].strHomeTeam + '</td>';
        latest_games += '<td>' + data.events[i].strAwayTeam + '</td>';
        latest_games += '<td>' + data.events[i].intHomeScore + ' v ' + data.events[i].intAwayScore + '</td>';
    }
    $('#main_01').append(latest_games);
});

$.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventsday.php?d=" + today + "&l=Spanish%20La%20Liga", function (data) { //La Liga Latest Games
    var latest_games = '';
    for (var i = 0; i < data.events.length; i++) {
        latest_games += '<tr>';
        latest_games += '<td>La Liga</td>';
        latest_games += '<td>' + data.events[i].strHomeTeam + '</td>';
        latest_games += '<td>' + data.events[i].strAwayTeam + '</td>';
        latest_games += '<td>' + data.events[i].intHomeScore + ' v ' + data.events[i].intAwayScore + '</td>';
    }
    $('#main_01').append(latest_games);
});

$.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventsday.php?d=" + today + "&l=UK%20Elite%20Ice%20Hockey%20League", function (data) { //UK Ice Hockey Latest Games
    var latest_games = '';
    for (var i = 0; i < data.events.length; i++) {
        latest_games += '<tr>';
        latest_games += '<td>UK Ice Hockey</td>';
        latest_games += '<td>' + data.events[i].strHomeTeam + '</td>';
        latest_games += '<td>' + data.events[i].strAwayTeam + '</td>';
        latest_games += '<td>' + data.events[i].intHomeScore + ' v ' + data.events[i].intAwayScore + '</td>';
    }
    $('#main_01').append(latest_games);
});

$.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventsday.php?d=" + today + "&l=NHL", function (data) { //NHL Latest Games
    var latest_games = '';
    for (var i = 0; i < data.events.length; i++) {
        latest_games += '<tr>';
        latest_games += '<td>NHL</td>';
        latest_games += '<td>' + data.events[i].strHomeTeam + '</td>';
        latest_games += '<td>' + data.events[i].strAwayTeam + '</td>';
        latest_games += '<td>' + data.events[i].intHomeScore + ' v ' + data.events[i].intAwayScore + '</td>';
    }
    $('#main_01').append(latest_games);
});
