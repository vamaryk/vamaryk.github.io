window.onload = function() {
  setTimeout(function() {
      document.body.classList.add('loaded');

      const header = document.querySelector('.header');
      
      // Создание Draggable
      const draggable = Draggable.create('.gallery', {
          bounds: 'body',
          onPress: function() {
              header.classList.add('blurred'); // Добавляем класс для размытия
          },
          onRelease: function() {
              header.classList.remove('blurred'); // Убираем класс при отпускании
          }
      });
  }, 200);
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
