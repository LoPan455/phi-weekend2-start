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
      }
    });
});

//append the DOM to write out the key values for each object in the source array
function writeShoutOutsToDom(array){
  for (var i = 0; i < array.length; i++) {
    var minimizedName = array[i].name.replace(/\s/g,''); //remove spaces in array[i].name key values to use in HTML id attrtibutes
    $('#thePhirephitersList').append('<p class="name" id="'+minimizedName+'">name: '+array[i].name+'<p>');
    $('#thePhirephitersList').append('<p class="shoutout" id="'+array[i].git_username+'">git_username: '+array[i].git_username+'<p>');
    $('#thePhirephitersList').append('<p class="shoutout">shoutout: '+array[i].shoutout+'<p>');
  }
}
