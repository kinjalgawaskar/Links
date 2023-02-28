window.addEventListener('scroll', function() {
  let scrollPosition = window.pageYOffset;
  img.style.opacity = 1 - (scrollPosition / 500);
});
