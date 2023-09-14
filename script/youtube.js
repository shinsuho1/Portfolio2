// key = AIzaSyDgv-ToqwoVeH_iMBouKnpnuMXWjqXbK8I / list = PLboMi2lmGKuA7r6tYKYAh-yUxn1OBNty3

let vidList = document.querySelector(".vidList");
let key = "AIzaSyDgv-ToqwoVeH_iMBouKnpnuMXWjqXbK8I";
let playListId = "PLboMi2lmGKuA7r6tYKYAh-yUxn1OBNty3";
let count = "1";
const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playListId}&maxResults=${count}`;

const openBtn = document.querySelector(".main>.title>.btn");

openBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    main_section.classList.remove("on");
    let pop = document.createElement("figure");
        pop.classList.add("pop");

        pop.innerHTML = `
            <iframe src="https://www.youtube.com/embed/qKG8r1NERl4" frameborder="0" width="100%" height="100%" allowfullscreen></iframe>
            <span class="btnClose"><img src="./img/close.png" alt=""></span>
        `
        vidList.append(pop);
    
});
vidList.addEventListener("click",(e)=>{
    const pop = vidList.querySelector(".pop");
    if(pop){
        const close = pop.querySelector("span>img");
        if(e.target == close) {
            pop.remove();
            main_section.classList.add("on");
        }
    }
});
