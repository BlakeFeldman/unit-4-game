// Make the HTML load prior to the Javascript

$( document ).ready(function(){

// Generate a random number score to match

    var Random=Math.floor(Math.random()*102+19)
    
// Display score to match

    $('#scoreToMatch').text(Random);
    
// Generate random number for each crystal

    var num1= Math.floor(Math.random()*12+1)
    var num2= Math.floor(Math.random()*12+1)
    var num3= Math.floor(Math.random()*12+1)
    var num4= Math.floor(Math.random()*12+1)
    
// User Interface Variables to "Push" to a display (i.e. wins, losses and total)

    var playerTotal= 0; 
    var wins= 0;
    var losses = 0;
    
  
  $('#wins').text(wins);
  $('#losses').text(losses);
  
// Reset the game

  function reset(){
        Random=Math.floor(Math.random()*102+19);
        console.log(Random)
        $('#scoreToMatch').text(Random);
        num1= Math.floor(Math.random()*12+1);
        num2= Math.floor(Math.random()*12+1);
        num3= Math.floor(Math.random()*12+1);
        num4= Math.floor(Math.random()*12+1);
        playerTotal= 0;
        $('#totalScore').text(playerTotal);
        } 

// Display win total

  function woohoo(){
  alert("Congrats! You won!");
    wins++; 
    $('#wins').text(wins);
    reset();
  }

  // Display loss total

  function loser(){
  alert ("Sorry! You lose!");
    losses++;
    $('#losses').text(losses);
    reset()
  }

  // Button functionality for on click event for each crystal 

  // Red crystal functionality

    $('.red').on ('click', function(){
      playerTotal = playerTotal + num1;
      console.log("New playerTotal= " + playerTotal);
      $('#totalScore').text(playerTotal);

    //Win & loss condition if score to match is reached on click event for red crystal
          if (playerTotal == Random){
            woohoo();
          }
          else if ( playerTotal > Random){
            loser();
          }   
    })
    
    // Blue cyrstal functionality

    $('.blue').on ('click', function(){
      playerTotal = playerTotal + num2;
      console.log("New playerTotal= " + playerTotal);
      $('#totalScore').text(playerTotal);
      
    // Win & loss condition if score to match is reached on click event for blue crystal
          if (playerTotal == Random){
            woohoo();
          }
          else if ( playerTotal > Random){
            loser();
          } 
    })  

    // Yellow crystal functionality

    $('.yellow').on ('click', function(){
      playerTotal = playerTotal + num3;
      console.log("New playerTotal= " + playerTotal);
      $('#totalScore').text(playerTotal);

    // Win & loss condition if score to match is reached on click event for yellow crystal
  
            if (playerTotal == Random){
            woohoo();
          }
          else if ( playerTotal > Random){
            loser();
          } 
    })
    
    // Green crystal functionality

    $('.green').on ('click', function(){
      playerTotal = playerTotal + num4;
      console.log("New playerTotal= " + playerTotal);
      $('#totalScore').text(playerTotal);
    
    // Win & loss condition if score to match is reached on click event for green crystal
        
            if (playerTotal == Random){
            woohoo();
          }
          else if ( playerTotal > Random){
            loser();
          }
    });   
  });
   