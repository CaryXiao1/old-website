$(document).ready( function () { // TODO: copied code from window.onresize; potentially think of less line-code
    // corrects part of screen that user should be on during window resize
    document.body.scrollTop = pageNum * window.innerHeight;
    document.documentElement.scrollTop = pageNum * window.innerHeight;

    // centers portfolio container
    let top = window.innerHeight / 2 - (document.getElementById("portfolio-center").clientHeight / 2);
    let left = window.innerWidth / 2 - (document.getElementById("portfolio-center").clientWidth / 2); 
    document.getElementById("portfolio-center").style.top = top + "px";
    document.getElementById("portfolio-center").style.left = left + "px";

    // resize svg icons
    /*
    var shrinkSize = min(window.innerHeight * 0.08, window.innerWidth * 0.10);
    var newWidth = max(60, shrinkSize);
    var newHeight = max(50, shrinkSize);
    var x = document.getElementsByClassName("svg-icon");
    for (i = 0; i < x.length; i++) {
      x[i].style.width = newWidth;
      x[i].style.height = newHeight;
    }*/
  });
  
  
  let pageNum = 0;
  // When the user clicks on the button, change page that is shown to user
  function cardUp() {
    pageNum--;
    document.body.scrollTop -= window.innerHeight;
    document.documentElement.scrollTop -= window.innerHeight;
  }
  function cardDown() {
    pageNum++;
    document.body.scrollTop += window.innerHeight;
    document.documentElement.scrollTop += window.innerHeight;
  }

  window.onresize = function() {
    // corrects part of screen that user should be on during window resize
    document.body.scrollTop = pageNum * window.innerHeight;
    document.documentElement.scrollTop = pageNum * window.innerHeight;

    // centers portfolio container
    var top = window.innerHeight / 2 - (document.getElementById("portfolio-center").clientHeight / 2);
    var left = window.innerWidth / 2 - (document.getElementById("portfolio-center").clientWidth / 2); 
    document.getElementById("portfolio-center").style.top = top + "px";
    document.getElementById("portfolio-center").style.left = left + "px";

    // make portfolio text take up rest of box
    //var width = document.getElementById("portfolio-center").clientWidth - document.getElementById("main-bust").clientWidth - 25;
    //document.getElementById("main-text").style.width = width + "px";

    // update man div width - doesn't work correctly with javascript changing text width
    //width = min(625, window.innerWidth /)
    //document.getElementById("portfolio-center").clientWidth = width + "px";
    
  };
