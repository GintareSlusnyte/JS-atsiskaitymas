/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

import Automobiliai from "./Automobiliai.js";

fetch('http://localhost:3000/cars')
.then(res => res.json())
.then(cars => {
    console.log(cars);
    const allCars = document.querySelector('#output');
    cars.forEach(car => {
        const automobilisDiv = new Automobiliai(car);
        allCars.appendChild(automobilisDiv);
    });
})

document.querySelector('#output');
addEventListener('submit', e => {
    e.preventDefault();
    const elementai = e.target.elements;
    console.log(elementai.model.value);
    const car ={
        brand: elementai.brand.value,
        models: elementai.models.value.split(','),
    };
    console.log(car);
    const automobilisDiv = new Automobiliai(car);
    console.log(automobilisDiv);
    document.querySelector('#output').appendChild(automobilisDiv);
    fetch('http://localhost:3000/cars', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(car)
    });
    e.target.reset();
});