/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

const btnElement = document.querySelector('#btn__element');
const btnState = document.querySelector('#btn__state');
let count = 0;

btnElement.addEventListener('click', () => {
  count++;
  btnState.textContent = count;
});