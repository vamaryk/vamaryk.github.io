window.onload = function() {
    setTimeout(function() {

        document.body.classList.add('loaded')

        Draggable.create('.slider', {
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
