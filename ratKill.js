var clickedTime; var createdTime; var reactionTime; var points = 0;

function makeBox() {
    var time = Math.random();
    time = time * 5000;

    setTimeout (function() {
        var top = Math.random();
        top = top * 500;
        var left = Math.random();
        left = left * 500;
        document.getElementById('box').style.top=top+'px';
        document.getElementById('box').style.left=left+'px';
        document.getElementById('box').style.display='block';
        createdTime = Date.now();
    }, time);
}

document.getElementById('box').onclick=function() {
    clickedTime = Date.now();
    reactionTime = (clickedTime - createdTime) / 1000;
    document.getElementById('time').innerHTML=reactionTime;

    if (reactionTime < 0.20000) {
        points += 10;
    } else if (reactionTime >= 0.20100 && reactionTime <= 0.30000) {
        points += 9;
        document.getElementById('score').innerHTML=points;
    } else if (reactionTime >= 0.30100 && reactionTime <= 0.50000) {
        points += 8;
        document.getElementById('score').innerHTML=points;
    } else if (reactionTime >= 0.50100 && reactionTime <= 0.80000) {
        points += 7;
        document.getElementById('score').innerHTML=points;
    } else if (reactionTime >= 0.80100 && reactionTime <= 1.10000) {
        points += 6;
        document.getElementById('score').innerHTML=points;
    } else if (reactionTime >= 1.10100 && reactionTime <= 1.80000) {
        points += 5;
        document.getElementById('score').innerHTML=points;
    } else if (reactionTime >= 1.80100 && reactionTime <= 2.30000) {
        points += 4;
        document.getElementById('score').innerHTML=points;
    } else if (reactionTime >= 2.30100 && reactionTime <= 3.00000) {
        points += 3;
        document.getElementById('score').innerHTML=points;
    } else if (reactionTime >= 3.00100 && reactionTime <= 5.00000) {
        points += 2;
        document.getElementById('score').innerHTML=points;
    } else if (reactionTime > 5.00000) {
        points += 1;
        document.getElementById('score').innerHTML=points;
    }
    this.style.display='none';
    makeBox();
}
makeBox();
