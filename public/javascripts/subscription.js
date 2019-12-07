var users;
window.onload = function(){
    $.ajax({
        url: '/api/users', //Igual ao que está no app.js
        method: 'get',
        success: function(result,status){
            users= result;
            console.log(users);
        },
        error: function(){
            console.log('Error');
        }
    })
}

function entrar(){
    $.ajax({
        url: '/api/users/login', //Igual ao que está no app.js
        method: 'post',
        data:{
            Username:document.getElementById("nome").value,
            Password:document.getElementById("palavra").value,
        },
        success: function(result,status){
            alert('You sucessfuly logged in!')
            localStorage.setItem("username",document.getElementById("nome").value) ;
            window.location = "main.html";
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