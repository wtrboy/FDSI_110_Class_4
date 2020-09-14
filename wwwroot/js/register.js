 
function Property(title, rooms, bathrooms, price, area, imageUrl, description) {
    this.title = title;
    this.rooms = parseInt(rooms);
    this.bathrooms = parseInt(bathrooms);
    this.price = parseFloat(price);
    this.area = parseInt(area);
    this.imageUrl = imageUrl;
    this.description = description;
}

function save() {
    // 2 - get the text from the inputs
    // put them on variables

    let title = $("#txtTitle").val();
    let rooms = $("#txtRooms").val();
    let bathrooms = $("#txtBathrooms").val();
    let price = $("#txtPrice").val();
    let area = $("#txtArea").val();
    let imageUrl = $("#txtImage").val();
    let description = $("#txtDescription").val();

    // 3 - create an object with the values
    var p = new Property(title, rooms, bathrooms, price, area, imageUrl, description);
    console.log(p);

    // 4 - send the object on an AJAX request\
    // POST
    // /catalog/registerProperty

    $.ajax({
        type: 'POST',
        url: '/catalog/registerProperty',
        contentType: 'application/json',
        data: JSON.stringify(p),
        success: function (res) {
            console.log("Servery says", res);

            // clear the form

            $("#txtTitle").val("");
            $("#txtRooms").val("");
            $("#txtBathrooms").val("");
            $("#txtPrice").val("");
            $("#txtArea").val("");
            $("#txtImage").val("");
            $("#txtDescription").val("");


            // show a message
            $("#alertSaved").removeClass('hide');
            setTimeout(
                ()=> $("#alertSaved").addClass('hide'),
                3000
            );
        },
        error: function (details) {
            console.log("Error", details);
        }
    });
}

function init() {
    console.log('Register Page!');

    // 1 - link click event to save fn (use j query)
    $("#btnSave").click(save);
}


window.onload = init;