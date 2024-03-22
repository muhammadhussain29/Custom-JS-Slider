// ----------------------------------------- Navbar JavaScript 

let navButton = document.querySelector('.nav-links-mobile img')
let navList = document.getElementsByClassName('nav-links-dropdown')[0]
// console.log(navList)

// ----------------------------------------- Home Screen Slider JavaScript 

// Accessing HTML Elements
let container_1 = document.getElementById('container-1') 
let container_2 = document.getElementById('container-2') 
let container_3 = document.getElementById('container-3') 
let container_4 = document.getElementById('container-4') 

let sliderButtonRight = document.getElementById('slider-btn-right')
let sliderButtonLeft = document.getElementById('slider-btn-left')

// Needed Variables
let slidePosition = container_1; 

// Function to Remove Animations
let removeAnimation = () => {
    container_1.classList.remove('container-animation-slide-out-forward','container-animation-slide-in-forward','container-animation-slide-out-backward','container-animation-slide-in-backward')
    container_2.classList.remove('container-animation-slide-out-forward','container-animation-slide-in-forward','container-animation-slide-out-backward','container-animation-slide-in-backward')
    container_3.classList.remove('container-animation-slide-out-forward','container-animation-slide-in-forward','container-animation-slide-out-backward','container-animation-slide-in-backward')
    container_4.classList.remove('container-animation-slide-out-forward','container-animation-slide-in-forward','container-animation-slide-out-backward','container-animation-slide-in-backward')
}

// Functions For Sliding Section Manualy
let slideRight = () => {
    if(slidePosition == container_1){
        removeAnimation()

        container_1.classList.add('container-animation-slide-out-forward')
        container_2.classList.add('container-animation-slide-in-forward')
        slidePosition = container_2
        
        container_1.style.zIndex = 1;
        container_2.style.zIndex = 2;
        container_3.style.zIndex = 0;
        container_4.style.zIndex = 0;
   }
    else if(slidePosition == container_2){
        removeAnimation()

        container_2.classList.add('container-animation-slide-out-forward')
        container_3.classList.add('container-animation-slide-in-forward')
        slidePosition = container_3

        container_1.style.zIndex = 0;
        container_2.style.zIndex = 1;
        container_3.style.zIndex = 2;
        container_4.style.zIndex = 0;

    }
    else if(slidePosition == container_3){
        removeAnimation()

        container_3.classList.add('container-animation-slide-out-forward')
        container_4.classList.add('container-animation-slide-in-forward')
        slidePosition = container_4

        container_1.style.zIndex = 0;
        container_2.style.zIndex = 0;
        container_3.style.zIndex = 1;
        container_4.style.zIndex = 2;
    }
    else if(slidePosition == container_4){
        removeAnimation()
       
        container_4.classList.add('container-animation-slide-out-forward')
        container_1.classList.add('container-animation-slide-in-forward')
        slidePosition = container_1
        
        container_1.style.zIndex = 2;
        container_2.style.zIndex = 0;
        container_3.style.zIndex = 0;
        container_4.style.zIndex = 1;

    }
}
let slideLeft = () => {
    if(slidePosition == container_1){
        removeAnimation()

        container_4.classList.add('container-animation-slide-in-backward')
        container_1.classList.add('container-animation-slide-out-backward')
        slidePosition = container_4

        container_1.style.zIndex = 1;
        container_2.style.zIndex = 0;
        container_3.style.zIndex = 0;
        container_4.style.zIndex = 2;
    }
    else if(slidePosition == container_4){
        removeAnimation()

        container_3.classList.add('container-animation-slide-in-backward')
        container_4.classList.add('container-animation-slide-out-backward')
        slidePosition = container_3

        container_1.style.zIndex = 0;
        container_2.style.zIndex = 0;
        container_3.style.zIndex = 2;
        container_4.style.zIndex = 1;
    }
    else if(slidePosition == container_3){
        removeAnimation()

        container_2.classList.add('container-animation-slide-in-backward')
        container_3.classList.add('container-animation-slide-out-backward')
        slidePosition = container_2

        container_1.style.zIndex = 0;
        container_2.style.zIndex = 2;
        container_3.style.zIndex = 1;
        container_4.style.zIndex = 0;
    }
    else if(slidePosition == container_2){
        removeAnimation()

        container_1.classList.add('container-animation-slide-in-backward')
        container_2.classList.add('container-animation-slide-out-backward')
        slidePosition = container_1

        container_1.style.zIndex = 2;
        container_2.style.zIndex = 1;
        container_3.style.zIndex = 0;
        container_4.style.zIndex = 0;
    }
}

// Auto Sliding Effect 
function interval(){
    return setInterval(slideRight, 4000);
}
let autoSliding = interval();

// Slider Buttons Implementation
sliderButtonRight.addEventListener('click',() => {
    clearInterval(autoSliding)
    slideRight()
    setTimeout(() => {
        clearInterval(autoSliding)
        autoSliding = interval()
    },5000)
})
sliderButtonLeft.addEventListener('click',() => {
    clearInterval(autoSliding)
    slideLeft()
    setTimeout(() => {
        clearInterval(autoSliding)
        autoSliding = interval()
    },5000)
})