function shuffle(o){
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
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
// var tileCounter = 1;
var myArray = ['A','B','C','D','E','A','B','C','D', 'E'];
var newArray = shuffle(myArray);

for(var tileCounter = 0; tileCounter < numTiles; tileCounter += 1) {
  var tile = $("<div class='tiles' id="
          + (tileCounter + 1)
          + "> <span class='hidden'>"
          + newArray[tileCounter]
          + "</span></div>");
  console.log('generating tile');
  gameContainer.append(tile);
 }

$('.tiles').on('click', function(){
  $(this).children().removeClass('hidden');
});



});
