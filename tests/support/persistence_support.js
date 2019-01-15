var sqlCreateTblExamesTable = require("../../src/sqlUtils_CreateTableInstruction.js").sqlCreateTblExamesTable;
var sqlCreateTblUsers = require("../../src/sqlUtils_CreateTableInstruction.js").sqlCreateTblUsers;
const sqlite3 = require('sqlite3').verbose();

exports.persistenceTestSupport = {
    
    /*
      At app startup the src/persistence_in_sqlite createDatabse function
      is called. This function is to create the database for tests
    */
    createDatabase : function(){
        console.log("###[tests/integration/persistence_support.js] createDatabse : function(){...");
        let db4Test = new sqlite3.Database(":memory:", (err) => {
            if (err) {
                return console.error(err.message);
            }
        });
        db4Test.run(sqlCreateTblUsers);
        return db4Test;
    }
}

