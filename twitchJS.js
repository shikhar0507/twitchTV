$(document).ready(function(){
  
$.getJSON("https://api.twitch.tv/kraken/streams/freecodecamp?callback=?", function(json) {
  $("#demo").html(json);
    
});
   });