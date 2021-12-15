
$(document).ready( function () { // TODO: copied code from window.onresize; potentially think of less line-code
  // corrects part of screen that user should be on during window resize
  document.body.scrollTop = pageNum * window.innerHeight;
  document.documentElement.scrollTop = pageNum * window.innerHeight;

  // centers portfolio container
  let top = window.innerHeight / 2 - (document.getElementById("portfolio-center").clientHeight / 2);
  let left = 0; // window.innerWidth / 2 - (document.getElementById("portfolio-center").clientWidth / 2); 
  document.getElementById("portfolio-center").style.top = top + "px";
  document.getElementById("portfolio-center").style.left = left + "px";

  left =  window.innerWidth / 2 - (document.getElementById("portfolio-center").clientWidth / 2);
  document.getElementById("portfolio-center").style.left = left + "px";

jQuery("#main-text").fitText(1.35);
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
  document.getElementById("portfolio-center").style.left = "0" + "px";
  var top = window.innerHeight / 2 - (document.getElementById("portfolio-center").clientHeight / 2);
  var left = window.innerWidth / 2 - (document.getElementById("portfolio-center").clientWidth / 2); 
  document.getElementById("portfolio-center").style.top = top + "px";
  document.getElementById("portfolio-center").style.left = left + "px";
  document.getElementById("portfolio-center").removeAttribute("hidden");
  
};