
var urlHostname="";

if (window.location.hostname == "checkexames.herokuapp.com"){
    urlHostname = "https://checkexames.herokuapp.com";
}else{
    urlHostname = "http://localhost:5000"
}

$( document ).ready(function() {
    $.ajax({
        url:urlHostname+"/select_all_exames",                 
        success: function(result){
            result.forEach((item)=>{
                document.getElementById("report-div").innerHTML += "<h2>"+item.nome+"</h2>";
                Object.keys(item).forEach((key)=>{
                    if(item[key]){                        
                        if(key == "setor" ||  key == "prontuario" ||  key == "leito" || key == "idade" || key == "data" || key == "sexo"){
                            document.getElementById("report-div").innerHTML += "<p>"+ "<strong>"+key+"</strong>"+ ":" +item[key]+"<p>";
                            //console.log(item[key]);
                        }else if(key != "id" && key != "nome"){
                            document.getElementById("report-div").innerHTML += "<p>"+key+"<p>";
                        }
                    }
                });        
            });//result.forEach((item)=>{
        }//success: function(result){
    });
});
