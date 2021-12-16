// animate down buttons
(function arrowDownLoop1() {
    $('#d-arr-1').animate({'bottom': '45'}, {
      duration: 1000,
      complete: function() {
        $('#d-arr-1').animate({bottom: 25}, {
          duration: 1000,
          complete: arrowDownLoop1});
      }})
  })();
  (function arrowDownLoop2() {
    $('#d-arr-2').animate({'bottom': '45'}, {
      duration: 1000,
      complete: function() {
        $('#d-arr-2').animate({bottom: 25}, {
          duration: 1000,
          complete: arrowDownLoop2});
      }})
  })();

  // animate up buttons
  (function arrowUpLoop1() {
    $('#u-arr-1').animate({'top': '45'}, {
      duration: 1000,
      complete: function() {
        $('#u-arr-1').animate({top: 25}, {
          duration: 1000,
          complete: arrowUpLoop1});
      }})
  })();
  (function arrowUpLoop2() {
    $('#u-arr-2').animate({'top': '45'}, {
      duration: 1000,
      complete: function() {
        $('#u-arr-2').animate({top: 25}, {
          duration: 1000,
          complete: arrowUpLoop2});
      }})
  })();