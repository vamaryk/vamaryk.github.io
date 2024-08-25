window.onload = function() {
    setTimeout(function() {

        document.body.classList.add('loaded')

        Draggable.create('.gallery', {
            bounds: 'body',
        })

    }, 200)
}

const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', e => {
  document.documentElement.classList.toggle('dark');
});

document.addEventListener('DOMContentLoaded', function () {
      // инициализация слайдера
      var slider = new SimpleAdaptiveSlider('.slider', {
        autoplay: true,
        interval: 5000,
        swipe: true,
      });
    });

// Получаем ссылки на элементы
const homeLink = document.getElementById('home-link');
const galleryLink = document.getElementById('gallery-link');
const galleryLink_2 = document.getElementById('gallery-link_2');
const galleryLink_3 = document.getElementById('gallery-link_3');
const homePage = document.getElementById('home-page');
const homePage_2 = document.getElementById('home-page_2');
const galleryPage = document.getElementById('gallery-page');

// Добавляем обработчики событий
homeLink.addEventListener('click', () => {
  homePage.style.display = 'block';
  homePage_2.style.display = 'block';
  galleryPage.style.display = 'none';
});

galleryLink.addEventListener('click', () => {
  homePage.style.display = 'none';
  homePage_2.style.display = 'none';
  galleryPage.style.display = 'block';
});

galleryLink_2.addEventListener('click', () => {
  homePage.style.display = 'none';
  homePage_2.style.display = 'none';
  galleryPage.style.display = 'block';
});

galleryLink_3.addEventListener('click', () => {
  homePage.style.display = 'none';
  homePage_2.style.display = 'none';
  galleryPage.style.display = 'block';
});