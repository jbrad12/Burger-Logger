$(function() {
    $(".devour").on("click", function(event) {
        id = $(this).data("id");
    $.ajax("/api/burgers/" + id, {
         type: "PUT",
        
          }).then(
            function() {
            
              location.reload();
            }
          );



    })
})