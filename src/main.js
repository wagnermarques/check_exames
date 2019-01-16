/*jslint es6:true*/
var path = require("path");
var webapp = require("./server/server.js").webapp;
var persistence = require("./server/persist_in_sqlite.js").persistence;

//cria banco de dados
//caso o banco ja exista, nao faz nada
persistence.createDatabase();

webapp.post('/process_exames_form', function (req, res) {
    'use strict';
    persistence.persist(req.body, "tbl_exames");
    res.status(200);
    res.redirect("/view_listar");
});

webapp.get('/index2', function (req, res) {
    'use strict';
    res.sendFile(path.resolve(__dirname + '/client/views/index2.html'));
});


webapp.get('/view_listar', function (req, res) {
    'use strict';
    res.sendFile(path.resolve(__dirname + '/client/views/listar.html'));
});

webapp.get('/select_all_exames', function (req, res) {
    'use strict';
    let sqlAll = "SELECT * FROM tbl_exames";
    persistence.select(sqlAll).then(
        (rows)=>{
            res.json(rows);
        },
        (err)=>{
            res.send(err);
        }
    );
});

webapp.get('/login', function (req, res) {
    let UserLoggedIn = {
        nome: "Usuario de Teste",
        permissoes:"a,b,c",
        status: "autenticado"
    }
    if (UserLoggedIn.status == "autenticado") {
        document.getElementById('login-div').style.display = "none";
        var nav = document.getElementById('nav');
        nav.innerHTML = "<p>Ol&aacute;, nome</p>";
    }
    res.status(200);
    res.send(UserLoggedIn);
});


