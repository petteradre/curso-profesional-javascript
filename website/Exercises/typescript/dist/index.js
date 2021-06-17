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
