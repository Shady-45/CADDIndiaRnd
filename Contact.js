let menu = document.querySelector(".menu");

menu.onclick = function () {
  let navbar = document.querySelector(".nav-link");
  navbar.classList.toggle("active");
};

/* let slides = document.querySelectorAll(".slide");
let counter = 0;
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(${-(counter % 3) * 110}%)`;
  });
};
const previousSlide = () => {
  counter--;
  slideImage();
};
const nextSlide = () => {
  counter++;
  slideImage();
};
 */
const hoverIn = (img) => {
  img.src = "/images-contact/support-white-2.png";
  img.height = "2rem";
};
const hoverOut = (img) => {
  img.src = "/images-contact/support.png";
};

const openPopup = (class1, class2) => {
  document.querySelector(class1).addEventListener("click", () => {
    document.querySelector(class2).style.display = "flex";
  });
};

const closePopup = (class3, class4) => {
  document.querySelector(class3).addEventListener("click", () => {
    document.querySelector(class4).style.display = "none";
    console.log("close");
  });
};
const submitForm = (e) => {
  e.preventDefault();
};
