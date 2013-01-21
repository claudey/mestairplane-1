
var Airplane = function ( config ) {
    var config = config || {}
    
    this.totalSeats         = config.SEATS      || 70;
    this.totalRows          = config.ROWS       || 18;
    this.firstClassRows     = config.FIRST      || 5;
    this.economyClassRows   = config.ECONOMY    || 13;
    this.seatsPerRow        = config.PER_ROW    || 4;
    this.seatsOnLastRow     = config.LAST_ROW   || 2;

    this.el = $('<div>', { class: 'airplane' });

    // an array object to hold all the rows of seats in this aero plane
    this.rows = new Array();


    for ( var i=1; i <= this.totalRows; ++i ) {
        this.rows.push(
            new Row({
                number:  i,
                seats: ( i === this.totalRows ) ? this.seatsOnLastRow : this.seatsPerRow
            })
        )
    }
}


Airplane.prototype.render = function() {
    return this;
};

Airplane.prototype.addRow = function( row, index ) {
    try {
        if( typeof index !== 'number' || index >= this.el.children().length )
            throw new TypeError('index exceeds length of DOM nodes in this node')
        
        if( index === undefined)
            this.el.append(row.render().el);
        
        else (row.render().el).insertBefore(this.el.children().eq(index));

    } catch( e ) { console.log(e); }
};


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
