
alert("asdf");

$( document ).ready(function() {
    $("#btnLogin").click(login);
});

function login(){
    alert(urlHostname);
    $.ajax({
        url:urlHostname+"/login",
        success: function(result){
            alert(result);
        }
    });
}

