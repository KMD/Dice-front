document.addEventListener("DOMContentLoaded", function () {

    var scoreList = document.getElementById("scores-list");

    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
    xmlhttp.open("GET", "http://127.0.0.1:3000/scores");
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            
            var list = JSON.parse(xmlhttp.responseText);
            var keys = Object.keys(list)
            for (var i = 0 ; i < keys.length ; i++){
                var li = document.createElement("li");
                li.innerText = keys[i] + ": " + list[keys[i]];
                scoreList.appendChild(li);    
            }
        }
    }
    xmlhttp.send();
    
});
