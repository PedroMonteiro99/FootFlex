var id;

function back() {
    window.location = 'main.html'
}

window.onload = function () {
    document.getElementById('username').readOnly = true;
    var username = localStorage.getItem('username')
    var email = ''
    var plano = ''
    $.ajax({
        url: '/api/users', //Igual ao que está no app.js
        method: 'get',
        success: function (result, status) {
            for (i in result) {
                if (result[i].Username == username) {
                    id = result[i].idCliente
                    console.log(id)
                    console.log(localStorage.getItem('username'))
                }
            }
    },
        error: function () {
            console.log('Error');
        }
    })
    $.ajax({
        url: '/api/users/details', //Igual ao que está no app.js
        method: 'get',
        success: function (result, status) {
            var users = result;
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

function verificar(){
    $.ajax({
        url: '/api/authen/login', //Igual ao que está no app.js
        method: 'post',
        data:{
            Username:document.getElementById("username").value,
            Password:document.getElementById("oldpass").value,
        },
        success: function(result,status){
            alterar()
        },
        error: function(jqXHR,textStatus,errorThrown ){
            Swal.fire({
                title: 'Oops...',
                text: 'Your Username or Password is incorrect!',
            })
            console.log(errorThrown);
        }
    })
}

function alterar(){
    $.ajax({
        url: '/api/users/updateClient', //Igual ao que está no app.js
        method: 'put',
        data: {
            Email:document.getElementById("email").value,
            Password:document.getElementById("newpass").value,
            Id: id,
        },
        success: function (result, status) {
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
            Toast.fire({
                icon: 'success',
                title: 'You successfully updated your user details!'
            })
            console.log('Updated User Details')
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log('Error')
        }
    })
}