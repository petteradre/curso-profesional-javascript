interface Observer {
    update: (data: any) => void;
}
interface Subbject {
    suscribe: (observer: Observer)=> void;
    unsuscribe: (observer: Observer)=> void;
}
class BitcoinPrice implements Subbject {
    observers: Observer[] = [];
    constructor(){
        const element:HTMLInputElement = document.querySelector("#value");
        element.addEventListener('input', () => {
            this.notify(element.value)
        })
    }
    suscribe(observer: Observer){
        this.observers.push(observer);
    }
    unsuscribe(observer: Observer){
        const index = this.observers.findIndex(obs => {
            return obs === observer;
        })
        this.observers.splice(index, 1);
    }
    notify(data: any){
        this.observers.forEach(observer => observer.update(data));
    }
}
class PriceDisplay implements Observer{
    private element: HTMLLIElement;
    constructor(){
        this.element = document.querySelector("#price");
    }
    update(data: any){
        this.element.innerText = data;
    }
}
const value = new BitcoinPrice();
const display = new PriceDisplay();

value.suscribe(display);
setTimeout(
 () => value.unsuscribe(display),
 5000   
)