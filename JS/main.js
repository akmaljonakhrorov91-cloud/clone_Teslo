const topBar = document.querySelector("#top-bar");
// colors
const exteriorColorsSection = document.querySelector("#exterior-buttons");
const interiorColorsSection = document.querySelector("#interior-buttons");
const exteriorImage = document.querySelector("#exterior-image");
const interiorImage = document.querySelector("#interior-image");

// top bar section
const handelScroll = () => {
  const atTop = window.scrollY === 0;
  topBar.classList.toggle("visible-bar", atTop);
  topBar.classList.toggle("hidden-bar", !atTop);
};
// handle clicks
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
  }
};
// event
window.addEventListener("scroll", () => requestAnimationFrame(handelScroll));
exteriorColorsSection.addEventListener("click", handleColorButtonClick);
interiorColorsSection.addEventListener("click", handleColorButtonClick);
// event to exterior colors
