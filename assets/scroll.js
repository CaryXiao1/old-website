
$(document).ready( function () {
  // centers portfolio container
  let top = window.innerHeight / 2 - (document.getElementById("page-0").clientHeight / 2);
  let left = 0; // window.innerWidth / 2 - (document.getElementById("portfolio-center").clientWidth / 2); 
  document.getElementById("page-0").style.top = top + "px";
  document.getElementById("page-0").style.left = left + "px";

  left =  window.innerWidth / 2 - (document.getElementById("page-0").clientWidth / 2);
  document.getElementById("page-0").style.left = left + "px";
});

let pageNum = 0;
// When the user clicks on the button, animate and change page that is shown to user
function cardUp() {
  if (pageNum > 0) {
    $("#page-" + pageNum).animate({
      top: '70em'
    }, 400, function() {
      document.getElementById("page-" + pageNum).setAttribute("hidden", true);
      document.getElementById("page-" + pageNum).style.top = 0;
      pageNum--;
      var targetNum = (pageNum != 0) ? 0 : window.innerHeight / 2.8 - (document.getElementById("page-0").clientHeight / 2);
      if (targetNum != 0) 
      document.getElementById("d-arr-wrap").removeAttribute("hidden");
      document.getElementById("page-" + pageNum).style.top = '-70em';
      document.getElementById("page-" + pageNum).removeAttribute("hidden");
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
      top: '-70em'
      }, 400, function() {
      document.getElementById("page-" + pageNum).setAttribute("hidden", true);
      document.getElementById("page-" + pageNum).style.top = 0;
      pageNum++;
      document.getElementById("u-arr-wrap").removeAttribute("hidden");
      document.getElementById("page-" + pageNum).removeAttribute("hidden");
      document.getElementById("page-" + pageNum).style.top = '70em';

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
  // centers portfolio container
  document.getElementById("page-0").style.left = "0" + "px";
  var top = window.innerHeight / 2 - (document.getElementById("page-0").clientHeight / 2);
  var left = window.innerWidth / 2 - (document.getElementById("page-0").clientWidth / 2); 
  document.getElementById("page-0").style.top = top + "px";
  document.getElementById("page-0").style.left = left + "px";
  document.getElementById("page-0").removeAttribute("hidden");
  
};