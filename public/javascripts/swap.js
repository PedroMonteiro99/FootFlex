function basketball() {
    $("#live_01 tbody tr").remove()
    //DATA
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;

    //TEMPO
    var horas = new Date();
    var time = horas.getHours() + ":" + horas.getMinutes() + ":" + horas.getSeconds();

    $.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventsday.php?d=" + today + "&l=NBA", function (data) { //PremierLeague Live Games
        var live_games = '';
        if (data.events == null) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'There are no Basketball games availabe today!',
            })
        }
        for (var i = 0; i < data.events.length; i++) {
            live_games += '<tr>';
            live_games += '<td>' + data.events[i].strTime.substring(0, 5) + '</td>';
            live_games += '<td>' + data.events[i].strHomeTeam + '</td>';
            live_games += '<td>' + data.events[i].strAwayTeam + '</td>';
            live_games += "<td><button class='button-list' id='" + data.events[i].strHomeTeam + " vs " + data.events[i].strAwayTeam + "'>View Livestream</button></td>"
        }
        $('#live_01').append(live_games);

        $(".button-list").click(function () {
            var id = this.id;
            window.open('http://www.youtube.com/embed?listType=search&list=' + id + 'Highlights' + today, 'youtube', '_blank', 'height=100', 'width=400')
        });
    });

    $.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventsday.php?d=" + today + "&l=Chinese%20CBA", function (data) { //Chinese League Live Games     
        var live_games = '';
        if (data.events == null) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'There are no Basketball games availabe today!',
            })
        }
        for (var i = 0; i < data.events.length; i++) {
            live_games += '<tr>';
            live_games += '<td>' + data.events[i].strTime.substring(0, 5) + '</td>';
            live_games += '<td>' + data.events[i].strHomeTeam + '</td>';
            live_games += '<td>' + data.events[i].strAwayTeam + '</td>';
            live_games += "<td><button class='button-list' id='" + data.events[i].strHomeTeam + " vs " + data.events[i].strAwayTeam + "' >View Livestream</button></td>"
        }
        $('#live_01').append(live_games);

        $(".button-list").click(function () {
            var id = this.id;
            window.open('http://www.youtube.com/embed?listType=search&list=' + id + 'Highlights' + today, 'youtube', '_blank', 'height=100', 'width=400')
        });

    });

    $.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventsday.php?d=" + today + "&l=Spanish%20Liga%20ACB", function (data) { //Liga Endesa Live Games    
        var live_games = '';
        if (data.events == null) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'There are no Basketball games availabe today!',
            })
        }
        for (var i = 0; i < data.events.length; i++) {
            live_games += '<tr>';
            live_games += '<td>' + data.events[i].strTime.substring(0, 5) + '</td>';
            live_games += '<td>' + data.events[i].strHomeTeam + '</td>';
            live_games += '<td>' + data.events[i].strAwayTeam + '</td>';
            live_games += "<td><button class='button-list' id='" + data.events[i].strHomeTeam + " vs " + data.events[i].strAwayTeam + "' >View Livestream</button></td>"
        }
        $('#live_01').append(live_games);

        $(".button-list").click(function () {
            var id = this.id;
            window.open('http://www.youtube.com/embed?listType=search&list=' + id + 'Highlights' + today, 'youtube', '_blank', 'height=100', 'width=400')
        });
    });
}

