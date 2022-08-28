'use strict'
const question = document.getElementById('question');
const yes = document.getElementById('yes');
const no = document.getElementById('no');
const roland = document.getElementById('roland');
const noland = document.getElementById('noland');


yes.addEventListener('click', ()=> {
    roland.classList.add('anser');
    noland.classList.remove('anser');
    question.classList.add('ansed');
} );
no.addEventListener('click', ()=> {
    noland.classList.add('anser');
    roland.classList.remove('anser');
    question.classList.add('ansed');
} );


