let Game = function (canvas, window) {
    this.setCanvas(canvas);
    this.setBackGroundColor();
    this.setWindow(window);
    this.targets = [];
    this.time = 30;
    this.over = true;
    this.score = 0;
};

Game.prototype.createTarget = function () {
    if (this.targets.length < 18) {
        let target = new Target(this);
        this.targets.push(target);
    }
};

Game.prototype.showTarget = function () {
    if (!this.status()) {
        for (let i = 0; i < this.targets.length; i++) {
            this.targets[i].move();
            this.targets[i].draw();
        }
    }
};

Game.prototype.setCanvas = function (canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.txtScore = document.querySelector("#current-score>span");
    this.txtTime = document.querySelector("#count-down>span");
    this.uiMenu = document.getElementById("menu");
    this.txtEndScore = document.getElementById("end-score");
};

Game.prototype.setBackGroundColor = function () {
    this.backgroundColor = Random.color();
    this.canvas.style.backgroundColor = this.backgroundColor;
};

Game.prototype.setWindow = function (window) {
    this.window = window;
    this.setWidth(this.window.innerWidth - 180);
    this.setHeight(this.window.innerHeight - 50);
};

Game.prototype.setWidth = function (width) {
    this.width = width;
    this.canvas.width = this.width;
};

Game.prototype.setHeight = function (height) {
    this.height = height;
    this.canvas.height = this.height;
};

Game.prototype.clear = function () {
    this.context.clearRect(0, 0, game.width, game.height);
};

Game.prototype.check = function (target, event) {
    let leftTarget = target.x - target.size;
    let rightTarget = target.x + target.size;
    let topTarget = target.y - target.size;
    let botTarget = target.y + target.size;
    let positionX = event.clientX;
    let positionY = event.clientY;
    let horizontalConditions = positionX >= leftTarget && positionX <= rightTarget;
    let verticalConditions = positionY >= topTarget && positionY <= botTarget;

    if (horizontalConditions && verticalConditions) {
        return true;
    }
};

Game.prototype.click = function () {
    if (!this.Over) return;
    let self = this;
    self.canvas.onmousedown = function (event) {
        for (let target = 0; target < self.targets.length; target++) {
            if (self.check(self.targets[target], event)) {
                self.plusScore(self.targets[target].score);
                self.targets.splice(target, 1);
                target--;
            }
        }
    };
};

Game.prototype.showScore = function () {
    this.txtScore.innerHTML = this.getScore();
};

Game.prototype.plusScore = function (scores) {
    this.score += scores;
};


Game.prototype.getScore = function () {
    return this.score;
};

Game.prototype.Over = function () {
    this.uiMenu.style.display = "block";
    this.txtEndScore.innerHTML = this.txtScore.innerText;
};

Game.prototype.status = function () {
    if (this.time <= 0) {
        return this.over;
    }
};

Game.prototype.getTime = function () {
    return this.time;
};

Game.prototype.countDown = function () {
    if (this.time > 0) {
        this.time--;
    }
};

Game.prototype.replay = function () {
    location.reload();
};