const container = document.querySelector(".container");
const bg = document.querySelector(".hover");

container.addEventListener("mousemove", (e) => {
  bg.style.left = `${e.clientX}px`;
  bg.style.top = `${e.clientY}px`;
});

window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  var inner = document.querySelectorAll(".inner");
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

window.addEventListener("scroll", projectLeft);

function projectLeft() {
  var projectLefts = document.querySelectorAll(".projectLeft");
  for (let i = 0; i < projectLefts.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = projectLefts[i].getBoundingClientRect().top;
    var revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      projectLefts[i].classList.add("active");
    } else {
      projectLefts[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", projectRight);

function projectRight() {
  var projectRights = document.querySelectorAll(".projectRight");
  for (let i = 0; i < projectRights.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = projectRights[i].getBoundingClientRect().top;
    var revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      projectRights[i].classList.add("active");
    } else {
      projectRights[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", progress);

function progress() {
  var progresss = document.querySelectorAll(".progress");
  for (let i = 0; i < progresss.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = progresss[i].getBoundingClientRect().top;
    var revealPoint = -100;

    if (revealTop < windowHeight - revealPoint) {
      progresss[i].classList.add("active");
    } else {
      progresss[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", progressCss);

function progressCss() {
  var progresssCss = document.querySelectorAll(".progressCss");
  for (let i = 0; i < progresssCss.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = progresssCss[i].getBoundingClientRect().top;
    var revealPoint = -100;

    if (revealTop < windowHeight - revealPoint) {
      progresssCss[i].classList.add("active");
    } else {
      progresssCss[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", progressJs);

function progressJs() {
  var progresssJs = document.querySelectorAll(".progressJs");
  for (let i = 0; i < progresssJs.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = progresssJs[i].getBoundingClientRect().top;
    var revealPoint = -100;

    if (revealTop < windowHeight - revealPoint) {
      progresssJs[i].classList.add("active");
    } else {
      progresssJs[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", progressBt);

function progressBt() {
  var progresssBt = document.querySelectorAll(".progressBt");
  for (let i = 0; i < progresssBt.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = progresssBt[i].getBoundingClientRect().top;
    var revealPoint = -100;

    if (revealTop < windowHeight - revealPoint) {
      progresssBt[i].classList.add("active");
    } else {
      progresssBt[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", progressRt);

function progressRt() {
  var progresssRt = document.querySelectorAll(".progressRt");
  for (let i = 0; i < progresssRt.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = progresssRt[i].getBoundingClientRect().top;
    var revealPoint = -100;

    if (revealTop < windowHeight - revealPoint) {
      progresssRt[i].classList.add("active");
    } else {
      progresssRt[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", progressGt);

function progressGt() {
  var progresssGt = document.querySelectorAll(".progressGt");
  for (let i = 0; i < progresssGt.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = progresssGt[i].getBoundingClientRect().top;
    var revealPoint = -100;

    if (revealTop < windowHeight - revealPoint) {
      progresssGt[i].classList.add("active");
    } else {
      progresssGt[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", progressPt);
function progressPt() {
  var progresssPt = document.querySelectorAll(".progressPt");
  for (let i = 0; i < progresssPt.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = progresssPt[i].getBoundingClientRect().top;
    var revealPoint = -100;

    if (revealTop < windowHeight - revealPoint) {
      progresssPt[i].classList.add("active");
    } else {
      progresssPt[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", progressDg);
function progressDg() {
  var progresssDg = document.querySelectorAll(".progressDg");
  for (let i = 0; i < progresssDg.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = progresssDg[i].getBoundingClientRect().top;
    var revealPoint = -100;

    if (revealTop < windowHeight - revealPoint) {
      progresssDg[i].classList.add("active");
    } else {
      progresssDg[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", progressMy);
function progressMy() {
  var progresssMy = document.querySelectorAll(".progressMy");
  for (let i = 0; i < progresssMy.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = progresssMy[i].getBoundingClientRect().top;
    var revealPoint = -100;

    if (revealTop < windowHeight - revealPoint) {
      progresssMy[i].classList.add("active");
    } else {
      progresssMy[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", progressNo);
function progressNo() {
  var progresssNo = document.querySelectorAll(".progressNo");
  for (let i = 0; i < progresssNo.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = progresssNo[i].getBoundingClientRect().top;
    var revealPoint = -100;

    if (revealTop < windowHeight - revealPoint) {
      progresssNo[i].classList.add("active");
    } else {
      progresssNo[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", progressEx);
function progressEx() {
  var progresssEx = document.querySelectorAll(".progressEx");
  for (let i = 0; i < progresssEx.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = progresssEx[i].getBoundingClientRect().top;
    var revealPoint = -100;

    if (revealTop < windowHeight - revealPoint) {
      progresssEx[i].classList.add("active");
    } else {
      progresssEx[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", progressC);
function progressC() {
  var progresssC = document.querySelectorAll(".progressC");
  for (let i = 0; i < progresssC.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = progresssC[i].getBoundingClientRect().top;
    var revealPoint = -100;

    if (revealTop < windowHeight - revealPoint) {
      progresssC[i].classList.add("active");
    } else {
      progresssC[i].classList.remove("active");
    }
  }
}
function about() {
  var about = document.querySelectorAll(".about");
  for (let i = 0; i < about.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = about[i].getBoundingClientRect().top;
    var revealPoint = 150;

    if (revealTop > windowHeight - revealPoint) {
      about[i].classList.add("active");
    } else {
      about[i].classList.remove("active");
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      // Prevent default link behavior
      event.preventDefault();

      // Remove active class from all links
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });

      // Add active class to clicked link
      this.classList.add("active");
    });
  });
});
