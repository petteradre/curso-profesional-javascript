var muted = true;
muted = false;
//Numeros
var age = 6;
var numerator = 24;
var denominator = age;
var resultado = numerator / denominator;
//string
var nombre = 'Petter';
var saludo = "Hola me llamo " + nombre;
//Arreglos
var people = [];
people = ["Pedro", "Maria", "Esperanza"];
people.push("Ana");
var peoppleAndNumbers = [];
peoppleAndNumbers.push("Manuel");
peoppleAndNumbers.push(32);
//Enum
var Color;
(function (Color) {
    Color["Red"] = "Red";
    Color["Green"] = "Green";
    Color["Brown"] = "Brown";
})(Color || (Color = {}));
var favoriteColor = Color.Green;
console.log("Mi color favorito es " + favoriteColor);
// Any
var comodin = "Joker";
comodin = { type: "Goost" };
// Object 
var SomeObject = { type: "WillCard" };
//Funciones
function add(a, b) {
    return a + b;
}
var sum = add(4, 9);
function createAdder(a) {
    return function (b) {
        return b + a;
    };
}
var AddFour = createAdder(3);
var fourPlus = AddFour(4);
function fullName(firstName, lastName) {
    return firstName + ", " + lastName;
}
var Petter = fullName('Petter');
var rect = {
    width: 2,
    height: 5,
    Color: Color.Green
};
function area(r) {
    return r.height * r.width;
}
var areaRect = area(rect);
console.log(areaRect);
rect.toString = function () {
    return this.color ? "A rectangule " + this.color : "A Rectangule";
};
console.log(rect.toString());
