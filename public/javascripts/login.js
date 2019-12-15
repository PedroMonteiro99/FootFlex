var id;
var text;
var first;
window.onload = function () {
    var username = localStorage.getItem('Username')
    $.ajax({
        url: '/api/users', //Igual ao que está no app.js
        method: 'get',
        success: function (result, status) {
            console.log(result)
            for (i in result) {
                if (result[i].Username == username) {
                    id = result[i].idCliente
                    console.log(id)
                }
            }
        },
        error: function () {
            console.log('Error');
        }
    })
}



function sub() {
    var username = localStorage.getItem('Username')
    var password = document.getElementById("pass").value
    var numero = document.getElementById("iban").value
    var selecionar = document.getElementById("select").value
    if (selecionar == 'All in One') {
        selecionar = 2
        text=undefined;
        first=undefined;
    }
    else if (selecionar == 'Sports') {
        selecionar = 3
        text=undefined;
        first=document.getElementById("change").value;
    }
    else {
        var someString = document.getElementById("change").value;
        var index = someString.indexOf("-");
        first = someString.substr(0, index);
        text = someString.substr(index + 1);
        selecionar = 1
    }
    $.ajax({
        url: '/api/users/check', //Igual ao que está no app.js
        method: 'post',
        data: {
            Username: username,
            Password: document.getElementById("pass").value,
        },
        success: function (result, status) {
            console.log('Password is equal!')
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert('Password does not match!')
        }
    })
    $.ajax({
        url: '/api/users/credit', //Igual ao que está no app.js
        method: 'put',
        data: {
            Card: numero,
            Id: id,
        },
        success: function (result, status) {
            console.log('Updated Credit Card Value')
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log('Error')
        }
    })
    $.ajax({
        url: '/api/users/pacote', //Igual ao que está no app.js
        method: 'post',
        data: {
            Id: id,
            Pacote: selecionar,
            Liga: text,
            Desporto: first,
        },
        success: function (result, status) {
            console.log('Updated Plan')
            console.log(id)
            console.log(selecionar)
            console.log(text)
            console.log(first)
            alert('You have successfully registered in FootFlex!')
            window.location = 'login.html'
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log('Error')
        }
    })

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
        option.text = "Basketball";
        y.add(option);
    }
    else if (x == "League") {
        var select = document.getElementById("change");
        var i;
        for (i = select.options.length - 1; i >= 0; i--) {
            select.remove(i);
        }
        var option = document.createElement("option");
        option.text = "Football-Liga Nos";
        y.add(option);
        var option = document.createElement("option");
        option.text = "Football-Premier League";
        y.add(option);
        var option = document.createElement("option");
        option.text = "Football-La Liga";
        y.add(option);
        var option = document.createElement("option");
        option.text = "Ice Hockey-NHL";
        y.add(option);
        var option = document.createElement("option");
        option.text = "Ice Hockey-UK Elite League ";
        y.add(option);
        var option = document.createElement("option");
        option.text = "Basket-NBA";
        y.add(option);
        var option = document.createElement("option");
        option.text = "Basket-Chinese League";
        y.add(option);
        var option = document.createElement("option");
        option.text = "Basket-Liga Endesa";
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
