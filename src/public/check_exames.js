//let cols = [];
//let colModel = [];
$( document ).ready(function() {
    $.ajax({
        url:"/select_all_exames",                 
        success: function(result){
            result.forEach((item)=>{
                Object.keys(item).forEach((key)=>{
                    //document.getElementById("divListaDeExames").innerHTML +="<p style='background-color:yellow'>"+ key +" = "+item[key]+"</p>";
                    cols.push(key);
                    let model = {
                        name:key,index:'id', width: "50%", sorttype:"int"
                    }
                    colModel.push(model);
                });        
            });//result.forEach((item)=>{
            console.log(result);
            jQuery("#grid").jqGrid({ 
                datatype: "local",
                height: 250,
                colNames:cols,
                colModel: colModel
            });
            for(var i=0;i<=result.length;i++)
                jQuery("#grid").jqGrid('addRowData',i+1,result[i]);
        }//success: function(result){
    });
    console.log(cols);
});


//jQuery("#jsonmap").jqGrid('navGrid','#pjmap',{edit:false,add:false,del:false});
//;$( document ).ready(function() {
//    $.ajax({
//        url:"http://localhost:3000/select_all_exames",                 
//        success: function(result){
//            result.forEach((item)=>{
//                document.getElementById("report-div").innerHTML += "<h2>"+item.nome+"</h2>";
//                Object.keys(item).forEach((key)=>{
//                    if(item[key]){
//                        if(key != "id" && key != "nome"){
//                            document.getElementById("report-div").innerHTML += "<p>"+key+"<p>";
//                        }
//                    }
//                });        
//            });//result.forEach((item)=>{
//        }//success: function(result){
//    });
//});
