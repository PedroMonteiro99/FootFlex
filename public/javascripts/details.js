function back() {
    window.location = 'main.html'
}

window.onload = function () {
    var email = ''
    var plano = ''
    $.ajax({
        url: '/api/users/details', //Igual ao que está no app.js
        method: 'get',
        success: function (result, status) {
            users = result;
            var nome = localStorage.getItem("username")
            for (i in users) {
                if (users[i].Username == nome) {
                    email = users[i].Email;
                    plano = users[i].Nome;
                }
            }
            $('#username').val(nome)
            $('#email').val(email)
            var nav = document.getElementById('navUsername')
            var navPlan = document.getElementById('plan')
            nav.innerHTML = nome
            navPlan.innerHTML = plano

        },
        error: function () {
            console.log('Error');
        }
    })
}