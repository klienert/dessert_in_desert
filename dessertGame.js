// Randomize the button locations

function randomizeButtonPositions() {
    let buttons = document.querySelectorAll("button");
    buttons.forEach( (b) => {
        b.style.left = (Math.random()*80+10)+"%";
        b.style.top = (Math.random()*80+10)+"%";
    });
}

var score = 0;
function handleDessertClick() {
    // increment score by 1
    score = score + 1;
    let points = document.querySelectorAll("p");
    // update <p> text to reflect the score change
    points[0].innerHTML = "Score: " + score;
    // call randomizeButtonPositions() to move all buttons again
    randomizeButtonPositions();
}

function handleDesertClick() { // Notice the name difference?
    score = score - 1;
    let points = document.querySelectorAll("p");
    // update <p> text to reflect the score change
    points[0].innerHTML = "Score: " + score;
    // call randomizeButtonPositions() to move all buttons again
    randomizeButtonPositions();
}