    var imageSrc = 'https://github.com/Jeju-owl/JNU-guide/blob/feature-3/images/busimage.png?raw=true', // 마커이미지의 주소입니다, remove.bg사이트에서 png 바깥배경 없앳음 
    imageSize = new kakao.maps.Size(25, 20), // 교내순환버스마커 이미지의 크기입니다
    imageOption = {offset: new kakao.maps.Point(10, 10)}; // 교내순환버스마커 이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption), // 교내순환버스마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        markerPosition = new kakao.maps.LatLng(33.459811596777094, 126.5616883626409); // 마커가 표시될 위치입니다(정문)

    // 교내순환버스마커를 생성합니다(정문)
    var busmarker = new kakao.maps.Marker({
        position: markerPosition,
        image: markerImage, // 마커이미지 설정
        map: map
    });
    // 교내순환버스마커가 지도 위에 표시되도록 설정합니다
    busmarker.setMap(map);

    var content = '<div class="wrap">' + 
            '    <div class="info">' + 
            '        <div class="title">' + 
            '            카카오 스페이스닷원' + 
            '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' + 
            '        </div>' + 
            '        <div class="body">' + 
            '            <div class="img">' +
            '                <img src="https://cfile181.uf.daum.net/image/250649365602043421936D" width="73" height="70">' +
            '           </div>' + 
            '            <div class="desc">' + 
            '                <div class="ellipsis">제주특별자치도 제주시 첨단로 242</div>' + 
            '                <div class="jibun ellipsis">(우) 63309 (지번) 영평동 2181</div>' + 
            '                <div><a href="https://www.kakaocorp.com/main" target="_blank" class="link">홈페이지</a></div>' + 
            '            </div>' + 
            '        </div>' + 
            '    </div>' +    
            '</div>';

    // 마커 위에 커스텀오버레이를 표시합니다
    // 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
    var overlay = new kakao.maps.CustomOverlay({
        content: content,
        map: map,
        position: busmarker.getPosition()       
    });

    // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
    kakao.maps.event.addListener(busmarker, 'click', function() {
        overlay.setMap(map);
    });

    // 커스텀 오버레이를 닫기 위해 호출되는 함수입니다 
    function closeOverlay() {
        overlay.setMap(null);     
    }
    
    markerPosition1 = new kakao.maps.LatLng(33.45755993777187, 126.56107582852171); //약학대학
    var busmarker1 = new kakao.maps.Marker({
        position: markerPosition1,
        image: markerImage,
        map: map
    });
    busmarker1.setMap(map);
    markerPosition2 = new kakao.maps.LatLng(33.454610128657876, 126.56063087550932); //학생회관
    var busmarker2 = new kakao.maps.Marker({
        position: markerPosition2,
        image: markerImage,
        map: map
    });
    busmarker2.setMap(map);
    markerPosition3 = new kakao.maps.LatLng(33.45323099738815, 126.5575509319587); //인문대학(서)
    var busmarker3 = new kakao.maps.Marker({
        position: markerPosition3,
        image: markerImage,
        map: map
    });
    busmarker3.setMap(map);
    markerPosition4 = new kakao.maps.LatLng(33.45149156127691, 126.55836642987437); //학생생활관
    var busmarker4 = new kakao.maps.Marker({
        position: markerPosition4,
        image: markerImage,
        map: map
    });
    busmarker4.setMap(map);
    markerPosition5 = new kakao.maps.LatLng(33.45305459367828, 126.5592834991402); //인문대학(동)
    var busmarker5 = new kakao.maps.Marker({
        position: markerPosition5,
        image: markerImage,
        map: map
    });
    busmarker5.setMap(map);
    markerPosition6 = new kakao.maps.LatLng(33.45311704756447, 126.56100410021769); //중앙도서관
    var busmarker6 = new kakao.maps.Marker({
        position: markerPosition6,
        image: markerImage,
        map: map
    });
    busmarker6.setMap(map);
    markerPosition7 = new kakao.maps.LatLng(33.453057621098026, 126.56396491302868); //의학전문대학원
    var busmarker7 = new kakao.maps.Marker({
        position: markerPosition7,
        image: markerImage,
        map: map
    });
    busmarker7.setMap(map);
    markerPosition8 = new kakao.maps.LatLng(33.45474511612683, 126.56439208250133); //공과대학 4호관
    var busmarker8 = new kakao.maps.Marker({
        position: markerPosition8,
        image: markerImage,
        map: map
    });
    busmarker8.setMap(map);
    markerPosition9 = new kakao.maps.LatLng(33.45523826971047, 126.56618586795527); //해양과학대학 4호관
    var busmarker9 = new kakao.maps.Marker({
        position: markerPosition9,
        image: markerImage,
        map: map
    });
    busmarker9.setMap(map);
    markerPosition10 = new kakao.maps.LatLng(33.45562907037793, 126.56386061632756); //교양강의동
    var busmarker10 = new kakao.maps.Marker({
        position: markerPosition10,
        image: markerImage,
        map: map
    });
    busmarker10.setMap(map);
    markerPosition11 = new kakao.maps.LatLng(33.45627626917144, 126.56266613546954); //본관
    var busmarker11 = new kakao.maps.Marker({
        position: markerPosition11,
        image: markerImage,
        map: map
    });
    busmarker11.setMap(map);
    markerPosition12 = new kakao.maps.LatLng(33.45731481654195, 126.56315033095102); //해양과학대학 1호관
    var busmarker12 = new kakao.maps.Marker({
        position: markerPosition12,
        image: markerImage,
        map: map
    });
    busmarker12.setMap(map);