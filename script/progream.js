const progream = document.querySelector(".progream");
const progream_title = progream.querySelectorAll("p");
const progream_title_arr = Array.from(progream_title);

progream_title_arr.map((el,index)=>{

    let Values = progream_title_arr[index].innerText.substr(0,100) + " ...";
    progream_title_arr[index].innerText = Values;

});
