$(document).ready(function() {
  $("#thank-you").hide(); // Hide thank you card on page load

  // Detect submission on form
  $("#rating").submit(function(event) {
    let rating = $('input[name=rating-form]:checked', '#rating-form').val(); // Get rating value selected
    if(rating === undefined) {
      $("#error-msg").html("<span class='alert' id='msg'>You must choost at least one rating</span>");
        return false;
    }

    $("#rating-confirmation").text($("#rating-confirmation").text().replace("%rating%", rating)); // Replace marker with value user selected

    // This will hide the rating window after 2 seconds
    $("#rating").hide(2000, function() {
      $("#thank-you").show(1000); // This will show the thank you window
    });
    event.preventDefault(); // Prevent submission from posting
  });
});
