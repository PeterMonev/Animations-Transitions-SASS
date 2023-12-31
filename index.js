import { formSubmits } from './src/formSubmits.js';

$(document).ready(function () {

  formSubmits();
 
  // Divs accordion functionality

  $(".section-header").click(function () {
    $(".section-content").slideUp();
    $(this).next(".section-content").slideDown();
  });

  // Animation login move out logic

  $("#showRegisterForm").click(function (event) {
    event.preventDefault();
    $("#loginContainer")
      .animate({ left: "12%" }, 700)
      .fadeOut(500, function () {
        $(this).hide();
      });
    $("#registerContainer").fadeIn(1500).show().animate({ left: "0%" }, 1000);
  });

  // Animation register move in logic

  $("#showLoginForm").click(function (event) {
    event.preventDefault();
    $("#registerContainer")
      .animate({ left: "75%" }, 700)
      .fadeOut(500, function () {
        $(this).hide();
      });
    $("#loginContainer")
      .css("left", "12%")
      .fadeIn(1500)
      .show()
      .animate({ left: "50%" }, 1000);
  });

  // Button ripple function

  function RippleStyle(width, height, posX, posY) {
    this.width = width <= height ? height : width;
    this.height = width <= height ? height : width;
    this.top = posY - this.height * 0.5;
    this.left = posX - this.width * 0.5;
  }

  $(".btn").click(function (e) {
    const rippleEl = $('<span class="btn-ripple"></span>').appendTo(this);

    const pos = $(this).offset();

    const width = $(this).outerWidth();
    const height = $(this).outerHeight();

    const posX = e.pageX - pos.left;
    const posY = e.pageY - pos.top;

    const rippleStyle = new RippleStyle(width, height, posX, posY);

    rippleEl.css(rippleStyle);
  });

  $(".btn").on(
    "animationend webkitAnimationEnd oanimationend MSAanimationEnd",
    ".btn-ripple",
    function () {
      $(this).remove();
    }
  );

  // Starry sky logic

 let isStartStarts = true;
 stars();

$('#skyOnbtn').click(function() {{
    if(isStartStarts){
      isStartStarts = false
      $(".header").empty()

    } else {
      isStartStarts = true;
      stars();
    }
}})


function stars(){
    let count = 500;
    let scene = $(".header");
    let i = 0 

      while(i < count){
        let star = document.createElement('i');
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight);
        let duration = Math.random() * 10;
        let size = Math.random() * 3;

        star.style.left = x + 'px';
        star.style.top = y + 'px';
        star.style.width = 1 + size + 'px';
        star.style.height = 1 + size + 'px';

        star.style.animationDuration = 5 + duration + 's';
        star.style.animationDelay =  duration + 's';
    
        scene.append(star)
        i++;
      }

    
}

let isLoginFormShown = true;  

$('#watchSkyBtn').click(function() {
  const loginForm = $('.main').find('#loginContainer');

  if (isLoginFormShown) {

    $('.main').children().slice(1,5).hide();
    $(this).text('Go to Login');
  } else {

    loginForm.show();
    $(this).text('Go to watch starts');
  }

  isLoginFormShown = !isLoginFormShown;
});

// Scrollable functionality

const sections = $('section');
const windowHeigth = window.innerHeight;
const navigation = $('.navigation');

function reset(){
  for(let i = 0; i < navigation.children().length; i++){
    navigation.children().removeClass('selected');
  }
}

$(window).on('scroll', function() {
  const scrollTop = $(window).scrollTop();
  
  sections.each(function(index){
    let section = $(this);
 
    if(section.offset().top < scrollTop + windowHeigth /2 && scrollTop < section.offset().top + windowHeigth / 2){
          reset();
          navigation.children().eq(index).addClass('selected'); 
    }

  })
});

$('.navigation li').each(function(index, item){
  $(item).click(function(){
     window.scrollTo({
      top: index * windowHeigth,
      behavior: 'smooth'
     });
  });
});

  
});