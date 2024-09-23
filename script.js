const tape1 = document.querySelector("#tape1");
const tape2 = document.querySelector("#tape2");
let preloader = document.querySelector('#preloader');
window.addEventListener('load', () => {
  if (preloader) {
    preloader.remove()
  }
});

// setTimeout(function() {
//   if (preloader) {
//     preloader.remove()
//   }
// }, 6000);

var servicesSection = document.querySelector('.services-sec');
var contactSection = document.querySelector('.contact-sec');
var sectionHeight = servicesSection.offsetHeight;
var windowHeight = window.innerHeight;

window.addEventListener('scroll', function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var contactSecOffset = contactSection.offsetTop;

  if (scrollTop <= (2 / 10) * windowHeight) {
    setDisplay('.floating-telegram-icon', 'none');
    setDisplay('.floating-meet-btn', 'none');
  }
  else if (scrollTop >= contactSecOffset - windowHeight) {
    setDisplay('.floating-telegram-icon', 'block');
    setDisplay('.floating-meet-btn', 'none');
  }
  else {
    setDisplay('.floating-telegram-icon', 'block');
    setDisplay('.floating-meet-btn', 'block');
  }
});

const getOffsetTop = element => {
  let offsetTop = 0;
  while (element) {
    offsetTop += element.offsetTop;
    element = element.offsetParent;
  }
  return offsetTop;
}

let textRevealDivs = document.querySelectorAll('.showRight-animate');

window.onscroll = () => {
  textRevealDivs.forEach(textRevealDiv => {
    let top = window.scrollY;
    let offset = getOffsetTop(textRevealDiv);

    if (top + (8 / 10) * window.innerHeight > offset) {
      textRevealDiv.classList.add('show-animate');
    }
    else {
      textRevealDiv.classList.remove('show-animate');
    }
  })
}

function setDisplay(selector, value) {
  document.querySelector(selector).style.display = value;
}
