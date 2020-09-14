// an ajax reques is always needed to get info from the server

function fetchCatalog() {
    $.ajax({
        type: 'GET',
        url: '/catalog/allProperties',
        success: res => {
            console.log(res);
            for(let i=0; i < res.length; i++){
                displayProperty(res[i]);
            }
        },
        error: details => {
            console.log("Error", details);
        }
    });
}

function displayProperty(property) {
    for (let i = 0; i < property.length; i++) {
        var property = catalog[i];
    // create the syntax
    var syntax = 
    `<div class='item'>
        <h2 class='title'>${property.title}</h2>
        <h2 class='rooms'>${property.rooms}</h2>
        <h2 class='bathrooms'>${property.bathrooms}</h2>
        <h2 class='area'>$ ${property.area}</h2>
        <h2 class='price'>$ ${property.price}</h2>
        <h2 class='imageUrl'>$ ${property.imageUrl}</h2>
        <h2 class='description'>$ ${property.description}</h2>
    </div>`;
    // get container
    var container = $("#catalog-container");
    // append syntax to container
    container.append(syntax);
    }
}
function init() {
    console.log("Catalog page!");

    fetchCatalog();
}


window.onload = init;