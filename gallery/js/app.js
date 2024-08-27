// window.onload = function() {
//     setTimeout(function() {

//         document.body.classList.add('loaded')

        

//     }, 200)
// }

// const toggle = document.querySelector('.toggle');

// toggle.addEventListener('click', e => {
//   document.documentElement.classList.toggle('dark');
// });

// document.addEventListener('DOMContentLoaded', function () {
//       // инициализация слайдера
//       var slider = new SimpleAdaptiveSlider('.slider', {
//         autoplay: true,
//         interval: 5000,
//         swipe: true,
//       });
//     });

import { getTheme, toggleTheme } from '../theme.js';
window.onload = function() {
  setTimeout(function() {
    document.body.classList.add('loaded')
  }, 200)
}

const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', e => {
  document.documentElement.classList.toggle('dark');
});

import { getTheme, toggleTheme } from './theme.js';

toggle.addEventListener('click', () => {
  toggleTheme();
});

document.addEventListener('DOMContentLoaded', function () {
  // инициализация слайдера
  var slider = new SimpleAdaptiveSlider('.slider', {
    autoplay: true,
    interval: 5000,
    swipe: true,
  });
});

window.onload = () => {
  const currentTheme = getTheme();
  document.documentElement.classList.toggle('dark', currentTheme === 'dark');
};
