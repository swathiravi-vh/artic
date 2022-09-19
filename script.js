let process = document.querySelector(".list");

async function articApi() {
    let data;
    for (let i = 1; i <= 10; i++) {
        data = await fetch("https://api.artic.edu/api/v1/artworks/search?q=cats&query[term][is_public_domain]=true")
        let response = await data.json();
        displayResult(response);
    }

}
articApi();

async function displayResult(response) {
    process.innerHTML += `
    <div class="card" style="width: 18rem;">
        <img src="${await response.api_link}" class="card-img-top" alt="...">
        <div class="card-body">
        <h4 class="card-title">${await response.api_model}</h4>
        <h6 class="card-text">${await response.thumbnail}</h6>
        
        </div>
    </div>`
}
let reload = () => {
    process.innerHTML = ""
    articApi();
}
