let Target = function (game) {
    this.game = game;
    this.x = Random.position(window.innerWidth - 200);
    this.y = 0;
    this.vX = Random.velocity(8);
    this.vY = Random.velocity(9);
    this.size = Random.radius(40);
    this.color = Random.color();
    this.areaScore();

};


Target.prototype.moveToward = function () {
    this.x += this.vX;
    this.y += this.vY;
};


Target.prototype.move = function () {
    this.moveToward();
    if (this.isOverHorizontal()) {
        this.reverseHorizonDirection();
    }
    if (this.isOverVertical()) {
        this.reverseVerticalDirection();
    }

};
Target.prototype.isOverHorizontal = function () {
    return this.x < 0 || this.x > this.game.width - this.size;
};

Target.prototype.isOverVertical = function () {
    return this.y < 0 || this.y > this.game.height - this.size;
};

Target.prototype.reverseHorizonDirection = function () {
    this.x = this.x - this.vX;
    this.vX = -this.vX;
};


Target.prototype.reverseVerticalDirection = function () {
    this.y = this.y - this.vY;
    this.vY = -this.vY;
};

Target.prototype.draw = function () {
    let context = this.game.canvas.getContext("2d");
    context.beginPath();
    context.fillStyle = this.color.toString();
    context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    context.fill();
    context.closePath();
};

Target.prototype.areaScore = function () {
    if (this.size <= 30) {
        this.score = 2;
    } else if (this.size < 20) {
        this.score = 3;
    } else {
        this.score = 1;
    }
};