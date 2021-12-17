
$(document).ready( function () {
  // centers portfolio container
  recenter();

  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);

});

// fitText
jQuery("#main-text").fitText(1.4);

let pageNum = 0;
// When the user clicks on the button, animate and change page that is shown to user
function cardUp() {
  if (pageNum > 0) { // TODO: fix onclick spam w/ object bind thingy
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
      }, 400)
    })
    
    if (pageNum == 1) {
      document.getElementById("u-arr-wrap").setAttribute("hidden", true);
    }
  }
}

function cardDown() {
  if (pageNum < 2) {
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
      }, 400)
    })
    // alert(pageNum);
    if (pageNum == 1) {
      document.getElementById("d-arr-wrap").setAttribute("hidden", true);
    }
  }
}

function recenter() {
    // centers portfolio container
    document.getElementById("page-0").style.left = "0" + "px";
    var top = window.innerHeight / 2 - (document.getElementById("page-0").clientHeight / 2);
    var left = window.innerWidth / 2 - (document.getElementById("page-0").clientWidth / 2); 
    document.getElementById("page-0").style.top = top + "px";
    document.getElementById("page-0").style.left = left + "px";
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
 recenter();
 // change viewport stuff
 let vh = window.innerHeight * 0.01;
 document.documentElement.style.setProperty('--vh', `${vh}px`);
};