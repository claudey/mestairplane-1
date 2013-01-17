

var Seat = function ( config ) {
    
    if ( !config.row || !config.column )
        throw new TypeError('This aero plane left the factory a long time ago.');

    this.row    = config.row;
    this.column = config.column;
    
    this.person = config.person;
}


Seat.prototype.occupy = function( person ) {
    if ( person instanceof Person )
        this.person = person;
};

Seat.prototype.toJSON = function() {
    return {
        row     : this.row,
        column  : this.column,
        person  : this.person.toJSON()
    }
};
