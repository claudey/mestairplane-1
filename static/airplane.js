
var Airplane = function ( config ) {
    var config = config || {}
    
    this.totalSeats         = config.SEATS      || 70;
    this.totalRows          = config.ROWS       || 18;
    this.firstClassRows     = config.FIRST      || 5;
    this.economyClassRows   = config.ECONOMY    || 13;
    this.seatsPerRow        = config.PER_ROW    || 4;
    this.seatsOnLastRow     = config.LAST_ROW   || 2;


    // an array object to hold all the rows of seats in this aero plane
    this.rows = new Array();


    for ( var i=0; i < this.totalRows; i++ ) {
        this.rows.push(
            new Row({
                number:  i,
                seats: ( i === this.totalRows - 1 ) ? this.seatsOnLastRow : this.seatsPerRow
            })
        )
    }
}


Airplane.prototype.toJSON = function() {
    console.log('called Airplane toJSON');
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
