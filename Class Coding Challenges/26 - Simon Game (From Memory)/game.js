var buttonColors = ["green", "red", "yellow", "blue"];
var userClickedPattern = [];
var gamePattern = [];
var gameStarted = false;
var level = 0;

$(document).on("keydown", function() {
    if (!gameStarted) {
        $("#level-title").text("Level " + level);
        gameStarted = true;
        processNextSequence();
    }
});

$(".btn").on("click", function() {
    $(this).push(userClickedPattern);
    playSound();
    animateButton();
    processNextSequence();
})

function processNextSequence() {
    level++
    $("#level-title").text("Level " + level);
    var zeroToThreeRandomNumber = Math.floor(Math.random * 4);
    var randomChosenColor = buttonColors[zeroToThreeRandomNumber];
    gamePattern.push(randomChosenColor);
    checkAnswer();

}

function checkAnswer(currentAnswer) {
    if (gamePattern.length === userClickedPattern.length) {
        if (gamePattern[-1] === userClickedPattern[-1]) {
            console.log("Good Job!");
            setTimeout(() => {
                processNextSequence();
            }, 100);
        }
    }
}

function playSound(name) {
    var buttonAudio = new Audio("sounds/" + name + ".mp3");
    buttonAudio.play();
}

function animateButton() {
    $(".btn").on("click", function() {
        $(this).addClass("pressed").setTimeout(() => {
            removeClass("pressed");
        }, 100);
    })
}

function gameOverSequence() {

}

function resetTheGame() {
    gamePattern = [];
    level = 0;
    gameStarted = false;
    userClickedPattern = [];
}

