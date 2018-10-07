var persistence = require("../../src/persist_in_sqlite.js").persistence;
var sqlCreateTblExamesTable = require("../../src/sqlUtils_CreateTableInstruction.js").sqlCreateTblExamesTable;

const sqlite3 = require('sqlite3').verbose();

const { assert } = intern.getPlugin('chai');
const { registerSuite } = intern.getPlugin('interface.object');


registerSuite('Persistence.js',()=>{

    let db4EachTestCase = null;  //each test will run in a brand new memory database
    
    return {
        
        beforeEach() {            
            //each test will run in a brand new memory database
            db4EachTestCase = new sqlite3.Database(":memory:", (err) => {
                if (err) {
                    return console.error(err.message);
                }
            });
            //we will not do persistence.setDb(db4EachTestCase) just now
            //because each testCase will wants to create some table before use test database
            //so each testcase will do persistence.setDb(db4TestCase) after create its tables for test            
        },
        
        afterEach() {
            //after each test the database will not exist anymore
            //the database will be recreated en beforEach
            //db4EachTestCase.close();
            persistence.setDb(null);
        },

        
        tests: {
            
            'persisting obj exame in tbl_exames'() {
                
                //this object will be persisted
                var obj = {
                    eletroforese_de_hemoglobina:"on",//must considered true or 1
                    eletroforese_de_proteina:"on",//idem
                    Outros:"", //it shoud be considered means false
                    outroHormonio:"" //false too
                }
                
                //create table tbl_exames and check if it was created indeed                 
                let tblNamesPromise = new Promise((resolve,error)=>{
                    db4EachTestCase.run(sqlCreateTblExamesTable);
                    db4EachTestCase.get("select name from sqlite_master where type='table'", function (err, table) {
                        resolve(table);
                    });
                });
                const onResolve_TblNamesPromise = (tablenames) => {
                    //assert.equal(arrOfTableNames.length,1);
                    assert.isNotNull(tablenames);
                    assert.equal(tablenames.name,"tbl_exames");

                    //once we have a db, and the table
                    //lets make persistence aware of this
                    //and test persistence.persist method
                    persistence.setDb(db4EachTestCase);                
                    assert.isNotNull(persistence.getDb());
                    persistence.persist(obj,"tbl_exames");
                                        
                    let selectPromise = persistence.select("select * from tbl_exames");
                    selectPromise.then(
                        (arrResult)=>{
                            console.log(arrResult);
                            console.log(arrResult);
                            console.log(arrResult);
                            assert.equal(arrResult.length,1);
                        },
                        (err)=>{
                            throw new Error(err);
                        }); 
                }
                const onRejected_TblNamesPromise = (error) => console.log(error);
                tblNamesPromise.then(
                    onResolve_TblNamesPromise,
                    onRejected_TblNamesPromise);
                
            },

            'testing select funcionality'(){

            }
        }    
    }
});
