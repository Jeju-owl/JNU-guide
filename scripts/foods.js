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
// 한식-도시락 이미지 옵션 생성
var lunchboximageSrc = 'https://raw.githubusercontent.com/Jeju-owl/JNU-guide/feature-7/images/lunchbox.png',  
lunchboximageSize = new kakao.maps.Size(20, 20),
lunchboximageOption = {offset: new kakao.maps.Point(10, 20)};
// 한식-찌개 이미지 옵션 생성
var jjigaeimageSrc = 'https://raw.githubusercontent.com/Jeju-owl/JNU-guide/feature-7/images/jjigae.png',  
jjigaeimageSize = new kakao.maps.Size(20, 20),
jjigaeimageOption = {offset: new kakao.maps.Point(10, 20)};
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
var lunchboxImage = new kakao.maps.MarkerImage(lunchboximageSrc, lunchboximageSize, lunchboximageOption);
var jjigaeImage = new kakao.maps.MarkerImage(jjigaeimageSrc, jjigaeimageSize, jjigaeimageOption);
var chinamarkerImage = new kakao.maps.MarkerImage(chinaimageSrc, chinaimageSize, chinaimageOption);
var udonmarkerImage = new kakao.maps.MarkerImage(udonimageSrc, udonimageSize, udonimageOption);
var tendonmarkerImage = new kakao.maps.MarkerImage(tendonimageSrc, tendonimageSize, tendonimageOption);
var maratangmarkerImage = new kakao.maps.MarkerImage(maratangimageSrc, maratangimageSize, maratangimageOption);
var pastamarkerImage = new kakao.maps.MarkerImage(pastaimageSrc, pastaimageSize, pastaimageOption);
var coffeemarkerImage = new kakao.maps.MarkerImage(coffeeimageSrc, coffeeimageSize, coffeeimageOption);
var burgermarkerImage = new kakao.maps.MarkerImage(burgerimageSrc, burgerimageSize, burgerimageOption);
var chickenmarkerImage = new kakao.maps.MarkerImage(chickenimageSrc, chickenimageSize, chickenimageOption);
var pizzamarkerImage = new kakao.maps.MarkerImage(pizzaimageSrc, pizzaimageSize, pizzaimageOption);
var beermarkerImage = new kakao.maps.MarkerImage(beerimageSrc, beerimageSize, beerimageOption);

// 식당 위치 정보
    //한식
var koreanmarkerPosition = new kakao.maps.LatLng(33.45916954797216,126.5579752302018); // 이삭토스트-토스트
var koreanmarkerPosition1 = new kakao.maps.LatLng(33.460632008508654,126.56103883449029); // 콘킹부대찌개-찌개
var koreanmarkerPosition2 = new kakao.maps.LatLng(33.46022359435553,126.5609145026397); // 김밥천구-김밥
var koreanmarkerPosition3 = new kakao.maps.LatLng(33.46058666270939,126.56096376644531); // 맵수다-매운
var koreanmarkerPosition4 = new kakao.maps.LatLng(33.46033618927183,126.5615216842466); // 한솥도시락-덫밥
var koreanmarkerPosition6 = new kakao.maps.LatLng(33.46065412115623,126.56155504285272); // 산들애국수-국수
var koreanmarkerPosition7 = new kakao.maps.LatLng(33.46067993195596,126.56184265374061); // 상아탑식당-한식
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
var koreanmarkerPosition21 = new kakao.maps.LatLng(33.44855668844978,126.55958857243469); // 제대로 떡볶이
var koreanmarkerPosition22 = new kakao.maps.LatLng(33.460357435194794,126.56179318210137); // 위드미트
    //양중일
