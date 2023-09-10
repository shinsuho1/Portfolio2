const support_menus = document.querySelectorAll(".menu>li");
const support_articles = document.querySelectorAll("article");


support_menus.forEach((el,index)=>{
    el.addEventListener("click",()=>{
        for(let i = 0 ; i<support_articles.length ; i++){
            support_articles[i].classList.remove("on");
            support_menus[i].classList.remove("on");
        }
        support_menus[index].classList.add("on");
        support_articles[index].classList.add("on");
    });
});


const support = document.querySelector(".support");

setTimeout(() => {
    support.classList.add("on");
}, 700);