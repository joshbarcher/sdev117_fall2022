window.onload = function() {
    let button = document.querySelector("button");
    button.onclick = displayRandomCat;
}

function displayRandomCat()
{
    //to make our fetch() work we need a URL (web address) and parameters
    let webAddress = "https://api.thecatapi.com/v1/images/search";
    let params = {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "cab8736c-d9ae-481e-8e20-4fe58"
        }
    };

    fetch(webAddress, params)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            let img = document.querySelector("#portrait");
            let source = data[0].url;
            img.src = source;
            img.alt = "A random cat picture!";
        });
}
