const dots = document.getElementById("dots");
const more = document.getElementById("more");
const button = document.getElementById("read-more1");
//adding event to buttons
//first button
button.addEventListener("click",function (){
    if(dots.style.display === "none"){
        dots.style.display = "inline";
        button.textContent = "Read more";
        more.style.display = "none";
    }
    else{
        dots.style.display = "none";
        button.textContent = "Read less";
        more.style.display = "inline";
    }
});
//second button
const dots2 = document.getElementById("dots2");
const more2 = document.getElementById("more2");
const button2 = document.getElementById("read-more2");
button2.addEventListener("click",function (){
    if(dots2.style.display === "none"){
        dots2.style.display = "inline";
        button2.textContent = "Read more";
        more2.style.display = "none";
    }
    else{
        dots2.style.display = "none";
        button2.textContent = "Read less";
        more2.style.display = "inline";
    }
});

//third button
const dots3= document.getElementById("dots3");
const more3 = document.getElementById("more3");
const button3 = document.getElementById("read-more3");
button3.addEventListener("click",function (){
    if(dots3.style.display === "none"){
        dots3.style.display = "inline";
        button3.textContent = "Read more";
        more3.style.display = "none";
    }
    else{
        dots3.style.display = "none";
        button3.textContent = "Read less";
        more3.style.display = "inline";
    }
});

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

