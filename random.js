const Random = {

    number: function (from, to) {
        from = from || 0;
        to = to || 100;
        return Math.floor(Math.random() * (to - from)) + from;
    },

    color: function () {
        let r = Math.pow(2, Random.number(0, 9));
        let g = Math.pow(2, Random.number(0, 9));
        let b = Math.pow(2, Random.number(0, 9));
        let a = Random.number(4, 8) / 8;
        return new Color(r, g, b, a);
    },

    radius: function (max) {
        return Random.number(15, max);
    },

    velocity: function (max) {
        return Random.number(-max, +max);
    },

    position: function (bound, radius) {
        let pos;
        do {
            pos = Random.number(0, bound);
        } while (pos < radius || pos > bound - radius);
        return pos;
    },
};