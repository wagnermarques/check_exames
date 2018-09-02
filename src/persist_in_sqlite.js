//http://www.sqlitetutorial.net/sqlite-nodejs/connect/
//https://www.sqlite.org/cli.html

const sqlite3 = require('sqlite3').verbose();

let dbFile = "db_data.db";

let conn = new sqlite3.Database(dbFile, (err) => {
  if (err) {
    return console.error(err.message);
  }
    console.log('sqlite3 Connection was sucefull .');
    
});


let TableName="tbl_exames";

let sqlCreateTableExame = "CREATE TABLE "+TableName+
    "("+
       "id integer PRIMARY KEY AUTOINCREMENT, "+
       "nome varchar(100),"+
       "nome_exame TEXT "+
    ")";


exports.persistence = {    
    
    generateDatabase : function(){
        conn.run(sqlCreateTableExame);
    },
        
    close_connection : function(){
       conn.close();
    },
    
    persist : function(p1,p2){
        console.log(" persist : function("+p1+","+p2+"){...");
        var stmt = conn.prepare("INSERT INTO "+TableName+" VALUES ("+p1+","+p2+")");
        stmt.run(p1, p2);
        stmt.finalize();
    },

    select : function(sqlSelect){
        conn.each(sqlSelect, function(err, row) {
            console.log("Exame id : "+row.id, row.nome,row.nome_exame);
        });
    }
}


