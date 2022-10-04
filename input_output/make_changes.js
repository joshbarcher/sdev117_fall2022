//changed the heading
let heading = document.getElementById("page-title");
heading.innerHTML = "I changed the title!";
heading.innerHTML = "Hello, world";
heading.style.border = "1px solid blue";

//can you change the paragraph?
let subHeading = document.getElementById("subtitle");
subHeading.innerHTML = "I changed the sub title";
subHeading.style.color = "red";

//an alternative function can use CSS selectors
//(this will only target the first img)
let imgElement = document.querySelector("section img");
imgElement.style.border = "3px dashed blue";
