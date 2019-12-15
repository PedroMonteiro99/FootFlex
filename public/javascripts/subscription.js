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

function registar(){
    $.ajax({
        url: '/api/users/register', //Igual ao que está no app.js
        method: 'post',
        data:{
            Username:document.getElementById("name").value,
            Email:document.getElementById("email").value,
            Password:document.getElementById("pass").value,
        },
        success: function(result,status){
            console.log('Success')
            localStorage.setItem("Username",document.getElementById("name").value);
            window.location = "register.html";
        },
        error: function(jqXHR,textStatus,errorThrown ){
            console.log(errorThrown);
        }
    })

}