

var Person = function ( config ) {
    this.name   = config.name;
    this.age    = (typeof config.age === 'number' && !(config.age - parseInt(config.arg)))
                    ? config.age
                    : 0,
    this.gender = config.gender;
}


Person.prototype.toJSON = function() {
    return {
        name: this.name,
        age: this.age,
        gender: this.gender
    }
};
