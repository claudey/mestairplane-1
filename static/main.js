

// Creating the airplanes and everything related to that happens here

$( function () {
    $('<div>', {
        class: 'plane-out',
        id: 'plane-out'
    }).appendTo( $('#seatmap_out') );

    $('<div>', {
        class: 'plane-in',
        id: 'plane-in'
    }).appendTo( $('#seatmap_return') );


    var flightOut   = new Airplane();
    $('#plane-out').html( flightOut.render().el );


    var flightIn    = new Airplane();
    $('#plane-in').html( flightIn.render().el );
})
