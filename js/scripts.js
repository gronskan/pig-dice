$(document).ready(function() {

  var userTotal = []

  $("#roll").click(function(event){
    event.preventDefault();

    function getRandomInt() {
      return Math.floor((Math.random() * 6) + 1);
    }

    $("#rollresult").empty();
    $("#turnTotal").empty();
    userTotal.push(getRandomInt())



    var rollTotal = 0
      for(var index = 0; index < userTotal.length; index += 1) {
        $("#rollresult").text(userTotal[index]);
        rollTotal += userTotal[index];
      }


    $("#turnTotal").text(rollTotal);


      console.log(rollTotal);



    // userTotal.push(parseInt("#rollresult"));
    //     console.log("#rollresult");
  });


    // console.log(userTotal);
})
