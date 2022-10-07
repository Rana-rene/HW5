class Square {
    constructor(length) {
        this.side = length;
    }
    perimeter() {
        this.addPerm = this.side * 4;
        return this.addPerm;
    }
    area() {
        this.multArea = this.side **2;
        return this.multArea;
    }
    diagonal() {
        this.diag = Math.sqrt(2 * this.side**2).toFixed(3);
        return this.diag;
    }
    describe() {
        this.message = `Square with ${this.side} has a perimeter of ${this.perimeter()}, area of ${this.area()}, and a diagonal of ${this.diagonal()}`;
        return this.message;
    }
}
const testSquare1 = new Square(2);
console.log(testSquare1.describe());

const testSquare2 = new Square(3);
console.log(testSquare2.describe());

const testSquare3 = new Square(4);
console.log(testSquare3.describe());