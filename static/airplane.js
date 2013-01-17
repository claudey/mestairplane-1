
var Airplane = function ( config ) {
    if (!config) throw new TypeError('This is not the factory. What are you trying to do?');

    this.TOTAL_NUMBER_OF_SEATS  = config.SEATS      || 70;
    this.TOTAL_NUMBER_OF_ROWS   = config.ROWS       || 18;
    this.TOTAL_FIRST_CLASS_ROWS = config.FIRST      || 5;
    this.NUM_ECONOMY_CLASS_ROWS = config.ECONOMY    || 13;
    this.NORMAL_SEATS_PER_ROW   = config.PER_ROW    || 4;
    this.SEATS_ON_LAST_ROW      = config.LAST_ROW   || 2;


    // an array object to hold all the rows of seats in this aero plane
    this.rows = new Array();


    for ( var i=0; i < TOTAL_NUMBER_OF_ROWS; i++ ) {
        rows.push(
            new Row(
                        ( i === TOTAL_NUMBER_OF_ROWS - 1 )
                            ? this.SEATS_ON_LAST_ROW
                            : this.NORMAL_SEATS_PER_ROW
                   ) 
                );
    }
}


Airplane.prototype.toJSON = function() {
    // return all the rows in this aero plane

};
