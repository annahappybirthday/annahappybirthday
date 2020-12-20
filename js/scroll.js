


$(document).ready(function(){
  // плавное перемещение страницы к нужному блоку
  $("nav li a").click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("body,html").animate({scrollTop: destination }, 800);
  });
});


$(function() {
  // при нажатии на кнопку scrollup
  $('.read-more-button').click(function() {
    // переместиться в верхнюю часть страницы
    $("html, body").animate({
      scrollTop:2000
    },1000);
  })
})
