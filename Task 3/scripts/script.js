/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
 
const button = document.getElementById('btn');
  const output = document.getElementById('output');

 button.addEventListener('click', async () => {
   try {
     const response = await fetch('https://api.github.com/users');
     const users = await response.json();

     output.innerHTML = '';

     users.forEach(user => {
       const card = document.createElement('div');
       card.classList.add('user_card');

       const avatar = document.createElement('img');
       avatar.src = user.avatar_url;
       avatar.alt = `${user.login} avatar`;
       card.appendChild(avatar);

       const login = document.createElement('p');
       login.textContent = user.login;
       card.appendChild(login);

       output.appendChild(card);
     });

     button.style.display = 'none';
    } catch (error) {
      console.error(error);
      output.textContent = 'Failed to fetch users.';
    }
  });