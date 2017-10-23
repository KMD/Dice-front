document.addEventListener("DOMContentLoaded", function () {

    var sendScore = function(name){
        var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
        xmlhttp.open("POST", "http://127.0.0.1:3000/scores");
        xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xmlhttp.send(JSON.stringify({ name: name})); 
    }

    let playButton = document.getElementById("play");
    playButton.addEventListener('click', function(){
        let firstPlayer = Math.floor(Math.random() * 6) + 1 ;
        let secondPlayer = Math.floor(Math.random() * 6) + 1 ;
        let firstDice = document.getElementById("first-player");
        let secondDice = document.getElementById("second-player");
        firstDice.setAttribute("src", "img/" + firstPlayer + "_dice.png")
        secondDice.setAttribute("src", "img/" + secondPlayer + "_dice.png")
        let result = document.getElementById("result");
        let firstPlayerName = document.getElementById("first-player-name").value
        let secondPlayerName = document.getElementById("second-player-name").value
        if (firstPlayer > secondPlayer){
            result.innerText = firstPlayerName
            sendScore(firstPlayerName);
        }
        if (firstPlayer < secondPlayer){
            result.innerText = secondPlayerName
            sendScore(secondPlayerName);
        }
        if (firstPlayer == secondPlayer){
            result.innerText = "Remis"
        }
    })
    
});

