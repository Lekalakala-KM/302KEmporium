const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".smnav-links");
const navCont = document.querySelector(".navCont");
let width = screen.width;

function makeActiveLink(e) {
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
  });
  e.classList.add("active");
  navCont.classList.remove("h-[100vh]");
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("hidden");
}

function toggleHamburger() {
  if (width <= 768) {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("hidden");
    navCont.classList.toggle("h-[100vh]");
  }
}

// footer date
d = new Date();
document.getElementById("date").innerHTML = d.getFullYear();

//load more about info
function toggleReadMore() {
  const extraContent = document.getElementById("extraContent");
  const readMore = document.getElementById("readMore");
  if (extraContent.classList.contains("hidden")) {
    extraContent.classList.toggle("hidden");
    readMore.textContent = "Read Less";
  } else {
    extraContent.classList.add("hidden");
    readMore.textContent = "Read More";
  }
}
