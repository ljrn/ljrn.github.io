function openOrCloseOtherPage(otherPage, slide,close){
    if(!close)$(otherPage).css("display","inherit");
    $(otherPage).addClass(slide)
    setTimeout(function(){
        $(otherPage).removeClass(slide);
        if(close){
            $(otherPage).css("display","none");
            if(otherPage=='#about_container'){
              document.querySelectorAll('.pin').forEach((el)=>{
                el.classList.remove('drop');
              })
            }
        }
    },800);
    if(otherPage=='#about_container'){
      document.querySelectorAll('.pin').forEach((el)=>{
        el.classList.add('animated');
        el.classList.add('slideInDown');
        el.style.animationDelay='0.2s';
      })
    }
}

  var i = 0;
  var txt = 'Software Engineer / Data Analyst';
  var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("workname").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
      $("#box").css("display","none");
      $("#about").removeClass("animated fadeIn");
      $("#contact").removeClass("animated fadeIn");
      $("#work").removeClass("animated fadeIn");
      typeWriter();
    },1000);
},1500);

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      el.classList.add('not-visible')
      hideScrollElement(el)
    }
  })
}

document.getElementById('work_container').addEventListener("scroll", () => { 
  handleScrollAnimation();
});

const cursor = document.querySelector(".cursor");
const links = document.querySelectorAll(".liens");
const navlinks = document.querySelectorAll(".liens");

document.addEventListener("mousemove", (e) => {
    let leftPosition = e.pageX + 4;
    let topPosition = e.pageY + 4;

    cursor.style.left = leftPosition + "px";
    cursor.style.top = topPosition + "px";
})

links.forEach(link => {
    link.addEventListener("mouseenter", () => {
        cursor.classList.add("large");
    })
})

links.forEach(link => {
    link.addEventListener("mouseleave", () => {
        cursor.classList.remove("large");
    })
})

// Animation

navlinks.forEach((li, i) => {
    li.style.animationDelay = 0 + i * 140 + "ms";
})


