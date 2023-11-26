const nav = document.querySelector("nav");
const supportPageOffset = window.pageXOffset !== undefined;
const isCSS1Compat = (document.compatMode || "") === "CSS1Compat";

let previousScrollPosition = 0;

const isScrollingDown = () => {
  let scrolledPosition = supportPageOffset
    ? window.pageYOffset
    : isCSS1Compat
    ? document.documentElement.scrollTop
    : document.body.scrollTop;
  let isScrollDown;

  if (scrolledPosition > previousScrollPosition) {
    isScrollDown = true;
  } else {
    isScrollDown = false;
  }
  previousScrollPosition = scrolledPosition;
  return isScrollDown;
};

const handleNavScroll = () => {
  if (isScrollingDown() && !nav.contains(document.activeElement)) {
    nav.classList.add("scroll-down");
    nav.classList.remove("scroll-up");
  } else {
    nav.classList.add("scroll-up");
    nav.classList.remove("scroll-down");
  }
};

var throttleTimer;

const throttle = (callback, time) => {
  if (throttleTimer) return;

  throttleTimer = true;
  setTimeout(() => {
    callback();
    throttleTimer = false;
  }, time);
};

const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

window.addEventListener("scroll", () => {
  if (mediaQuery && !mediaQuery.matches) {
    throttle(handleNavScroll, 250);
  }
});
var currentIndex = 0;

function changeSlide(n) {
    showSlide(currentIndex += n);
}

function showSlide(n) {
    var i;
    var slides = document.getElementsByClassName("slider-item");
    if (n >= slides.length) {
        currentIndex = 0;
    }
    if (n < 0) {
        currentIndex = slides.length - 1;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    slides[currentIndex].classList.add('active');
}



var subTitle = document.querySelector('.slider-sub-title');

function animateSubtitle() {
    subTitle.classList.add('fadeInUp');
    setTimeout(function () {
        subTitle.classList.remove('fadeInUp');
    }, 1000);
}

function changeSlide(n) {
    showSlide(currentIndex += n);
    animateSubtitle(); // Call the animateSubtitle function when changing slides
}

