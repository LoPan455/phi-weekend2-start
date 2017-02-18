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

        //next button click event handler
        $('#nextButton').on('click',function(){
            clickNumber++;
            console.log('the value of clickNumber is: ',clickNumber);
            $('#thePhirephitersList').empty();
            writeShoutOutsToDom(data.phirephiters)
        });

        //previous button click event handler
        $('#prevButton').on('click',function(){
            clickNumber--;
            console.log('the value of clickNumber is: ',clickNumber);
            $('#thePhirephitersList').empty();
            writeShoutOutsToDom(data.phirephiters)
        });
      }
  });
});

var clickNumber = 0

//append the DOM to write out the key values for each object in the source array
function writeShoutOutsToDom(array){
    var i = clickNumber
    var minimizedName = array[i].name.replace(/\s/g,''); //remove spaces in array[i].name key values to use in HTML id attrtibutes
    $('#thePhirephitersList').append('<h2 class="name" id="'+minimizedName+'">Name: '+array[i].name+'</h2>');
    $('#thePhirephitersList').append('<p class="gitUserName" id="'+array[i].git_username+'">git_username: '+array[i].git_username+'</p>');
    $('#thePhirephitersList').append('<p class="shoutout">shoutout: '+array[i].shoutout+'</p>');
  }



//in progress:  the "number-in-the-batch" visual indicator
function buildIndicatorUnits(array){
  for (var i = 0; i < array.length; i++) {
    $('#progressIndicator').append('<div class="indicatorUnit" id="'+array[i]'"></div>')
  }
}
