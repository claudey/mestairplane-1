

var Row = function ( config ) {

    var config = config || {};
    
    this.number         = config.number;
    this.numberOfSeats  = config.seats;
    this.seats          = new Array();


    for ( var i = 0; i < this.numberOfSeats; i++ ) {
        this.seats.push(
            // create a new seat
            new Seat({ row: this.number })
        );
    }

}


Row.prototype.toJSON = function() {
    var seatsJSON = [];
    for ( var i = 0; i < this.numberOfSeats; ++i ) seatsJSON.push(this.seats[i].toJSON());
    return {
        number: this.number,
        numberOfSeats: this.numberOfSeats,
        seats: seatsJSON
    }
};
