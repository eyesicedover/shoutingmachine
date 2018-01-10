$(document).ready(function() {
  $("#shoutingForm").submit(function(event) {
      var lowercaseInput = $("input#userInput").val();
      $(".shouting").append("<li>"+lowercaseInput.toUpperCase()+"!!!"+"</li>" );
      event.preventDefault();
  });
});
