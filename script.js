$(document).ready(function () {

// Animation login move out logic

    $("#showRegisterForm").click(function (event) {
        event.preventDefault();
        $("#loginContainer").animate({ left: '-100%' }, 500).fadeOut(300, function() {
            $(this).hide();
        });
        $("#registerContainer").fadeIn(300).show().animate({ left: '-100%' }, 500);
    });

// Animation register move in logic
    
    $("#showLoginForm").click(function (event) {
        event.preventDefault();
        $("#registerContainer").animate({ left: '100%' }, 500).fadeOut(300, function() {
            $(this).hide();
        });
        $("#loginContainer").css('left', '-100%').fadeIn(300).show().animate({ left: '40%' }, 500);
    });

// Placeholder hide logic
  
    $("input").focus(function () {
        $(this).attr("data-placeholder", $(this).attr("placeholder")).attr("placeholder", "");
    }).blur(function () {
        $(this).attr("placeholder", $(this).attr("data-placeholder"));
    });
  });
  