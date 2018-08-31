//http://www.sqlitetutorial.net/sqlite-nodejs/connect/
//https://www.sqlite.org/cli.html

const sqlite3 = require('sqlite3').verbose();
let dbFile = "db_data.db";
debugger
let conn = new sqlite3.Database(dbFile, (err) => {
  if (err) {
    return console.error(err.message);
  }
    console.log('sqlite3 Connection was sucefull .');
    
});

console.log('funcionou1');
conn.serialize(function() {
conn.run("CREATE TABLE user (id INT, dt TEXT)");
console.log('funcionou2');

var stmt = conn.prepare("INSERT INTO user VALUES (?,?)");
  for (var i = 0; i < 10; i++) {
  
  var d = new Date();
  var n = d.toLocaleTimeString();
  stmt.run(i, n);
  }
  stmt.finalize();

  conn.each("SELECT id, dt FROM user", function(err, row) {
      console.log("User id : "+row.id, row.dt);
  });
});

module.export = persistence_interface = {

    
    
    close_connection : function(){
       conn.close();
    },
    
    persist : function(object){
        console.log(" persist : function(object){...");
    }


}
