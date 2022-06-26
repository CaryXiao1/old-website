/* resize.js
   author:       Cary Xiao
   last updated: 8-Jan-2022

   This file contains all the resize functionality used 
   on all pages.
*/

$(document).ready( function () {
  // Correct viewport for mobile: First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  resizeCardContent();
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);    
});

// resizes card-page so that it is always above the footer
function resizeCardContent() {
  let cardPage = document.getElementsByClassName('card-page');
  // footer changes based off svg size, so get width:
  let svgWidth = document.getElementById("email").clientHeight;  
  // alert(svgWidth);
  for (var i = 0; i < cardPage.length; i++) {
    cardPage[i].style.maxHeight = (window.innerHeight - 75 - svgWidth * 3) + "px"; // 90 = spacing-unit * 3

    // TODO: think about size of svg
  }
}

$( window ).resize(function() {
  resizeCardContent();
  // change viewport
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
   
  document.body.style.height = 'calc(var(--vh, 1vh) * 100)';
  document.body.style.minHeight = 'calc(var(--vh, 1vh) * 100)';
});
