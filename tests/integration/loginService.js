var persistence = require("../../src/server/persist_in_sqlite.js").persistence;
var loginService = require("../../src/server/services/loginService.js").loginService;
var persistenceTestSupport = require("../support/persistence_support.js").persistenceTestSupport;

const { assert } = intern.getPlugin('chai');
const { registerSuite } = intern.getPlugin('interface.object');

registerSuite('loginService.js',()=>{

    return {

        beforeEach() {
            //loginServicex            
//            let db4Test = persistenceTestSupport.createDatabase();
//            persistence.setDb(db4Test);
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

            //persistence.setDb(null);
        },

        tests: {        
//            'test login with valid admin credentials'() {
//                console.log("--------------------------------------------------------------------------------------------");
//                let loggedUser = loginService.login("admin","admin123");
//                assert
//            }
        }//tests: {
    }//return {
});






