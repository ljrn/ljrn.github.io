//Change the page displayed
function openOrCloseOtherPage(otherPage, slide, close) {
  if (!close) $(otherPage).css("display", "inherit");
  $(otherPage).addClass(slide)
  setTimeout(function () {
    $(otherPage).removeClass(slide);
    if (close) {
      $(otherPage).css("display", "none");
      if (otherPage == '#about_container') {
        document.querySelectorAll('.pin').forEach((el) => {
          el.classList.remove('drop');
        })
      }
    }
  }, 800);
  if (otherPage === '#about_container') {
    document.querySelectorAll('.pin').forEach((el) => {
      el.classList.add('animated');
      el.classList.add('slideInDown');
      el.style.animationDelay = '0.2s';
    })
    document.querySelectorAll('.employment-pin').forEach((el) => {
      el.classList.add('animated');
      el.classList.add('slideInDown');
      el.style.animationDelay = '0.2s';
    })
  }
}

//Add timeout to animations
setTimeout(function () {
  $("#loading").addClass("animated fadeOut");
  setTimeout(function () {
    $("#loading").removeClass("animated fadeOut");
    $("#loading").css("display", "none");
    $("#box").css("display", "none");
    $("#about").removeClass("animated fadeIn");
    $("#contact").removeClass("animated fadeIn");
    $("#work").removeClass("animated fadeIn");
    typeWriter('workname');
  }, 1000);
}, 1500);

//-----------------------------------SCROLL ANIMATION--------------------------------------------------------
//Detect elements with the class js-scroll
const scrollElements = document.querySelectorAll(".js-scroll");

//Detect if an element is in view
const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

//Detect if an element is out of view
const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

//Add class to element in view to start animation
const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

//Remove class to element out of view
const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

//Start or hide animation if element is or is not in view
const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      el.classList.add('not-visible')
      hideScrollElement(el)
    }
  })
}

//Start animation on scroll
document.getElementById('work_container').addEventListener("scroll", () => {
  handleScrollAnimation();
});

//-------------------------------------END OF SCROLL ANIMATION------------------------------

//-------------------------------------CURSOR-----------------------------------------------

//Custom cursor script
const cursor = document.querySelector(".cursor");
const links = document.querySelectorAll(".liens");
const navlinks = document.querySelectorAll(".liens");

//Add listener when the mouse is moved
document.addEventListener("mousemove", (e) => {
  let leftPosition = e.pageX + 4;
  let topPosition = e.pageY + 4;

  cursor.style.left = leftPosition + "px";
  cursor.style.top = topPosition + "px";
})

//Increase the size of the cursor on entering a link
links.forEach(link => {
  link.addEventListener("mouseenter", () => {
    cursor.classList.add("large");
  })
})

//Decrease the size of the cursor on leaving a link
links.forEach(link => {
  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("large");
  })
})

//Add delay to animation
navlinks.forEach((li, i) => {
  li.style.animationDelay = 0 + i * 140 + "ms";
})

//--------------------------------------------END OF CURSOR------------------------------------
