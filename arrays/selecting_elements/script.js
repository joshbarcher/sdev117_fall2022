//select a list item (only the first one)
let item = document.querySelector("li");
item.innerHTML = "(changed)";

//select all list items
let items = document.querySelectorAll("li");
console.log(items);

//loop over indices of array of list items
for (let i = 1; i < items.length; i++)
{
    let singleItem = items[i];

    //capitalize each element
    //singleItem.innerHTML = singleItem.innerHTML.toUpperCase();

    //change each list item to a random number
    singleItem.innerHTML = Math.random();

    singleItem.style.backgroundColor = "lightblue";
}
