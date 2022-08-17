// Get Array of images  of slides
let sliderImages = Array.from(
    document.querySelectorAll(".slider-container img"));

// Get number of slides
let slidesCount = sliderImages.length;

// Get number element
let slideNumberElement = document.getElementById("slide-number");

// Set current slide
let currentSlide = 1;

//get next,prev buttons
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");

// Handle click on prev , next buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

//get indicators
let indicators = document.getElementById("indicators");

// Make Ul of numbers
let paginationElement = document.createElement("ul");




// Set ID On Created Ul Element
paginationElement.setAttribute("id", "pagination-ul");

for (let i = 1; i <= slidesCount; i++) {
  // Make li of numbers
  let paginationItem = document.createElement("li");
  // Set Custom Attribute
  paginationItem.setAttribute("data-index", i);
  paginationItem.appendChild(document.createTextNode(i));
  paginationElement.appendChild(paginationItem);
}
indicators.appendChild(paginationElement);

// Get New Ul 
let paginationCreated = document.getElementById("pagination-ul");

// Get Array of images  of slides
let bullets = Array.from(
    document.querySelectorAll("#pagination-ul li"));


// Loop Through Bullets item
// bullets.forEach((index,bullet)=>{
    
//     currentSlide = index;
//     checker();
// });

for (let i = 0; i < bullets.length; i++) {
    bullets[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute("data-index"));
        checker();
    }
    
}

checker();
// Make next , prev functions
function nextSlide() {
    if (nextButton.classList.contains('disabled')) {

        // Do Nothing
        return false;
    
      } else {
    
        currentSlide++;
    
        checker();
    
      }
} 
function prevSlide() {
    if (prevButton.classList.contains("disabled")) {
        return false
    } else {
        currentSlide--;
        checker();
    }
    
} 

// Make the checker
function checker(){
    slideNumberElement.textContent = "Slide#" + (currentSlide )+ " of " + (slidesCount);
    removeAllActive();
    sliderImages[currentSlide - 1].classList.add("active");
    paginationCreated.children[currentSlide -1 ].classList.add("active");

    // Check if current slide is the first
    if (currentSlide === 1) {
        prevButton.classList.add("disabled")
    } else {
        prevButton.classList.remove("disabled");
    }

    // Check if current slide is the last
    if (currentSlide === slidesCount) {
        nextButton.classList.add("disabled")
    } else {
        nextButton.classList.remove("disabled");
    }
}


// Remove all active classes from Images and Pagination bullets
function removeAllActive(){
    // Loop through images
    sliderImages.forEach((img)=>{
        img.classList.remove("active");
    });

    // Loop through pagination bullets
    bullets.forEach((bullet)=>{
        bullet.classList.remove('active');
    })
}