const btnToggle = document.getElementsByClassName('menu-btn')[0];
const itemLink = document.getElementsByClassName('menu')[0];

btnToggle.addEventListener('click', () => {
  itemLink.classList.toggle('active');
});

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  }
  else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
})
