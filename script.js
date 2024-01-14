
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

let elem = document.querySelector("#elem-container");
let fixed =document.querySelector('#fixed-image');
let elems = document.querySelectorAll('.elem');
function isMobile() {
    return window.innerWidth <= 650; 
}
if(!isMobile()){
elem.addEventListener("mouseenter",function(){
    fixed.style.display = "block"
})
elem.addEventListener("mouseleave",function(){
    fixed.style.display = "none"
})

elems.forEach((e)=>{
   e.addEventListener('mouseenter',()=>{
    fixed.style.backgroundImage = `url(${e.dataset.image})`
   })
})

}

let buttons = document.querySelectorAll('#p4-text h2');
let imgDiv = document.getElementById('p4-img');

function activeBtn(buttonId){
 buttons.forEach(button =>{
    if (button.id === buttonId) {
        button.style.color = 'white'
    }
    else{
        button.style.color = 'grey'
    }
 })
}

function isActive (){
    let initialActiveBtn = buttons[0]
    imgDiv.style.backgroundImage = `url(${initialActiveBtn.dataset.image})`;
    activeBtn(initialActiveBtn.id)
}
window.onload = isActive;

buttons.forEach(button =>{
    button.addEventListener('click',()=>{
        imgDiv.style.backgroundImage = `url(${button.dataset.image})`;
        activeBtn(button.id);
    });
});


    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
        freeMode:true,
    });

function navResp(){
    let menu = document.querySelector("nav h3");
    let screen = document.querySelector("#full-scrn");
    let navImg = document.querySelector("nav img");
    let flag = 0;

    menu.addEventListener("click",()=>{
        if (flag == 0) {        
            screen.style.top = 0
            
            navImg.style.opacity = 0
            flag = 1
        }
        else{
            screen.style.top = "-150%"
            navImg.style.opacity = 1
            flag = 0
        }
    })
}
navResp()