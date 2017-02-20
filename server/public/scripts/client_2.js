$(document).ready(function(){

    // Upon page load, get the data from the server
    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
        // yay! we have data!
        var phirephitersArray = data.phirephiters  //gives me a 'nickname' for what I want

        buildShoutOutPeepsArray(phirephitersArray);
        console.log("peopleArray length is: ",peopleArray.length);
        buildTheDOM(peopleArray);
        buildIndicatorUnits(peopleArray);
        toggleHighlighting();

        // //next button click event handler
        $('#nextButton').on('click',function(){
          toggleHighlighting();
          clickNumber++;
          if(clickNumber > phirephitersArray.length - 1){
            clickNumber = 0;
          }

          cyclingThroughPeeps();
          toggleHighlighting();
        })

        $('#prevButton').on('click',function(){
          toggleHighlighting();
          clickNumber--;
          if(clickNumber < 0){
            clickNumber = phirephitersArray.length - 1
          }
          console.log(clickNumber);
          cyclingThroughPeeps();
          toggleHighlighting();
        })
        //   goToNextThankYou(phirephitersArray);
        // });
        //
        // //previous button click event handler
        // $('#prevButton').on('click',function(){
        //   goToPrevThankYou(phirephitersArray);
        // });
        // //sets the interval to execute the same code as the next button. create the slide-show effect
        setInterval(function(){
          toggleHighlighting();
          clickNumber++;
          if(clickNumber > phirephitersArray.length - 1){
            clickNumber = 0;
          }

          cyclingThroughPeeps();
          toggleHighlighting();
        },slideShowInterval);



      }

  });



});

var clickNumber = 0
var slideShowInterval = 5000
var peopleArray = [];



//Build our array of people from the JSON object
function buildShoutOutPeepsArray(array){
  for (var i = 0; i < array.length; i++) {
  peopleArray.push(array[i]);
  }
}

function appendPersonToDom(person){
    $('#thePhirephitersList').append('<p class="thankYouContent" id="personName">Name: '+person.name+'</p>');
    $('#thePhirephitersList').append('<p class="thankYouContent" id="personGitUserName">git_username: '+person.git_username+'</p>');
    $('#thePhirephitersList').append('<p class="thankYouContent" id="personShoutout">shoutout: '+person.shoutout+'</p>');
    //$('#thePhirephitersList').append('<img src="'+person.image+'" alt="person image" />');
}

//writes a person's info to the DOM
function buildTheDOM(array){
  console.log('buildTheDOM called');
    appendPersonToDom(array[clickNumber]);
  }

//What to do after each button press. Clear the Div and write a new person.
function cyclingThroughPeeps(){
  $('#thePhirephitersList').empty();
  buildTheDOM(peopleArray);
}

function buildIndicatorUnits(array){
console.log('running Build inidcator units against: ',array.length);
  for (var i = 0; i < array.length; i++) {
    $('#progressIndicator').append('<div class="indicatorUnit" id="'+i+'"></div>');
    $('#'+i+'').css('background-image','url("'+array[i].image+'")')
    // $('#progressIndicator').text('hey some text')

  }
}

function toggleHighlighting(){
  $('[id="'+clickNumber+'"]').toggleClass('highlight');
}

function nextButtonPress(){

}