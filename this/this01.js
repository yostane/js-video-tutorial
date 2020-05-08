class Calculator {
    constructor() {
        this.model = "BASIC";
    }

    printInfo() {
        console.log("this =>", this);
    }
}

const calc = new Calculator();
calc.printInfo();

const f = calc.printInfo;
f();

class FunctionExecutor {
    constructor(f) {
        this.f = f;
    }
}

const functionExecutor = new FunctionExecutor(calc.printInfo);
functionExecutor.f();