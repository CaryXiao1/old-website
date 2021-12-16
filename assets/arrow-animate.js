// animate down buttons
(function arrowDownLoop() {
    $('#d-arr').animate({'bottom': '45'}, {
      duration: 1000,
      complete: function() {
        $('#d-arr').animate({bottom: 25}, {
          duration: 1000,
          complete: arrowDownLoop});
      }})
  })();


  // animate up buttons
  (function arrowUpLoop() {
    $('#u-arr').animate({'top': '45'}, {
      duration: 1000,
      complete: function() {
        $('#u-arr').animate({top: 25}, {
          duration: 1000,
          complete: arrowUpLoop});
      }})
  })();
