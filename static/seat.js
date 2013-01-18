

var Seat = function ( config ) {
    
    if ( !config.row || !config.column )
        throw new TypeError('This aero plane left the factory a long time ago.');

    console.log(!config.row);
    console.log(!config.column);

    this.row    = config.row;
    this.column = config.column;
    
    this.occupant = config.occupant;
}


Seat.prototype.occupy = function( occupant ) {
    if ( occupant instanceof Person )
        this.occupant = occupant;
    else throw new TypeError('The occupant should be a persons. Luggage and baggage not allowed.')
};

Seat.prototype.toJSON = function() {
    console.log('called Seat toJSON');
    // return {
    //     row     : this.row,
    //     column  : this.column,
    //     occupant  : ( this.occupant) ? this.occupant.toJSON() : undefined
    // }
};
