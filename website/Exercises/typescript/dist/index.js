let muted = true;
muted = false;
//Numeros
let age = 6;
let numerator = 24;
let denominator = age;
let resultado = numerator / denominator;
//string
let nombre = 'Petter';
let saludo = `Hola me llamo ${nombre}`;
//Arreglos
let people = [];
people = ["Pedro", "Maria", "Esperanza"];
people.push("Ana");
let peoppleAndNumbers = [];
peoppleAndNumbers.push("Manuel");
peoppleAndNumbers.push(32);
//Enum
var Color;
(function (Color) {
    Color["Red"] = "Red";
    Color["Green"] = "Green";
    Color["Brown"] = "Brown";
})(Color || (Color = {}));
let favoriteColor = Color.Green;
console.log(`Mi color favorito es ${favoriteColor}`);
// Any
let comodin = "Joker";
comodin = { type: "Goost" };
// Object 
let SomeObject = { type: "WillCard" };
//Funciones
function add(a, b) {
    return a + b;
}
const sum = add(4, 9);
function createAdder(a) {
    return function (b) {
        return b + a;
    };
}
const AddFour = createAdder(3);
const fourPlus = AddFour(4);
function fullName(firstName, lastName) {
    return `${firstName}, ${lastName}`;
}
const Petter = fullName('Petter');
let rect = {
    width: 2,
    height: 5,
    Color: Color.Green
};
function area(r) {
    return r.height * r.width;
}
const areaRect = area(rect);
console.log(areaRect);
rect.toString = function () {
    return this.color ? `A rectangule ${this.color}` : `A Rectangule`;
};
console.log(rect.toString());
