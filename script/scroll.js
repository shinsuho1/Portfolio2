const sections = document.querySelectorAll("section");
const section_arr = Array.from(sections);
const main_section = document.querySelector(".main");
let eventOnce = true;
let posArr = [];

setTimeout(() => {
    main_section.classList.add("on");
}, 700);


setPos();

function setPos(){
    for(let el of section_arr){
        posArr.push(el.offsetTop)
    }
}

window.addEventListener("scroll",()=>{
    let scroll = window.scrollY;
    section_arr.map((el,index)=>{
        if(scroll >= posArr[index]-400){
            section_arr[index].classList.add("on");
        }
    });
    if(eventOnce && scroll >= posArr[2] + 600){
        eventOnce = false;
        const data_lable = document.querySelectorAll(".table");
        data_lable.forEach((el,index)=>{
            let numElement = el.querySelector(".num");
            let num = parseFloat(numElement.innerText);
            
            let count = 0;
            let time = 3000 / num;
            
            let interval = setInterval(()=>{
                if(count == num){
                    clearInterval(interval);
                }else{
                    count++;
                    numElement.innerText = count + "%";
                }
            },time);
        });

    }
});