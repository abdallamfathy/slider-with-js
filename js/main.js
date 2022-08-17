// Get number of slides
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
nextButton.onClick = nextSlide;
prevButton.onClick = prevSlide;

//get indicators
let indicators = document.getElementById("indicators");

// Make Ul of numbers
let paginationElement = document.createElement("ul");
// Set ID On Created Ul Element
paginationElement.setAttribute("id", "pagination-ul");

for (let i = 0; i < slidesCount; i++) {
  // Make li of numbers
  let paginationItem = document.createElement("li");
  // Set Custom Attribute
  paginationItem.setAttribute("data-index", i);
  paginationItem.appendChild(document.createTextNode(i+1));
  paginationElement.appendChild(paginationItem);
}
indicators.appendChild(paginationElement);

// Get New Ul 
let paginationCreated = document.getElementById("pagination-ul");

// Make next , prev functions
function nextSlide() {
    console.log("haha")
} 
function prevSlide() {
    console.log("haha")
} 
checker();

// Make the checker
function checker(){
    slideNumberElement.textContent = "Slide#" + (currentSlide )+ " of " + (slidesCount);
    sliderImages[currentSlide-1].classList.add("active");
    paginationCreated.children[currentSlide - 1].classList.add("active");
}
