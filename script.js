const banner = document.getElementById("motionBanner");

document.addEventListener("mousemove", (event) => {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const moveX = (event.clientX - centerX) * 0.01;
  const moveY = (event.clientY - centerY) * 0.01;

  banner.style.transform = `translate(${moveX}px, ${moveY}px)`;
});
