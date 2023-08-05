$(document).ready(function () {
  // Register and Login form submit and validation functionality

  //Login form

  $("#loginForm").submit(function (event) {
    event.preventDefault();

    const username = $(this).find("#username").val();
    const password = $(this).find("#password").val();
    let isLogin = true;

    if (username === "" || username === null) {
      $("#username").addClass("error");
      isLogin = false;
    }

    if (password < 4 && password < 20) {
      $("#password").addClass("error");
      isLogin = false;
    }

    if (!isLogin) {
      return;
    } else {
      // Divs accordion functionality

      $("#loginContainer").hide();
      $("#accordionContainer").show();
      $(".section-content").hide();
      $(".section").first().find(".section-content").show();

      $(".section-header").click(function () {
        $(".section-content").slideUp();
        $(this).next(".section-content").slideDown();
      });
    }
  });

  // Register form

  $("#registerForm").submit(function (event) {
    event.preventDefault();

    const username = $(this).find("#newUsername").val();
    const email = $(this).find("#email").val();
    const phone = $(this).find("#phone").val();
    const password = $(this).find("#newPassword").val();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isRegister = true;

    if (username === "" || username === null) {
      $("#newUsername").addClass("error");
      isRegister = false;
    }

    if (!emailRegex.test(email)) {
      $("#email").addClass("error");
      isRegister = false;
    }

    if (phone < 4 && phone < 10) {
      $("#phone").addClass("error");
      isRegister = false;
    }

    if (password < 4 && password < 20) {
      $("#newPassword").addClass("error");
      isRegister = false;
    }

    if (!isRegister) {
      return;
    } else {
      //  Success register button fuciton
      $("#registerContainer").hide();
      $("#registerSuccess").show();
    }
  });

  $("input").focus(function () {
    $(this).removeClass("error");
  });

  // Animation login move out logic

  $("#showRegisterForm").click(function (event) {
    event.preventDefault();
    $("#loginContainer")
      .animate({ left: "0%" }, 700)
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
      .css("left", "0%")
      .fadeIn(1500)
      .show()
      .animate({ left: "35%" }, 1000);
  });

  //   // Placeholder hide logic

  //   $("input")
  //     .focus(function () {
  //       $(this)
  //         .attr("data-placeholder", $(this).attr("placeholder"))
  //         .attr("placeholder", "");
  //     })
  //     .blur(function () {
  //       $(this).attr("placeholder", $(this).attr("data-placeholder"));
  //     });

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
});
