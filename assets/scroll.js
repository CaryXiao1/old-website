
$(document).ready( function () { // TODO: copied code from window.onresize; potentially think of less line-code
  // corrects part of screen that user should be on during window resize
  // document.body.scrollTop = pageNum * window.innerHeight;
  // document.documentElement.scrollTop = pageNum * window.innerHeight;

  // resize window if on mobile
  /*  if(window.matchMedia("(max-width: 767px)").matches){
    // The viewport is less than 768 pixels wide
    alert("This is a mobile device.");
    window.visualViewport
  } */
  

  // centers portfolio container
  let top = window.innerHeight / 2 - (document.getElementById("portfolio-center").clientHeight / 2);
  let left = 0; // window.innerWidth / 2 - (document.getElementById("portfolio-center").clientWidth / 2); 
  document.getElementById("portfolio-center").style.top = top + "px";
  document.getElementById("portfolio-center").style.left = left + "px";

  left =  window.innerWidth / 2 - (document.getElementById("portfolio-center").clientWidth / 2);
  document.getElementById("portfolio-center").style.left = left + "px";
});

let pageNum = 0;
// When the user clicks on the button, change page that is shown to user
function cardUp() {
  if (pageNum > 0) {
    document.getElementById("page-" + pageNum).setAttribute("hidden", true);
    pageNum--;
    document.getElementById("page-" + pageNum).removeAttribute("hidden");
    document.getElementById("d-arr-wrap").removeAttribute("hidden");

    if (pageNum == 0) {
      document.getElementById("u-arr-wrap").setAttribute("hidden", true);
    }
  }
}
function cardDown() {
  if (pageNum < 2) {
    document.getElementById("page-" + pageNum).setAttribute("hidden", true);
    pageNum++;
    document.getElementById("page-" + pageNum).removeAttribute("hidden");
    document.getElementById("u-arr-wrap").removeAttribute("hidden");

    if (pageNum == 2) {
      document.getElementById("d-arr-wrap").setAttribute("hidden", true);
    }
  }

  
  //document.body.scrollTop += window.innerHeight;
  //document.documentElement.scrollTop += window.innerHeight;
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

window.onresize = function() {
  // corrects part of screen that user should be on during window resize
  document.body.scrollTop = pageNum * window.innerHeight;
  document.documentElement.scrollTop = pageNum * window.innerHeight;

  // centers portfolio container
  document.getElementById("portfolio-center").style.left = "0" + "px";
  var top = window.innerHeight / 2 - (document.getElementById("portfolio-center").clientHeight / 2);
  var left = window.innerWidth / 2 - (document.getElementById("portfolio-center").clientWidth / 2); 
  document.getElementById("portfolio-center").style.top = top + "px";
  document.getElementById("portfolio-center").style.left = left + "px";
  document.getElementById("portfolio-center").removeAttribute("hidden");
  
};