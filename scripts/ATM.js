var imageSrc1 = 'https://raw.githubusercontent.com/Jeju-owl/JNU-guide/feature-5/images/ATM.png',
    imageSize1 = new kakao.maps.Size(20, 20),
    imageOption1 = {offset: new kakao.maps.Point(9, 10)};
var ATMmarkerImage = new kakao.maps.MarkerImage(imageSrc1, imageSize1, imageOption1),

    ATMmarkerPosition = new kakao.maps.LatLng(33.45990676686699, 126.56183040828569); //정문 제주은행
    var ATMmarker = new kakao.maps.Marker({
        position: ATMmarkerPosition,
        image: ATMmarkerImage,
        map: map
    });
    ATMmarker.setMap(map);
    ATMmarkerPosition = new kakao.maps.LatLng(33.45942039684082, 126.5613326772457); //정문 농협은행
    var ATMmarker = new kakao.maps.Marker({
        position: ATMmarkerPosition,
        image: ATMmarkerImage,
        map: map
    });
    ATMmarker.setMap(map);
    ATMmarkerPosition = new kakao.maps.LatLng(33.45581863503511, 126.56136963794465); //본관
    var ATMmarker = new kakao.maps.Marker({
        position: ATMmarkerPosition,
        image: ATMmarkerImage,
        map: map
    });
    ATMmarker.setMap(map);
    ATMmarkerPosition = new kakao.maps.LatLng(33.452813988176864, 126.5607152235069); //중앙도서관
    var ATMmarker = new kakao.maps.Marker({
        position: ATMmarkerPosition,
        image: ATMmarkerImage,
        map: map
    });
    ATMmarker.setMap(map);
    ATMmarkerPosition = new kakao.maps.LatLng(33.45492583565361, 126.5606723070996); //학생회관
    var ATMmarker = new kakao.maps.Marker({
        position: ATMmarkerPosition,
        image: ATMmarkerImage,
        map: map
    });
    ATMmarker.setMap(map);
    ATMmarkerPosition = new kakao.maps.LatLng(33.45103031220647, 126.55670166961119); //학생생활관
    var ATMmarker = new kakao.maps.Marker({
        position: ATMmarkerPosition,
        image: ATMmarkerImage,
        map: map
    });
    ATMmarker.setMap(map);
