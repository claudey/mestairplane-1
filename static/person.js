

var Person = function ( config ) {
    if (config.name && config.age && config.gender) {
        this.name   = config.name;
        this.age    = (typeof config.age === 'number' && !(config.age - parseInt(config.arg)))
                        ? config.age
                        : 0;
        this.gender = config.gender;
    } else {
        throw new TypeError('Invalid parameters for creating Person object');
    }
}


Person.prototype.toJSON = function() {
    return {
        name: this.name,
        age: this.age,
        gender: this.gender
    }
};
