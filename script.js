$(document).ready(function () {

// Animation login move out logic

    $("#showRegisterForm").click(function (event) {
        event.preventDefault();
        $("#loginContainer").animate({ left: '0%' }, 700).fadeOut(500, function() {
            $(this).hide();
        });
        $("#registerContainer").fadeIn(1500).show().animate({ left: '0%' }, 1000);
    });

// Animation register move in logic
    
    $("#showLoginForm").click(function (event) {
        event.preventDefault();
        $("#registerContainer").animate({ left: '75%' }, 700).fadeOut(500, function() {
            $(this).hide();
        });
        $("#loginContainer").css('left', '0%').fadeIn(1500).show().animate({ left: '40%' }, 1000);
    });

// Placeholder hide logic
  
    $("input").focus(function () {
        $(this).attr("data-placeholder", $(this).attr("placeholder")).attr("placeholder", "");
    }).blur(function () {
        $(this).attr("placeholder", $(this).attr("data-placeholder"));
    });

// Button ripple function 

function RippleStyle(width, height, posX, posY){
    this.width = (width <= height) ? height : width;
    this.height = (width <= height) ? height : width;
    this.top = posY - (this.height * .5);
    this.left = posX - (this.width * .5);
}

$('.btn').click(function(e) {
    const rippleEl = $('<span class="btn-ripple"></span>').appendTo(this);
   
    const pos = $(this).offset();

    const width = $(this).outerWidth();
    const height = $(this).outerHeight();

    const posX = e.pageX - pos.left;
    const posY = e.pageY - pos.top;

    const rippleStyle = new RippleStyle(width, height, posX, posY);

    rippleEl.css(rippleStyle);
   
});

$('.btn').on('animationend webkitAnimationEnd oanimationend MSAanimationEnd', '.btn-ripple', function(){
  $(this).remove();
})

  });
  