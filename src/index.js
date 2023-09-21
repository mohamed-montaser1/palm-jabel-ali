import "./sass/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "normalize.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";

const navbarToggler = document.getElementById("navbar-toggler");
const sideNavbar = document.getElementById("navbarSupportedContent");
const closeSideNavbar = document.getElementById("close-menu");
const navbarOverlay = document.getElementById("navbar-overlay");
const navbar = document.getElementById("navbar");
let currentSlide = 0;

navbarToggler.onclick = () => {
  sideNavbar.classList.add("active");
  navbarOverlay.classList.add("active");
};

closeSideNavbar.onclick = () => {
  sideNavbar.classList.remove("active");
  navbarOverlay.classList.remove("active");
};

function scrollFunction() {
  if (document.documentElement.scrollTop > 1) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

window.onscroll = function () {
  scrollFunction();
};

const patch = document.getElementById("patch");
const heading = document.getElementById("heading");
window.onload = () => {
  scrollFunction();
  setTimeout(() => {
    patch.classList.add("active");
    heading.classList.add("active");
  }, 100);
};
// const handlePrevSlide = () => {
//   if (currentSlide == 0) return;
//   currentSlide = 0;
//   let imageOne = document.querySelectorAll("#bg-slider")[0];
//   imageOne.style.transform = "translateX(-100%)";
// };
// const handleNextSlide = () => {
//   if (currentSlide == 1) return;
//   currentSlide = 1;
//   let imageOne = document.querySelectorAll("#bg-slider")[1];
//   imageOne.style.transform = "translateX(-100%)";
// };

const swiperSlides = Array.from(
  document.querySelectorAll(".gallery .swiper-slide")
);
const closeGalleryOverlayButton = document.getElementById(
  "closeGalleryOverlayButton"
);
const swiperOverlay = document.getElementById("swiperOverlay");
swiperSlides.map((slide) => {
  slide.addEventListener("click", handleOpenSlideOverlay);
});

function handleOpenSlideOverlay() {
  swiperOverlay.classList.add("active");
}

closeGalleryOverlayButton.addEventListener("click", () => {
  swiperOverlay.classList.remove("active");
});

const brochureForm = document.getElementById("brochure-form");
const firstName = document.getElementById("firstName");
const firstNameErrorMessage = document.querySelector("#firstName + p");
const emailAddress = document.getElementById("email");
const emailAddressErrorMessage = document.querySelector("#email + p");
const phoneNumber = document.getElementById("phoneNumber");

const emailPattern = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

brochureForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (firstName.value.trim().length < 5) {
    firstNameErrorMessage.classList.add("active");
    return;
  } else {
    firstNameErrorMessage.classList.remove("active");
  }
  if (
    emailAddress.value.trim().length < 1 ||
    !emailAddress.value.trim().match(emailPattern)
  ) {
    emailAddressErrorMessage.classList.add("active");
    return;
  } else {
    emailAddressErrorMessage.classList.remove("active");
  }

  if (isNaN(Number(phoneNumber.value))) {
    alert("please enter valid phone number !");
    return;
  }

  alert("Sent!");
});

const contactEmail = document.getElementById("contact-email");
const contactEmailErr = document.querySelector("#contact-email + p");
const contactNumber = document.getElementById("contact-number");
const contactNumberErr = document.querySelector("#contact-number + p");
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    contactEmail.value.trim().length < 1 ||
    !contactEmail.value.trim().match(emailPattern)
  ) {
    contactEmailErr.classList.add("active");
    return;
  } else {
    contactEmailErr.classList.remove("active");
  }
  console.log(contactNumber.valueAsNumber);
  if (
    isNaN(contactNumber.valueAsNumber) ||
    contactNumber.value.trim().length == 0
  ) {
    contactNumberErr.classList.add("active");
    return;
  }
  contactNumberErr.classList.remove("active");
  alert("Sent!");
  setTimeout(() => {
    location.reload();
  }, 600);
  return;
});

const closeGlobalBrochurePopup = document.getElementById(
  "closeGlobalBrochurePopup"
);
const globalBrochurePopup = document.getElementById("globalBrochurePopup");

closeGlobalBrochurePopup.addEventListener("click", () => {
  globalBrochurePopup.classList.remove("active");
});

const popupOpeners = Array.from(
  document.querySelectorAll(".global-popup-opener")
);

popupOpeners.forEach((opener) => {
  opener.addEventListener("click", () => {
    globalBrochurePopup.classList.add("active");
  });
});
