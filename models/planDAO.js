var mysql = require('./connection').pool;

module.exports.pacote = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query('INSERT INTO Cliente_has_Pacote(Cliente_idCliente, Pacote_idPacote, Liga, Desporto) VALUES (?,?,?,?)', [obj.Id, obj.Pacote, obj.Liga, obj.Desporto], function (err, rows) {
            conn.release();
            callback(rows);
            if (!(rows.length === 0)) {
                callback({ code: 200, status: "Ok" }, rows);
            }
            else {
                callback({ code: 500, status: "Could not complete action" }, null);
            }
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
            if (!(rows.length === 0)) {
                callback({ code: 200, status: "Ok" }, rows);
            }
            else {
                callback({ code: 500, status: "Failed to update" }, null);
            }
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