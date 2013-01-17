
var Airplane = function () {
    var TOTAL_NUMBER_OF_ROWS    = 70
      , TOTAL_FIRST_CLASS_ROWS  = 5
      , NUM_ECONOMY_CLASS_ROWS  = 13;

      // an array object to hold all the rows of seats in this aero plane
      this.seats = new Array();


    for ( var i=0; i < TOTAL_NUMBER_OF_ROWS; i++ ) {
        seats[i] = new ROW();
    }
}


Airplane.prototype.toJSON = function() {
    // return all the rows in this aero plane

};
