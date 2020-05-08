class Calculator {
    constructor() {
        this.model = "BASIC";
    }

    printInfo(a, b) {
        console.log("params", a, b);
        console.log("this =>", this);
    }

    printInfo2() {
        this.model.split('').forEach(function (char) {
            console.log("for", char, ", this ->", this);
        });
    }

    printInfo2a() {
        this.model.split('').forEach(function (char) {
            console.log("for", char, ", this ->", this);
        }.bind(this));
    }

    printInfo2b() {
        this.model.split('').forEach(function (char) {
            console.log("for2b", char, ", this ->", this);
        }, this);
    }

    printInfo2c() {
        this.model.split('').forEach((char) => {
            console.log("for2c", char, ", this ->", this);
        });
    }

    printInfo2d() {
        const truc = this;
        this.model.split('').forEach(function (char) {
            console.log("for2d", char, ", this ->", truc);
        });
    }
}

const calc = new Calculator();
calc.printInfo();

//calc.printInfo2();
//calc.printInfo2a();
//calc.printInfo2b();
//calc.printInfo2c();
calc.printInfo2d();

const f = calc.printInfo.bind(calc);
f("bind1", "bind2");
// call, apply, bind
const g = calc.printInfo;
g.call(calc, "call1", "call2");
g.apply(calc, ["apply1", "apply2"]);


class FunctionExecutor {
    constructor(f) {
        this.f = f;
    }
}

const functionExecutor = new FunctionExecutor(calc.printInfo.bind(calc));
functionExecutor.f();