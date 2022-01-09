/* resize.js
   author:       Cary Xiao
   last updated: 8-Jan-2022

   This file contains all the resize functionality used 
   on all pages.
*/

$(document).ready( function () {
  // Correct viewport for mobile: First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);    
});

$( window ).resize(function() {
  // change viewport
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
   
  document.body.style.height = 'calc(var(--vh, 1vh) * 100)';
  document.body.style.minHeight = 'calc(var(--vh, 1vh) * 100)';
});
