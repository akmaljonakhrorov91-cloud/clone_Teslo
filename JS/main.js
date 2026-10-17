const topBar = document.querySelector("#top-bar");
// colors
const exteriorColorsSection = document.querySelector("#exterior-buttons");
const interiorColorsSection = document.querySelector("#interior-buttons");
const exteriorImage = document.querySelector("#exterior-image");
const interiorImage = document.querySelector("#interior-image");
const wheelButtonsSection = document.querySelector("#wheel-buttons");

let selectedColor = "Stealth Grey";
const selectedOptions = {
  "Permormance Wheels": false,
  "Permormance Package": false,
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
// handle color section
const handleColorButtonClick = (event) => {
  let button;
  if (event.target.tagName === "IMG") {
    button = event.target.closest("button");
  } else if (event.target.tagName === "button") {
    button = event.target;
  }
  if (button) {
    const buttons = event.currentTarget.querySelectorAll("button");
    buttons.forEach((btn) => btn.classList.remove("btn-selected"));
    button.classList.add("btn-selected");
    // change exterior colar
    if (event.currentTarget === exteriorColorsSection) {
      const color = button.querySelector("img").alt;
      exteriorImage.src = exteriorImages[color];
    }
    // change interior colar
    if (event.currentTarget === interiorColorsSection) {
      const color = button.querySelector("img").alt;
      interiorImage.src = interiorImages[color];
    }
  }
};
// update exterior image nased on color and wheel
const updateExteriorImage = () => {
  const performanceSuffix = selectedOptions["Permormance Wheels"]
    ? "-performance"
    : "";
  const colorKey =
    selectedColor in exteriorImage ? selectedColor : "Stealth Grey";
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

  const selectedtedWheel = event.target.textContent.includes("Performance");
  exteriorImage.src = selectedtedWheel
    ? "./images/model-y-stealth-grey-performance.jpg"
    : "./images/model-y-stealth-grey.jpg";
};

window.addEventListener("scroll", () => requestAnimationFrame(handelScroll));
exteriorColorsSection.addEventListener("click", handleColorButtonClick);
interiorColorsSection.addEventListener("click", handleColorButtonClick);
wheelButtonsSection.addEventListener("click", handleWheelSelection);
// event to exterior colors
