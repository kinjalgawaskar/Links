window.arenaCallback = () => {
	// Put your JavaScript in here!
	// This will run after Are.na’s API returns your data.

  // window.onscroll = function() {myFunction()};

// var sticky = header.offsetTop;
let body = document.querySelector('body')
let imageButton = document.querySelector('.image-button')
let linksButton = document.querySelector('.links-button')
let allImages = document.querySelector('#image-block')
let allLinks = document.querySelector('#link-block')


imageButton.onclick = function() {
  console.log('images')
  //add all images
  body.appendChild(allImages)
  //remove all links
  body.removeChild(allLinks)
  };


linksButton.onclick = function() {
  console.log('links')
  //remove all links
  body.appendChild(allLinks)
  //add all images
  body.removeChild(allImages)
  };


// Get all the menu items
const menuItems = document.querySelectorAll(".menu-item");

// Add a click event listener to each menu item
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Remove the active class from all menu items
    menuItems.forEach((item) => {
      item.classList.remove("active");
    });

    // Add the active class to the clicked menu item
    item.classList.add("active");
  });
});

}




/*Icon Toggle Selectors*/

function openTab(tabName) {
  var i, tabContent, tabButton;
  tabContent = document.getElementsByClassName(“tab-pane”);
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].classList.remove(“active”);
  }
  tabButton = document.getElementsByClassName(“filter-button”);
  for (i = 0; i < tabButton.length; i++) {
    tabButton[i].classList.remove(“active”);
  }
  document.getElementById(tabName).classList.add(“active”);
  event.currentTarget.classList.add(“active”);
}
