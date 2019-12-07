function entrar() {
    var username = document.getElementById("nome").value
    var password = document.getElementById("palavra").value
    if (username == "Pedro" && password == "Pedro99") {
        alert('You sucessfuly logged in!')
        window.location = "main.html"
    }
    else {
        Swal.fire({
            title: 'Oops...',
            text: 'Your Username or Password is incorrect!',
        })
    }
}

function registar() {
    var username = document.getElementById("name").value
    var password = document.getElementById("pass").value
    var email = document.getElementById("email").value
    if (!(username == "" || password == "" || email == "")) {
        alert("You will be redirected to another page to insert account payment details!")
        window.location = "register.html"
    }
    else {
        Swal.fire({
            title: 'Oops...',
            text: 'Values are empty please insert your data!',
        })
    }
}

function sub() {
    var password = document.getElementById("pass").value
    var numero = document.getElementById("iban").value
    var selecionar = document.getElementById("select").value
    if (!(password == "" || numero == "" || selecionar == "")) {
        alert("You created an account! Welcome to FootFlex.")
        window.location = "main.html"
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Values are empty please insert your data!',
        })
    }
}

function getinfo() {
    var x = document.getElementById("select").value;
    var y = document.getElementById("change");
    if (x == "Sports") {
        var select = document.getElementById("change");
        var i;
        for (i = select.options.length - 1; i >= 0; i--) {
            select.remove(i);
        }
        var option = document.createElement("option");
        option.text = "Football";
        y.add(option);
        var option = document.createElement("option");
        option.text = "Ice Hockey";
        y.add(option);
        var option = document.createElement("option");
        option.text = "Basket";
        y.add(option);
    }
    else if (x == "League") {
        var select = document.getElementById("change");
        var i;
        for (i = select.options.length - 1; i >= 0; i--) {
            select.remove(i);
        }
        var option = document.createElement("option");
        option.text = "Football - Liga Nos";
        y.add(option);
        var option = document.createElement("option");
        option.text = "Football - Premier League";
        y.add(option);
        var option = document.createElement("option");
        option.text = "Football - La Liga";
        y.add(option);
        var option = document.createElement("option");
        option.text = "Ice Hockey - NHL";
        y.add(option);
        var option = document.createElement("option");
        option.text = "Ice Hockey - UK Elite League ";
        y.add(option);
        var option = document.createElement("option");
        option.text = "Basket - NBA";
        y.add(option);
        var option = document.createElement("option");
        option.text = "Basket - Chinese League";
        y.add(option);
        var option = document.createElement("option");
        option.text = "Basket - Liga Endesa";
        y.add(option);
    }
    else if (x == "All in One") {
        var select = document.getElementById("change");
        var i;
        for (i = select.options.length - 1; i >= 0; i--) {
            select.remove(i);
        }
    }
}
