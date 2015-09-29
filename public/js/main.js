$(document).ready(function() {
  
  $("#focus").focus();
  
  $("#submit").keypress(function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      submitForm();
    }
  });
  
  $("#contact_submit").click(function() {
    submitContactForm();
  });
  
  var submitContactForm = function() {
    var name = $("input[type='name']").val();
    var email = $("input[type='email']").val();
    var message = $("textarea").val();
    console.log("name: " + name);
    console.log("email: " + email);
    console.log("message: " + message);
    window.location = "/contact_me?success=1";
  }
  
});
