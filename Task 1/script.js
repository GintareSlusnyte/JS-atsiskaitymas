/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const output = document.querySelector('#output');

let konvertavimasSvarai = document.createElement('h1');
konvertavimasSvarai.textContent = 'Svarai:';
output.appendChild(konvertavimasSvarai);

let konvertavimasGramai = document.createElement('h1');
konvertavimasGramai.textContent = 'Gramai:';
output.appendChild(konvertavimasGramai);

let konvertavimasUncijos = document.createElement('h1');
konvertavimasUncijos.textContent = 'Uncijos:';
output.appendChild(konvertavimasUncijos);

function konvertuoti(event) {
  event.preventDefault();
  let search = event.target.elements.search.valueAsNumber;
  konvertavimasSvarai.textContent = 'Svarai: ' + (search * 2.2046).toFixed(2) + ' lb';
  konvertavimasGramai.textContent = 'Gramai: ' + (search / 0.001).toFixed(2) + ' g';
  konvertavimasUncijos.textContent = 'Uncijos: ' + (search * 35.274).toFixed(2) + ' oz';
}

document
.querySelector('form')
.addEventListener('submit', konvertuoti);