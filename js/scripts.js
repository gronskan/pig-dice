$(document).ready(function() {

  var userTotal = []

  $("#roll").click(function(event){
    event.preventDefault();

    function getRandomInt() {
      return Math.floor((Math.random() * 6) + 1);
    }
    // console.log(getRandomInt());
    $("#rollresult").empty();
    userTotal.push(getRandomInt())

    var total = 0;
      for(var index = 0; index < userTotal.length; index += 1) {
        $("#rollresult").text(userTotal[index]);
      }
      console.log(userTotal);



    // userTotal.push(parseInt("#rollresult"));
    //     console.log("#rollresult");
  });


    // console.log(userTotal);
})
