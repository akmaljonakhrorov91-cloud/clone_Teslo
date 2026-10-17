const topBar = document.querySelector("#top-bar");
// colors
const exteriorColorsSection = document.querySelector("#exterior-buttons");
const interiorColorsSection = document.querySelector("#interior-buttons");
const exteriorImage = document.querySelector("#exterior-image");
const interiorImage = document.querySelector("#interior-image");
const wheelButtonsSection = document.querySelector("#wheel-buttons");
const performanceBtn = document.querySelector("#performance-btn");
const totalPriceElement = document.querySelector("#total-price");
const fullSelfDrivingCheckbox = document.querySelector(
  "#full-self-driving-checkbox"
);
// total price
const basePrice = 52490;
let currentPrice = basePrice;

let selectedColor = "Stealth Grey";
let selectedOptions = {
  "Performance Wheels": false,
  "Performance Package": false,
  "Full Self-Driving": false,
};

// top bar section
const handelScroll = () => {
  const atTop = window.scrollY === 0;
  topBar.classList.toggle("visible-bar", atTop);
  topBar.classList.toggle("hidden-bar", !atTop);
};
const exteriorImages = {
  "Stealth Grey": "./images/model-y-stealth-grey.jpg",
  "Pearl White": "./images/model-y-pearl-white.jpg",
  "Solid Black": "./images/model-y-solid-black.jpg",
  Quicksilver: "./images/model-y-quicksilver.jpg",
  "Deep Blue": "./images/model-y-deep-blue-metallic.jpg",
  "Ultra Red": "./images/model-y-ultra-red.jpg",
};
const interiorImages = {
  Dark: "./images/model-y-interior-dark.jpg",
  Light: "./images/model-y-interior-light.jpg",
};
// pricing object
const pricing = {
  "Performance Wheels": 2500,
  "Performance Package": 5000,
  "Full Self-Driving": 8500,
  Accessories: {
    "Center console Trayes": 35,
    Sunshade: 105,
    "All-Weather Interior Liners": 225,
  },
};
// update total price
const updateTotalPrice = () => {
  // reset the current price
  currentPrice = basePrice;
  // performance wheels option
  if (selectedOptions["Performance Wheels"]) {
    currentPrice += pricing["Performance Wheels"];
  }
  // Performance Package option
  if (selectedOptions["Performance Package"]) {
    currentPrice += pricing["Performance Package"];
  }
  // Performance full self driving
  if (selectedOptions["Full Self-Driving"]) {
    currentPrice += pricing["Full Self-Driving"];
  }
  // update the currnet price in UI
  totalPriceElement.textContent = `$${currentPrice.toLocaleString()}`;
};
// handle color section
const handleColorButtonClick = (event) => {
  let button;
  if (event.target.tagName === "IMG") {
    button = event.target.closest("button");
  } else if (event.target.tagName === "BUTTON") {
    button = event.target;
  }
  if (button) {
    const buttons = event.currentTarget.querySelectorAll("button");
    buttons.forEach((btn) => btn.classList.remove("btn-selected"));
    button.classList.add("btn-selected");
    // change exterior image
    if (event.currentTarget === exteriorColorsSection) {
      selectedColor = button.querySelector("img").alt;
      updateExteriorImage();
    }
    // change interior image
    if (event.currentTarget === interiorColorsSection) {
      const color = button.querySelector("img").alt;
      interiorImage.src = interiorImages[color];
    }
  }
};
// update exterior image nased on color and wheel
const updateExteriorImage = () => {
  const performanceSuffix = selectedOptions["Performance Wheels"]
    ? "-performance"
    : "";
  const colorKey =
    selectedColor in exteriorImages ? selectedColor : "Stealth Grey";
  exteriorImage.src = exteriorImage[colorKey].replace(
    ".jpg",
    `${performanceSuffix}.jpg`
  );
};
// wheel selection
const handleWheelSelection = (event) => {
  if (event.target.tagName === "BUTTON") {
    const buttons = document.querySelectorAll("#wheel-buttons button");
    buttons.forEach((btn) => btn.classList.remove("bg-gray-700", "text-white"));

    // add selected styles
    event.target.classList.add("bg-gray-700", "text-white");
  }

  selectedOptions["Performance Wheels"] =
    event.target.textContent.includes("Performance");
  updateExteriorImage();
};
// performance btn
const handlePerformanceBtn = () => {
  const isSelected = performanceBtn.classList.toggle("bg-gray-700");
  performanceBtn.classList.toggle("text-white");
  // update selected options
  selectedOptions["Performance Package"] = isSelected;
  updateTotalPrice();
};
// fullSelfDrivingCheckbox
const fullSelfDrivingChange = () => {
  console.log(123);
  const isSelected = fullSelfDrivingCheckbox.checked;
  selectedOptions["Full Self-Driving"] = isSelected;
  updateTotalPrice();
};
// event listners
window.addEventListener("scroll", () => requestAnimationFrame(handelScroll));
exteriorColorsSection.addEventListener("click", handleColorButtonClick);
interiorColorsSection.addEventListener("click", handleColorButtonClick);
wheelButtonsSection.addEventListener("click", handleWheelSelection);
performanceBtn.addEventListener("click", handlePerformanceBtn);
fullSelfDrivingCheckbox.addEventListener("change", fullSelfDrivingChange);