function football() {
    $("#live_01 tbody tr").remove()
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
        var live_games = '';
        console.log(data)
        if (data.events == null) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'There are no Football games availabe today!',
            })
        }
        else {
            for (var i = 0; i < data.events.length; i++) {
                var gameTime = new Date(data.events[i].strTime);
                //if (horas.)
                live_games += '<tr>';
                live_games += '<td>' + data.events[i].strTime.substring(0, 5) + '</td>';
                live_games += '<td>' + data.events[i].strHomeTeam + '</td>';
                live_games += '<td>' + data.events[i].strAwayTeam + '</td>';
                live_games += "<td><button class='button-list' id='" + data.events[i].strHomeTeam + " vs " + data.events[i].strAwayTeam + "' >View Livestream</button></td>"
            }
        }
        $('#live_01').append(live_games);

        $(".button-list").click(function () {
            var id = this.id;
            window.open('http://www.youtube.com/embed?listType=search&list=' + id + 'Highlights' + today, 'youtube', '_blank', 'height=100', 'width=400')
        });
    });
    $.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventsday.php?d=" + today + "&l=Portuguese%20Primeira%20Liga", function (data) { //PremierLeague Live Games
        var live_games = '';
        if (data.events == null) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'There are no Football games availabe today!',
            })
        }
        for (var i = 0; i < data.events.length; i++) {
            live_games += '<tr>';
            live_games += '<td>' + data.events[i].strTime.substring(0, 5) + '</td>';
            live_games += '<td>' + data.events[i].strHomeTeam + '</td>';
            live_games += '<td>' + data.events[i].strAwayTeam + '</td>';
            live_games += "<td><button class='button-list' id='" + data.events[i].strHomeTeam + " vs " + data.events[i].strAwayTeam + "' >View Livestream</button></td>"
        }
        $('#live_01').append(live_games);

        $(".button-list").click(function () {
            var id = this.id;
            window.open('http://www.youtube.com/embed?listType=search&list=' + id + 'Highlights' + today, 'youtube', '_blank', 'height=100', 'width=400')
        });
    });
    $.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventsday.php?d=" + today + "&l=Spanish%20La%20Liga", function (data) { //PremierLeague Live Games
        var live_games = '';
        if (data.events == null) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'There are no Football games availabe today!',
            })
        }
        for (var i = 0; i < data.events.length; i++) {
            live_games += '<tr>';
            live_games += '<td>' + data.events[i].strTime.substring(0, 5) + '</td>';
            live_games += '<td>' + data.events[i].strHomeTeam + '</td>';
            live_games += '<td>' + data.events[i].strAwayTeam + '</td>';
            live_games += "<td><button class='button-list' id='" + data.events[i].strHomeTeam + " vs " + data.events[i].strAwayTeam + "' >View Livestream</button></td>"
        }
        $('#live_01').append(live_games);

        $(".button-list").click(function () {
            var id = this.id;
            window.open('http://www.youtube.com/embed?listType=search&list=' + id + 'Highlights' + today + '', 'youtube', '_blank', 'height=100', 'width=400')
        });
    });
}

function tennis() {
    $("#live_01 tbody tr").remove()
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
        var live_games = '';
        if (data.events == null) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'There are no Ice Hockey games availabe today!',
            })
        }
        for (var i = 0; i < data.events.length; i++) {
            live_games += '<tr>';
            live_games += '<td>' + data.events[i].strTime.substring(0, 5) + '</td>';
            live_games += '<td>' + data.events[i].strHomeTeam + '</td>';
            live_games += '<td>' + data.events[i].strAwayTeam + '</td>';
            live_games += "<td><button class='button-list' id='" + data.events[i].strHomeTeam + " vs " + data.events[i].strAwayTeam + "' >View Livestream</button></td>"
        }
        $('#live_01').append(live_games);

        $(".button-list").click(function () {
            var id = this.id;
            window.open('http://www.youtube.com/embed?listType=search&list=' + id + 'Highlights' + today + '', 'youtube', '_blank', 'height=100', 'width=400')
        });
    });

    $.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventsday.php?d=" + today + "&l=NHL", function (data) { //PremierLeague Live Games      
        var live_games = '';
        if (data.events == null) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'There are no Ice Hockey games availabe today!',
            })
        }
        for (var i = 0; i < data.events.length; i++) {
            live_games += '<tr>';
            live_games += '<td>' + data.events[i].strTime.substring(0, 5) + '</td>';
            live_games += '<td>' + data.events[i].strHomeTeam + '</td>';
            live_games += '<td>' + data.events[i].strAwayTeam + '</td>';
            live_games += "<td><button class='button-list' id='" + data.events[i].strHomeTeam + " vs " + data.events[i].strAwayTeam + "' >View Livestream</button></td>"
        }
        $('#live_01').append(live_games);

        $(".button-list").click(function () {
            var id = this.id;
            window.open('http://www.youtube.com/embed?listType=search&list=' + id + 'Highlights' + today + '', 'youtube', '_blank', 'height=100', 'width=400')
        });
    });
}

function back() {
    window.location = "main.html"
}