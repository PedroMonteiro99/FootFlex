var team_array = [];

window.onload = function authenticate() {
    var utilizador = localStorage.getItem("username")
    console.log(utilizador)
    $.ajax({
        url: '/api/authen/authentication', //Igual ao que está no app.js
        method: 'get',
        success: function (result, status) {
            users = result;
            console.log(users)
            for (i in users) {
                if (users[i].Username == utilizador) {
                    desporto = users[i].Desporto;
                    console.log(desporto)
                    liga = users[i].Liga;
                    console.log(liga)
                    pacote = users[i].Nome;
                    console.log(pacote)
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