var globalmarkerPosition = new kakao.maps.LatLng(33.46033910884118,126.56170991046712); // 오니기리-우동
var globalmarkerPosition1 = new kakao.maps.LatLng(33.46043357326079,126.56229029344895); // 서유기 마라탕-마라탕
var globalmarkerPosition2 = new kakao.maps.LatLng(33.460717611343064,126.56102495722958); // 텐동아우라-텐동
var globalmarkerPosition3 = new kakao.maps.LatLng(33.460733217657044,126.56097647354895); // 이왕돈까스-돈까스
var globalmarkerPosition4 = new kakao.maps.LatLng(33.46081208717441,126.56097069766193); // 다채움-우동
var globalmarkerPosition5 = new kakao.maps.LatLng(33.46032988384303,126.56165079546234); // 진성반점-중식
var globalmarkerPosition6 = new kakao.maps.LatLng(33.449145761342194,126.55853964800833); // 챨리스-파스타
var globalmarkerPosition7 = new kakao.maps.LatLng(33.45013459967409,126.55835179698971); // 신룽푸마라탕-마라탕
var globalmarkerPosition8 = new kakao.maps.LatLng(33.449161733799315,126.55922790259172); // 꽁양꽁양-돈까스
var globalmarkerPosition9 = new kakao.maps.LatLng(33.449788475616835,126.55863050082576); // 월궁-중식
var globalmarkerPosition10 = new kakao.maps.LatLng(33.44918949026898,126.55816030406514); // 우향-우동
    //카페&디저트
var cafemarkerPosition = new kakao.maps.LatLng(33.45969153491956,126.55834368193693); // 제대가는길-커피
var cafemarkerPosition1 = new kakao.maps.LatLng(33.46030574609194,126.56119913891474); // 봄봄(정문)-커피
var cafemarkerPosition2 = new kakao.maps.LatLng(33.46032466266394,126.56144913507515); // 메가커피-커피
var cafemarkerPosition3 = new kakao.maps.LatLng(33.460349922250025,126.56158077655049); // 카페띠아모-커피
var cafemarkerPosition4 = new kakao.maps.LatLng(33.46098765787753,126.56090258327433); // 파이브엠커피-커피
var cafemarkerPosition5 = new kakao.maps.LatLng(33.460974390581576,126.5622499271286); // 테라피쉬-커피
var cafemarkerPosition6 = new kakao.maps.LatLng(33.45052211831002,126.55830412228833); // 봄봄(후문)-커피
var cafemarkerPosition7 = new kakao.maps.LatLng(33.44931698590149,126.55851727000919); // 에이바우트-커피
    //살찌는 음식
var beermarkerPosition = new kakao.maps.LatLng(33.46032680146112,126.56205418431942); // 써브웨이-버거
var beermarkerPosition1 = new kakao.maps.LatLng(33.46039764282094,126.56232812222402); // 맘스터치-버거
var beermarkerPosition2 = new kakao.maps.LatLng(33.45046575968514,126.55830171913358); // 명품치킨-치킨
var beermarkerPosition3 = new kakao.maps.LatLng(33.44902694256404,126.55872040000347); // 엄마치킨-치킨
var beermarkerPosition4 = new kakao.maps.LatLng(33.44893132297017,126.5590865615084); // 푸라닭치킨-치킨
var beermarkerPosition5 = new kakao.maps.LatLng(33.448087102058174,126.55747756676168); // 불닭공장-치킨
var beermarkerPosition6 = new kakao.maps.LatLng(33.450585449522706,126.55836564489735); // 잇마이피자-피자
var beermarkerPosition7 = new kakao.maps.LatLng(33.448784109493,126.55952289183492); // 봉수아피자-피자
var beermarkerPosition8 = new kakao.maps.LatLng(33.44906631212997,126.5590159694662); // 숲노을-맥주
var beermarkerPosition9 = new kakao.maps.LatLng(33.4489060482672,126.55768582324136); // 와랑와랑-맥주
var beermarkerPosition10 = new kakao.maps.LatLng(33.44813731606957,126.55891849722681); // 노가리앤비어-맥주
var beermarkerPosition11 = new kakao.maps.LatLng(33.44869642018224,126.55768419852062); // 09학번-맥주
// 마커를 생성합니다 ------이부분부터 순서신경 잘해야됨------
    //한식
