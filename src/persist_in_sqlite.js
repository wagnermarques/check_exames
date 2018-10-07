var sqlUtils = require("./sqlUtils.js").sqlUtils;
var sqlCreateTblExamesTable = require("./sqlUtils_CreateTableInstruction.js").sqlCreateTblExamesTable;

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
        console.log("sqlCreateTblExamesTable");
        console.log(sqlCreateTblExamesTable);
        
        dbCreated.run(sqlCreateTblExamesTable);
        this.setDb(dbCreated);
    },
        
    close_connection : function(){        
        db.close();        
    },
    
    persist : function(obj,tableName){
        let insertSql = sqlUtils.writeInsertSql_FromObjectWithBooleanAttributes_Using01Values(obj,tableName);
        console.log(insertSql);
        this._db.run(insertSql);
    },

    select : function(sqlSelect){
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
    }
}
