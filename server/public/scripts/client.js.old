$(document).ready(function(){

    // Upon page load, get the data from the server
    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
        // yay! we have data!
        var phirephitersArray = data.phirephiters
        writeShoutOutsToDom(phirephitersArray);
        buildIndicatorUnits(phirephitersArray);
        toggleHighlighting();

        //next button click event handler
        $('#nextButton').on('click',function(){
          goToNextThankYou(phirephitersArray);
        });

        //previous button click event handler
        $('#prevButton').on('click',function(){
          goToPrevThankYou(phirephitersArray);
        });
        //sets the interval to execute the same code as the next button. create the slide-show effect
        setInterval(function(){goToNextThankYou(phirephitersArray);},slideShowInterval);
      }

  });
});

var clickNumber = 0
var slideShowInterval = 5000

//append the DOM to write out the key values for ONE object in the source array.
//The object to be written is found at the index bound to the clickNumber
function writeShoutOutsToDom(array){
    $('#thePhirephitersList').append('<p class="thankYouContent" id="personName">Name: '+array[clickNumber].name+'</p>');
    $('#thePhirephitersList').append('<p class="thankYouContent" id="personGitUserName">git_username: '+array[clickNumber].git_username+'</p>');
    $('#thePhirephitersList').append('<p class="thankYouContent" id="personShoutout">shoutout: '+array[clickNumber].shoutout+'</p>');
    $('#thePhirephitersList').fadeIn();
    //$('#thePhirephitersList').append('<img src="'+array[clickNumber].image+'" alt="person image" />');
  }

// builds the visual indicator elements
function buildIndicatorUnits(array){
  for (var i = 0; i < array.length; i++) {
    $('#progressIndicator').append('<div class="indicatorUnit" data-indexnumber="'+i+'"></div>')
  }
}

//changes the highlighted indicator box
function toggleHighlighting(){
  $('[data-indexnumber="'+clickNumber+'"]').toggleClass('highlight');
}

function goToNextThankYou(array){

  toggleHighlighting();
  clickNumber++;
  if(clickNumber > array.length - 1){
      clickNumber = 0;
    };
  $('#thePhirephitersList').fadeOut()
  $('#thePhirephitersList').empty();
  writeShoutOutsToDom(array);
  toggleHighlighting();
  }

function goToPrevThankYou(array){
  toggleHighlighting();
  clickNumber--;
  if(clickNumber < 0){
      clickNumber = array.length - 1;
    };
  $('#thePhirephitersList').empty();
  writeShoutOutsToDom(array)
  toggleHighlighting();
}
//end
