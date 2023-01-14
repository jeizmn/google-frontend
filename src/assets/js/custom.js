// Hide all elements with class="containerTab", except for the one that matches the clickable grid column
function myTest(tabName) {
    var i, x;
    x = document.getElementsByClassName("containerTab");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
      console.log(x);
    }
    document.getElementById(tabName).style.display = "block";
  }

