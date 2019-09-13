function saveScore(scoreAchieved) {
    let namePlayer = prompt("Enter you name ?   ");
    let d = new Date();
    d.setTime(d.getTime() + (300 * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = namePlayer + " =  " + scoreAchieved + ";" + expires + ";path=/";
}

function addDataScore() {
    let scores = document.cookie.split(";");
    let dataScore = [];
    let array = scores;
    for (let j = 0; j < array.length; j++) {
        let str = array[j].toString();
        dataScore.push(str.split("="));
    }
    return dataScore;
}

function rank() {
    let data = addDataScore();
    for (let i = 1; i < data.length; i++) {
        for (let j = 1; j < data[i].length; j++) {
            if (data[i][j] > data[i - 1][j]) {
                let temp = data[i - 1];
                data[i - 1] = data[i];
                data[i] = temp;
                i = 0;
            }
        }
    }
    return data;
}

function displayRankScore() {
    let dataScore = rank();
    let html = "";
    for (let i = 0; i < dataScore.length; i++) {
        if (i === 10) {
            break;
        } else {
            html += '<li>';
            for (let j = 0; j < dataScore[i].length; j++) {
                html += dataScore[i][j] + "   ";
            }
            html += '</li>';
        }
    }
    return html;
}

