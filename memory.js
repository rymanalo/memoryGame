function shuffle(o){
    for(var j, x, i = o.length; i; j = parseInt((Math.random() * i), 10), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  }

$(document).ready(function() {
  var count=0;
  var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

  function timer()
  {
    count=count+1;
    var gameEnd = false;
    if (gameEnd === true)
    {
       clearInterval(counter);
       //counter ended, do something here
       return;
    }
   document.getElementById("timer").innerHTML=count; // watch for spelling
    //Do code for showing the number of seconds here
  }


  var gameContainer = $('#game');
  var numRows = 2;
  var numCols = 5;
  var numTiles = numRows * numCols;
  var myArray = ['A','B','C','D','E','A','B','C','D', 'E'];
  var newArray = shuffle(myArray);
  var matched = $('.matched');
  // Game ends when matched.length === 0;
  // var revealed = [];
  // var equalTiles = [];

  for(var tileCounter = 0; tileCounter < numTiles; tileCounter += 1) {
    var tile = $("<div class='tiles' id="
            + (tileCounter + 1)
            + "> <span class='hidden'>"
            + newArray[tileCounter]
            + "</span></div>");
    console.log('generating tile');
    gameContainer.append(tile);
   }


  // build a function where comparing the two different values
  // addClass('hidden'), if matching

  $('.tiles').on('click', function(){
    var revealed = $('.revealed');
    $(this).children().addClass('revealed');
    if (revealed.length === 0){
      console.log($(this).children().addClass('revealed'));
    }
    else if (revealed.length){
      $(this).children().addClass('revealed');


      if(revealed[0].innerText === $(this).children().html()){
        console.log('match checking');
        revealed.addClass('matched');
        console.log(revealed[0]);
        console.log($(this).children().addClass('matched'));
        revealed.removeClass('revealed');
        $(this).children().removeClass('revealed');
        revealed.unbind('click');
        $(this).children().unbind('click');
      }
      else{
        console.log('not match');
          if (revealed.length === 2) {
        $(this).children().removeClass('revealed');
        revealed.removeClass('revealed');
        }
      }
    }
  });

    // $(this).children().addClass('revealed');
    // $('.tiles').on('click', function(){
    //   $(this).children().removeClass('hidden');


  // if(matched.length === numTiles){
  //   gameEnd = true;
  // }
      // equalTiles.push($(this).children()['context']['innerText']);
      // // console.log($(this).children()['context']['innerText']);
      // console.log(equalTiles);
      // if(equalTiles[0]===equalTiles[1]){
      //   revealed.push(equalTiles[0], equalTiles[1])
      //   // console.log(revealed);

});