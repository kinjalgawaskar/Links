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






const cursor = document.querySelector('#cursor');
const cursorCircle = cursor.querySelector('.cursor__circle');

const mouse = { x: -100, y: -100 }; // mouse pointer's coordinates
const pos = { x: 0, y: 0 }; // cursor's coordinates
const speed = 0.1; // between 0 and 1

const updateCoordinates = e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
}

window.addEventListener('mousemove', updateCoordinates);


function getAngle(diffX, diffY) {
  return Math.atan2(diffY, diffX) * 180 / Math.PI;
}

function getSqueeze(diffX, diffY) {
  const distance = Math.sqrt(
    Math.pow(diffX, 2) + Math.pow(diffY, 2)
  );
  const maxSqueeze = 0.15;
  const accelerator = 1500;
  return Math.min(distance / accelerator, maxSqueeze);
}


const updateCursor = () => {
  const diffX = Math.round(mouse.x - pos.x);
  const diffY = Math.round(mouse.y - pos.y);
  
  pos.x += diffX * speed;
  pos.y += diffY * speed;
  
  const angle = getAngle(diffX, diffY);
  const squeeze = getSqueeze(diffX, diffY);
  
  const scale = 'scale(' + (1 + squeeze) + ', ' + (1 - squeeze) +')';
  const rotate = 'rotate(' + angle +'deg)';
  const translate = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';

  cursor.style.transform = translate;
  cursorCircle.style.transform = rotate + scale;
};

function loop() {
  updateCursor();
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);



const cursorModifiers = document.querySelectorAll('[cursor-class]');

cursorModifiers.forEach(curosrModifier => {
  curosrModifier.addEventListener('mouseenter', function() {
    const className = this.getAttribute('cursor-class');
    cursor.classList.add(className);
  });
  
  curosrModifier.addEventListener('mouseleave', function() {
    const className = this.getAttribute('cursor-class');
    cursor.classList.remove(className);
  });
});