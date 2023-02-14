window.addEventListener('scroll', function() {
    var parallaxImage = document.querySelector('.parallax-image');
    var scrollPosition = window.pageYOffset;
    var parallaxPosition = scrollPosition * 0.5;
    parallaxImage.style.transform = 'translate3d(' + parallaxPosition + 'px, 0, 0)';
  });
  