var mysql = require('./connection').pool;

module.exports.getClientes = function (callback, next) { //Alterar
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT idCliente,Username FROM Cliente", function (err, rows) {
            conn.release();
            callback(rows);
        })
    })
}

module.exports.login = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("Select Username,Password from Cliente where Username=? and Password=?", [obj.Username, obj.Password], function (err, rows) {
            console.log(rows);
            console.log(obj);
            conn.release();
            if (!(rows.length === 0)) {
                callback({ code: 200, status: "Ok" }, rows);
            }
            else {
                callback({ code: 401, status: "User or password incorrects" }, null);
            }
        })
    })
}

module.exports.register = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query('INSERT INTO Cliente(Username, Email,Password) VALUES (?,?,?)', [obj.Username, obj.Email, obj.Password], function (err, rows) {
            conn.release();
            callback(rows);
        })
    })
}

module.exports.pacote = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query('INSERT INTO Cliente_has_Pacote(Cliente_idCliente, Pacote_idPacote, Liga, Desporto) VALUES (?,?,?,?)', [obj.Id, obj.Pacote, obj.Liga, obj.Desporto], function (err, rows) {
            conn.release();
            callback(rows);
        })
    })
}

module.exports.updateCredit = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query('UPDATE Cliente SET DebitCard=? WHERE Cliente.idCliente=?', [obj.Card, obj.Id], function (err, rows) {
            conn.release();
            callback(rows);
        })
    })
}

module.exports.checkValues = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query('SELECT Username,Password FROM Cliente where Username=? and Password=?', [obj.Username, obj.Password], function (err, rows) {
            console.log(rows);
            console.log(obj);
            conn.release();
            if (!(rows.length === 0)) {
                callback({ code: 200, status: "Ok" }, rows);
            }
            else {
                callback({ code: 401, status: "Password does not match" }, null);
            }
        })
    })
}

module.exports.authentication = function (callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT Username,Nome,Liga,Desporto FROM Cliente,Cliente_has_Pacote,Pacote where Cliente_idCliente = idCliente and Pacote_idPacote = idPacote", function (err, rows) {
            conn.release();
            callback(rows);
        })
    })
}

module.exports.getUserDetails = function (callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT Username, Email,Nome from Cliente,Cliente_has_Pacote,Pacote where Pacote_idPacote = idPacote", function (err, rows) {
            conn.release();
            callback(rows);
        })
    })
}
