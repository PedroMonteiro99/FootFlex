function basketball() {
    //DATA
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;

    //TEMPO
    var horas = new Date();
    var time = horas.getHours() + ":" + horas.getMinutes() + ":" + horas.getSeconds();

    $.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventsday.php?d=" + today + "&l=NBA", function (data) { //NBA Live Games
        $("#live_01 tbody tr").remove()
        var live_games = '';
        for (var i = 0; i < data.events.length; i++) {
            live_games += '<tr>';
            live_games += '<td>' + data.events[i].strTime + '</td>';
            live_games += '<td>' + data.events[i].strHomeTeam + '</td>';
            live_games += '<td>' + data.events[i].strAwayTeam + '</td>';
        }
        $('#live_01').append(live_games);

        for (var i = 1; i < data.events.length; i++) {
            var table = document.getElementById("live_01");
            var sum = data.events[i].strTime;
            while (table.rows.length > 1) {
                if (String(time) > sum) {
                    table.deleteRow(i);
                }
            }
        }

    });

    $.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventsday.php?d=" + today + "&l=Chinese%20CBA", function (data) { //Chinese League Live Games
        $("#live_01 tbody tr").remove()
        var live_games = '';
        for (var i = 0; i < data.events.length; i++) {
            live_games += '<tr>';
            live_games += '<td>' + data.events[i].strTime + '</td>';
            live_games += '<td>' + data.events[i].strHomeTeam + '</td>';
            live_games += '<td>' + data.events[i].strAwayTeam + '</td>';
        }
        $('#live_01').append(live_games);

        for (var i = 1; i < data.events.length; i++) {
            var table = document.getElementById("live_01");
            var sum = data.events[i].strTime;
            while (table.rows.length > 1) {
                if (String(time) > sum) {
                    table.deleteRow(i);
                }
            }
        }

    });

    $.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventsday.php?d=" + today + "&l=Spanish%20Liga%20ACB", function (data) { //Liga Endesa Live Games
        $("#live_01 tbody tr").remove()
        var live_games = '';
        for (var i = 0; i < data.events.length; i++) {
            live_games += '<tr>';
            live_games += '<td>' + data.events[i].strTime + '</td>';
            live_games += '<td>' + data.events[i].strHomeTeam + '</td>';
            live_games += '<td>' + data.events[i].strAwayTeam + '</td>';
        }
        $('#live_01').append(live_games);

        for (var i = 1; i < data.events.length; i++) {
            var table = document.getElementById("live_01");
            var sum = data.events[i].strTime;
            while (table.rows.length > 1) {
                if (String(time) > sum) {
                    table.deleteRow(i);
                }
            }
        }
    });

}

function football() {
    //DATA
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;

    //TEMPO
    var horas = new Date();
    var time = horas.getHours() + ":" + horas.getMinutes() + ":" + horas.getSeconds();

    $.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventsday.php?d=" + today + "&l=English%20Premier%20League", function (data) { //PremierLeague Live Games
        $("#live_01 tbody tr").remove()
        var live_games = '';
        for (var i = 0; i < data.events.length; i++) {
            live_games += '<tr>';
            live_games += '<td>' + data.events[i].strTime + '</td>';
            live_games += '<td>' + data.events[i].strHomeTeam + '</td>';
            live_games += '<td>' + data.events[i].strAwayTeam + '</td>';
        }
        $('#live_01').append(live_games);
    });
    $.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventsday.php?d=" + today + "&l=Portuguese%20Primeira%20Liga", function (data) { //PremierLeague Live Games
        $("#live_01 tbody tr").remove()
        var live_games = '';
        for (var i = 0; i < data.events.length; i++) {
            live_games += '<tr>';
            live_games += '<td>' + data.events[i].strTime + '</td>';
            live_games += '<td>' + data.events[i].strHomeTeam + '</td>';
            live_games += '<td>' + data.events[i].strAwayTeam + '</td>';
        }
        $('#live_01').append(live_games);
    });
    $.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventsday.php?d=" + today + "&l=Spanish%20La%20Liga", function (data) { //PremierLeague Live Games
        $("#live_01 tbody tr").remove()
        var live_games = '';
        for (var i = 0; i < data.events.length; i++) {
            live_games += '<tr>';
            live_games += '<td>' + data.events[i].strTime + '</td>';
            live_games += '<td>' + data.events[i].strHomeTeam + '</td>';
            live_games += '<td>' + data.events[i].strAwayTeam + '</td>';
        }
        $('#live_01').append(live_games);
    });
}

function tennis() {
    //DATA
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;

    //TEMPO
    var horas = new Date();
    var time = horas.getHours() + ":" + horas.getMinutes() + ":" + horas.getSeconds();
    $.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventsday.php?d=" + today + "&l=UK%20Elite%20Ice%20Hockey%20League", function (data) { //PremierLeague Live Games
        $("#live_01 tbody tr").remove()
        var live_games = '';
        for (var i = 0; i < data.events.length; i++) {
            live_games += '<tr>';
            live_games += '<td>' + data.events[i].strTime + '</td>';
            live_games += '<td>' + data.events[i].strHomeTeam + '</td>';
            live_games += '<td>' + data.events[i].strAwayTeam + '</td>';
        }
        $('#live_01').append(live_games);
    });

    $.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventsday.php?d=" + today + "&l=NHL", function (data) { //PremierLeague Live Games
        $("#live_01 tbody tr").remove()
        var live_games = '';
        for (var i = 0; i < data.events.length; i++) {
            live_games += '<tr>';
            live_games += '<td>' + data.events[i].strTime + '</td>';
            live_games += '<td>' + data.events[i].strHomeTeam + '</td>';
            live_games += '<td>' + data.events[i].strAwayTeam + '</td>';
        }
        $('#live_01').append(live_games);
    });
}

function back() {
    window.location = "main.html"
}