

// Creating the airplanes and everything related to that happens here

$( function () {
    $('<div>', {
        class: 'plane-out',
        id: 'plane-out'
    }).appendTo( $('#seatmap_out') );


    var flightOut   = new Airplane();
    $('#plane-out').html( flightOut.render().el );


    var flightIn    = new Airplane();
    $('#plane-in').html( flightIn.render().el );



    var el  = $('<div>');
    $('<div>', { class: 'div' }).appendTo(el);
    console.log(el);

})
