class calculate {
    calculate(){}
}

class Add extends calculate{
    constructor() {
        super();
    }

    calculate(a,b){
        return a+b;
    }
}
class Subtract extends calculate{
    constructor() {
        super();
    }

    calculate(a,b){
        return a-b;
    }
}

// The context defines the interface of interest to clients.
class Context {
    calculations = new calculate();

    setCalculations(calculations){
        this.calculations = calculations;
    }

    calculate(a,b){
        return this.calculations.calculate(a,b);
    }
}

class Calculate{
     static calculate(a, b, operation){
        let context = new Context();
        this.a = a;
        this.b = b;
        this.operation = operation;

        if (this.operation === "add"){
            context.setCalculations(new Add());
        }

        if (this.operation === "subtract"){
            context.setCalculations(new Subtract());
        }

        let result = context.calculate(a,b);
        return result;
    }
}

module.exports = Calculate;