$("#someContainer").on("scroll", function (e) {
  horizontal = e.currentTarget.scrollLeft;
  vertical = e.currentTarget.scrollTop;
  });

  var blocks= document.getElementsByClassName("block");
  var container= document.getElementsByClassName("container");
  var hs= new Horizontal