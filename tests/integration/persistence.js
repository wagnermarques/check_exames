var persistence = require("../../src/persist_in_sqlite.js").persistence;

//This sql statements is needed for persistence.createDatabase function
var sqlCreateTblExamesTable = require("../../src/sqlUtils_CreateTableInstruction.js").sqlCreateTblExamesTable;
//var sqlCreateTblUsers = require("./sqlUtils_CreateTableInstruction.js").sqlCreateTblUsers;


const sqlite3 = require('sqlite3').verbose();

const { assert } = intern.getPlugin('chai');
const { registerSuite } = intern.getPlugin('interface.object');


registerSuite('Persistence.js',()=>{

    let db4EachTestCase = null;  //each test must run in a brand new memory database
    
    return {
        
        beforeEach() {
            console.log("###[tests/integration/persistence.js] beforeEach() {...");
            //each test will run in a brand new memory database
            db4EachTestCase = new sqlite3.Database(":memory:", (err) => {
                if (err) {
                    return console.error(err.message);
                }
            });            
        },
        
        afterEach() {
            //after each test the database should not exist anymore
            //the database will be recreated en beforEach
            //Despite of this... I found in https://sqlite.org/inmemorydb.html
            //When this is done, no disk file is opened. Instead, a new database is created purely in memory. The database ceases to exist as soon as the database connection is closed. Every :memory: database is distinct from every other. So, opening two database connections each with the filename ":memory:" will create two independent in-memory databases.
            //Close the database connection after each test is needed to free memory

            //the tests are getting { Error: SQLITE_MISUSE: Database is closed
            //so was decided to lets its of them close connection
            //db4EachTestCase.close();            
            persistence.setDb(null);
        },

        
        tests: {
            
            'persisting obj exame in tbl_exames'() {
                console.log("###[tests/integration/persistence.js] tests: {... 'persisting obj exame in tbl_exames'() {..");
                const dfd = this.async();
                //this object will be persisted
                var obj = {
                    eletroforese_de_hemoglobina:"on",//must considered true or 1
                    eletroforese_de_proteina:"on",//idem
                    Outros:"", //it shoud be considered meaning false
                    outroHormonio:"" //false too
                }


                db4EachTestCase.serialize(function() {
                    console.log("###[tests/integration/persistence.js] db4EachTestCase.serialize(function() {...");
                    db4EachTestCase.run(sqlCreateTblExamesTable);

                    //db4EachTestCase.run(sqlCreateTblUsers);
                    //insert admin user
                    //this.persist({""});                        
                    persistence.setDb(db4EachTestCase);                    
                    persistence.persist(obj,"tbl_exames");
                    
                    persistence.select("select * from tbl_exames").then(
                        dfd.callback((result,err)=>{
                            console.log("###[tests/integration/persistence.js] persistence.select (result)=>{...");
                            //test if result[0] contains the key value perisisted
                            //using result[0] because there are just one record
                            //retuned as a array, so, get just the first is sufficient
                            assert.include(result[0],{"eletroforese_de_hemoglobina":1});
                            assert.include(result[0],{"eletroforese_de_proteina":1});
                        })
                    );
                });//db4EachTestCase.serialize(function() {                    
            },
            
            'testing select funcionality'(){
                
            }
        },//tests: {    
    }//return {
});//registerSuite('Persistence.js',()=>{
