//wait until the page loads, then run this function
window.onload = function() {
    let button = document.querySelector("button");
    button.onclick = function() {
        //create an image for the die
        let imgDie = document.createElement("img");
        imgDie.src = getRandomDiceImage();
        imgDie.alt = "A six sided dice";
        imgDie.className = "dice";

        //respond when a user clicks the dice image
        imgDie.onclick = function() {
            imgDie.src = getRandomDiceImage();
        };

        let playArea = document.querySelector("#play-area");
        playArea.appendChild(imgDie);
    };
};

function getRandomDiceImage()
{
    let randomSide = Math.ceil(Math.random() * 6);
    return `images/${randomSide}.png`;
}
