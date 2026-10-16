const topBar = document.querySelector("#top-bar");

const handelScroll = () => {
  const atTop = window.scrollY === 0;
  topBar.classList.toggle("visible-bar", atTop);
  topBar.classList.toggle("hidden-bar", !atTop);
};

window.addEventListener("scroll", () => requestAnimationFrame(handelScroll));
