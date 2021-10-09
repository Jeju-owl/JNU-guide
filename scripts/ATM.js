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
    var ATMmarker1 = new kakao.maps.Marker({
        position: ATMmarkerPosition,
        image: ATMmarkerImage,
        map: map
    });
    ATMmarker1.setMap(map);
    ATMmarkerPosition = new kakao.maps.LatLng(33.45581863503511, 126.56136963794465); //본관
    var ATMmarker2 = new kakao.maps.Marker({
        position: ATMmarkerPosition,
        image: ATMmarkerImage,
        map: map
    });
    ATMmarker2.setMap(map);
    ATMmarkerPosition = new kakao.maps.LatLng(33.452813988176864, 126.5607152235069); //중앙도서관
    var ATMmarker3 = new kakao.maps.Marker({
        position: ATMmarkerPosition,
        image: ATMmarkerImage,
        map: map
    });
    ATMmarker3.setMap(map);
    ATMmarkerPosition = new kakao.maps.LatLng(33.45492583565361, 126.5606723070996); //학생회관
    var ATMmarker4 = new kakao.maps.Marker({
        position: ATMmarkerPosition,
        image: ATMmarkerImage,
        map: map
    });
    ATMmarker4.setMap(map);
    ATMmarkerPosition = new kakao.maps.LatLng(33.45103031220647, 126.55670166961119); //학생생활관
    var ATMmarker5 = new kakao.maps.Marker({
        position: ATMmarkerPosition,
        image: ATMmarkerImage,
        map: map
    });
    ATMmarker5.setMap(map);
    
    var markercontent = 
    '<div class="ATM">' +
        '<div id="ATMempty"></div>' +
        '<div id="ATMtop">' +
            '<a><img src="images/Jejubank.png"><span><img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/overlay_close.png" onclick="closeATMOverlay()" title="닫기"></span></a>' +
        '</div>' +
        '<div id="ATMbottom">' +
            '<dl>' +
                '<dt><a>운영시간</a><span>(연중무휴)</span></dt>' +
                '<dd>06 : 00 ~ 24 : 00</dd>' +
            '</dl>' +
        '</div>' +
    '</div>' ;
    
    var markercontent1 =
    '<div class="ATM">' +
        '<div id="ATMempty"></div>' +
        '<div id="ATMtop">' +
            '<a><img src="images/NHbank.jpg"><span><img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/overlay_close.png" onclick="closeATMOverlay()" title="닫기"></span></a>' +
        '</div>' +
        '<div id="ATMbottom">' +
            '<dl>' +
                '<dt><a>운영시간</a><span>(연중무휴)</span></dt>' +
                '<dd>06 : 00 ~ 24 : 00</dd>' +
            '</dl>' +
        '</div>' +
    '</div>' ;

    // 마커 위에 커스텀오버레이를 표시합니다
    // 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
    var ATMoverlay = new kakao.maps.CustomOverlay({ //정문 제주은행
        content: markercontent,
        map: map,
        position: ATMmarker.getPosition()       
    });
    ATMoverlay.setMap(null);
    
    var ATMoverlay1 = new kakao.maps.CustomOverlay({ //정문 농협은행
        content: markercontent1,
        map: map,
        position: ATMmarker1.getPosition()       
    });
    ATMoverlay1.setMap(null);
    
    var ATMoverlay2 = new kakao.maps.CustomOverlay({ //본관
        content: markercontent1,
        map: map,
        position: ATMmarker2.getPosition()       
    });
    ATMoverlay2.setMap(null);
    
    var ATMoverlay3 = new kakao.maps.CustomOverlay({ //중앙도서관
        content: markercontent1,
        map: map,
        position: ATMmarker3.getPosition()       
    });
    ATMoverlay3.setMap(null);
    
    var ATMoverlay4 = new kakao.maps.CustomOverlay({ //학생회관
        content: markercontent1,
        map: map,
        position: ATMmarker4.getPosition()       
    });
    ATMoverlay4.setMap(null);
    
    var ATMoverlay5 = new kakao.maps.CustomOverlay({ //학생생활관
        content: markercontent1,
        map: map,
        position: ATMmarker5.getPosition()       
    });
    ATMoverlay5.setMap(null);

    // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
    kakao.maps.event.addListener(ATMoverlay, 'click', function() {
        ATMoverlay.setMap(map);
        ATMoverlay1.setMap(null);
        ATMoverlay2.setMap(null);
        ATMoverlay3.setMap(null);
        ATMoverlay4.setMap(null);
        ATMoverlay5.setMap(null);
    });

    // 커스텀 오버레이를 닫기 위해 호출되는 함수입니다 
    function closeATMOverlay() {
        ATMoverlay.setMap(null); 
    }

    kakao.maps.event.addListener(ATMoverlay1, 'click', function() {
        ATMoverlay.setMap(null);
        ATMoverlay1.setMap(map);
        ATMoverlay2.setMap(null);
        ATMoverlay3.setMap(null);
        ATMoverlay4.setMap(null);
        ATMoverlay5.setMap(null);
    });
    function closeATMOverlay1() {
        ATMoverlay1.setMap(null); 
    }
    kakao.maps.event.addListener(ATMoverlay2, 'click', function() {
        ATMoverlay.setMap(null);
        ATMoverlay1.setMap(null);
        ATMoverlay2.setMap(map);
        ATMoverlay3.setMap(null);
        ATMoverlay4.setMap(null);
        ATMoverlay5.setMap(null);
    });
    function closeATMOverlay2() {
        ATMoverlay2.setMap(null); 
    }
    kakao.maps.event.addListener(ATMoverlay3, 'click', function() {
        ATMoverlay.setMap(null);
        ATMoverlay1.setMap(null);
        ATMoverlay2.setMap(null);
        ATMoverlay3.setMap(map);
        ATMoverlay4.setMap(null);
        ATMoverlay5.setMap(null);
    });
    function closeATMOverlay3() {
        ATMoverlay3.setMap(null); 
    }
    kakao.maps.event.addListener(ATMoverlay4, 'click', function() {
        ATMoverlay.setMap(null);
        ATMoverlay1.setMap(null);
        ATMoverlay2.setMap(null);
        ATMoverlay3.setMap(null);
        ATMoverlay4.setMap(map);
        ATMoverlay5.setMap(null);
    });
    function closeATMOverlay4() {
        ATMoverlay4.setMap(null); 
    }
    kakao.maps.event.addListener(ATMoverlay5, 'click', function() {
        ATMoverlay.setMap(null);
        ATMoverlay1.setMap(null);
        ATMoverlay2.setMap(null);
        ATMoverlay3.setMap(null);
        ATMoverlay4.setMap(null);
        ATMoverlay5.setMap(map);
    });
    function closeATMOverlay5() {
        ATMoverlay5.setMap(null); 
    }
