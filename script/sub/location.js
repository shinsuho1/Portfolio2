var container = document.getElementById('map');
const btns = document.querySelectorAll(".btns>li");
const main_txt = document.querySelector(".location>.txt1");

var options = { 
	center: new kakao.maps.LatLng(37.5746932, 126.9789672), 
	level: 1 
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
var markerPosition  = new kakao.maps.LatLng(37.5746932, 126.9789672); //


var markerOptions = [{
    title : "Headquarters",
    latlng : new kakao.maps.LatLng(37.5746932, 126.9789672),
    office : "한국마이크로소프트",
    address : "서울 종로구 종로1길 50 더케이트윈타워 A동",
    button : btns[0]
},{
    title : "Branch",
    latlng : new kakao.maps.LatLng(37.5261578, 126.9285498),
    office : "마이크로소프트 더현대서울점",
    address : "서울특별시 영등포구 여의동 22",
    button : btns[1]
}]


for(let i = 0; i < markerOptions.length ; i++){

    new kakao.maps.Marker({
        map: map, 
        position: markerOptions[i].latlng,
        title: markerOptions[i].title,
        image: new kakao.maps.MarkerImage("./img/sub/information/marker1.png",new kakao.maps.Size(232 , 99), {offset: new kakao.maps.Point(116,64)})
    });

    markerOptions[i].button.addEventListener("click",(e)=>{
        e.preventDefault();

        let title = main_txt.querySelector(".title");
        title.innerText = markerOptions[i].title;

        let address = main_txt.querySelector(".address");
        address.innerText = markerOptions[i].address;

        let office = main_txt.querySelector(".office");
        office.innerText = markerOptions[i].office;

        for(let j = 0; j<markerOptions.length ; j++){
            markerOptions[j].button.classList.remove("on");
        }
        markerOptions[i].button.classList.add("on");    
        map.setCenter(markerOptions[i].latlng);
    });
}


var mapTypeControl = new kakao.maps.MapTypeControl();

map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);


