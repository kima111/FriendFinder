$(document).ready(function () {
  $('.modal').modal();
  $('select').formSelect();

  $("#survey-submit").on("click", function (event) {
    console.log("WAS CLICKED!")
    event.preventDefault();
    var newFriend = {
      name: $("#first-name").val().trim(),
      image: $("#image").val(),
      question1: $("#question1").val(),
      question2: $("#question2").val(),
      question3: $("#question3").val(),
      question4: $("#question4").val(),
      question5: $("#question5").val(),
      question6: $("#question6").val(),
      question7: $("#question7").val(),
      question8: $("#question8").val(),
      question9: $("#question9").val(),
      question10: $("#question10").val()

    };
    $.post("/api/friends", newFriend)
      .then(function (data) {
        console.log("Successful addition");
        $("#first-name").val("");
      });

    $.get("/api/friends", function (data) {
      console.log(data.image);
      $("#results").empty();
      let newFriend = $("<div>");
      let newFriendImg = $("<img>");
      newFriendImg.attr("src", data.image);
      newFriendDiv = newFriend.append(data.name)
      $("#results").append(newFriendDiv, newFriendImg);

    })
  });
})



