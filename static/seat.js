

var Seat = function ( config ) {

    if ( !config.row || !config.column )
        throw new TypeError('This aero plane left the factory a long time ago.');

    this.row    = config.row;
    this.column = config.column;
    
    this.occupant = config.occupant;
    this.occupied = !! this.occupant;
    
    this.el       = $('<div>', { class: 'seat' });

    this.setPosition();


    this.el.on('click', this.book.apply(this));

}


Seat.prototype = {
    book: function() {
        var $this = this;
        return function () {
            if ( $this.occupied ) {
                alert('Sorry. This seat has been booked for ' + $this.occupant.name);
                return;
            }

            var passenger = function () {
                try {
                    var name = prompt('Name');
                    var age = parseInt(prompt('Age'));
                    var gender = prompt('Gender');

                    $this.occupant = new Person({ name: name, age: age, gender: gender });
                    $this.occupied = true;

                    $this.el.addClass('booked');

                } catch(e) {
                    console.log( e.message );
                }
            }();
        };
    },

    render : function() {
        return this;
    },

    setPosition : function() {
        if ( this.column === 2 ) {
            this.el.removeClass('aisle-right').addClass('aisle-right');
        } else if (this.column === 3 ) {
            this.el.removeClass('aisle-left').addClass('aisle-left');
        }
    },


    toJSON : function() {
        return {
            row     : this.row,
            column  : this.column,
            occupant  : ( this.occupant) ? this.occupant.toJSON() : undefined
        }
    }

};

