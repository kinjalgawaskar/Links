const container = document.querySelector('.scroll-container');
window.addEventListener('scroll', () => {
  const scrollPercentage = window.scrollX / (document.body.scrollWidth - window.innerWidth);
  container.scrollLeft = container.scrollWidth * scrollPercentage;
});
