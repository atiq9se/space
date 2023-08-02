const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  burger.addEventListener('click', () => {
      // toggle nav
      nav.classList.toggle('nav-active');

      // animated links
      navLinks.forEach((link, index) => {
          if (link.style.animation) {
              link.style.animation = ''
          } else {
              link.style.animation = `navLinkFade 0.5s ease forwards ${index/7+ 0.3}s`;
          }
      });
      // burger animation
      burger.classList.toggle('toggle');

  });

}
navSlide();

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView:2,
    spaceBetween:30,
    breakpoints: {  
      '320': {
        slidesPerView: 1},
      '992': {
          slidesPerView: 2}
    },
    loop: true,
    autoplay: {
        delay: 1200,
      },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination1',
    },

  
  });

  const swiper_two = new Swiper('.swiper_two', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView:2,
    spaceBetween:30,
    breakpoints: {  
      '320': {
        slidesPerView: 1},
      '576': {
          slidesPerView: 2}
    },
    loop: false,
    autoplay:false,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination2',
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

  
  });



const ourItemDiv = document.getElementsByClassName("item");
const openIcon = document.getElementsByClassName('iconsOpen');
const closeIcon = document.getElementsByClassName('iconsClose');
// console.log(ourItemDiv);

for(let i=0; i<ourItemDiv.length; i++){
    
    closeIcon[i].style.display= "none";
    ourItemDiv[i].addEventListener('click', ()=>{
        const result = ourItemDiv[i].classList.toggle('active');
        if(result){
            closeIcon[i].style.display= "block";
            openIcon[i].style.display= "none";
        }else{
            closeIcon[i].style.display= "none";
            openIcon[i].style.display= "block";
        }
    })
}
  