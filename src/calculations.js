class calculations {
    calculate();
}

class Add extends calculations{
    constructor() {
        super();
    }

    calculate(a,b){
        return a+b;
    }
}
class Subtract extends calculations{
    constructor() {
        super();
    }
    calculate(a,b){
        return a-b;
    }
}

module.exports = {Add, Subtract};