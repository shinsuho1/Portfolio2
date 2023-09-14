const mobile_article = document.querySelectorAll(".introduction>.inner>.wrap>article")

for(let el of mobile_article){
    el.addEventListener("click",()=>{
        el.classList.add("click");
    });
}