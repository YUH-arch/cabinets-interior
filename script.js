const container = document.querySelector('.slider-container');

document.querySelector('.slider').addEventListener('input', (e) => {
  container.style.setProperty('--position', `${e.target.value}%`);
})

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};


function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}