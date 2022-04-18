'use strict';
// Event Listeners
const menuIconEl = document.querySelector('.menu-icon');
const menu = document.querySelector('.navbar');
const hideExtra = document.querySelector('.hide-extra');
console.log(hideExtra);
// Event Listener
menuIconEl.addEventListener('click', () => {
  menu.classList.toggle('active');
  const extraDiv = ``;

  if (menu.classList.contains('active')) {
    document.body.insertAdjacentHTML('afterbegin', extraDiv);
    hideExtra.classList.add('extra');
  } else {
    hideExtra.classList.remove('extra');
  }
});
