// Add scroll to top feature

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.querySelector("#button").style.display = "block";
  } else {
    document.querySelector("#button").style.display = "none";
  }
}

function backToTop() {
  document.documentElement.scrollTop = 0;
}