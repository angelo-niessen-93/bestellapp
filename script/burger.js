const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const aboList = document.getElementById("aboList");


burger.addEventListener('click', () => {
  const open = nav.classList.toggle('active');
  burger.setAttribute('aria-expanded', open);
});