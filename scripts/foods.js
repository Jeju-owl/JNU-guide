// 한식-기본 이미지 옵션 생성
var koreanimageSrc = 'https://raw.githubusercontent.com/Jeju-owl/JNU-guide/feature-7/images/bibimbap.png', // 마커이미지의 주소입니다    
koreanimageSize = new kakao.maps.Size(20, 20), // 마커이미지의 크기입니다
koreanimageOption = {offset: new kakao.maps.Point(10, 20)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
// 한식-김밥 이미지 옵션 생성
var gimbapimageSrc = 'https://raw.githubusercontent.com/Jeju-owl/JNU-guide/feature-7/images/bibimbap.png',  
gimbapimageSize = new kakao.maps.Size(20, 20),
gimbapimageOption = {offset: new kakao.maps.Point(10, 20)};
// 한식-갈비 이미지 옵션 생성
var galbiimageSrc = 'https://raw.githubusercontent.com/Jeju-owl/JNU-guide/feature-7/images/bibimbap.png',  
galbiimageSize = new kakao.maps.Size(20, 20),
galbiimageOption = {offset: new kakao.maps.Point(10, 20)};
// 한식-덫밥 이미지 옵션 생성
var riceimageSrc = 'https://raw.githubusercontent.com/Jeju-owl/JNU-guide/feature-7/images/bibimbap.png',  
riceimageSize = new kakao.maps.Size(20, 20),
riceimageOption = {offset: new kakao.maps.Point(10, 20)};
// 한식-국수 이미지 옵션 생성
var noodleimageSrc = 'https://raw.githubusercontent.com/Jeju-owl/JNU-guide/feature-7/images/bibimbap.png',  
noodleimageSize = new kakao.maps.Size(20, 20),
noodleimageOption = {offset: new kakao.maps.Point(10, 20)};
// 한식-떡 이미지 옵션 생성
var ddeokimageSrc = 'https://raw.githubusercontent.com/Jeju-owl/JNU-guide/feature-7/images/bibimbap.png',  
ddeokimageSize = new kakao.maps.Size(20, 20),
ddeokimageOption = {offset: new kakao.maps.Point(10, 20)};
// 한식-토스트 이미지 옵션 생성
var toastimageSrc = 'https://raw.githubusercontent.com/Jeju-owl/JNU-guide/feature-7/images/bibimbap.png',  
toastimageSize = new kakao.maps.Size(20, 20),
toastimageOption = {offset: new kakao.maps.Point(10, 20)};
// 양중일-돈까스 이미지 옵션 생성
var ddonimageSrc = 'https://raw.githubusercontent.com/Jeju-owl/JNU-guide/feature-7/images/bibimbap.png',   
ddonimageSize = new kakao.maps.Size(20, 20),
ddonimageOption = {offset: new kakao.maps.Point(10, 20)};
// 양중일-중식 이미지 옵션 생성
var chinaimageSrc = 'https://raw.githubusercontent.com/Jeju-owl/JNU-guide/feature-7/images/bibimbap.png',   
chinaimageSize = new kakao.maps.Size(20, 20),
chinaimageOption = {offset: new kakao.maps.Point(10, 20)};
// 양중일-우동 이미지 옵션 생성
var udonimageSrc = 'https://raw.githubusercontent.com/Jeju-owl/JNU-guide/feature-7/images/bibimbap.png',   
udonimageSize = new kakao.maps.Size(20, 20),
udonimageOption = {offset: new kakao.maps.Point(10, 20)};
// 양중일-텐동 이미지 옵션 생성
var tendonimageSrc = 'https://raw.githubusercontent.com/Jeju-owl/JNU-guide/feature-7/images/bibimbap.png',   
tendonimageSize = new kakao.maps.Size(20, 20),
tendonimageOption = {offset: new kakao.maps.Point(10, 20)};
// 양중일-마라탕 이미지 옵션 생성
var maratangimageSrc = 'https://raw.githubusercontent.com/Jeju-owl/JNU-guide/feature-7/images/bibimbap.png',   
maratangimageSize = new kakao.maps.Size(20, 20),
maratangimageOption = {offset: new kakao.maps.Point(10, 20)};
// 양중일-파스타 이미지 옵션 생성
var pastaimageSrc = 'https://raw.githubusercontent.com/Jeju-owl/JNU-guide/feature-7/images/bibimbap.png',   
pastaimageSize = new kakao.maps.Size(20, 20),
pastaimageOption = {offset: new kakao.maps.Point(10, 20)};
// 카페&디저트-커피 이미지 옵션 생성
var coffeeimageSrc = 'https://raw.githubusercontent.com/Jeju-owl/JNU-guide/feature-7/images/bibimbap.png',   
coffeeimageSize = new kakao.maps.Size(20, 20),
coffeeimageOption = {offset: new kakao.maps.Point(10, 20)};
// 살찌는- 버거 옵션 생성
var burgerimageSrc = 'https://raw.githubusercontent.com/Jeju-owl/JNU-guide/feature-7/images/bibimbap.png',   
burgerimageSize = new kakao.maps.Size(20, 20),
burgerimageOption = {offset: new kakao.maps.Point(10, 20)};
// 살찌는- 치킨 옵션 생성
var chickenimageSrc = 'https://raw.githubusercontent.com/Jeju-owl/JNU-guide/feature-7/images/bibimbap.png',   
chickenimageSize = new kakao.maps.Size(20, 20),
chickenimageOption = {offset: new kakao.maps.Point(10, 20)};
// 살찌는- 피자 옵션 생성
var pizzaimageSrc = 'https://raw.githubusercontent.com/Jeju-owl/JNU-guide/feature-7/images/bibimbap.png',   
pizzaimageSize = new kakao.maps.Size(20, 20),
pizzaimageOption = {offset: new kakao.maps.Point(10, 20)};
// 살찌는- 맥주 옵션 생성
var beerimageSrc = 'https://raw.githubusercontent.com/Jeju-owl/JNU-guide/feature-7/images/bibimbap.png',   
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
var koreanmarkerPosition = new kakao.maps.LatLng(33.460629678377366, 126.5610173329148); // 콘킹부대찌개위치
var koreanmarkerPosition1 = new kakao.maps.LatLng(33.460629678377366, 126.5610173329148); // 개미와 베짱이
var koreanmarkerPosition2 = new kakao.maps.LatLng(33.460629678377366, 126.5610173329148); // 김밥천국
var koreanmarkerPosition3 = new kakao.maps.LatLng(33.460629678377366, 126.5610173329148); // 맵수다
var koreanmarkerPosition4 = new kakao.maps.LatLng(33.460629678377366, 126.5610173329148); // 한솥도시락
var koreanmarkerPosition5 = new kakao.maps.LatLng(33.460629678377366, 126.5610173329148); // 밥먹젠
var koreanmarkerPosition6 = new kakao.maps.LatLng(33.460629678377366, 126.5610173329148); // 불노리왕막창
var koreanmarkerPosition7 = new kakao.maps.LatLng(33.460629678377366, 126.5610173329148); // 산들애국수
var koreanmarkerPosition8 = new kakao.maps.LatLng(33.460629678377366, 126.5610173329148); // 산아름국수
var koreanmarkerPosition9 = new kakao.maps.LatLng(33.460629678377366, 126.5610173329148); // 삐삐네 정식
var koreanmarkerPosition10 = new kakao.maps.LatLng(33.460629678377366, 126.5610173329148); // 상아탑
var koreanmarkerPosition11 = new kakao.maps.LatLng(33.460629678377366, 126.5610173329148); // 와랑와랑
var koreanmarkerPosition12 = new kakao.maps.LatLng(33.460629678377366, 126.5610173329148); // 통큰이층
var koreanmarkerPosition13 = new kakao.maps.LatLng(33.460629678377366, 126.5610173329148); // 학교종이 땡땡땡
var koreanmarkerPosition14 = new kakao.maps.LatLng(33.460629678377366, 126.5610173329148); // 흥부네
var koreanmarkerPosition15 = new kakao.maps.LatLng(33.460629678377366, 126.5610173329148); // 배꼽시계
var koreanmarkerPosition16 = new kakao.maps.LatLng(33.460629678377366, 126.5610173329148); // 매력식당
var koreanmarkerPosition17 = new kakao.maps.LatLng(33.460629678377366, 126.5610173329148); // 봉구스밥버거
var koreanmarkerPosition18 = new kakao.maps.LatLng(33.460629678377366, 126.5610173329148); // 신전떡볶이
var koreanmarkerPosition19 = new kakao.maps.LatLng(33.460629678377366, 126.5610173329148); // 신전떡볶이
var koreanmarkerPosition20 = new kakao.maps.LatLng(33.460629678377366, 126.5610173329148); // 글로벌하우스
var koreanmarkerPosition21 = new kakao.maps.LatLng(33.460629678377366, 126.5610173329148); // 옛날아우네 순대
var koreanmarkerPosition22 = new kakao.maps.LatLng(33.460629678377366, 126.5610173329148); // 이삭토스트
var koreanmarkerPosition23 = new kakao.maps.LatLng(33.460629678377366, 126.5610173329148); // 밀면한라마루
var koreanmarkerPosition24 = new kakao.maps.LatLng(33.460629678377366, 126.5610173329148); // 엄마네

// 마커를 생성합니다 ------이부분부터 순서신경 잘해야됨------
var koreanmarker = new kakao.maps.Marker({
    position: koreanmarkerPosition, 
    image: koreanmarkerImage // 마커이미지 설정 
});
var koreanmarker1 = new kakao.maps.Marker({
    position: koreanmarkerPosition1, 
    image: koreanmarkerImage // 마커이미지 설정 
});
var koreanmarker2 = new kakao.maps.Marker({
    position: koreanmarkerPosition2, 
    image: koreanmarkerImage // 마커이미지 설정 
});
var koreanmarker3 = new kakao.maps.Marker({
    position: koreanmarkerPosition3, 
    image: koreanmarkerImage // 마커이미지 설정 
});
var koreanmarker4 = new kakao.maps.Marker({
    position: koreanmarkerPosition4, 
    image: koreanmarkerImage // 마커이미지 설정 
});
var koreanmarker5 = new kakao.maps.Marker({
    position: koreanmarkerPosition5, 
    image: koreanmarkerImage // 마커이미지 설정 
});
var koreanmarker6 = new kakao.maps.Marker({
    position: koreanmarkerPosition6, 
    image: koreanmarkerImage // 마커이미지 설정 
});
var koreanmarker7 = new kakao.maps.Marker({
    position: koreanmarkerPosition7, 
    image: koreanmarkerImage // 마커이미지 설정 
});
var koreanmarker8 = new kakao.maps.Marker({
    position: koreanmarkerPosition8, 
    image: koreanmarkerImage // 마커이미지 설정 
});
var koreanmarker9 = new kakao.maps.Marker({
    position: koreanmarkerPosition9, 
    image: koreanmarkerImage // 마커이미지 설정 
});
var koreanmarker10 = new kakao.maps.Marker({
    position: koreanmarkerPosition10, 
    image: koreanmarkerImage // 마커이미지 설정 
});
var koreanmarker11 = new kakao.maps.Marker({
    position: koreanmarkerPosition11, 
    image: koreanmarkerImage // 마커이미지 설정 
});
var koreanmarker12 = new kakao.maps.Marker({
    position: koreanmarkerPosition12, 
    image: koreanmarkerImage // 마커이미지 설정 
});
var koreanmarker13 = new kakao.maps.Marker({
    position: koreanmarkerPosition13, 
    image: koreanmarkerImage // 마커이미지 설정 
});
var koreanmarker14 = new kakao.maps.Marker({
    position: koreanmarkerPosition14, 
    image: koreanmarkerImage // 마커이미지 설정 
});
var koreanmarker15 = new kakao.maps.Marker({
    position: koreanmarkerPosition15, 
    image: koreanmarkerImage // 마커이미지 설정 
});
var koreanmarker16 = new kakao.maps.Marker({
    position: koreanmarkerPosition16, 
    image: koreanmarkerImage // 마커이미지 설정 
});
var koreanmarker17 = new kakao.maps.Marker({
    position: koreanmarkerPosition17, 
    image: koreanmarkerImage // 마커이미지 설정 
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
var koreanmarker21 = new kakao.maps.Marker({
    position: koreanmarkerPosition21, 
    image: koreanmarkerImage // 마커이미지 설정 
});
var koreanmarker22 = new kakao.maps.Marker({
    position: koreanmarkerPosition22, 
    image: koreanmarkerImage // 마커이미지 설정 
});
var koreanmarker23 = new kakao.maps.Marker({
    position: koreanmarkerPosition23, 
    image: koreanmarkerImage // 마커이미지 설정 
});
var koreanmarker24 = new kakao.maps.Marker({
    position: koreanmarkerPosition24, 
    image: koreanmarkerImage // 마커이미지 설정 
});


// 지도의 확대 축소 레벨이 바뀔때마다 실행되는 이벤트리스터입니다.
kakao.maps.event.addListener(map, 'zoom_changed', function() {        
var level = map.getLevel();// 지도의 현재 레벨을 얻어옵니다
if (level >= 3) {
    koreanmarker.setMap(null);
}
else {
    koreanmarker.setMap(map);
}     
});