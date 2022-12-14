//select the button on the page and add a click event handler
let button = document.querySelector("button");
button.onclick = function() {
    //ask the user for three values
    let name = prompt("Enter your name");
    let email = prompt("Enter your email");
    let phone = prompt("Enter your phone number");

    //the quick and "hacky" way to do things
    //let row = `<tr><td>${name}</td><td>${email}</td><td>${phone}</td></tr>`;
    let tbody = document.querySelector("tbody");
    //tbody.innerHTML += row;

    //create elements
    let tr = document.createElement("tr");
    let tdName = document.createElement("td");
    let tdEmail = document.createElement("td");
    let tdPhone = document.createElement("td");

    //configure elements
    tdName.textContent = name;
    tdEmail.textContent = email;
    tdPhone.textContent = phone;

    //add the elements to the dom
    tr.appendChild(tdName);
    tr.appendChild(tdEmail);
    tr.appendChild(tdPhone);

    tbody.appendChild(tr);
};
