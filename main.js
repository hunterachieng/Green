const navBar = document.getElementById("nav-bar");
const btn = document.getElementById("btntoggle");
btn.addEventListener("click", function(){
    if(navBar.classList.contains("responsive")){
        navBar.classList.remove("responsive");
        
    }
    else{
        navBar.classList.add("responsive");
    }
   
})
console.log(navBar.classList.contains("responsive"));
//newsletter
const overlay = document.querySelectorAll(".close");
const form = document.getElementById("form");
overlay.forEach((e)=>{
e.addEventListener("click" , function(){
    if(e.classList.contains("overlay")){
        form.style.display = "none";
        
    }
    else{
        form.style.display = "contents";
    }
})

})

const slides = document.getElementsByClassName("pic-slides");
const dots = document.getElementsByClassName("dots");
var slideIndexes = 0;

function slidesShow(){
    let i;
    for (i = 0; i< slides.length; i++){
        slides[i].style.display = "none";
    }
    slideIndexes ++;
    if(slideIndexes > slides.length){
        slideIndexes = 1;
    }
    for(i =0;i<dots.length; i++){
        if(dots[i].classList.contains("active")){
            dots[i].classList.remove("active");
        }
        else{
            dots[slideIndexes-1].classList.add("active");
        }
    }
    slides[slideIndexes-1].style.display = "block";
    setTimeout(slidesShow, 2000);
}
slidesShow();
























