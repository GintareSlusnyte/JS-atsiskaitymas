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

import Post from './Post.js';

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    return response.json()
  })
  .then(data => {
    // console.log(data);
    data.forEach(user => {
      document.querySelector('#test').innerHTML += `<h1>${user.name}</h1>`
    })
  })
  .catch(err => {
    console.log(err.message);
  })
  .finally(() => {
    // console.log('end');
  })

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(posts => {
    const allPosts = document.querySelector('#allPosts');
    posts.forEach(post => {
      // console.log(post);
      const newPost = new Post(post);
      allPosts.appendChild(newPost);
    });
  });



  fetch('https://api.github.com/users')
  .then(response => {
    return response.json()
  })
  .then(data => {
    data.forEach(user => {
        document.querySelector('#output').innerHTML += 
    })
  })