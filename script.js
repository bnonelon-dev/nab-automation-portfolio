// Smooth Reveal Animation

const reveals=document.querySelectorAll('.reveal');

function reveal(){

reveals.forEach((item)=>{

const top=item.getBoundingClientRect().top;

if(top<window.innerHeight-120){

item.classList.add("active");

}

})

}

window.addEventListener("scroll",reveal);

reveal();



// Counter Animation

const counters=document.querySelectorAll(".stat-card h2");

let started=false;

window.addEventListener("scroll",()=>{

const stats=document.querySelector(".stats");

if(!stats) return;

const trigger=stats.getBoundingClientRect().top;

if(trigger<window.innerHeight && !started){

started=true;

counters.forEach(counter=>{

const target=counter.innerText.replace(/\D/g,'');

let count=0;

const speed=target/70;

const plus=counter.innerText.replace(/[0-9]/g,'');

const update=()=>{

count+=speed;

if(count<target){

counter.innerText=Math.floor(count)+plus;

requestAnimationFrame(update);

}else{

counter.innerText=target+plus;

}

}

update();

})

}

})



// Active Navbar

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

if(scrollY>=top){

current=section.getAttribute("id");

}

})

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

})

});



// Floating Effect

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const x=e.offsetX;

const y=e.offsetY;

card.style.transform=`rotateY(${(x-150)/18}deg) rotateX(${-(y-120)/18}deg) translateY(-10px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="rotateY(0deg) rotateX(0deg)";

});

});
const galleryImages = document.querySelectorAll(".gallery-card img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.querySelector(".close-lightbox");

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.classList.add("active");
    lightboxImg.src = img.src;
  });
});

closeLightbox.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

lightbox.addEventListener("click", (e) => {
  if(e.target === lightbox){
    lightbox.classList.remove("active");
  }
});document.querySelectorAll(".float-icon").forEach(icon => {
  icon.addEventListener("click", () => {
    icon.classList.add("active");

    setTimeout(() => {
      icon.classList.remove("active");
    }, 900);
  });
});