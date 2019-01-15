var persistence = require("../../src/persist_in_sqlite.js").persistence;

exports.loginService = {

    login:function(login,passw){
        return this._loginInSqlite(login,passw);;
    },
    _loginInSqlite : function(login,passw){
        persistence.select("select * from tbl_users").then((result,err)=>{
            console.log(result);
        });
    }
}
