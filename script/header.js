const btnCall = document.querySelector(".btnCall");
const menuMo = document.querySelector(".menuMo");
const menuMo_close = menuMo.querySelector(".btnClose")
const header = document.querySelector("header");

setTimeout(()=>{
    header.classList.add("on");
},200);

btnCall.addEventListener("click",(e)=>{
    e.preventDefault();
    menuMo.classList.add("on");
});

menuMo_close.addEventListener("click",()=>{
    menuMo.classList.remove("on");
});