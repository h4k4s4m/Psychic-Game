document.getElementById("reset").style.visibility = "hidden";
$(document).ready(function () {
    var userKey = '';
    var userLives = 9;
    var userScore = 0;
    var randomKey = '';
    var guesses = "";
    var charset = "abcdefghijklmnopqrstuvwxyz";

    //first generation of random character
    randomKey = charset.charAt(Math.floor(Math.random() * charset.length));
    console.log(randomKey);
    document.onkeyup = function (event) {

        if (event.key == randomKey) {
            alert("You guessed it! The correct letter was " + event.key);
            userScore++;
            document.getElementById("reset").style.visibility = "visible";
            userLives = 9;
            randomKey = charset.charAt(Math.floor(Math.random() * charset.length));
            console.log(randomKey);
        }
        if (event.key != randomKey) {
            guesses += event.key;
            userLives--;
        }
        if (userLives < 1) {
            document.getElementById("reset").style.visibility = "visible";
            alert("game over");
            randomKey = charset.charAt(Math.floor(Math.random() * charset.length));
            console.log(randomKey);
        }

        $("#player-score").html(userScore);
        $("#lives-left").html(userLives);
        $("#guesses-made").html(guesses);

    }
    $("#reset").click(function (event) {
        userLives = 9;
        userScore = 0;
        guesses = "";
        $("#player-score").html(userScore);
        $("#lives-left").html(userLives);
        $("#guesses-made").html(guesses);
        document.getElementById("reset").style.visibility = "hidden";
    })
});