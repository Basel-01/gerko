// Scroll btn
let scrollBtn = document.querySelector("nav .scrol-btn");
window.addEventListener("scroll", () => {
  if(scrollY >= 200) {
    scrollBtn.classList.add("visible");
  }
  else {
    scrollBtn.classList.remove("visible");
  }
});
scrollBtn.addEventListener("click", () => {
  window.scrollTo ({
    top: 0,
    behavior:"smooth"
  });
}); 

// Features Animate
window.addEventListener("scroll", () => {
  if(scrollY >= document.querySelector(".features").offsetTop-200) {
    document.querySelectorAll(".features .row > div").forEach(div => {
      div.style.transform = "translate(0,0)";
    });
  }
});