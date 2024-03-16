const container = document.querySelector(".container");
const bg = document.querySelector(".hover");

container.addEventListener("mousemove", (e) => {
  bg.style.left = `${e.clientX}px`;
  bg.style.top = `${e.clientY}px`;
});

window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 80;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

function about() {
  var about = document.querySelectorAll(".about");
  for (let i = 0; i < about.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = about[i].getBoundingClientRect().top;
    var revealPoint = 80;

    if (revealTop < windowHeight - revealPoint) {
      about[i].classList.add("active");
    } else {
      about[i].classList.remove("active");
    }
  }
}
