window.arenaCallback = () => {
	// Put your JavaScript in here!
	// This will run after Are.na’s API returns your data.


const images = document.querySelectorAll('img')

console.log(images)

//Get all of my image blocks
let imageBlocks = document.querySelectorAll('li.image-blocks')
console.log(imageBlocks)
= () => {
imageBlocks.forEach((block)) {

  //Make the blocks react on click
  block.onClick = () => {
    
    //Add a class called active
    block.classList.add ('active')
}

    //Remove a class called active
block.querySelector('aside').onClick = () => {
  block.classList.remove ('active')
}
}
}






function openFullScreen(img) {
  // Create a new element to hold the full screen image
  var fullscreen = document.createElement('div');
  fullscreen.classList.add('fullscreen');
  
  // Create a new image element to hold the image
  var imgElement = document.createElement('img');
  imgElement.src = img.src;
  fullscreen.appendChild(imgElement);
  
  // Add the new element to the document body
  document.body.appendChild(fullscreen);
  
  // Add a click event listener to the new element to remove it when clicked
  fullscreen.addEventListener('click', function() {
    document.body.removeChild(fullscreen);
  });
  }
  

  