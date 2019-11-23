var mysql = require('./connection').pool;

module.exports.getAll = function (callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("Select * from Cliente", function (err, rows) {
            conn.release();
            callback(rows);
        })
    })
}

module.exports.login = function (obj,callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("Select Username,Password from Cliente where Username=? and Password=?",[obj.Username,obj.Password],function (err, rows) {
            console.log(rows);
            console.log(obj);
            conn.release();
            if (!rows.length === 0)
                callback({code: 200, status: "ok"},rows);
            else
                callback({code: 401, status: "User or password incorrects"},null);
        })
    })
}

module.exports.register = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err); }
        else conn.query('INSERT INTO Cliente(Username, Email,Password,Pacote_idPacote) VALUES (?,?,?,?)',[obj.name ,obj.email,obj.password,obj.idpacote], function (err, rows) {
                conn.release();
                callback(rows);
            })
    })
}