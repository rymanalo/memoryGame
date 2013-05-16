# shuffle = (o) ->
#     j, x, i = o.length for i in j = parseInt((Math.random() * i), 10), x = o[--i], o[i] = o[j], o[j] = x
#     return o


$(document).ready ->
  count = 0
  counter = setInterval(timer, 1000)

  timer = ->
    count += 1
    gameEnd = false
    if gameEnd == true
      clearInterval(counter)
      return
    document.getElmentById("timer").innerHTML = count

  gameContainer = $('#game')
  numRows = 2
  numCols = 5
  numTiles = numRows * numCols;
  myArray = ['A','B','C','D','E','A','B','C','D', 'E']
  newArray = shuffle(myArray)
  matched = $('.matched')

  # tileCounter for tileCounter in tileCounter < numTiles

  tileCounter = 0 for tile in  tileCounter < numTiles
  gameContainer.append(tile)  $("<div class='tiles' id="
              + (tileCounter + 1)
              + "> <span class='hidden'>"
              + newArray[tileCounter]
              + "</span></div>")


  $('.tiles').on('click', =>
    revealed = $('.revealed')
    $(this).children().addClass('revealed')
    if revealed.length == 0
      console.log($(this).children().addClass('revealed'))
    else if (revealed.length)
      $(this).children().addClass('revealed')
      if revealed[0].innerText == $(this).children().html()
        console.log('match checking')
        revealed.addClass('matched')
        console.log(revealed[0])
        console.log($(this).children().addClass('matched'))
        revealed.removeClass('revealed')
        $(this).children().removeClass('revealed')
        revealed.unbind('click')
        $(this).children().unbind('click')
      else
        console.log('not match')
        if (revealed.length == 2)
          $(this).children().removeClass('revealed')
          revealed.removeClass('revealed'))