const slider = document.querySelector("#slider");
const title = document.querySelector("#title");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let enableClick = true;

const icons = document.querySelectorAll(".icons>a");
const icons_arr = Array.from(icons);
const icon_p = document.querySelectorAll(".icons>p");


init();

next.addEventListener("click", (e) => {
    e.preventDefault();

    if (enableClick) {
        nextSlide();
        nextSlide_title();
        enableClick = false;
    }
    
});

prev.addEventListener("click", (e) => {
    e.preventDefault();
    
    if (enableClick) {
        prevSlide();
        prevSlide_title();
        enableClick = false
    }
});
icons_arr.map((el,index)=>{
    icons[index].addEventListener("click",(e)=>{
        e.preventDefault();
        const site = icon_p[index].innerHTML;
        if(confirm(`${site}`)){
            const link = icons_arr[index].getAttribute("href");
            location.href=link;
        }
    });
});

function init() {
    slider.style.left = "-100%";
    slider.prepend(slider.lastElementChild);

    title.style.left = "-100%";
    title.prepend(title.lastElementChild);
}

function nextSlide() {
    new Anim(slider, {
        prop: "left",
        value: "-200%",
        duration: 1000,
        callback: () => {
            slider.style.left = "-100%";
            slider.append(slider.firstElementChild);
            enableClick = true;
        }
    });
}

function nextSlide_title() {
    new Anim(title, {
        prop: "left",
        value: "-200%",
        duration: 1000,
        callback: () => {
            title.style.left = "-100%";
            title.append(title.firstElementChild);
            enableClick = true;
        }
    });
}

function prevSlide() {
    new Anim(slider, {
        prop: "left",
        value: "0%",
        duration: 1000,
        callback: () => {
            slider.style.left = "-100%";
            slider.prepend(slider.lastElementChild);
            enableClick = true;
        }
    }); 
}

function prevSlide_title() {
    new Anim(title, {
        prop: "left",
        value: "0%",
        duration: 1000,
        callback: () => {
            title.style.left = "-100%";
            title.prepend(title.lastElementChild);
            enableClick = true;
        }
    }); 
}


const articles = document.querySelectorAll("first>.inner>article");
const aside = document.querySelector("aside");


