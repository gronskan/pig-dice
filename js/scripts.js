function Player () {
  this.currentRoll
  this.turnTotal
  this.totalScore
}

var player1 = new Player
var player2 = new Player

player1Turn = true



$(document).ready(function() {

  var currentRoll = []

  $("#roll").click(function(event){
    event.preventDefault();
    if (player1Turn === true) {
    function getRandomInt() {
      return Math.floor((Math.random() * 6) + 1);
    }

    $("#rollresult").empty();
    $("#turnTotal").empty();
    currentRoll.push(getRandomInt())
    player1.turnTotal += rollTotal
    } else  {
      function getRandomInt() {
        return Math.floor((Math.random() * 6) + 1);
      }

      $("#rollresult").empty();
      $("#turnTotal").empty();
      currentRoll.push(getRandomInt())
      player2.turnTotal += rollTotal


  }



    var rollTotal = 0
      for(var index = 0; index < currentRoll.length; index += 1) {
        $("#rollresult").text(currentRoll[index]);
        if (currentRoll[index] === 1) {
          rollTotal -= rollTotal;
          $("#turnOver").show();
          $("#turnContinue").hide();
        } else {
          rollTotal += currentRoll[index];
          console.log(rollTotal);
        };
      };

      $("#hold").click(function() {
        if (player1Turn === true) {
          player1.totalScore += rollTotal
        $("#player1Score").text(player1.totalScore);
      } else {
        player2.totalScore += rollTotal
        $("#player2Score").text(player2.totalScore);
        player1Turn = !player1Turn
      }
      });


    $("#turnTotal").text(rollTotal);


  });

    // console.log(userTotal);
})
