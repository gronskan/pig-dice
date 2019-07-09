$(document).ready(function() {
  $("#roll").click(function(event){
    event.preventDefault();

    function getRandomInt() {
      return Math.floor((Math.random() * 6) + 1);
    }
    console.log(getRandomInt());
    $("#rollresult").empty();
    $("#rollresult").text(getRandomInt());



  })
})
