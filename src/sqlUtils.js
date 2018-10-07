exports.sqlUtils = {

    
    
    writeInsertSql_FromObjectWithBooleanAttributes_Using01Values : function(obj,tableName){
        //this function generate sql insert instruction from object
        //but its for object with boolean attributes only
        //in sql generated the true attributes have 1 value in sql VALUES
        
        //in this function we are interest just with attributes with true values
        //other attributes will discarted because will be NULL in table
        //the not null clause must not be setted to this works

        //lets get object only with attribute with true value
        let objWithTrueAttribuites = {};
        Object.keys(obj).forEach((key)=>{
            if(obj[key])
                objWithTrueAttribuites[key] = obj[key];
        });

        //now, we will create sqlInsert instruction
        //with this objWithTrueAttributes
        var i=1;
        let sqlInsert = "INSERT INTO "+tableName+" (";
        let values = "(";
        
        Object.keys(objWithTrueAttribuites).forEach((key)=>{
            if(obj[key]){//se key nao tiver valor, essa coluna nao entra no insert
                let column = key;
                let colValue = 1;
                let numAttr = Object.keys(objWithTrueAttribuites).length;
                
                if(i == numAttr){
                    // the last one table field has no comma e lets set VALUES...                    
                    sqlInsert += column+") VALUES ";
                    values +=colValue+")";                
                }else{
                    //enquando nao he a ultima coluna, colocamos virgula pra concatenar
                    //nome das colunas e values
                    sqlInsert +=column + " , ";
                    values +=colValue + " , ";
                }
                i++
            }
        });
        return sqlInsert + values; 
    }
}
