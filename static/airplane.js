
var Airplane = function ( config ) {
    var config = config || {}
    
    this.totalSeats         = config.SEATS      || 70;
    this.firstClassRows     = config.FIRST      || 5;
    this.economyClassRows   = config.ECONOMY    || 13;
    this.seatsPerRow        = config.PER_ROW    || 4;
    this.seatsOnLastRow     = config.LAST_ROW   || 2;

    this.el = $('<div>', { class: 'airplane' });

    // an array object to hold all the rows of seats in this aero plane
    this.rows = new Array();

    for ( var i=1, _len = (config.ROWS || 18); i <= _len; ++i ) {
        this.rows.push(
            new Row({
                number:  i,
                seats: ( i === _len ) ? this.seatsOnLastRow : this.seatsPerRow
            })
        )
    }
}


Airplane.prototype.render = function() {
    console.log( this.rows.length );
    for (var i = 0, _len = this.rows.length; i < _len; ++i ) {
        this.el.append(this.rows[i].render().el);
    }

    return this;
};

Airplane.prototype.addRow = function( row ) {
    if (!(row instanceof Row)) throw new TypeError('inconsistent type. did you say you wanted to add a row, or what?')
    this.rows.push(row);
};


Airplane.prototype.toJSON = function() {
    var rowsJSON = [];
    for ( var i = 0; i < this.totalRows; ++i )  {
        rowsJSON.push( this.rows[i].toJSON() );
    }

    // return all the rows in this aero plane
    return {
        seats           : this.totalSeats,
        rows            : this.totalRows,
        firstClass      : this.firstClassRows,
        economyClass    : this.economyClassRows,
        perRow          : this.seatsPerRow,
        lastRow         : this.seatsOnLastRow,
        rows            : rowsJSON
    }

};
