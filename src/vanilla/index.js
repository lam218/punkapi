window.onload = () => {
  var acc = document.getElementsByClassName("accordion"),
    i,
    j;

  for (i = 0; i < acc.length; i++) {
    var h2El = acc[i].getElementsByTagName("h2");
    var size = h2El.length;

    for (j = 0; j < size; j++) {
      var h2Node = h2El[j];

      h2Node.setAttribute("class", "toggle");
      h2Node.nextElementSibling.setAttribute("class", "closed");

      h2Node.onclick = function () {
        var h2 = this;

        if (h2.getAttribute("class") == "toggle") {
          h2.setAttribute("class", "toggle-active");
          h2.nextElementSibling.setAttribute("class", "");
        } else {
          h2.setAttribute("class", "toggle");
          h2.nextElementSibling.setAttribute("class", "closed");
        }
      };
    }
  }
};
