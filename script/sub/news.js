const contents = document.querySelectorAll(".content");
const articles = document.querySelectorAll("article");
const news_page = document.querySelector(".news");

setTimeout(() => {
    news_page.classList.add("on");
}, 200);


contents.forEach((el,index)=>{
    el.addEventListener("click",()=>{

        for(let i = 0; i < contents.length; i++){
            contents[i].classList.remove("on");
            articles[i].classList.remove("on");
        }
        contents[index].classList.add("on");
        articles[index].classList.add("on");

        window.scrollTo({ left: 0, top: 0});
    });
});