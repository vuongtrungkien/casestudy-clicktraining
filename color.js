const Color = function (r, g, b, a) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
};

Color.prototype.toString = function () {
    return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.a + ")";
};
