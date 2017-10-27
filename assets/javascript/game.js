$(document).ready(function () {
    var userKey = '';
    var userLives = 9;
    var userScore = 0;
    var randomKey = '';
    var guesses = "";
    var charset = "abcdefghijklmnopqrstuvwxyz";

    //first generation of random character
    randomKey = charset.charAt(Math.floor(Math.random() * charset.length));
    document.onkeyup = function (event) {

        if (event.key == randomKey) {
            alert("You guessed it!");
            userScore++;
        }
        if (event.key != randomKey) {
            guesses += event.key;
            userLives--;
        }
        if (userLives < 1) {
            alert("game over");
        }

        $("#player-score").html(userScore);
        console.log(userScore);
        $("#lives-left").html(userLives);
        console.log(userLives);
        $("#guesses-made").html(guesses);
        console.log(guesses);
    }
}
);