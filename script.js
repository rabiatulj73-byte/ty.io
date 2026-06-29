/* ==========================================
   PREMIUM LOVE WEBSITE
   SCRIPT.JS - BAGIAN 1A
========================================== */

// ================= ELEMENT =================

const loading = document.getElementById("loading");
const envelope = document.getElementById("envelope");
const openLetter = document.getElementById("openLetter");
const main = document.getElementById("main");

const music = document.getElementById("music");
const playMusic = document.getElementById("playMusic");
const pauseMusic = document.getElementById("pauseMusic");

const typing = document.querySelector(".typing");

// ================= LOADING =================

window.addEventListener("load", () => {

    setTimeout(() => {

        loading.style.opacity = "0";
        loading.style.visibility = "hidden";

    }, 2200);

});

// ================= OPEN LETTER =================

openLetter.addEventListener("click", () => {

    envelope.style.transform = "scale(0)";
    envelope.style.opacity = "0";

    setTimeout(() => {

        document.querySelector(".welcome").style.display = "none";

        main.classList.remove("hidden");
        main.classList.add("fade-in");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 700);

});

// ================= AUTOPLAY MUSIC =================

window.addEventListener("click", () => {

    music.play().catch(() => {});

}, { once: true });

// ================= MUSIC BUTTON =================

playMusic.addEventListener("click", () => {

    music.play();

});

pauseMusic.addEventListener("click", () => {

    music.pause();

});

// ================= INTRO ANIMATION =================

document.addEventListener("DOMContentLoaded", () => {

    document.body.classList.add("fade-in");

});
/* ==========================================
   PREMIUM LOVE WEBSITE
   SCRIPT.JS - BAGIAN 1B
========================================== */

// ================= TYPING EFFECT =================

const loveText = `

Sayang...

Terima kasih karena sudah hadir dalam hidupku.

Bersamamu aku belajar arti cinta,
kesabaran, perhatian, dan kebahagiaan.

Aku mungkin bukan orang yang paling sempurna,
tetapi aku akan selalu berusaha menjadi
orang terbaik untukmu.

Semoga kita selalu bersama,
melewati setiap tawa,
setiap air mata,
dan setiap mimpi yang ingin kita wujudkan.

Aku mencintaimu hari ini,
besok,
dan selamanya.

❤️

`;

let index = 0;

function typeWriter() {

    if (index < loveText.length) {

        typing.innerHTML += loveText.charAt(index);

        index++;

        setTimeout(typeWriter, 45);

    }

}

// ================= START TYPING =================

openLetter.addEventListener("click", () => {

    setTimeout(() => {

        typing.innerHTML = "";

        index = 0;

        typeWriter();

    }, 900);

});

// ================= GLASS CARD ANIMATION =================

const glassCard = document.querySelector(".glass-card");

function showCardAnimation(){

    glassCard.style.opacity = "0";

    glassCard.style.transform = "translateY(40px)";

    setTimeout(()=>{

        glassCard.style.transition=".8s";

        glassCard.style.opacity="1";

        glassCard.style.transform="translateY(0)";

    },300);

}

openLetter.addEventListener("click",()=>{

    setTimeout(showCardAnimation,500);

});

// ================= BUTTON EFFECT =================

const buttons=document.querySelectorAll("button");

buttons.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="scale(1.05)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="scale(1)";

    });

});

// ================= SMOOTH SCROLL =================

document.querySelectorAll("a[href^='#']").forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});
/* ==========================================
   PREMIUM LOVE WEBSITE
   SCRIPT.JS - BAGIAN 2
========================================== */

// ================= COUNTDOWN =================

// GANTI DENGAN TANGGAL JADIAN KALIAN
const anniversaryDate = new Date("2026-04-24T00:00:00");

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateCountdown() {

    const now = new Date();

    const diff = now - anniversaryDate;

    const totalSeconds = Math.floor(diff / 1000);

    const days = Math.floor(totalSeconds / 86400);

    const hours = Math.floor((totalSeconds % 86400) / 3600);

    const minutes = Math.floor((totalSeconds % 3600) / 60);

    const seconds = totalSeconds % 60;

    if(daysEl) daysEl.textContent = days;
    if(hoursEl) hoursEl.textContent = hours;
    if(minutesEl) minutesEl.textContent = minutes;
    if(secondsEl) secondsEl.textContent = seconds;

}

