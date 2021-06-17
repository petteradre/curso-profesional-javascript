let muted: boolean = true;
muted = false;

//Numeros
let age = 6;
let numerator: number = 24;
let denominator: number = age;
let resultado = numerator/denominator;

//string
let nombre: string = 'Petter';
let saludo: string = `Hola me llamo ${nombre}`;

//Arreglos
let people: string[] = [];
people = ["Pedro", "Maria", "Esperanza"];
people.push("Ana");

let peoppleAndNumbers: Array<string | number> = [];
peoppleAndNumbers.push("Manuel");
peoppleAndNumbers.push(32);

//Enum
enum Color {
    Red = "Red",
    Green = "Green",
    Brown = "Brown"
}
let favoriteColor: Color = Color.Green;
console.log(`Mi color favorito es ${favoriteColor}`);

// Any
let comodin: any = "Joker";
comodin = {type: "Goost"}


// Object 
let SomeObject: object = {type: "WillCard"}