var desporto = '';
var liga = '';
var pacote = '';

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
            football();
        },
        error: function () {
            console.log('Error');
        }
    })
}



function basketball() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    $("#live_01 tbody tr").remove()
    var show = [];
    //DATA
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;

    //TEMPO
    var horas = new Date();
    var time = horas.getHours() + ":" + horas.getMinutes() + ":" + horas.getSeconds();

    //NBA -> 4387 , Chinese -> 4442, Endesa -> 4408
    if (desporto == null || desporto == 'Basketball') {
        if (liga == null || liga == 'NBA') {
            show.push(4387)
        }
        if (liga == null || liga == 'Chinese League') {
            show.push(4442)
        }
        if (liga == null || liga == 'Liga Endesa') {
            show.push(4408)
        }
        for (i in show) {
            $.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=" + show[i], function (data) { //NBA Live Games
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
        }
    }
    else {
        Toast.fire({
            icon: 'error',
            title: 'Your plan does not include this sport!'
        })
    }
}

function football() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    $("#live_01 tbody tr").remove()
    var show = [];
    //DATA
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;

    //TEMPO
    var horas = new Date();
    var time = horas.getHours() + ":" + horas.getMinutes() + ":" + horas.getSeconds();

    //La Liga -> 4335 , Premier -> 4328, Liga Nos -> 4344
    if (desporto == null || desporto == 'Football') {
        if (liga == null || liga == 'Premier League') {
            show.push(4328)
        }
        if (liga == null || liga == 'La Liga') {
            show.push(4335)
        }
        if (liga == null || liga == 'Liga Nos') {
            show.push(4344)
        }
        for (i in show) {
            $.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=" + show[i], function (data) {
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
        }
    }
    else {
        Toast.fire({
            icon: 'error',
            title: 'Your plan does not include this sport!'
        })
    }
}

function ice() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    $("#live_01 tbody tr").remove()
    var show = [];
    //DATA
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;

    //TEMPO
    var horas = new Date();
    var time = horas.getHours() + ":" + horas.getMinutes() + ":" + horas.getSeconds();

    //NHL -> 4380 , UK -> 4381
    if (desporto == null || desporto == 'Ice Hockey') {
        if (liga == null || liga == 'NHL') {
            show.push(4380)
        }
        if (liga == null || liga == 'UK Elite League') {
            show.push(4381)
        }
        for (i in show) {
            $.getJSON("https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=" + show[i], function (data) { //PremierLeague Live Games
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
        }
    }
    else {
        Toast.fire({
            icon: 'error',
            title: 'Your plan does not include this sport!'
        })
    }
}

function back() {
    window.location = "main.html"
}