var koreanmarker = new kakao.maps.Marker({
    position: koreanmarkerPosition, 
    image: toastmarkerImage // 마커이미지 설정 
});
var koreanmarker1 = new kakao.maps.Marker({
    position: koreanmarkerPosition1, 
    image: jjigaeImage // 마커이미지 설정 
});
var koreanmarker2 = new kakao.maps.Marker({
    position: koreanmarkerPosition2, 
    image: gimbapmarkerImage // 마커이미지 설정 
});
var koreanmarker3 = new kakao.maps.Marker({
    position: koreanmarkerPosition3, 
    image: maratangmarkerImage // 마커이미지 설정 
});
var koreanmarker4 = new kakao.maps.Marker({
    position: koreanmarkerPosition4, 
    image: lunchboxImage // 마커이미지 설정 
});
var koreanmarker6 = new kakao.maps.Marker({
    position: koreanmarkerPosition6, 
    image: noodlemarkerImage // 마커이미지 설정 
});
var koreanmarker7 = new kakao.maps.Marker({
    position: koreanmarkerPosition7, 
    image: koreanmarkerImage // 마커이미지 설정 
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
var koreanmarker21 = new kakao.maps.Marker({
    position: koreanmarkerPosition21, 
    image: ddeokmarkerImage // 마커이미지 설정 
});
var koreanmarker22 = new kakao.maps.Marker({
    position: koreanmarkerPosition22, 
    image: galbimarkerImage // 마커이미지 설정 
});
    //양중일
var globalmarker = new kakao.maps.Marker({
    position: globalmarkerPosition, 
    image: udonmarkerImage // 마커이미지 설정 
});
var globalmarker1 = new kakao.maps.Marker({
    position: globalmarkerPosition1, 
    image: maratangmarkerImage // 마커이미지 설정 
});
var globalmarker2 = new kakao.maps.Marker({
    position: globalmarkerPosition2, 
    image: tendonmarkerImage // 마커이미지 설정 
});
var globalmarker3 = new kakao.maps.Marker({
    position: globalmarkerPosition3, 
    image: ddonmarkerImage // 마커이미지 설정 
});
var globalmarker4 = new kakao.maps.Marker({
    position: globalmarkerPosition4, 
    image: udonmarkerImage // 마커이미지 설정 
});
var globalmarker5 = new kakao.maps.Marker({
    position: globalmarkerPosition5, 
    image: chinamarkerImage // 마커이미지 설정 
});
var globalmarker6 = new kakao.maps.Marker({
    position: globalmarkerPosition6, 
    image: pastamarkerImage // 마커이미지 설정 
});
var globalmarker7 = new kakao.maps.Marker({
    position: globalmarkerPosition7, 
    image: maratangmarkerImage // 마커이미지 설정 
});
var globalmarker8 = new kakao.maps.Marker({
    position: globalmarkerPosition8, 
    image: ddonmarkerImage // 마커이미지 설정 
});
var globalmarker9 = new kakao.maps.Marker({
    position: globalmarkerPosition9, 
    image: chinamarkerImage // 마커이미지 설정 
});
var globalmarker10 = new kakao.maps.Marker({
    position: globalmarkerPosition10, 
    image: udonmarkerImage // 마커이미지 설정 
});
    //카페&디저트cafe
var cafemarker = new kakao.maps.Marker({
    position: cafemarkerPosition, 
    image: coffeemarkerImage // 마커이미지 설정 
});
var cafemarker1 = new kakao.maps.Marker({
    position: cafemarkerPosition1, 
    image: coffeemarkerImage // 마커이미지 설정 
});
var cafemarker2 = new kakao.maps.Marker({
    position: cafemarkerPosition2, 
    image: coffeemarkerImage // 마커이미지 설정 
});
var cafemarker3 = new kakao.maps.Marker({
    position: cafemarkerPosition3, 
    image: coffeemarkerImage // 마커이미지 설정 
});
var cafemarker4 = new kakao.maps.Marker({
    position: cafemarkerPosition4, 
    image: coffeemarkerImage // 마커이미지 설정 
});
var cafemarker5 = new kakao.maps.Marker({
    position: cafemarkerPosition5, 
    image: coffeemarkerImage // 마커이미지 설정 
});
var cafemarker6 = new kakao.maps.Marker({
    position: cafemarkerPosition6, 
    image: coffeemarkerImage // 마커이미지 설정 
});
var cafemarker7 = new kakao.maps.Marker({
    position: cafemarkerPosition7, 
    image: coffeemarkerImage // 마커이미지 설정 
});
    //살찌는 음식beer
var beermarker = new kakao.maps.Marker({
    position: beermarkerPosition, 
    image: burgermarkerImage // 마커이미지 설정 
});
var beermarker1 = new kakao.maps.Marker({
    position: beermarkerPosition1, 
    image: burgermarkerImage // 마커이미지 설정 
});
var beermarker2 = new kakao.maps.Marker({
    position: beermarkerPosition2, 
    image: chickenmarkerImage // 마커이미지 설정 
});
var beermarker3 = new kakao.maps.Marker({
    position: beermarkerPosition3, 
    image: chickenmarkerImage // 마커이미지 설정 
});
var beermarker4 = new kakao.maps.Marker({
    position: beermarkerPosition4, 
    image: chickenmarkerImage // 마커이미지 설정 
});
var beermarker5 = new kakao.maps.Marker({
    position: beermarkerPosition5, 
    image: chickenmarkerImage // 마커이미지 설정 
});
var beermarker6 = new kakao.maps.Marker({
    position: beermarkerPosition6, 
    image: pizzamarkerImage // 마커이미지 설정 
});
var beermarker7 = new kakao.maps.Marker({
    position: beermarkerPosition7, 
    image: pizzamarkerImage // 마커이미지 설정 
});
var beermarker8 = new kakao.maps.Marker({
    position: beermarkerPosition8, 
    image: beermarkerImage // 마커이미지 설정 
});
var beermarker9 = new kakao.maps.Marker({
    position: beermarkerPosition9, 
    image: beermarkerImage // 마커이미지 설정 
});
var beermarker10 = new kakao.maps.Marker({
    position: beermarkerPosition10, 
    image: beermarkerImage // 마커이미지 설정 
});
var beermarker11 = new kakao.maps.Marker({
    position: beermarkerPosition11, 
    image: beermarkerImage // 마커이미지 설정 
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
        koreanmarker21.setMap(null);
        koreanmarker22.setMap(null);
        globalmarker.setMap(null);
        globalmarker1.setMap(null);
        globalmarker2.setMap(null);
        globalmarker3.setMap(null);
        globalmarker4.setMap(null);
        globalmarker5.setMap(null);
        globalmarker6.setMap(null);
        globalmarker7.setMap(null);
        globalmarker8.setMap(null);
        globalmarker9.setMap(null);
        globalmarker10.setMap(null);
        cafemarker.setMap(null);
        cafemarker1.setMap(null);
        cafemarker2.setMap(null);
        cafemarker3.setMap(null);
        cafemarker4.setMap(null);
        cafemarker5.setMap(null);
        cafemarker6.setMap(null);
        cafemarker7.setMap(null);
        beermarker.setMap(null);
        beermarker1.setMap(null);
        beermarker2.setMap(null);
        beermarker3.setMap(null);
        beermarker4.setMap(null);
        beermarker5.setMap(null);
        beermarker6.setMap(null);
        beermarker7.setMap(null);
        beermarker8.setMap(null);
        beermarker9.setMap(null);
        beermarker10.setMap(null);
        beermarker11.setMap(null);
    }
    else {
        koreanmarker.setMap(map);
        koreanmarker1.setMap(map);
        koreanmarker2.setMap(map);
        koreanmarker3.setMap(map);
        koreanmarker4.setMap(map);
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
        koreanmarker21.setMap(map);
        koreanmarker22.setMap(map);
        globalmarker.setMap(map);
        globalmarker1.setMap(map);
        globalmarker2.setMap(map);
        globalmarker3.setMap(map);
        globalmarker4.setMap(map);
        globalmarker5.setMap(map);
        globalmarker6.setMap(map);
        globalmarker7.setMap(map);
        globalmarker8.setMap(map);
        globalmarker9.setMap(map);
        globalmarker10.setMap(map);
        cafemarker.setMap(map);
        cafemarker1.setMap(map);
        cafemarker2.setMap(map);
        cafemarker3.setMap(map);
        cafemarker4.setMap(map);
        cafemarker5.setMap(map);
        cafemarker6.setMap(map);
        cafemarker7.setMap(map);
        beermarker.setMap(map);
        beermarker1.setMap(map);
        beermarker2.setMap(map);
        beermarker3.setMap(map);
        beermarker4.setMap(map);
        beermarker5.setMap(map);
        beermarker6.setMap(map);
        beermarker7.setMap(map);
        beermarker8.setMap(map);
        beermarker9.setMap(map);
        beermarker10.setMap(map);
        beermarker11.setMap(map);
    }     
});