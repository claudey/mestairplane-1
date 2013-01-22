

var Seat = function ( config ) {

    if ( !config.row || !config.column )
        throw new TypeError('This aero plane left the factory a long time ago.');

    this.row    = config.row;
    this.column = config.column;
    
    this.occupant = config.occupant;
    this.occupied = !! this.occupant;
    
    this.el       = $('<div>', { class: 'seat' });

    this.setClass();
    this.setPosition();


    this.el.on('click', this.book);

}


Seat.prototype.book = function() {
    if( this.occupied ) {
        alert('Sorry. This seat is occupied by ' + this.occupant.name);
        return;
    }

    var passenger = function () {
        try {
            var name = prompt('What\'s the name of the passenger?')
            if ( name ) {
                var age = parseInt(prompt('How old is the passenger?'))
                if ( age ) {
                    var gender = prompt('What\'s her/his gender?')
                }
            }

            throw new TypeError('So you supplied some wrong information. Can you figure it out?');

        } catch (e) {
            console.log(e.message);
        }

    }();
};


Seat.prototype.render = function() {
    return this;
};

Seat.prototype.occupy = function( occupant ) {
    if ( !(occupant instanceof Person) ) 
        throw new TypeError('Human beings only')

    this.occupant = occupant;
    this.el.toggleClass('occupied');
};

Seat.prototype.setClass = function() {
    console.log('setting class');
    if ( this.row >= 1 && this.row <= 5 ) {
        this.el.addClass('first-class');
    } else {
        this.el.addClass('economy-class');
    }
};


Seat.prototype.setPosition = function() {
    if ( this.column === 2 ) {
        this.el.removeClass('aisle-right').addClass('aisle-right');
    } else if (this.column === 3 ) {
        this.el.removeClass('aisle-left').addClass('aisle-left');
    }
};


Seat.prototype.toJSON = function() {
    return {
        row     : this.row,
        column  : this.column,
        occupant  : ( this.occupant) ? this.occupant.toJSON() : undefined
    }
};