updateCountdown();

setInterval(updateCountdown,1000);

// ================= QUOTES SLIDER =================

const quotes = document.querySelectorAll(".quote");

let quoteIndex = 0;

function nextQuote(){

    if(quotes.length === 0) return;

    quotes.forEach(item=>{

        item.classList.remove("active");

    });

    quoteIndex++;

    if(quoteIndex >= quotes.length){

        quoteIndex = 0;

    }

    quotes[quoteIndex].classList.add("active");

}

setInterval(nextQuote,4000);

// ================= POPUP =================

const popup = document.getElementById("popup");

const surpriseBtn = document.getElementById("surpriseBtn");

const closePopup = document.getElementById("closePopup");

if(surpriseBtn){

    surpriseBtn.addEventListener("click",()=>{

        popup.classList.add("active");

    });

}

if(closePopup){

    closePopup.addEventListener("click",()=>{

        popup.classList.remove("active");

    });

}

window.addEventListener("click",(e)=>{

    if(e.target === popup){

        popup.classList.remove("active");

    }

});

// ================= LOVE BUTTON =================

const loveBtn = document.getElementById("loveBtn");

if(loveBtn){

    loveBtn.addEventListener("click",()=>{

        loveBtn.innerHTML = "💖 Aku Sayang Kamu Selamanya 💖";

        loveBtn.style.background = "#ff4d88";

        loveBtn.style.color = "#ffffff";

        loveBtn.style.transform = "scale(1.1)";

        setTimeout(()=>{

            loveBtn.style.transform = "scale(1)";

        },500);

    });

}
/* ==========================================
   PREMIUM LOVE WEBSITE
   SCRIPT.JS - BAGIAN 3
========================================== */

// ================= HEART RAIN =================

const heartContainer = document.getElementById("heart-container");

function createHeart(){

    if(!heartContainer) return;

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize = (18 + Math.random() * 30) + "px";

    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    heartContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(createHeart,350);

// ================= FLOWER PETALS =================

const flowerContainer = document.getElementById("flower-container");

const flowers = ["🌸","🌺","🌹","💮"];

function createFlower(){

    if(!flowerContainer) return;

    const flower = document.createElement("div");

    flower.className = "flower";

    flower.innerHTML = flowers[Math.floor(Math.random()*flowers.length)];

    flower.style.left = Math.random()*100 + "%";

    flower.style.fontSize = (18 + Math.random()*20) + "px";

    flower.style.animationDuration = (6 + Math.random()*6) + "s";

    flowerContainer.appendChild(flower);

    setTimeout(()=>{

        flower.remove();

    },12000);

}

setInterval(createFlower,800);

// ================= LOVE BUTTON EFFECT =================

if(loveBtn){

    loveBtn.addEventListener("click",()=>{

        for(let i=0;i<20;i++){

            createHeart();

        }

    });

}

// ================= FLOATING CARD =================

const cards = document.querySelectorAll(".photo-card,.glass-card,.letter-card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px) scale(1.02)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0) scale(1)";

    });

});

// ================= SIMPLE FIREWORK =================

const canvas = document.getElementById("fireworks");

if(canvas){

    const ctx = canvas.getContext("2d");

    function resizeCanvas(){

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

    }

    resizeCanvas();

    window.addEventListener("resize",resizeCanvas);

    function firework(){

        const x = Math.random()*canvas.width;
        const y = Math.random()*canvas.height*0.6;

        for(let i=0;i<35;i++){

            ctx.beginPath();

            ctx.arc(

                x + Math.cos(i)*40*Math.random(),

                y + Math.sin(i)*40*Math.random(),

                2,

                0,

                Math.PI*2

            );

            ctx.fillStyle=`hsl(${Math.random()*360},100%,70%)`;

            ctx.fill();

        }

        setTimeout(()=>{

            ctx.clearRect(0,0,canvas.width,canvas.height);

        },500);

    }

    setInterval(firework,2500);

}