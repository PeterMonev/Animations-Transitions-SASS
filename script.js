$(document).ready(function () {
    $("#showRegisterForm").click(function (event) {
        event.preventDefault();
        $("#loginContainer").animate({ left: '-100%' }, 500).fadeOut(300, function() {
            $(this).hide();
        });
        $("#registerContainer").fadeIn(300).show().animate({ left: '-100%' }, 500);
    });
  
    $("#showLoginForm").click(function (event) {
        event.preventDefault();
        $("#registerContainer").animate({ left: '100%' }, 500).fadeOut(300, function() {
            $(this).hide();
        });
        $("#loginContainer").css('left', '-100%').fadeIn(300).show().animate({ left: '40%' }, 500);
    });
  

  });
  