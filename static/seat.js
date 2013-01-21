

var Seat = function ( config ) {

    if ( !config.row || !config.column )
        throw new TypeError('This aero plane left the factory a long time ago.');

    this.row    = config.row;
    this.column = config.column;
    
    this.occupant = config.occupant;
    this.occupied = !! this.occupant;
    
    this.el       = '';
}


Seat.prototype.render = function() {
    
    return this;
};


Seat.prototype.occupy = function( occupant ) {
    if ( occupant instanceof Person )
        this.occupant = occupant;
    else throw new TypeError('The occupant should be a persons. Luggage and baggage not allowed.')
};



Seat.prototype.toJSON = function() {
    return {
        row     : this.row,
        column  : this.column,
        occupant  : ( this.occupant) ? this.occupant.toJSON() : undefined
    }
};
