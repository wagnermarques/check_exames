var sqlUtils = require("./sqlUtils.js").sqlUtils;
var sqlCreateTblExamesTable = require("./sqlUtils_CreateTableInstruction.js").sqlCreateTblExamesTable;
var sqlCreateTblUsers = require("./sqlUtils_CreateTableInstruction.js").sqlCreateTblUsers;

const sqlite3 = require('sqlite3').verbose();

exports.persistence = {    

    getDb : function(){
        return this._db;
    },
    
    setDb : function(sqlite3DbToOperateOn){
        //if you wants persistence to acture on another db
        //create your db outside this module and pass it to this function
        //this function was create in order to test this module
        //the tests will actuate in test database
        //in test suite each testcase actue on a its own database
        this._db = sqlite3DbToOperateOn;
    },
    
    createDatabase : function(){        
        let dbFile = "db_data.db";        
        let dbCreated = new sqlite3.Database(dbFile, (err) => {
            if (err) {
                return console.error(err.message);
            }
        });
        //console.log("sqlCreateTblExamesTable");
        //console.log(sqlCreateTblExamesTable);
        
        dbCreated.run(sqlCreateTblExamesTable);
        dbCreated.run(sqlCreateTblUsers);
        //insert admin user
        //this.persist({""});
        
        this.setDb(dbCreated);
    },
        
    close_connection : function(){        
        db.close();        
    },
    
    persist : function(obj,tableName){
        console.log("###[src/persist_in_sqlite.js] persist : function(obj,tableName){...");
        let insertSql = sqlUtils.writeInsertSql_FromObjectWithBooleanAttributes_Using01Values(obj,tableName);
        //console.log(insertSql);
        try {
            this._db.run(insertSql);
        } catch(err) {
            console.log(err.message);
        }
    },

    select : function(sqlSelect){
        console.log("###[src/persist_in_sqlite.js] >>> select : function(sqlSelect){...");
        return new Promise((resolve,reject)=>{
            let arrResult = [];
            this._db.all(sqlSelect, function(err, rows) {
                if(err){
                    reject(err);
                }else{
                    resolve(rows);
                }
            });
        });
    },
    runInsertWithSql : function(insertSqlStatement){
        return new Promise((resolve,reject)=>{
            let result = false;
            try{
                this._db.run(insertSqlStatement);
            }catch(err){
                console.log(err.message);
            }            
        });
    }
}
