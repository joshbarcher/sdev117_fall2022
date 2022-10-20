//ask the user for their 5 favorite words!
const NUM_WORDS = 5;
let wordsArray = [];

//loop over each position in the array
for (let i = 1; i <= NUM_WORDS; i++)
{
    let word = prompt("Enter a word");

    //assign the current position in the array
    console.log(wordsArray);
    wordsArray.push(word);
}

console.log("Your favorite words are: ");
console.log(wordsArray);

//do something interesting with the elements in the array
for (let i = 0; i < wordsArray.length; i++)
{
    let word = wordsArray[i];
    let numChars = word.length;

    let wordLength = "";
    if (numChars <= 5) //short word
    {
        wordLength = "(short word)";
    }
    else if (numChars >= 10) //long word
    {
        wordLength = "(long word)";
    }
    else //average word
    {
        wordLength = "";
    }

    //print our output (once!)
    console.log(`#${i + 1} is ${word} (${numChars} characters) ${wordLength}`);
}







