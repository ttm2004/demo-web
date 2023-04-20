$(document).ready(function() {
  $(window).scroll(function() {
      if($(this).scrollTop())
          $(".back-to-top").fadeIn();
      else
          $(".back-to-top").fadeOut();
  });
  $(".back-to-top").click(function(){
      $('html').animate({scrollTop:0},500);
  });
});



function dis_lock() {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let Before_none = "AM";
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (hours > 12) {
    Before_none = "PM";
  }
  document.getElementById("oclock").innerHTML =
    day +
    "/" +
    month +
    "/" +
    year +
    " " +
    hours +
    ":" +
    minutes +
    ":" +
    seconds +
    " " +
    Before_none;
}
setInterval(function () {
  dis_lock();
}, 1000);


let currentDiv = 0;
function showDivs() {
  let slides = document.querySelectorAll(".slide");
  slides.forEach(function (slide, index) {
    let forms = slide.querySelectorAll("form");
    if (index === currentDiv) {
      slide.style.opacity = "1";
      slide.style.zIndex = "11";
      forms.forEach(function (form) {
        form.style.pointerEvents = "all";
      });
    } else {
      slide.style.opacity = "0";
      slide.style.zIndex = "10";
    }
  });
}
function previousDiv() {
  currentDiv--;
  if (currentDiv < 0) {
    currentDiv = 2;
  }
  showDivs();
}

function nextDiv() {
  currentDiv++;
  if (currentDiv > 2) {
    currentDiv = 0;
  }
  showDivs();
}
showDivs();

let slide_dot = document.querySelectorAll(".slides .dots1 .dot1");
let btn_prev = document.getElementById("btn-prev");
let btn_next = document.getElementById("btn-next");
let activeSlideIndex = 0;
slide_dot[activeSlideIndex].style.backgroundColor = "#ffff00";
btn_prev.addEventListener("click", () => {
  slide_dot[activeSlideIndex].style.backgroundColor = "#fff";
  activeSlideIndex--;
  if (activeSlideIndex < 0) {
    activeSlideIndex = slide_dot.length - 1;
  }
  slide_dot[activeSlideIndex].style.backgroundColor = "#ffff00";
});
btn_next.addEventListener("click", () => {
  slide_dot[activeSlideIndex].style.backgroundColor = "#fff";

  activeSlideIndex++;
  if (activeSlideIndex === slide_dot.length) {
    activeSlideIndex = 0;
  }
  slide_dot[activeSlideIndex].style.backgroundColor = "#ffff00";
});

let slides = document.querySelectorAll(".rate-item");
let dot = document.querySelectorAll(".content-rate-items .dot");
let activeSlide = 0;
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("btn");
dot[activeSlide].style.backgroundColor = "#333";
prevBtn.addEventListener("click", () => {
  slides[activeSlide].classList.remove("active");
  dot[activeSlide].style.backgroundColor = "#fff";
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }
  slides[activeSlide].classList.add("active");
  dot[activeSlide].style.backgroundColor = "#333";
});

nextBtn.addEventListener("click", () => {
  slides[activeSlide].classList.remove("active");
  dot[activeSlide].style.backgroundColor = "#fff";
  activeSlide++;

  if (activeSlide === slides.length) {
    activeSlide = 0;
  }
  slides[activeSlide].classList.add("active");
  dot[activeSlide].style.backgroundColor = "#333";
});