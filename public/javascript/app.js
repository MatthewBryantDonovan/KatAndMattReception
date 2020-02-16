$(document).ready(function () {
  $('.sidenav').sidenav();
  $('.modal').modal();
  $(".carouselSlick").slick({
    lazyLoad: 'ondemand',
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  /* if(window.innerHeight > window.innerWidth){
      //portrait
      $(".pushdown").css("margin-top", "50vh")
      
  }
  if(window.innerWidth > window.innerHeight){
      //landscape
      $(".pushdown").css("margin-top", "10vh")
  } */

});
$(".slick-arrow").attr("id", "slickID");

function showAmt() {
  $("#guest-amount").css("display", "initial");
  $(".guest-amount").css("display", "initial");
}

function hideAmt() {
  $("#guest-amount").css("display", "none");
  $(".guest-amount").css("display", "none");
}

$("#submit-form").on("click", function () {
  $("#error-msg").empty();
  event.preventDefault();
  var formData = $("form").serializeArray();

  var name = $("#guest-name").val().trim();
  var amount = formData[0].value;
  var comment = $("#guest-comment").val().trim();
  var attending = false;

  name = name.toLowerCase();

  if (name == "") {
    $("#error-msg").append($("<p>").html("Please enter your name!"));
    return;
  }

  if (amount == -1) {
    var newAmt = $("#guest-amount").val().trim();
    if (newAmt == "") {
      $("#error-msg").append($("<p>").html("Please enter the amount of people attending!"));
      return;
    }
    amount = newAmt;
  }

  if (amount > 0) {
    attending = true;
  }

  sendObj = {
    name: name,
    amount: amount,
    comment: comment,
    attending: attending
  }

  console.log(sendObj);
  

  // Send the POST request.
  $.ajax("/api/guest", {
    type: "POST",
    data: sendObj
  }).then(
    function (data) {
      console.log(data);
      if (data.error) {
        $("#error-msg").append($("<p>").html("That name has already been registered!"));
        $("#error-msg").append($("<p>").html("Please send me an email or text if this is an error!"));
        return;
      }
      $("#error-msg").append($("<p>").html("Your information has been sent!"));
    }).catch(function (err){
      console.log(err);
    });



})