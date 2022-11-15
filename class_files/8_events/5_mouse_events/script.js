window.onload = function() {
    let target = document.querySelector("img");
    target.onmousedown = function(event) {
        //print the position of the mouse
        let locationX = event.clientX;
        let locationY = event.clientY;
        console.log(`You clicked at point (${locationX}, ${locationY})`)

        //randomly move the target to a new location
        let randomX = Math.random() * 500 + 8;
        let randomY = Math.random() * 500 + 8;

        target.style.left = randomX + "px";
        target.style.top = randomY + "px";
    };
};
