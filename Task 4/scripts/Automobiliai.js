export default class Automobiliai{
    constructor({brand, models}){
        this.brand = brand;
        this.models = models;
        return this.render();
    }
    render(){
        this.divCars = document.createElement('div');
        this.divCars.classList.add('car');

        this.heading = document.createElement('h1');
        this.headingText = document.createTextNode(this.brand);
        this.heading.appendChild(this.headingText);

        this.carsPar = document.createElement('p');
        this.carsText = document.createTextNode(`Models: ${[...this.models]}`);
        this.carsPar.appendChild(this.carsText);

        this.divCars.append(this.heading, this.carsPar);

        return this.divCars;
    }
}