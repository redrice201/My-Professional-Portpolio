const root = document.documentElement;
const toggle = document.getElementById("input");
const techbutton1 = document.getElementById("techbutton1");
const toolsbutton1 = document.getElementById("toolsbutton1");
const softbutton2 = document.getElementById("softbutton2");
toggle.addEventListener("change", () => {
  if (toggle.checked) {
    root.style.setProperty("--body-black", "black");
    root.style.setProperty("--font-black", "#FFFBFC");
    root.style.setProperty("--black-transparent", "rgba(0, 0, 0, 0.559)");
  } else {
    root.style.setProperty("--body-black", "#FFFBFC");
    root.style.setProperty("--font-black", "black");
    root.style.setProperty(
      "--black-transparent",
      " rgba(255, 255, 255, 0.559)"
    );
  }
});

const sections = document.querySelectorAll(".box");

const animations = ["fade-up", "fade-left", "fade-right", "zoom-in"];
const animations1 = ["fade-up1", "fade-left1", "fade-right1", "zoom-in1"];

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const randomAnim =
          animations[Math.floor(Math.random() * animations.length)];

        entry.target.classList.remove(...animations, ...animations1);
        void entry.target.offsetWidth;
        entry.target.classList.add(randomAnim);
      } else {
        const randomAnim =
          animations1[Math.floor(Math.random() * animations1.length)];

        entry.target.classList.remove(...animations, ...animations1);
        void entry.target.offsetWidth;
        entry.target.classList.add(randomAnim);
        entry.target.style.opacity = 0;
      }
    });
  },
  { threshold: 0.3 }
);

sections.forEach((section) => {
  observer.observe(section);
});

let buttonsplit = document.querySelector(".buttonssplit");
let techskill = document.getElementById("technicalSkill");
let techcondition;
document.getElementById("techbutton").addEventListener("click", () => {
  buttonsplit.style.display = "none";
  techskill.style.display = "block";
  location.href = "#skills";
});

let tools = document.getElementById("toolsandTechnology");
document.getElementById("toolsbutton").addEventListener("click", () => {
  buttonsplit.style.display = "none";
  tools.style.display = "block";
  location.href = "#skills";
});

let soft = document.getElementById("softskills");
document.getElementById("softbutton1").addEventListener("click", () => {
  buttonsplit.style.display = "none";
  soft.style.display = "block";
  location.href = "#skills";
});

let images = document.querySelectorAll(".projects-img img");
let bigimage = document.querySelector(".bigImage-img img");
let bigimage1 = document.getElementById("bigimage");
let bigimagebutton = document.getElementById("bigclose");
images.forEach((img) => {
  img.addEventListener("click", () => {
    bigimage1.style.display = "block";
    bigimage.src = img.src;
  });
});

bigimagebutton.addEventListener("click", () => {
  bigimage1.style.display = "none";
});

const sections1 = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;

  sections1.forEach((sec) => {
    let sectionTop = sec.offsetTop - 100;
    let sectionHeight = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("onclick").includes(`#${id}`)) {
          link.classList.add("active");
        }
      });
    }
  });
});

const menubar = document.querySelector(".menubar");
const burgerbutton = document.getElementById("burger");
const bigclose = document.getElementById("bigclose1");

let open = false;
burgerbutton.addEventListener("click", () => {
  if (!open) {
    menubar.style.display = "block";
    menubar.style.animation = "fadeRight 0.8s ease-in";
    open = true;

    console.log("truee");
  }
});

bigclose.addEventListener("click", () => {
  open = false;
  menubar.style.display = "none";
});
