
class Figure {
    #x;
    #y;
    constructor(x, y) {
        this.#x = x
        this.#y = y
    }

    get x() {
        return this.#x
    }

    get y() {
        return this.#y
    }

    set x(x) {
        this.#x = x
    }

    set y(y) {
        this.#y = y
    }

    square() {
        return undefined
    }

}

class Circle extends Figure {
    #r;
    constructor(x, y, r) {
        super(x, y)
        this.#r = r
    }
    
    get r() {
        return this.#r
    }

    set r(r) {
        this.#r = r
    }

    square() {
        return Math.PI * this.#r ** 2
    }

    toString(){
        return `Circle to center in (${this.x}, ${this.y}) with radius ${this.r}`
    }
}

class Rectangle extends Figure {
    #h;
    #w;

    constructor(x, y, h, w) {
        super(x, y)
        this.#h = h
        this.#w = w
    }

    
    get h() {
        return this.#h
    }

    get w() {
        return this.#w
    }

    set h(h) {
        this.#h = h
    }

    set w(w) {
        this.#w = w
    }
    
    square() {
        return this.#h * this.#w
    }

    toString(){
        return `Rectangle with center in (${this.x}, ${this.y}) with height ${this.h} and width ${this.w}`
    }
}

console.log("1. Создание круга:");
const circle = new Circle(6, 7, 17);
console.log(circle.getInfo());
console.log(`Площадь круга: ${circle.square().toFixed(2)}`);

console.log("\n2. Создание прямоугольника:");
const rectangle = new Rectangle(1, 1, 7, 8);
console.log(rectangle.getInfo());
console.log(`Площадь прямоугольника: ${rectangle.square()}`);

console.log("\n3. Демонстрация работы с методами базового класса:");
console.log("Круг - координата X:", circle.x);
console.log("Круг - координата Y:", circle.y);

circle.x = 10;
circle.y = 15;
console.log("После изменения координат круга:");
console.log(circle.getInfo());

rectangle.x = 10;
rectangle.y = 15;
console.log("После изменения координат прямоугольника:");
console.log(rectangle.getInfo());


