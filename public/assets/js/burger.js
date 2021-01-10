$(function() {
    $(".devour").on("click", function() {
        id = $(this).data("id");
    $.ajax("/api/burgers/" + id, {
         type: "PUT",
        
          }).then(
            function() {           
              location.reload();
            }
          );



    })
    $(".submit").on("click", function() {
        var sendData = {burger: $(".input").val().trim()}
    $.ajax("/api/burgers", {
         type: "POST",
         data: sendData
         
         
          }).then(
            setTimeout(function(){ location.reload(); }, 300)
          );



    })
})

