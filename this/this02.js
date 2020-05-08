function runFunction(f) {
    f();
}

class Calculator {
    constructor() {
        this.model = "BASIC";
    }

    printInfo() {
        console.log("this =>", this);
    }

    printInfo2() {
        runFunction(function () {
            console.log("this 2 =>", this);
        });
    }

    printChars() {
        this.model.split('').forEach(function (char) {
            console.log("for", char, "this =>", this);
        });
    }

}

const calc = new Calculator();
calc.printInfo();
calc.printInfo2();
calc.printChars();