

window.arenaCallback = () => {
	// Put your JavaScript in here!
	// This will run after Are.na’s API returns your data.

  window.onscroll = function() {myFunction()};

var sticky = header.offsetTop;
let body = querySelector('body')
let imageButton = querySelector('.image-button')
let linksButton = querySelector('.links-button')
let allImages = querySelector('.#image-block')
let allLinks = querySelector('.#link-block')



function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

window.onscroll = function() {myFunction()};

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

imageButton.onClick = function() {
  console.log('images')
  //add all images
  body.appendChild(allImages)
  //remove all links
  body.removeChild(allLinks)
  };


linksButton.onClick = function() {
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




function myFunction() {
  if (window.pageYOffset > skyline) {
    header.classList.add("skyline");
  } else {
    header.classList.remove("skyline");
  }
}

window.onscroll = function() {myFunction()};

var skyline = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > skyline) {
    header.classList.add("skyline");
  } else {
    header.classList.remove("skyline");
  }
}