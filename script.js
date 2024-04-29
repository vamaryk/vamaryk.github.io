// Выбираем кнопку
const btn = document.querySelector(".btn-toggle");
// Отслеживаем щелчок по кнопке
btn.addEventListener("click", function () {
  // Затем переключаем (добавляем/удаляем) класс .dark-theme для body
  document.body.classList.toggle("dark-theme");
});

 var swiper = new Swiper('.swiper-container', {
    effect: "coverflow",
    grabCursor: true,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 10,
    loop: true,
   
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      
    },
   
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
   scrollbar: {
    el: '.swiper-scrollbar',
  },
   keyboard: {
    enabled: true,
  },
  // mousewheel: {
  //   thresholdDelta: 70,
  // },
   
 });

$(document).ready(function() {
  
  $(window).scroll(function () {
    var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();
    scrollPercent = (s / (d-c)) * 100;
    var position = scrollPercent.toFixed(2);

    $('.progress-bar').width(position + '%');
  });
  
});