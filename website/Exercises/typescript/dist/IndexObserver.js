class BitcoinPrice {
    constructor() {
        this.observers = [];
        const element = document.querySelector("#value");
        element.addEventListener('input', () => {
            this.notify(element.value);
        });
    }
    suscribe(observer) {
        this.observers.push(observer);
    }
    unsuscribe(observer) {
        const index = this.observers.findIndex(obs => {
            return obs === observer;
        });
        this.observers.splice(index, 1);
    }
    notify(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}
class PriceDisplay {
    constructor() {
        this.element = document.querySelector("#price");
    }
    update(data) {
        this.element.innerText = data;
    }
}
const value = new BitcoinPrice();
const display = new PriceDisplay();
value.suscribe(display);
setTimeout(() => value.unsuscribe(display), 5000);
