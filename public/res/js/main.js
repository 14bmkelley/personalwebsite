$(document).ready(function() {
  
  $("#focus").focus();
  
  $("#submit").keypress(function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      submitForm();
    }
  });
  
  $("button").click(function() {
    submitForm();
  });
  
  var submitForm = function() {
    var name = $("input[type='name']").val();
    var email = $("input[type='email']").val();
    var message = $("textarea").val();
    console.log("name: " + name);
    console.log("email: " + email);
    console.log("message: " + message);
    window.location = "/contact_me?success=1";
  }
  
});
