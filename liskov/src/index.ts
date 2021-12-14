import Rectangle from "./rectangle";
import Square from './square';
import IRegularShape from "./IRegularShape";

const rectangle = new Square(10);
console.log(`Area : ${rectangle.calculateArea()}`);

test(rectangle);

function test(rectangle: IRegularShape): void {
    if (rectangle.calculateArea() != 20)
        console.error("Bad area!");
}
