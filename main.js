(function($){

  $(document).ready(function() {

    var audio = new Audio("sound.mp3");

    $("#messages .message:nth-of-type(1)").delay(1000).show(0, function() {
      audio.play();
      $("html, body").animate({ scrollTop: $(document).height() }, 1000);
    });

    $("#messages .message:nth-of-type(2)").delay(3000).show(0,  function() {
      audio.currentTime = 0;
      audio.play();
      $("html, body").animate({ scrollTop: $(document).height() }, 1000);
    });

    $("#messages .message:nth-of-type(3)").delay(5000).show(0,  function() {
      audio.currentTime = 0;
      audio.play();
      $("html, body").animate({ scrollTop: $(document).height() }, 1000);
    });

    $("#messages .message:nth-of-type(4)").delay(7000).show(0,  function() {
      audio.currentTime = 0;
      audio.play();
      $("html, body").animate({ scrollTop: $(document).height() }, 1000);
    });

    $("#messages .message:nth-of-type(5)").delay(9000).show(0,  function() {
      audio.currentTime = 0;
      audio.play();
      $("html, body").animate({ scrollTop: $(document).height() }, 1000);
    });

    $("#messages .message:nth-of-type(6)").delay(9000).hide(0);

  });

})(jQuery);
