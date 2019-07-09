$(document).ready(function() {

  var userTotal = []

  $("#roll").click(function(event){
    event.preventDefault();

    function getRandomInt() {
      return Math.floor((Math.random() * 6) + 1);
    }

    $("#rollresult").empty();
    userTotal.push(getRandomInt())

    var rollLog = 0;
      for(var index = 0; index < userTotal.length; index += 1) {
        $("#rollresult").text(userTotal[index]);
      }

    var rollTotal = 0
      for(var index = 0; index < userTotal.length; index += 1) {
        rollTotal += userTotal[index];
      }

    $("#turnTotal").empty();  
    $("#turnTotal").text(rollTotal);


      console.log(rollTotal);



    // userTotal.push(parseInt("#rollresult"));
    //     console.log("#rollresult");
  });


    // console.log(userTotal);
})
