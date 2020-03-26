$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    var q1 = parseInt($("#q1").val());
    var q2 = parseInt($("#q2").val());
    var q3 = parseInt($("#q3").val());
    var celebrity = q1+q2+q3;

    if (celebrity < 4 ) {
      $("#ponyo").show();
      $("#sosuke").hide();
      $("#lisa").hide();
     
    }
    else if (celebrity >= 3 && celebrity <= 7) {
      $("#sosuke").show();
      $("#ponyo").hide();
      $("#lisa").hide();
      
    }
    else if (celebrity >= 7 && celebrity <= 10) {
      $("#lisa").show();
      $("#ponyo").hide();
      $("#sosuke").hide();
      
   
    }
  });
});