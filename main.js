let targetBoard = document.getElementById("game");

let game = new Game(targetBoard, window);


function startGame() {
    document.getElementById("menu-start").style.display = "none";
    displayTarget();
    time();
    game.click();

}

function displayTarget() {
    game.clear();
    game.createTarget();
    game.showTarget();
    game.showScore();

    if (game.status()) {
        game.Over();
        saveScore(game.getScore());
    } else {
        requestAnimationFrame(displayTarget);
    }
}


function time() {
    game.countDown();
    game.txtTime.innerHTML = game.getTime();
    setTimeout(time, 1000);
}


window.addEventListener("resize", function (event) {
    game.setWindow(event.target)
});

document.getElementById("rank-score").innerHTML = displayRankScore();
