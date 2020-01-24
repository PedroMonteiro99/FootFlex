var mysql = require('./connection').pool;

module.exports.getClientes = function (callback, next) { //Alterar
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT idCliente,Username FROM Cliente", function (err, rows) {
            conn.release();
            if (!(rows.length === 0)) {
                callback(rows,{ code: 200, status: "Ok" });
            }
            else {
                callback({ code: 404, status: "User not found" }, null);
            }
        })
    })
}

module.exports.getUserDetails = function (callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT Username, Email,Nome from Cliente,Cliente_has_Pacote,Pacote where Pacote_idPacote = idPacote and Cliente_idCliente = idCliente", function (err, rows) {
            conn.release();
            if (!(rows.length === 0)) {
                callback(rows,{ code: 200, status: "Ok" });
            }
            else {
                callback({ code: 404, status: "User not found" }, null);
            }
        })
    })
}

module.exports.updateUserDetails = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query('UPDATE Cliente SET Email=?,Password=? WHERE Cliente.idCliente=?', [obj.Email,obj.Password, obj.Id], function (err, rows) {
            conn.release();
            if (!(rows.length === 0)) {
                callback(rows,{ code: 200, status: "Ok" });
            }
            else {
                callback({ code: 500, status: "Unable to update user details" }, null);
            }
        })
    })
}