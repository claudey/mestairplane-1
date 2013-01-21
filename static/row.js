

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
    return this;
};


Row.prototype.addSeat = function( seat, index ) {
    try {
        if( typeof index !== 'number' || index >= this.el.children().length )
            throw new TypeError('index exceeds length of DOM nodes in this node')
        
        if( index === undefined)
            this.el.append(seat.render().el);
        
        else (seat.render().el).insertBefore(this.el.children().eq(index));

    } catch( e ) { console.log(e); }
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
