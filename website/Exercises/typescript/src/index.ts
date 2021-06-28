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



//Funciones
function add(a:number, b:number): number {
    return a + b;
}
const sum = add(4,9);

function createAdder (a: number): (number)=> number{
    return function(b: number){
        return b + a;
    }
}
const AddFour = createAdder(3);
const fourPlus = AddFour(4);

function fullName(firstName: string, lastName?: string): string {
    return `${firstName}, ${lastName}`;
}
const Petter = fullName('Petter');



//Interfaces


interface Rectangule{
    width: number;
    height: number;
    Color?: Color;
}
let rect: Rectangule = {
    width: 2,
    height: 5,
    Color: Color.Green
}
function area(r: Rectangule): number {
    return r.height * r.width;
}
const areaRect = area(rect);
console.log(areaRect);
rect.toString = function(){
    return this.color ? `A rectangule ${this.color}` : `A Rectangule`;
};
console.log(rect.toString());