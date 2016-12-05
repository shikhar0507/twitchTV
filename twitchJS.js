var stream_channel = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin","comster404","outerheaven"];
var i ="";
for (i=0;i < stream_channel.length;i++) {
      
     var add = stream_channel[i];
      var list = document.getElementById("content");
      
    
      $.getJSON("https://wind-bow.hyperdev.space/twitch-api/streams/"+add+"?callback=?",function(data){
        var x = JSON.stringify(data.stream);
        
        
        if (data.status ==404) {
            var error_sel = document.getElementById("error");
          error_sel.innerHTML += data.message +"<br>";
        }
        $("#error").css("color","red");
        
        //if channel is offline
        if (x == "null") {
         var offlinelist = document.getElementById("offline");
         var channelName = JSON.stringify(data._links.channel).replace(/\"/g,"").split("https://api.twitch.tv/kraken/channels/").join(""); 
     
          
        offlinelist.innerHTML += "<br>" +"<a href=https://twitch.tv/" +"<span style='position:relative;margin-right:950px;'>" +channelName+"</span>"+"</a>"+"offline"+"<hr>";  
          
          
         $("#offline").css("color","red"); 
         $("#offline").css("background-color","white");
          
        }
        
        // if channel is online 
        
        else if (x != null) {
          
          var onlinelist = document.getElementById("online");
          var channelName_online = JSON.stringify(data.stream.channel.display_name).replace(/\"/g,"");
          var imageLink = JSON.stringify(data.stream.channel.logo);
          onlinelist.innerHTML += "<br>"+ "<img src="+imageLink +">"+ "  <a href="+JSON.stringify(data.stream.channel.url)+">"+   channelName_online+"</a>" +"<span style='postition:relative; margin-left:500px;'>"+JSON.stringify(data.stream.game).replace(/\"/g,"")+"<br>"+"Viewers: " +JSON.stringify(data.stream.viewers) +"</span>" +"<br>" +"<hr>"; 
          
          
          $("#online").css("color","green");
          
          $("img").attr("width","60px");
        }
        
        
       $("#content").css("color","blue");
       
        
      });
  

}

$("#btn_all").on("click",function(){
    $("#online,#offline").each(function(){
      $(this).show("fast");
      $("#online").css("color","green");
      $("body").css("background-color","white");
      $("#btn_online").css("background-color","green");
      $("#btn_online").css("color","white");
    });
});

$("#btn_online").on("click",function(){
      $("#online").css("color","white");
      $("body").css("background-color","green");
      $("#offline").hide("fast");
      $("#online").show("fast");
      $("#btn_online").css("background-color","white");
      $("#btn_online").css("color","green");
  
});
$("#btn_offline").on("click",function(){
      $("body").css("background-color","white");
      $("#online").hide("fast");
      $("#offline").show("fast");
         
  
});
