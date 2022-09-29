var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;

// Javascript for image slider manual navigation
var manualNav = function(manual){
  slides.forEach((slide) => {
    slide.classList.remove('active');

    btns.forEach((btn) => {
      btn.classList.remove('active');
    });
  });

  slides[manual].classList.add('active');
  btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

// Javascript for image slider autoplay navigation
var repeat = function(activeClass){
  let active = document.getElementsByClassName('active');
  let i = 1;

  var repeater = () => {
    setTimeout(function(){
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove('active');
      });

    slides[i].classList.add('active');
    btns[i].classList.add('active');
    i++;

    if(slides.length == i){
      i = 0;
    }
    if(i >= slides.length){
      return;
    }
    repeater();
  }, 6000);
  }
  repeater();
}
repeat();


const faqbtn = document.querySelectorAll('.Q')
const faqpara = document.querySelectorAll('.A')
const faqs = document.querySelectorAll('.Qna')
const angle = document.querySelectorAll('.Q svg')


faqs.forEach(faq => {

  faq.addEventListener('click' , ()=>{

faq.classList.toggle('active')

  
   
      


  })
})
 

const popupbtn = document.querySelector('.playbtn')
const popupclose = document.querySelector('.popupclose')
const video = document.querySelector('.video')



popupbtn.addEventListener('click' , ()=>{

video.classList.add('show')

})
popupclose.addEventListener('click' , ()=>{

video.classList.remove('show')

})


const opens  = document.querySelector('.open');
console.log(opens);
const closes = document.querySelector('.close');
const nav = document.querySelector('.mobNavi');
const body = document.querySelector('body')

  opens.addEventListener('click', ()=>{


    nav.classList.add('open');
    
    
    })

 


closes.addEventListener('click', ()=>{


nav.classList.remove('open');

})