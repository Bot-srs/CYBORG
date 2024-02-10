// SMOOTH SCROOLING
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    lerp: 0.04//lerp is to control the smooth scrolling effect
}); // this code is taken from - Locomotive js github-->scroll down-->under the SMOOTH section excluding the import part copied the code and paste here in java script
a = prompt("ENTER YOUR ID ");
console.log(alert("WELCOME CYBORG " +a));

const imageContainer = document.querySelector('.image-container');
const overlay = document.querySelector('.overlay');

imageContainer.addEventListener('mouseover', () => {
  // Generate text dynamically
  overlay.textContent = "lorem34";
  
  // Show overlay
  overlay.style.display = 'flex';
});

imageContainer.addEventListener('mouseout', () => {
  // Hide overlay when mouse leaves
  overlay.style.display = 'none';
});
