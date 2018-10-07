var sqlUtils = require("../../src/sqlUtils.js").sqlUtils;

const { assert } = intern.getPlugin('chai');
const { registerSuite } = intern.getPlugin('interface.object');

registerSuite('SqlUtils.js', {

    'write sql insert statement from object instance with only boolean fields'() {

        //sqlUtils writeInsertSqlFromObject(obj,tableName) retorna uma sql de insert para um objeto
        //ela deve retornar 1 quando o valor nao for null, undefined ou "" isso porque o sqlite usa 1 pra true e 0 pra false        
        var obj = {
            eletroforese_de_hemoglobina:"on",//must considered true or 1
            eletroforese_de_proteina:"on",//idem
            Outros:"", //it shoud be considered means false
            outroHormonio:"" //false too
        }

        var tableName = "tbl_exames"; //vc que sabe o noma da tabela que vc tem la pra salvar esse objeto. A fc recebe tableName
        var sqlInsertExpectec = "INSERT INTO tbl_exames (eletroforese_de_hemoglobina , eletroforese_de_proteina) VALUES (1 , 1)";
        var sqlInsertGenerated = sqlUtils.writeInsertSql_FromObjectWithBooleanAttributes_Using01Values(obj,tableName);

        assert.equal(sqlInsertGenerated,sqlInsertExpectec);
    }
});
