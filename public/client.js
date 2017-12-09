var socket = io.connect();
$(document).ready(function(){
  $('.field').on('keypress', function(e) {
      var code = e.keyCode || e.which;
      if(code==13){
        $(".text").animate({"opacity":"0"});
        $("#searchBar").animate({"margin":"2em"});
        $(".text").slideUp({duration: 1000, queue: false});
        $("#searchBar").prop("readonly", true);
        var name = document.getElementById("searchBar").value;
        socket.emit("given", {searched:name});
        socket.on("returned", function(data){
          console.log("hello",data+"!")
        });
      }
  });
});
