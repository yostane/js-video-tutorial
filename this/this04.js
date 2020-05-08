"use strict";

function Calcultor() {
    this.model = "CASIO";

    this.printInfo = function () {
        console.log("this =>", this);
    };
}

const calcultor = new Calcultor();
calcultor.printInfo();
const f = calcultor.printInfo;
f();