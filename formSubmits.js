  // Register and Login form submit and validation functionality

export function formSubmits(){
 //Login form

 $("#loginForm").submit(function (event) {
    event.preventDefault();

    const username = $(this).find("#username").val();
    const password = $(this).find("#password").val();
    let isLogin = true;

    if (username === "" || username === null) {
      $("#username").addClass("error");
      $("#usernameError").show().fadeIn(2000);;
      isLogin = false;
    }

    if (password < 4 && password < 20) {
      $("#password").addClass("error");
      $("#passwordError").show().fadeIn(2000);
      isLogin = false;
    }

    if (!isLogin) {
      return;
    } else {
      // Divs accordion show
      $("#loginContainer").hide();
      $("#accordionContainer").show();
      $(".section-content").hide();
      $(".section").first().find(".section-content").show();
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
      $("#newUsernameError").show().fadeIn(2000);
      isRegister = false;
    }

    if (!emailRegex.test(email)) {
      $("#email").addClass("error");
      $("#emailError").show().fadeIn(2000);
      isRegister = false;
    }

    if (phone < 4 && phone < 10) {
      $("#phone").addClass("error");
      $("#phoneError").show().fadeIn(2000);
      isRegister = false;
    }

    if (password < 4 && password < 20) {
      $("#newPassword").addClass("error");
      $("#newPasswordError").show().fadeIn(2000);
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
    $(this).removeClass("error")
    $(this).parent().children().eq(2).hide().fadeOut();
  
  });
}