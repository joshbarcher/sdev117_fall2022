//wait until the page loads
window.onload = function() {
    //select the textbox and print out keys that are pressed!
    let textBox = document.querySelector("#name-textbox");
    textBox.onkeypress = function(keyEvent) {
        //stop the regular behavior of the keypress event
        keyEvent.preventDefault();

        let key = keyEvent.key;
        key = key.toLowerCase(); //this is very common!

        //print to the console
        console.log("You pressed: " + key);

        //create a string with bad characters
        let badChars = "~!@#$%^&*()_+`1234567890;',./:\"<>?";

        //update the textbox, only if the character is a letter
        if (!badChars.includes(key))
        {
            textBox.value += key;
        }
    };
};

