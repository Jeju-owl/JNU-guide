// 한식-기본 이미지 옵션 생성
var koreanimageSrc = 'https://raw.githubusercontent.com/Jeju-owl/JNU-guide/feature-7/images/bibimbap.png', // 마커이미지의 주소입니다    
koreanimageSize = new kakao.maps.Size(20, 20), // 마커이미지의 크기입니다
koreanimageOption = {offset: new kakao.maps.Point(10, 20)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
// 한식-김밥 이미지 옵션 생성
var gimbapimageSrc = 'https://raw.githubusercontent.com/Jeju-owl/JNU-guide/feature-7/images/gimbap.png',  
gimbapimageSize = new kakao.maps.Size(20, 20),
gimbapimageOption = {offset: new kakao.maps.Point(10, 20)};
// 한식-갈비 이미지 옵션 생성
var galbiimageSrc = 'https://raw.githubusercontent.com/Jeju-owl/JNU-guide/feature-7/images/galbi.png',  
galbiimageSize = new kakao.maps.Size(20, 20),
galbiimageOption = {offset: new kakao.maps.Point(10, 20)};
// 한식-덫밥 이미지 옵션 생성
var riceimageSrc = 'https://raw.githubusercontent.com/Jeju-owl/JNU-guide/feature-7/images/rice.png',  
riceimageSize = new kakao.maps.Size(20, 20),
riceimageOption = {offset: new kakao.maps.Point(10, 20)};
// 한식-국수 이미지 옵션 생성
var noodleimageSrc = 'https://raw.githubusercontent.com/Jeju-owl/JNU-guide/feature-7/images/noodle.png',  
noodleimageSize = new kakao.maps.Size(20, 20),
noodleimageOption = {offset: new kakao.maps.Point(10, 20)};
// 한식-떡 이미지 옵션 생성
var ddeokimageSrc = 'https://raw.githubusercontent.com/Jeju-owl/JNU-guide/feature-7/images/ddeok.png',  
ddeokimageSize = new kakao.maps.Size(20, 20),
ddeokimageOption = {offset: new kakao.maps.Point(10, 20)};
// 한식-토스트 이미지 옵션 생성
var toastimageSrc = 'https://raw.githubusercontent.com/Jeju-owl/JNU-guide/feature-7/images/toast.png',  
toastimageSize = new kakao.maps.Size(20, 20),
toastimageOption = {offset: new kakao.maps.Point(10, 20)};
// 양중일-돈까스 이미지 옵션 생성
var ddonimageSrc = 'https://raw.githubusercontent.com/Jeju-owl/JNU-guide/feature-7/images/ddon.png',   
ddonimageSize = new kakao.maps.Size(20, 20),
ddonimageOption = {offset: new kakao.maps.Point(10, 20)};
// 양중일-중식 이미지 옵션 생성
var chinaimageSrc = 'https://raw.githubusercontent.com/Jeju-owl/JNU-guide/feature-7/images/china.png',   
chinaimageSize = new kakao.maps.Size(20, 20),
chinaimageOption = {offset: new kakao.maps.Point(10, 20)};
// 양중일-우동 이미지 옵션 생성
var udonimageSrc = 'https://raw.githubusercontent.com/Jeju-owl/JNU-guide/feature-7/images/udon.png',   
udonimageSize = new kakao.maps.Size(20, 20),
udonimageOption = {offset: new kakao.maps.Point(10, 20)};
// 양중일-텐동 이미지 옵션 생성
var tendonimageSrc = 'https://raw.githubusercontent.com/Jeju-owl/JNU-guide/feature-7/images/tendon.png',   
tendonimageSize = new kakao.maps.Size(20, 20),
tendonimageOption = {offset: new kakao.maps.Point(10, 20)};
// 양중일-마라탕 이미지 옵션 생성
var maratangimageSrc = 'https://raw.githubusercontent.com/Jeju-owl/JNU-guide/feature-7/images/maratang.png',   
maratangimageSize = new kakao.maps.Size(20, 20),
maratangimageOption = {offset: new kakao.maps.Point(10, 20)};
// 양중일-파스타 이미지 옵션 생성
var pastaimageSrc = 'https://raw.githubusercontent.com/Jeju-owl/JNU-guide/feature-7/images/pasta.png',   
pastaimageSize = new kakao.maps.Size(20, 20),
pastaimageOption = {offset: new kakao.maps.Point(10, 20)};
// 카페&디저트-커피 이미지 옵션 생성
var coffeeimageSrc = 'https://raw.githubusercontent.com/Jeju-owl/JNU-guide/feature-7/images/coffee.png',   
coffeeimageSize = new kakao.maps.Size(20, 20),
coffeeimageOption = {offset: new kakao.maps.Point(10, 20)};
// 살찌는- 버거 옵션 생성
var burgerimageSrc = 'https://raw.githubusercontent.com/Jeju-owl/JNU-guide/feature-7/images/burger.png',   
burgerimageSize = new kakao.maps.Size(20, 20),
burgerimageOption = {offset: new kakao.maps.Point(10, 20)};
// 살찌는- 치킨 옵션 생성
var chickenimageSrc = 'https://raw.githubusercontent.com/Jeju-owl/JNU-guide/feature-7/images/chicken.png',   
chickenimageSize = new kakao.maps.Size(20, 20),
chickenimageOption = {offset: new kakao.maps.Point(10, 20)};
// 살찌는- 피자 옵션 생성
var pizzaimageSrc = 'https://raw.githubusercontent.com/Jeju-owl/JNU-guide/feature-7/images/pizza.png',   
pizzaimageSize = new kakao.maps.Size(20, 20),
pizzaimageOption = {offset: new kakao.maps.Point(10, 20)};
// 살찌는- 맥주 옵션 생성
var beerimageSrc = 'https://raw.githubusercontent.com/Jeju-owl/JNU-guide/feature-7/images/beer.png',   
beerimageSize = new kakao.maps.Size(20, 20),
beerimageOption = {offset: new kakao.maps.Point(10, 20)};

// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var koreanmarkerImage = new kakao.maps.MarkerImage(koreanimageSrc, koreanimageSize, koreanimageOption);
var gimbapmarkerImage = new kakao.maps.MarkerImage(gimbapimageSrc, gimbapimageSize, gimbapimageOption);
var galbimarkerImage = new kakao.maps.MarkerImage(galbiimageSrc, galbiimageSize, galbiimageOption);
var ricemarkerImage = new kakao.maps.MarkerImage(riceimageSrc, riceimageSize, riceimageOption);
var noodlemarkerImage = new kakao.maps.MarkerImage(noodleimageSrc, noodleimageSize, noodleimageOption);
var ddeokmarkerImage = new kakao.maps.MarkerImage(ddeokimageSrc, ddeokimageSize, ddeokimageOption);
var toastmarkerImage = new kakao.maps.MarkerImage(toastimageSrc, toastimageSize, toastimageOption);
var ddonmarkerImage = new kakao.maps.MarkerImage(ddonimageSrc, ddonimageSize, ddonimageOption);
var chinamarkerImage = new kakao.maps.MarkerImage(chinaimageSrc, chinaimageSize, chinaimageOption);
var udontmarkerImage = new kakao.maps.MarkerImage(udonimageSrc, udonimageSize, udonimageOption);
var tendonmarkerImage = new kakao.maps.MarkerImage(tendonimageSrc, tendonimageSize, tendonimageOption);
var maratangmarkerImage = new kakao.maps.MarkerImage(maratangimageSrc, maratangimageSize, maratangimageOption);
var pastamarkerImage = new kakao.maps.MarkerImage(pastaimageSrc, pastaimageSize, pastaimageOption);
var coffeemarkerImage = new kakao.maps.MarkerImage(coffeeimageSrc, coffeeimageSize, coffeeimageOption);
var burgermarkerImage = new kakao.maps.MarkerImage(burgerimageSrc, burgerimageSize, burgerimageOption);
var chickenmarkerImage = new kakao.maps.MarkerImage(chickenimageSrc, chickenimageSize, chickenimageOption);
var pizzamarkerImage = new kakao.maps.MarkerImage(pizzaimageSrc, pizzaimageSize, pizzaimageOption);
var beermarkerImage = new kakao.maps.MarkerImage(beerimageSrc, beerimageSize, beerimageOption);

// 식당 위치 정보
var koreanmarkerPosition = new kakao.maps.LatLng(33.45916954797216,126.5579752302018); // 이삭토스트-토스트
var koreanmarkerPosition1 = new kakao.maps.LatLng(33.460632008508654,126.56103883449029); // 콘킹부대찌개-한식
var koreanmarkerPosition2 = new kakao.maps.LatLng(33.46022359435553,126.5609145026397); // 김밥천구-김밥
var koreanmarkerPosition3 = new kakao.maps.LatLng(33.460598037253035,126.56099328991274); // 맵수다-갈비
var koreanmarkerPosition4 = new kakao.maps.LatLng(33.46033618927183,126.5615216842466); // 한솥도시락-덫밥
var koreanmarkerPosition5 = new kakao.maps.LatLng(33.460376608358665,126.56147845425443); // 밥먹젠-한식
var koreanmarkerPosition6 = new kakao.maps.LatLng(33.46065412115623,126.56155504285272); // 산들애국수-국수
var koreanmarkerPosition7 = new kakao.maps.LatLng(33.46067993195596,126.56184265374061); // 상아탑식당-갈비
var koreanmarkerPosition8 = new kakao.maps.LatLng(33.46036044935735,126.56200829947076); // 학교종이 땡땡땡-갈비
var koreanmarkerPosition9 = new kakao.maps.LatLng(33.460651648449094,126.56149320449096); // 봉구스밥버거-덫밥
var koreanmarkerPosition10 = new kakao.maps.LatLng(33.460661586622464,126.5617540035518); // 신전떡볶이-떡
var koreanmarkerPosition11 = new kakao.maps.LatLng(33.46037934531052,126.56225291776347); // 황칠해장국-한식
var koreanmarkerPosition12 = new kakao.maps.LatLng(33.44991589041655,126.55769951894841); // 매력식당-덫밥
var koreanmarkerPosition13 = new kakao.maps.LatLng(33.45019544707126,126.5583487997336); // 통큰이층-덫밥
var koreanmarkerPosition14 = new kakao.maps.LatLng(33.450022217578294,126.5584410982346); // 산아름국수-국수
var koreanmarkerPosition15 = new kakao.maps.LatLng(33.44932447888236,126.55808971038034); // 불노리왕막창-갈비
var koreanmarkerPosition16 = new kakao.maps.LatLng(33.44911220396614,126.55924428598729); // 개미와 베짱이-한식
var koreanmarkerPosition17 = new kakao.maps.LatLng(33.4489502053445,126.55932576952746); // 흥부네-덫밥
var koreanmarkerPosition18 = new kakao.maps.LatLng(33.44929790080385,126.55822159708907); // 옛날아우네 순대-한식
var koreanmarkerPosition19 = new kakao.maps.LatLng(33.44898577786935,126.55855390255299); // 엄마네 정식-한식
var koreanmarkerPosition20 = new kakao.maps.LatLng(33.456795261451575,126.55964373072615); // 글로벌하우스-한식

// 마커를 생성합니다 ------이부분부터 순서신경 잘해야됨------
var koreanmarker = new kakao.maps.Marker({
    position: koreanmarkerPosition, 
    image: toastmarkerImage // 마커이미지 설정 
});
var koreanmarker1 = new kakao.maps.Marker({
    position: koreanmarkerPosition1, 
    image: koreanmarkerImage // 마커이미지 설정 
});
var koreanmarker2 = new kakao.maps.Marker({
    position: koreanmarkerPosition2, 
    image: gimbapmarkerImage // 마커이미지 설정 
});
var koreanmarker3 = new kakao.maps.Marker({
    position: koreanmarkerPosition3, 
    image: galbimarkerImage // 마커이미지 설정 
});
var koreanmarker4 = new kakao.maps.Marker({
    position: koreanmarkerPosition4, 
    image: ricemarkerImage // 마커이미지 설정 
});
var koreanmarker5 = new kakao.maps.Marker({
    position: koreanmarkerPosition5, 
    image: koreanmarkerImage // 마커이미지 설정 
});
var koreanmarker6 = new kakao.maps.Marker({
    position: koreanmarkerPosition6, 
    image: noodlemarkerImage // 마커이미지 설정 
});
var koreanmarker7 = new kakao.maps.Marker({
    position: koreanmarkerPosition7, 
    image: galbimarkerImage // 마커이미지 설정 
});
var koreanmarker8 = new kakao.maps.Marker({
    position: koreanmarkerPosition8, 
    image: galbimarkerImage // 마커이미지 설정 
});
var koreanmarker9 = new kakao.maps.Marker({
    position: koreanmarkerPosition9, 
    image: ricemarkerImage // 마커이미지 설정 
});
var koreanmarker10 = new kakao.maps.Marker({
    position: koreanmarkerPosition10, 
    image: ddeokmarkerImage // 마커이미지 설정 
});
var koreanmarker11 = new kakao.maps.Marker({
    position: koreanmarkerPosition11, 
    image: koreanmarkerImage // 마커이미지 설정 
});
var koreanmarker12 = new kakao.maps.Marker({
    position: koreanmarkerPosition12, 
    image: ricemarkerImage // 마커이미지 설정 
});
var koreanmarker13 = new kakao.maps.Marker({
    position: koreanmarkerPosition13, 
    image: ricemarkerImage // 마커이미지 설정 
});
var koreanmarker14 = new kakao.maps.Marker({
    position: koreanmarkerPosition14, 
    image: noodlemarkerImage // 마커이미지 설정 
});
var koreanmarker15 = new kakao.maps.Marker({
    position: koreanmarkerPosition15, 
    image: galbimarkerImage // 마커이미지 설정 
});
var koreanmarker16 = new kakao.maps.Marker({
    position: koreanmarkerPosition16, 
    image: koreanmarkerImage // 마커이미지 설정 
});
var koreanmarker17 = new kakao.maps.Marker({
    position: koreanmarkerPosition17, 
    image: ricemarkerImage // 마커이미지 설정 
});
var koreanmarker18 = new kakao.maps.Marker({
    position: koreanmarkerPosition18, 
    image: koreanmarkerImage // 마커이미지 설정 
});
var koreanmarker19 = new kakao.maps.Marker({
    position: koreanmarkerPosition19, 
    image: koreanmarkerImage // 마커이미지 설정 
});
var koreanmarker20 = new kakao.maps.Marker({
    position: koreanmarkerPosition20, 
    image: koreanmarkerImage // 마커이미지 설정 
});


// 지도의 확대 축소 레벨이 바뀔때마다 실행되는 이벤트리스터입니다.
kakao.maps.event.addListener(map, 'zoom_changed', function() {        
var level = map.getLevel();// 지도의 현재 레벨을 얻어옵니다
if (level >= 3) {
    koreanmarker.setMap(null);
    koreanmarker1.setMap(null);
    koreanmarker2.setMap(null);
    koreanmarker3.setMap(null);
    koreanmarker4.setMap(null);
    koreanmarker5.setMap(null);
    koreanmarker6.setMap(null);
    koreanmarker7.setMap(null);
    koreanmarker8.setMap(null);
    koreanmarker9.setMap(null);
    koreanmarker10.setMap(null);
    koreanmarker11.setMap(null);
    koreanmarker12.setMap(null);
    koreanmarker13.setMap(null);
    koreanmarker14.setMap(null);
    koreanmarker15.setMap(null);
    koreanmarker16.setMap(null);
    koreanmarker17.setMap(null);
    koreanmarker18.setMap(null);
    koreanmarker19.setMap(null);
    koreanmarker20.setMap(null);
}
else {
    koreanmarker.setMap(map);
    koreanmarker1.setMap(map);
    koreanmarker2.setMap(map);
    koreanmarker3.setMap(map);
    koreanmarker4.setMap(map);
    koreanmarker5.setMap(map);
    koreanmarker6.setMap(map);
    koreanmarker7.setMap(map);
    koreanmarker8.setMap(map);
    koreanmarker9.setMap(map);
    koreanmarker10.setMap(map);
    koreanmarker11.setMap(map);
    koreanmarker12.setMap(map);
    koreanmarker13.setMap(map);
    koreanmarker14.setMap(map);
    koreanmarker15.setMap(map);
    koreanmarker16.setMap(map);
    koreanmarker17.setMap(map);
    koreanmarker18.setMap(map);
    koreanmarker19.setMap(map);
    koreanmarker20.setMap(map);
}     
});