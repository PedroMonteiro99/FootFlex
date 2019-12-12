var desporto = '';
var liga = '';
var pacote = '';
var team_array = [];

window.onload = function authenticate() {
    var utilizador = localStorage.getItem("username")
    console.log(utilizador)
    $.ajax({
        url: '/api/users/authentication', //Igual ao que está no app.js
        method: 'get',
        success: function (result, status) {
            users = result;
            console.log(users)
            for (i in users) {
                if (users[i].Username == utilizador) {
                    desporto = users[i].Desporto;
                    liga = users[i].Liga;
                    pacote = users[i].Nome;
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
            football();
        },
        error: function () {
            console.log('Error');
        }
    })
}



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

    $.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4387", function (data) { //PremierLeague Live Games
        var live_games = '';
        if (data.events == null) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'There are no Basketball games availabe today!',
            })
        }
        for (var i = 0; i < 4; i++) {
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

    $.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4442", function (data) { //Chinese League Live Games     
        var live_games = '';
        if (data.events == null) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'There are no Basketball games availabe today!',
            })
        }
        for (var i = 0; i < 2; i++) {
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

    $.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4408", function (data) { //Liga Endesa Live Games    
        var live_games = '';
        if (data.events == null) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'There are no Basketball games availabe today!',
            })
        }
        for (var i = 0; i < 2; i++) {
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

    $.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4328", function (data) { //PremierLeague Live Games
        var live_games = '';
        if (data.events == null) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'There are no Football games availabe today!',
            })
        }
        else {
            for (var i = 0; i < 4; i++) {
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
    $.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4344", function (data) { //PremierLeague Live Games
        var live_games = '';
        if (data.events == null) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'There are no Football games availabe today!',
            })
        }
        for (var i = 0; i < 2; i++) {
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
    $.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4335", function (data) { //PremierLeague Live Games
        var live_games = '';
        if (data.events == null) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'There are no Football games availabe today!',
            })
        }
        for (var i = 0; i < 3; i++) {
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

    $.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4381", function (data) { //PremierLeague Live Games
        var live_games = '';
        if (data.events == null) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'There are no Ice Hockey games availabe today!',
            })
        }
        for (var i = 0; i < 2; i++) {
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

    $.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4380", function (data) { //PremierLeague Live Games      
        var live_games = '';
        if (data.events == null) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'There are no Ice Hockey games availabe today!',
            })
        }
        for (var i = 0; i < 4; i++) {
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

function favorito() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    var sport = '';
    var ligue = '';
    var nome = document.getElementById("myInput").value
    $.getJSON("https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=" + nome, function (data) {
        for (var i = 0; i < data.teams.length; i++) {
            if (data.teams[i].strTeam == nome) {
                sport = data.teams[i].strSport;
                ligue = data.teams[i].strLeague;
                if (data.teams[i].strSport == 'Soccer') {
                    sport = 'Football'
                }
                if (data.teams[i].strLeague == 'Portuguese Primeira Liga') {
                    ligue = 'Liga Nos'
                }
                if (data.teams[i].strLeague == 'Spanish La Liga') {
                    ligue = 'La Liga'
                }
                if (data.teams[i].strLeague == 'English Premier League') {
                    ligue = 'Premier League'
                }
                if (data.teams[i].strLeague == 'Spanish Liga ACB') {
                    ligue = 'Liga Endesa'
                }
                if (data.teams[i].strLeague == 'Chinese CBA') {
                    ligue = 'Chinese League'
                }
                if (data.teams[i].strLeague == 'UK Elite Ice Hockey League') {
                    ligue = 'UK Elite League'
                }
                if (pacote == 'Sports') { //Block pelo Pacote Sports
                    if (desporto == sport) {
                        if (team_array.length == 0) {
                            Toast.fire({
                                icon: 'success',
                                title: 'You added this team successfully!'
                            })
                            team_array.push(nome)
                            var idEquipa = data.teams[i].idTeam;
                            addGames(idEquipa)
                        }
                        else {
                            if (team_array.includes(nome)) {
                                Toast.fire({
                                    icon: 'warning',
                                    title: 'This team has already been added!'
                                })
                            }
                            else {
                                Toast.fire({
                                    icon: 'success',
                                    title: 'You added this team successfully!'
                                })
                                team_array.push(nome)
                                var idEquipa = data.teams[i].idTeam;
                                addGames(idEquipa)
                            }
                        }
                    }
                    else {
                        Toast.fire({
                            icon: 'error',
                            title: "The plan that you have does not have this team included!"
                        })
                    }
                }
                if (pacote == 'League') { // Block pelo Pacote League
                    if (desporto == sport) {
                        if (liga == ligue) {
                            if (team_array.length == 0) {
                                Toast.fire({
                                    icon: 'success',
                                    title: 'You added this team successfully!'
                                })
                                team_array.push(nome)
                                var idEquipa = data.teams[i].idTeam;
                                addGames(idEquipa)
                            }
                            else {
                                if (team_array.includes(nome)) {
                                    Toast.fire({
                                        icon: 'warning',
                                        title: 'This team has already been added!'
                                    })
                                }
                                else {
                                    Toast.fire({
                                        icon: 'success',
                                        title: 'You added this team successfully!'
                                    })
                                    team_array.push(nome)
                                    var idEquipa = data.teams[i].idTeam;
                                    addGames(idEquipa)
                                }
                            }
                        }
                        else {
                            Toast.fire({
                                icon: 'error',
                                title: "The plan that you have does not have this team included!"
                            })
                        }
                    }
                    else {
                        Toast.fire({
                            icon: 'error',
                            title: "The plan that you have does not have this team included!"
                        })
                    }

                }
                if (pacote == 'All in One') {
                    if (team_array.length == 0) {
                        Toast.fire({
                            icon: 'success',
                            title: 'You added this team successfully!'
                        })
                        team_array.push(nome)
                        var idEquipa = data.teams[i].idTeam;
                        addGames(idEquipa)
                    }
                    else {
                        if (team_array.includes(nome)) {
                            Toast.fire({
                                icon: 'warning',
                                title: 'This team has already been added!'
                            })
                        }
                        else {
                            Toast.fire({
                                icon: 'success',
                                title: 'You added this team successfully!'
                            })
                            team_array.push(nome)
                            var idEquipa = data.teams[i].idTeam;
                            addGames(idEquipa)
                        }
                    }
                }

            }
        }
    });
}

function addGames(id) {
    $.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=" + id, function (data) {
        var next_games = '';
        var i = 0;
        for (var i = 0; i < 2; i++) {
            next_games += '<tr>';
            next_games += '<td>' + data.events[i].dateEvent + '</td>';
            next_games += '<td>' + data.events[i].strHomeTeam + '</td>';
            next_games += '<td>' + data.events[i].strAwayTeam + '</td>';
        }
        $('#clubs_01').append(next_games);

    });

}