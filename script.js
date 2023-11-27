var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  loopFillGroupBlank: false,
  initialSlide: 1,
  speed: 700,
  // loop: true,
  centeredSlides: true,
  mousewheel: {
    releaseOnEdges: true,
  },
});

const zoomScreen = document.querySelector(".banner-logo svg");
let zoom = 1;
const zoomingSpeed = 0.1;
const minZoom = 1; // Set the minimum zoom level
const maxZoom = 2; // Set the maximum zoom level

document.addEventListener("wheel", (e) => {
  if (e.deltaY > 0 && zoom < maxZoom) {
    zoomScreen.style.transform = `scale(${(zoom += zoomingSpeed)})`;
  } else if (e.deltaY < 0 && zoom > minZoom) {
    zoomScreen.style.transform = `scale(${(zoom -= zoomingSpeed)})`;
  }
});
