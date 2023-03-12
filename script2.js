$(document).ready(function(){
    $('form[name="login"]').submit(function(event) {
      event.preventDefault();
      var username = $('input[name="log"]').val();
      var password = $('input[name="pass"]').val();
      $.getJSON("users.json", function(data) {
        var users = data.users;
        for (var i = 0; i < users.length; i++) {
          var user = users[i];
          if (user.loma === username && user.parole === password) {
            window.location.replace("3form.html");
            return;
          }
        }
        alert("Lietotājvārds vai parole ir nepareizi!");
      });
    });
  });