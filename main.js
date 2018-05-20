var button = document.getElementById("interactive-button");
button.addEventListener("click", function(){ alert("Wow") } , false);
$(document).ready(function(){
    $("#interactive-button").on("click", function(){
        alert("Wow");
    });
});