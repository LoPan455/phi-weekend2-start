$(document).ready(function(){

    // Upon page load, get the data from the server
    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
        // yay! we have data!
        console.log('returned data from server: ', data);
        console.log('the length of the array I found is: ',data.phirephiters.length);
        writeShoutOutsToDom(data.phirephiters);
        buildIndicatorUnits(data.phirephiters);
        toggleHighlighting();

        //next button click event handler
        $('#nextButton').on('click',function(){
          toggleHighlighting();
          clickNumber++;
          if(clickNumber > data.phirephiters.length - 1){
              clickNumber = 0;
            };
          $('#thePhirephitersList').empty();
          writeShoutOutsToDom(data.phirephiters);
          toggleHighlighting();
        });

        //previous button click event handler
        $('#prevButton').on('click',function(){
          toggleHighlighting();
          clickNumber--;
          if(clickNumber < 0){
              clickNumber = data.phirephiters.length - 1;
          };
          console.log('the value of clickNumber is: ',clickNumber);
          $('#thePhirephitersList').empty();
          writeShoutOutsToDom(data.phirephiters)
          toggleHighlighting();
        });
      }
  });
});

var clickNumber = 0

//append the DOM to write out the key values for each object in the source array
function writeShoutOutsToDom(array){
    var minimizedName = array[clickNumber].name.replace(/\s/g,''); //remove spaces in array[i].name key values to use in HTML id attrtibutes
    $('#thePhirephitersList').append('<h2 class="name" id="'+minimizedName+'">Name: '+array[clickNumber].name+'</h2>');
    $('#thePhirephitersList').append('<p class="gitUserName" id="'+array[clickNumber].git_username+'">git_username: '+array[clickNumber].git_username+'</p>');
    $('#thePhirephitersList').append('<p class="shoutout">shoutout: '+array[clickNumber].shoutout+'</p>');
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

//end
