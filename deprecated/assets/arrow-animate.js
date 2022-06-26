/* arrow-animate.js
   author:       Cary Xiao
   last updated: 8-Jan-2022

   This file enables the up and down arrows on the
   home page to animate up and down.
*/

(function arrowDownLoop() {
    $('#d-arr').animate({'bottom': '30'}, {
      duration: 1000,
      complete: function() {
        $('#d-arr').animate({bottom: 15}, {
          duration: 1000,
          complete: arrowDownLoop});
      }})
  })();

  // animate up buttons
  (function arrowUpLoop() {
    $('#u-arr').animate({'top': '30'}, {
      duration: 1000,
      complete: function() {
        $('#u-arr').animate({top: 15}, {
          duration: 1000,
          complete: arrowUpLoop});
      }})
  })();