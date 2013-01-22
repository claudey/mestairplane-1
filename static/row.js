

var Row = function ( config ) {

    var config = config || {};

    this.number         = config.number;
    this.numberOfSeats  = config.seats;
    this.seats          = new Array();
    this.el             = $('<div>', { class: 'row' });


    for ( var i = 1; i <= this.numberOfSeats; ++i ) {
        this.seats.push(
            new Seat({ row: this.number, column: i })
        );
    }

}


Row.prototype.render = function() {
    for (var i = 0, _len = this.seats.length; i < _len; ++i) {
        this.el.append(this.seats[i].render().el);
    }

    return this;
};


Row.prototype.addSeat = function( seat ) {
    if( !(seat instanceof Seat) ) throw new TypeError('inconsistent type. you can only add SEATS. nothing more')
    this.seats.push( seat );
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
