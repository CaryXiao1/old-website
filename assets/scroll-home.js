/* scroll-home.js
   author:       Cary Xiao
   last updated: 8-Jan-2022

   This file contains code to enable the card functionality and centering 
   for the main title card on the home page. 
*/

$(document).ready( function () {
    resizeCardContent();
    // centers portfolio container & makes card contents visible if needed
    recenter();

    // set adaptive font size for main text
    textFit(document.getElementById('main-text'), {multiLine: true, minFontSize: 14, maxFontSize: 21});
    // document.getElementById("main-text").style.width = (document.getElementById("page-0").clientWidth - document.getElementById("main-bust").clientWidth) - 50 + "px";
      
  });
  
  // TODO: fix resize height thing not working on non-front page cards
  
  let pageNum = 0;
  let animating = false;
  // When the user clicks on the button, animate and change page that is shown to user
  function cardUp() {
    if (!animating && pageNum > 0) {
      animating = true;
      $("#page-" + pageNum).animate({
        top: '100vh'
      }, 400, function() {
        document.getElementById("page-" + pageNum).setAttribute("hidden", true);
        document.getElementById("page-" + pageNum).style.top = 0;
        pageNum--;
        var targetNum = (pageNum != 0) ? 0 : window.innerHeight / 2.8 - (document.getElementById("page-0").clientHeight / 2);
        document.getElementById("d-arr-wrap").removeAttribute("hidden");
        document.getElementById("page-" + pageNum).style.top = '-100vh';
        document.getElementById("page-" + pageNum).removeAttribute("hidden");
        if (targetNum != 0) {
          var left = 0;
          document.getElementById("page-0").style.left = left + "px";
          left = window.innerWidth / 2 - (document.getElementById("page-0").clientWidth / 2); 
          document.getElementById("page-0").style.left = left + "px";
        }
        $('#page-' + pageNum).animate({
          top: targetNum
        }, 400, function() {
          animating = false;
        })
      })
    
      if (pageNum == 1) {
        document.getElementById("u-arr-wrap").setAttribute("hidden", true);
      }
    }
  }
  
  function cardDown() {
    if (!animating && pageNum < 2) {
      animating = true;
      $("#page-" + pageNum).animate({
        top: '-100vh'
        }, 400, function() {
          document.getElementById("page-" + pageNum).setAttribute("hidden", true);
          document.getElementById("page-" + pageNum).style.top = 0;
          pageNum++;
          document.getElementById("u-arr-wrap").removeAttribute("hidden");
          document.getElementById("page-" + pageNum).removeAttribute("hidden");
          document.getElementById("page-" + pageNum).style.top = '100vh';
  
          $('#page-' + pageNum).animate({
            top: 0
          }, 400, function () {
            animating = false;
          })
      })
      if (pageNum == 1) {
        document.getElementById("d-arr-wrap").setAttribute("hidden", true);
      }
    }
  }
  
  function resizeCardContent() {
    let cardPage = document.getElementsByClassName('card-page');
    for (var i = 0; i < cardPage.length; i++) {
      cardPage[i].style.maxHeight = (window.innerHeight - 180) + "px"; // 90 = spacing-unit * 3
    }
  }
  
  function recenter() {
      // centers portfolio container
      document.getElementById("page-0").style.left = "0" + "px";
      var top = window.innerHeight / 2 - (document.getElementById("page-0").clientHeight / 2);
      var left = window.innerWidth / 2 - (document.getElementById("page-0").clientWidth / 2); 
      document.getElementById("page-0").style.top = top + "px";
      document.getElementById("page-0").style.left = left + "px";
      document.getElementById("main-bust").style.maxWidth = (document.getElementById("page-0").clientWidth * 0.45 - 35) + "px";
      // set max width for main-bust
      // document.getElementById("main-bust").style.maxWidth = (document.getElementById("page-0").clientWidth * 0.45 - 35) + "px";
  }
  
  $(document).keydown(function(e) {
    switch (e.which) {
      case 38: //up arrow key
        cardUp();
        break;
      case 40: //bottom arrow key
        cardDown();
        break;
      }
  
  });
  
  // use jQuery resize for textFit because window has bug resizing when placed in JS .onresize
  $(window).resize(function() { 
    textFit(document.getElementById('main-text'), {multiLine: true, minFontSize: 14, maxFontSize: 21});
    // document.getElementById("main-text").style.width = (document.getElementById("page-0").clientWidth - document.getElementById("main-bust").clientWidth) - 100 + "px";
      
  });
  
  window.onresize = function() {
    resizeCardContent();
    recenter();
  };