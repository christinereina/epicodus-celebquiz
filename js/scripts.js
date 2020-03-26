$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    var q1 = parseInt($("#q1").val());
    var q2 = parseInt($("#q2").val());
    var q3 = parseInt($("#q3").val());
    var celebrity = q1+q2+q3+q4+q5+q6;

    if (celebrity = 9) {
      $(".ponyo").show();
      $(".sosuke").hide();
      $(".lisa").hide();
     
    }
    else if (celebrity >= 10 && score <= 15) {
      $(".sosuke").show();
      $(".ponyo").hide();
      $(".lisa").hide();
      
    }
    else if (celebrity >= 15 && score <= 18) {
      $(".lisa").show();
      $(".ponyo").hide();
      $(".sosuke").hide();
      
   
    }
  });

  $(".btn-lang").click(function() {
    var lang = $(this).text().toLowerCase().replace("#", "");
    $(".info-box-wrap").css('display', 'flex');
    $('.info-box').show();
    $("#info-" + lang).show();
  });

  $(".info-box-close").click(function() {
    $(".info-box-wrap").css('display', 'none');
    $('.info-box').hide();
    $(".info-text").hide();
  });
});