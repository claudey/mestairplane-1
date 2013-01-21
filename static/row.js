

var Row = function ( config ) {

    var config = config || {};

    this.number         = config.number;
    this.numberOfSeats  = config.seats;
    this.seats          = new Array();
    this.el             = '';


    for ( var i = 1; i <= this.numberOfSeats; ++i ) {
        this.seats.push(
            new Seat({ row: this.number, column: i })
        );
    }

}


Row.prototype.render = function() {
    return this;
};


Row.prototype.toJSON = function() {
    var seatsJSON = [];
    for ( var i = 0; i < this.numberOfSeats; ++i ) seatsJSON.push(this.seats[i].toJSON());

    return {
        number: this.number,
        numberOfSeats: this.numberOfSeats,
        seats: seatsJSON
    }
};
