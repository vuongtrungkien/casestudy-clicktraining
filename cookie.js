function saveScore(scoreAchieved) {
    let namePlayer = prompt("Enter you name ? ");
    let  d = new Date();
    d.setTime(d.getTime() + (300 * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = namePlayer + " =  " + scoreAchieved + ";" + expires + ";path=/";
}

function displayRankScore() {
    let rankScore = document.cookie.split(";");
    document.cookie.split("=");
    console.log(document.cookie);
    let html = "";
    let array = rankScore;
    for (let i = 0; i < array.length; i++) {
        html += '<li>';
        html += array[i];
        html += '</li>';
    }
    return html;

}

document.getElementById("rank-score").innerHTML =  displayRankScore();