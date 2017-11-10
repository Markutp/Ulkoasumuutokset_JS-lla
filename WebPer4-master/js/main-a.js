'use strict';
const P1 =document.querySelector('p');
const lisaa = document.querySelector('#lisaa')
const P2 = document.querySelector('p:nth-child(2)');
const P3 = document.querySelector('p:nth-child(3)');
const toggle = document.querySelector('#toggle')
const vaihda = document.querySelector('#vaihda')
lisaa.addEventListener("click", (evt) => {
  P1.classList.add('punainen');
});


vaihda.addEventListener('click', (evt) => {
  if(P2.classList.contains('punainen')) {
    P2.classList.replace('punainen', 'sininen');
  } else {
    P2.classList.replace('sininen','punainen');
  }
});


toggle.addEventListener("click", (evt) => {
  P3.classList.add('vihrea');
})
