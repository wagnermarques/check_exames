var webapp = require("./server.js").webapp;;
var persistence = require("./persist_in_sqlite.js").persistence;

//cria banco de dados
//caso o banco ja exista, nao faz nada
persistence.createDatabase();

webapp.post('/exames_form', function(req, res){
    persistence.persist(req.body,"tbl_exames");
    res.status(200);
    res.redirect("/view_listar");
});

webapp.get('/select_all_exames', function(req, res){
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
