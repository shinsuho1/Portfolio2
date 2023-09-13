let article = document.querySelectorAll("article");
const article_arr = Array.from(article);
const lis = document.querySelectorAll(".information>nav>ul>li");
const main = document.querySelector(".content");
const aside = document.querySelector("aside");
const close = aside.querySelector("span");
const address = document.querySelector(".address");
let posArr = [];

setTimeout(() => {
    main.classList.add("atvie");
}, 300);

setInterval(() => {
    article[0].classList.add("first");
    article[1].classList.add("first");
    article[2].classList.add("first");

}, 800);


setPos()
function setPos(){
    for(let el of article_arr){
        posArr.push(el.offsetTop);
    }
}

for(let el of article_arr){
    article_arr.splice(2,1);
    el.addEventListener("click",(e)=>{
        let tit = e.currentTarget.querySelector("h2").innerText;
        let txt = e.currentTarget.querySelector("p").innerText;
        let img = e.currentTarget.querySelector("img").getAttribute("src");
        let imgSrc = img.replace("article_1","article_2");
        
        aside.querySelector("h1").innerText = tit;
        aside.querySelector("p").innerText = txt;
        aside.querySelector("img").setAttribute("src", imgSrc);
        aside.classList.add("on");
    });
}

address.addEventListener("click",(e)=>{
    const location = document.querySelector(".location");
    location.classList.add("on");
});

close.addEventListener("click", () => {
    aside.classList.remove("on");
})



