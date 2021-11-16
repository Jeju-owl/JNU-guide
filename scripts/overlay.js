    //---------------------버스마커부분------------------------------

    function overlayMoving(a,b) { //지도 초점을 a,b로 이동
        var moveLatLon = new kakao.maps.LatLng(a,b);
        map.setCenter(moveLatLon);
    }

    var imageSrc = 'https://github.com/Jeju-owl/JNU-guide/blob/feature-3/images/busimage.png?raw=true', // 마커이미지의 주소입니다, remove.bg사이트에서 png 바깥배경 없앳음 
    imageSize = new kakao.maps.Size(28, 20), // 교내순환버스마커 이미지의 크기입니다
    imageOption = {offset: new kakao.maps.Point(11, 10)}; // 교내순환버스마커 이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption), // 교내순환버스마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        markerPosition = new kakao.maps.LatLng(33.45965343928493, 126.56158159312466); // 마커가 표시될 위치입니다(정문)

    // 교내순환버스마커를 생성합니다(정문)
    var busmarker = new kakao.maps.Marker({
        position: markerPosition,
        image: markerImage, // 마커이미지 설정
        map: map
    });
    // 교내순환버스마커가 지도 위에 표시되도록 설정합니다
    busmarker.setMap(map);
    
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
    
    //ATM마커부분
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
    ATMmarker.setMap(null);
    ATMmarkerPosition1 = new kakao.maps.LatLng(33.45942039684082, 126.5613326772457); //정문 농협은행
    var ATMmarker1 = new kakao.maps.Marker({
        position: ATMmarkerPosition1,
        image: ATMmarkerImage,
        map: map
    });
    ATMmarker1.setMap(null);
    ATMmarkerPosition2 = new kakao.maps.LatLng(33.45581863503511, 126.56136963794465); //본관
    var ATMmarker2 = new kakao.maps.Marker({
        position: ATMmarkerPosition2,
        image: ATMmarkerImage,
        map: map
    });
    ATMmarker2.setMap(null);
    ATMmarkerPosition3 = new kakao.maps.LatLng(33.452813988176864, 126.5607152235069); //중앙도서관
    var ATMmarker3 = new kakao.maps.Marker({
        position: ATMmarkerPosition3,
        image: ATMmarkerImage,
        map: map
    });
    ATMmarker3.setMap(null);
    ATMmarkerPosition4 = new kakao.maps.LatLng(33.45492583565361, 126.5606723070996); //학생회관
    var ATMmarker4 = new kakao.maps.Marker({
        position: ATMmarkerPosition4,
        image: ATMmarkerImage,
        map: map
    });
    ATMmarker4.setMap(null);
    ATMmarkerPosition5 = new kakao.maps.LatLng(33.45103031220647, 126.55670166961119); //학생생활관
    var ATMmarker5 = new kakao.maps.Marker({
        position: ATMmarkerPosition5,
        image: ATMmarkerImage,
        map: map
    });
    ATMmarker5.setMap(null);
    ATMmarkerPosition6 = new kakao.maps.LatLng(33.4573112632239, 126.56406194105139); //해양과학대학3호관
    var ATMmarker6 = new kakao.maps.Marker({
        position: ATMmarkerPosition6,
        image: ATMmarkerImage,
        map: map
    });
    ATMmarker6.setMap(null);
    ATMmarkerPosition7 = new kakao.maps.LatLng(33.453723160973496, 126.55967270404226); //아라뮤즈홀
    var ATMmarker7 = new kakao.maps.Marker({
        position: ATMmarkerPosition7,
        image: ATMmarkerImage,
        map: map
    });
    ATMmarker7.setMap(null);

    // 프린터 마커 부분
    var imageSrc2 = 'https://raw.githubusercontent.com/Jeju-owl/JNU-guide/feature-7/images/printer.png',
    imageSize2 = new kakao.maps.Size(20, 20),
    imageOption2 = {offset: new kakao.maps.Point(9, 10)};
    var printmarkerImage = new kakao.maps.MarkerImage(imageSrc2, imageSize2, imageOption2),

    printmarkerPosition = new kakao.maps.LatLng(33.460359812712554, 126.56182812917618); //CNP
    var printmarker = new kakao.maps.Marker({
        position: printmarkerPosition,
        image: printmarkerImage,
        map: map
    });
    printmarker.setMap(null);
    printmarkerPosition1 = new kakao.maps.LatLng(33.45404773480004, 126.56158022632219); //경상대 1호관
    var printmarker1 = new kakao.maps.Marker({
        position: printmarkerPosition1,
        image: printmarkerImage,
        map: map
    });
    printmarker1.setMap(null);
    printmarkerPosition2 = new kakao.maps.LatLng(33.45495494657786, 126.56061838050307); //학생회관
    var printmarker2 = new kakao.maps.Marker({
        position: printmarkerPosition2,
        image: printmarkerImage,
        map: map
    });
    printmarker1.setMap(null);

    //--------------------정류장별 html파일---------------------------- 
    var content =
        '<div id="buswrap">'+
            '<div id="bushead">'+
                '<a>제주대학교 정문</a>'+
                '<img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/overlay_close.png" onclick="closeOverlay()" title="닫기">'+
            '</div>'+
            '<div id="busbody">'+
                '<div id="businfo" class="clearfix">'+
                    '<div id="businfoleft">'+
                        '<strong>A</strong><br>(<a>반시계</a> 방향)<br><p id="Atime">로딩 중</p>'+
                    '</div>'+
                    '<div id="businforight">'+
                        '<strong>B</strong><br>(<a>시계</a> 방향)<br><p id="Btime">로딩 중</p>'+
                    '</div>'+
                '</div>'+
                '<div id="busetc">'+
                    '• 운행시간 - 08:00 ~ 18:40 <span>(주말 및 공휴일 제외)</span><br>• 표시되는 시간은 버스시간표를 기준으로 안내중이며<br><a>시간대 별로 상이할 수 있습니다.</a>'+
                '</div>'+
            '</div>'+
        '</div>';
        var content1 =
        '<div id="buswrap">'+
            '<div id="bushead">'+
                '<a>약학대학</a>'+
                '<img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/overlay_close.png" onclick="closeOverlay()" title="닫기">'+
            '</div>'+
            '<div id="busbody">'+
                '<div id="businfo" class="clearfix">'+
                    '<div id="businfoleft">'+
                        '<strong>A</strong><br>(<a>반시계</a> 방향)<br><p id="AtimePharm">로딩 중</p>'+
                    '</div>'+
                    '<div id="businforight">'+
                        '<strong>B</strong><br>(<a>시계</a> 방향)<br><p id="Btime">로딩 중</p>'+
                    '</div>'+
                '</div>'+
                '<div id="busetc">'+
                    '• 운행시간 - 08:00 ~ 18:40 <span>(주말 및 공휴일 제외)</span><br>• 표시되는 시간은 버스시간표를 기준으로 안내중이며<br><a>시간대 별로 상이할 수 있습니다.</a>'+
                '</div>'+
            '</div>'+
        '</div>';
        var content2 =
        '<div id="buswrap">'+
            '<div id="bushead">'+
                '<a>학생회관</a>'+
                '<img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/overlay_close.png" onclick="closeOverlay()" title="닫기">'+
            '</div>'+
            '<div id="busbody">'+
                '<div id="businfo" class="clearfix">'+
                    '<div id="businfoleft">'+
                        '<strong>A</strong><br>(<a>반시계</a> 방향)<br><p id="AtimeStud">로딩 중</p>'+
                    '</div>'+
                    '<div id="businforight">'+
                        '<strong>B</strong><br>(<a>시계</a> 방향)<br><p id="Btime">로딩 중</p>'+
                    '</div>'+
                '</div>'+
                '<div id="busetc">'+
                    '• 운행시간 - 08:00 ~ 18:40 <span>(주말 및 공휴일 제외)</span><br>• 표시되는 시간은 버스시간표를 기준으로 안내중이며<br><a>시간대 별로 상이할 수 있습니다.</a>'+
                '</div>'+
            '</div>'+
        '</div>';
        var content3 =
        '<div id="buswrap">'+
            '<div id="bushead">'+
                '<a>인문대학(서쪽)</a>'+
                '<img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/overlay_close.png" onclick="closeOverlay()" title="닫기">'+
            '</div>'+
            '<div id="busbody">'+
                '<div id="businfo" class="clearfix">'+
                    '<div id="businfoleft">'+
                        '<strong>A</strong><br>(<a>반시계</a> 방향)<br><p id="AtimeHumanW">로딩 중</p>'+
                    '</div>'+
                    '<div id="businforight">'+
                        '<strong>B</strong><br>(<a>시계</a> 방향)<br><p id="Btime">로딩 중</p>'+
                    '</div>'+
                '</div>'+
                '<div id="busetc">'+
                    '• 운행시간 - 08:00 ~ 18:40 <span>(주말 및 공휴일 제외)</span><br>• 표시되는 시간은 버스시간표를 기준으로 안내중이며<br><a>시간대 별로 상이할 수 있습니다.</a>'+
                '</div>'+
            '</div>'+
        '</div>';
        var content4 =
        '<div id="buswrap">'+
            '<div id="bushead">'+
                '<a>학생생활관</a>'+
                '<img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/overlay_close.png" onclick="closeOverlay()" title="닫기">'+
            '</div>'+
            '<div id="busbody">'+
                '<div id="businfo" class="clearfix">'+
                    '<div id="businfoleft">'+
                        '<strong>A</strong><br>(<a>반시계</a> 방향)<br><p id="AtimeDrom">로딩 중</p>'+
                    '</div>'+
                    '<div id="businforight">'+
                        '<strong>B</strong><br>(<a>시계</a> 방향)<br><p id="Btime">로딩 중</p>'+
                    '</div>'+
                '</div>'+
                '<div id="busetc">'+
                    '• 운행시간 - 08:00 ~ 18:40 <span>(주말 및 공휴일 제외)</span><br>• 표시되는 시간은 버스시간표를 기준으로 안내중이며<br><a>시간대 별로 상이할 수 있습니다.</a>'+
                '</div>'+
            '</div>'+
        '</div>';
        var content5 =
        '<div id="buswrap">'+
            '<div id="bushead">'+
                '<a>인문대학(동쪽)</a>'+
                '<img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/overlay_close.png" onclick="closeOverlay()" title="닫기">'+
            '</div>'+
            '<div id="busbody">'+
                '<div id="businfo" class="clearfix">'+
                    '<div id="businfoleft">'+
                        '<strong>A</strong><br>(<a>반시계</a> 방향)<br><p id="Atime">로딩 중</p>'+
                    '</div>'+
                    '<div id="businforight">'+
                        '<strong>B</strong><br>(<a>시계</a> 방향)<br><p id="Btime">로딩 중</p>'+
                    '</div>'+
                '</div>'+
                '<div id="busetc">'+
                    '• 운행시간 - 08:00 ~ 18:40 <span>(주말 및 공휴일 제외)</span><br>• 표시되는 시간은 버스시간표를 기준으로 안내중이며<br><a>시간대 별로 상이할 수 있습니다.</a>'+
                '</div>'+
            '</div>'+
        '</div>';
        var content6 =
        '<div id="buswrap">'+
            '<div id="bushead">'+
                '<a>중앙도서관</a>'+
                '<img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/overlay_close.png" onclick="closeOverlay()" title="닫기">'+
            '</div>'+
            '<div id="busbody">'+
                '<div id="businfo" class="clearfix">'+
                    '<div id="businfoleft">'+
                        '<strong>A</strong><br>(<a>반시계</a> 방향)<br><p id="Atime">로딩 중</p>'+
                    '</div>'+
                    '<div id="businforight">'+
                        '<strong>B</strong><br>(<a>시계</a> 방향)<br><p id="Btime">로딩 중</p>'+
                    '</div>'+
                '</div>'+
                '<div id="busetc">'+
                    '• 운행시간 - 08:00 ~ 18:40 <span>(주말 및 공휴일 제외)</span><br>• 표시되는 시간은 버스시간표를 기준으로 안내중이며<br><a>시간대 별로 상이할 수 있습니다.</a>'+
                '</div>'+
            '</div>'+
        '</div>';
        var content7 =
        '<div id="buswrap">'+
            '<div id="bushead">'+
                '<a>의학전문대학원</a>'+
                '<img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/overlay_close.png" onclick="closeOverlay()" title="닫기">'+
            '</div>'+
            '<div id="busbody">'+
                '<div id="businfo" class="clearfix">'+
                    '<div id="businfoleft">'+
                        '<strong>A</strong><br>(<a>반시계</a> 방향)<br><p id="Atime">로딩 중</p>'+
                    '</div>'+
                    '<div id="businforight">'+
                        '<strong>B</strong><br>(<a>시계</a> 방향)<br><p id="Btime">로딩 중</p>'+
                    '</div>'+
                '</div>'+
                '<div id="busetc">'+
                    '• 운행시간 - 08:00 ~ 18:40 <span>(주말 및 공휴일 제외)</span><br>• 표시되는 시간은 버스시간표를 기준으로 안내중이며<br><a>시간대 별로 상이할 수 있습니다.</a>'+
                '</div>'+
            '</div>'+
        '</div>';
        var content8 =
        '<div id="buswrap">'+
            '<div id="bushead">'+
                '<a>공과대학 4호관</a>'+
                '<img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/overlay_close.png" onclick="closeOverlay()" title="닫기">'+
            '</div>'+
            '<div id="busbody">'+
                '<div id="businfo" class="clearfix">'+
                    '<div id="businfoleft">'+
                        '<strong>A</strong><br>(<a>반시계</a> 방향)<br><p id="Atime">로딩 중</p>'+
                    '</div>'+
                    '<div id="businforight">'+
                        '<strong>B</strong><br>(<a>시계</a> 방향)<br><p id="Btime">로딩 중</p>'+
                    '</div>'+
                '</div>'+
                '<div id="busetc">'+
                    '• 운행시간 - 08:00 ~ 18:40 <span>(주말 및 공휴일 제외)</span><br>• 표시되는 시간은 버스시간표를 기준으로 안내중이며<br><a>시간대 별로 상이할 수 있습니다.</a>'+
                '</div>'+
            '</div>'+
        '</div>';
        var content9 =
        '<div id="buswrap">'+
            '<div id="bushead">'+
                '<a>해양과학대학 4호관</a>'+
                '<img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/overlay_close.png" onclick="closeOverlay()" title="닫기">'+
            '</div>'+
            '<div id="busbody">'+
                '<div id="businfo" class="clearfix">'+
                    '<div id="businfoleft">'+
                        '<strong>A</strong><br>(<a>반시계</a> 방향)<br><p id="Atime">로딩 중</p>'+
                    '</div>'+
                    '<div id="businforight">'+
                        '<strong>B</strong><br>(<a>시계</a> 방향)<br><p id="Btime">로딩 중</p>'+
                    '</div>'+
                '</div>'+
                '<div id="busetc">'+
                    '• 운행시간 - 08:00 ~ 18:40 <span>(주말 및 공휴일 제외)</span><br>• 표시되는 시간은 버스시간표를 기준으로 안내중이며<br><a>시간대 별로 상이할 수 있습니다.</a>'+
                '</div>'+
            '</div>'+
        '</div>';
        var content10 =
        '<div id="buswrap">'+
            '<div id="bushead">'+
                '<a>교양강의동</a>'+
                '<img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/overlay_close.png" onclick="closeOverlay()" title="닫기">'+
            '</div>'+
            '<div id="busbody">'+
                '<div id="businfo" class="clearfix">'+
                    '<div id="businfoleft">'+
                        '<strong>A</strong><br>(<a>반시계</a> 방향)<br><p id="Atime">로딩 중</p>'+
                    '</div>'+
                    '<div id="businforight">'+
                        '<strong>B</strong><br>(<a>시계</a> 방향)<br><p id="Btime">로딩 중</p>'+
                    '</div>'+
                '</div>'+
                '<div id="busetc">'+
                    '• 운행시간 - 08:00 ~ 18:40 <span>(주말 및 공휴일 제외)</span><br>• 표시되는 시간은 버스시간표를 기준으로 안내중이며<br><a>시간대 별로 상이할 수 있습니다.</a>'+
                '</div>'+
            '</div>'+
        '</div>';
        var content11 =
        '<div id="buswrap">'+
            '<div id="bushead">'+
                '<a>본관</a>'+
                '<img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/overlay_close.png" onclick="closeOverlay()" title="닫기">'+
            '</div>'+
            '<div id="busbody">'+
                '<div id="businfo" class="clearfix">'+
                    '<div id="businfoleft">'+
                        '<strong>A</strong><br>(<a>반시계</a> 방향)<br><p id="Atime">로딩 중</p>'+
                    '</div>'+
                    '<div id="businforight">'+
                        '<strong>B</strong><br>(<a>시계</a> 방향)<br><p id="Btime">로딩 중</p>'+
                    '</div>'+
                '</div>'+
                '<div id="busetc">'+
                    '• 운행시간 - 08:00 ~ 18:40 <span>(주말 및 공휴일 제외)</span><br>• 표시되는 시간은 버스시간표를 기준으로 안내중이며<br><a>시간대 별로 상이할 수 있습니다.</a>'+
                '</div>'+
            '</div>'+
        '</div>';
        var content12 =
        '<div id="buswrap">'+
            '<div id="bushead">'+
                '<a>해양과학대학 1호관</a>'+
                '<img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/overlay_close.png" onclick="closeOverlay()" title="닫기">'+
            '</div>'+
            '<div id="busbody">'+
                '<div id="businfo" class="clearfix">'+
                    '<div id="businfoleft">'+
                        '<strong>A</strong><br>(<a>반시계</a> 방향)<br><p id="AtimeMarine1">로딩 중</p>'+
                    '</div>'+
                    '<div id="businforight">'+
                        '<strong>B</strong><br>(<a>시계</a> 방향)<br><p id="Btime">로딩 중</p>'+
                    '</div>'+
                '</div>'+
                '<div id="busetc">'+
                    '• 운행시간 - 08:00 ~ 18:40 <span>(주말 및 공휴일 제외)</span><br>• 표시되는 시간은 버스시간표를 기준으로 안내중이며<br><a>시간대 별로 상이할 수 있습니다.</a>'+
                '</div>'+
            '</div>'+
        '</div>';

//--------------------정류장별 html파일----------------------------
    var markercontent = 
    '<div class="ATM">' +
        '<div id="ATMempty"></div>' +
        '<div id="ATMtop">' +
            '<a><img src="images/Jejubank.png"><span><img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/overlay_close.png" onclick="closeOverlay()" title="닫기"></span></a>' +
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
            '<a><img src="images/NHbank.jpg"><span><img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/overlay_close.png" onclick="closeOverlay()" title="닫기"></span></a>' +
        '</div>' +
        '<div id="ATMbottom">' +
            '<dl>' +
                '<dt><a>운영시간</a><span>(연중무휴)</span></dt>' +
                '<dd>06 : 00 ~ 24 : 00</dd>' +
            '</dl>' +
        '</div>' +
    '</div>' ;

    //---------------------버스정류장별 시간표 오버레이------------------------------
    
    // 마커 위에 커스텀오버레이를 표시합니다
    // 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
    var overlay = new kakao.maps.CustomOverlay({ //정문
        content: content,
        map: map,
        position: busmarker.getPosition()       
    });
    overlay.setMap(null);
    var overlay1 = new kakao.maps.CustomOverlay({ //약학대학
        content: content1,
        map: map,
        position: busmarker1.getPosition()       
    });
    overlay1.setMap(null);
    var overlay2 = new kakao.maps.CustomOverlay({ //학생회관
        content: content2,
        map: map,
        position: busmarker2.getPosition()       
    });
    overlay2.setMap(null);
    var overlay3 = new kakao.maps.CustomOverlay({ //인문대학(서)
        content: content3,
        map: map,
        position: busmarker3.getPosition()       
    });
    overlay3.setMap(null);
    var overlay4 = new kakao.maps.CustomOverlay({ //학생생활관
        content: content4,
        map: map,
        position: busmarker4.getPosition()       
    });
    overlay4.setMap(null);
    var overlay5 = new kakao.maps.CustomOverlay({ //인문대학(동)
        content: content5,
        map: map,
        position: busmarker5.getPosition()       
    });
    overlay5.setMap(null);
    var overlay6 = new kakao.maps.CustomOverlay({ //중앙도서관
        content: content6,
        map: map,
        position: busmarker6.getPosition()       
    });
    overlay6.setMap(null);
    var overlay7 = new kakao.maps.CustomOverlay({ //의학전문대학원
        content: content7,
        map: map,
        position: busmarker7.getPosition()       
    });
    overlay7.setMap(null);
    var overlay8 = new kakao.maps.CustomOverlay({ //공과대학 4호관
        content: content8,
        map: map,
        position: busmarker8.getPosition()       
    });
    overlay8.setMap(null);
    var overlay9 = new kakao.maps.CustomOverlay({ //해양대학 4호관
        content: content9,
        map: map,
        position: busmarker9.getPosition()       
    });
    overlay9.setMap(null);
    var overlay10 = new kakao.maps.CustomOverlay({ //교양강의동
        content: content10,
        map: map,
        position: busmarker10.getPosition()       
    });
    overlay10.setMap(null);
    var overlay11 = new kakao.maps.CustomOverlay({ //본관
        content: content11,
        map: map,
        position: busmarker11.getPosition()       
    });
    overlay11.setMap(null);
    var overlay12 = new kakao.maps.CustomOverlay({ //해양대학 1호관
        content: content12,
        map: map,
        position: busmarker12.getPosition()       
    });
    overlay12.setMap(null);

    //-------------ATM기 오버레이---------------------------
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

    var ATMoverlay6 = new kakao.maps.CustomOverlay({ //해양과학대학3호관
        content: markercontent1,
        map: map,
        position: ATMmarker6.getPosition()       
    });
    ATMoverlay6.setMap(null);

    var ATMoverlay7 = new kakao.maps.CustomOverlay({ //아라뮤즈홀
        content: markercontent1,
        map: map,
        position: ATMmarker7.getPosition()       
    });
    ATMoverlay7.setMap(null);
       
    // 마커를 클릭했을 때 버스정보 커스텀 오버레이를 표시합니다
    kakao.maps.event.addListener(busmarker, 'click', function() {
        overlay.setMap(map);
        overlay1.setMap(null);
        overlay2.setMap(null);
        overlay3.setMap(null);
        overlay4.setMap(null);
        overlay5.setMap(null);
        overlay6.setMap(null);
        overlay7.setMap(null);
        overlay8.setMap(null);
        overlay9.setMap(null);
        overlay10.setMap(null);
        overlay11.setMap(null);
        overlay12.setMap(null);
        ATMoverlay.setMap(null);
        ATMoverlay1.setMap(null);
        ATMoverlay2.setMap(null);
        ATMoverlay3.setMap(null);
        ATMoverlay4.setMap(null);
        ATMoverlay5.setMap(null);
        ATMoverlay6.setMap(null);
        ATMoverlay7.setMap(null);
        overlayMoving(33.46015343928493, 126.56158159312466);
    });

    kakao.maps.event.addListener(busmarker1, 'click', function() {
        overlay.setMap(null);
        overlay1.setMap(map);
        overlay2.setMap(null);
        overlay3.setMap(null);
        overlay4.setMap(null);
        overlay5.setMap(null);
        overlay6.setMap(null);
        overlay7.setMap(null);
        overlay8.setMap(null);
        overlay9.setMap(null);
        overlay10.setMap(null);
        overlay11.setMap(null);
        overlay12.setMap(null);
        ATMoverlay.setMap(null);
        ATMoverlay1.setMap(null);
        ATMoverlay2.setMap(null);
        ATMoverlay3.setMap(null);
        ATMoverlay4.setMap(null);
        ATMoverlay5.setMap(null);
        ATMoverlay6.setMap(null);
        ATMoverlay7.setMap(null);
        overlayMoving(33.45805993777187, 126.56107582852171);
    });
    kakao.maps.event.addListener(busmarker2, 'click', function() {
        overlay.setMap(null);
        overlay1.setMap(null);
        overlay2.setMap(map);
        overlay3.setMap(null);
        overlay4.setMap(null);
        overlay5.setMap(null);
        overlay6.setMap(null);
        overlay7.setMap(null);
        overlay8.setMap(null);
        overlay9.setMap(null);
        overlay10.setMap(null);
        overlay11.setMap(null);
        overlay12.setMap(null);
        ATMoverlay.setMap(null);
        ATMoverlay1.setMap(null);
        ATMoverlay2.setMap(null);
        ATMoverlay3.setMap(null);
        ATMoverlay4.setMap(null);
        ATMoverlay5.setMap(null);
        ATMoverlay6.setMap(null);
        ATMoverlay7.setMap(null);
        overlayMoving(33.455110128657876, 126.56063087550932);
    });
    kakao.maps.event.addListener(busmarker3, 'click', function() {
        overlay.setMap(null);
        overlay1.setMap(null);
        overlay2.setMap(null);
        overlay3.setMap(map);
        overlay4.setMap(null);
        overlay5.setMap(null);
        overlay6.setMap(null);
        overlay7.setMap(null);
        overlay8.setMap(null);
        overlay9.setMap(null);
        overlay10.setMap(null);
        overlay11.setMap(null);
        overlay12.setMap(null);
        ATMoverlay.setMap(null);
        ATMoverlay1.setMap(null);
        ATMoverlay2.setMap(null);
        ATMoverlay3.setMap(null);
        ATMoverlay4.setMap(null);
        ATMoverlay5.setMap(null);
        ATMoverlay6.setMap(null);
        ATMoverlay7.setMap(null);
        overlayMoving(33.45373099738815, 126.5575509319587);
    });
    kakao.maps.event.addListener(busmarker4, 'click', function() {
        overlay.setMap(null);
        overlay1.setMap(null);
        overlay2.setMap(null);
        overlay3.setMap(null);
        overlay4.setMap(map);
        overlay5.setMap(null);
        overlay6.setMap(null);
        overlay7.setMap(null);
        overlay8.setMap(null);
        overlay9.setMap(null);
        overlay10.setMap(null);
        overlay11.setMap(null);
        overlay12.setMap(null);
        ATMoverlay.setMap(null);
        ATMoverlay1.setMap(null);
        ATMoverlay2.setMap(null);
        ATMoverlay3.setMap(null);
        ATMoverlay4.setMap(null);
        ATMoverlay5.setMap(null);
        ATMoverlay6.setMap(null);
        ATMoverlay7.setMap(null);
        overlayMoving(33.45199156127691, 126.55836642987437);
    });
    kakao.maps.event.addListener(busmarker5, 'click', function() {
        overlay.setMap(null);
        overlay1.setMap(null);
        overlay2.setMap(null);
        overlay3.setMap(null);
        overlay4.setMap(null);
        overlay5.setMap(map);
        overlay6.setMap(null);
        overlay7.setMap(null);
        overlay8.setMap(null);
        overlay9.setMap(null);
        overlay10.setMap(null);
        overlay11.setMap(null);
        overlay12.setMap(null);
        ATMoverlay.setMap(null);
        ATMoverlay1.setMap(null);
        ATMoverlay2.setMap(null);
        ATMoverlay3.setMap(null);
        ATMoverlay4.setMap(null);
        ATMoverlay5.setMap(null);
        ATMoverlay6.setMap(null);
        ATMoverlay7.setMap(null);
        overlayMoving(33.45355459367828, 126.5592834991402);
    });
    kakao.maps.event.addListener(busmarker6, 'click', function() {
        overlay.setMap(null);
        overlay1.setMap(null);
        overlay2.setMap(null);
        overlay3.setMap(null);
        overlay4.setMap(null);
        overlay5.setMap(null);
        overlay6.setMap(map);
        overlay7.setMap(null);
        overlay8.setMap(null);
        overlay9.setMap(null);
        overlay10.setMap(null);
        overlay11.setMap(null);
        overlay12.setMap(null);
        ATMoverlay.setMap(null);
        ATMoverlay1.setMap(null);
        ATMoverlay2.setMap(null);
        ATMoverlay3.setMap(null);
        ATMoverlay4.setMap(null);
        ATMoverlay5.setMap(null);
        ATMoverlay6.setMap(null);
        ATMoverlay7.setMap(null);
        overlayMoving(33.45361704756447, 126.56100410021769);
    });
    kakao.maps.event.addListener(busmarker7, 'click', function() {
        overlay.setMap(null);
        overlay1.setMap(null);
        overlay2.setMap(null);
        overlay3.setMap(null);
        overlay4.setMap(null);
        overlay5.setMap(null);
        overlay6.setMap(null);
        overlay7.setMap(map);
        overlay8.setMap(null);
        overlay9.setMap(null);
        overlay10.setMap(null);
        overlay11.setMap(null);
        overlay12.setMap(null);
        ATMoverlay.setMap(null);
        ATMoverlay1.setMap(null);
        ATMoverlay2.setMap(null);
        ATMoverlay3.setMap(null);
        ATMoverlay4.setMap(null);
        ATMoverlay5.setMap(null);
        ATMoverlay6.setMap(null);
        ATMoverlay7.setMap(null);
        overlayMoving(33.453557621098026, 126.56396491302868);
    });
    kakao.maps.event.addListener(busmarker8, 'click', function() {
        overlay.setMap(null);
        overlay1.setMap(null);
        overlay2.setMap(null);
        overlay3.setMap(null);
        overlay4.setMap(null);
        overlay5.setMap(null);
        overlay6.setMap(null);
        overlay7.setMap(null);
        overlay8.setMap(map);
        overlay9.setMap(null);
        overlay10.setMap(null);
        overlay11.setMap(null);
        overlay12.setMap(null);
        ATMoverlay.setMap(null);
        ATMoverlay1.setMap(null);
        ATMoverlay2.setMap(null);
        ATMoverlay3.setMap(null);
        ATMoverlay4.setMap(null);
        ATMoverlay5.setMap(null);
        ATMoverlay6.setMap(null);
        ATMoverlay7.setMap(null);
        overlayMoving(33.45524511612683, 126.56439208250133);
    });
    kakao.maps.event.addListener(busmarker9, 'click', function() {
        overlay.setMap(null);
        overlay1.setMap(null);
        overlay2.setMap(null);
        overlay3.setMap(null);
        overlay4.setMap(null);
        overlay5.setMap(null);
        overlay6.setMap(null);
        overlay7.setMap(null);
        overlay8.setMap(null);
        overlay9.setMap(map);
        overlay10.setMap(null);
        overlay11.setMap(null);
        overlay12.setMap(null);
        ATMoverlay.setMap(null);
        ATMoverlay1.setMap(null);
        ATMoverlay2.setMap(null);
        ATMoverlay3.setMap(null);
        ATMoverlay4.setMap(null);
        ATMoverlay5.setMap(null);
        ATMoverlay6.setMap(null);
        ATMoverlay7.setMap(null);
        overlayMoving(33.45573826971047, 126.56618586795527);
    });
    kakao.maps.event.addListener(busmarker10, 'click', function() {
        overlay.setMap(null);
        overlay1.setMap(null);
        overlay2.setMap(null);
        overlay3.setMap(null);
        overlay4.setMap(null);
        overlay5.setMap(null);
        overlay6.setMap(null);
        overlay7.setMap(null);
        overlay8.setMap(null);
        overlay9.setMap(null);
        overlay10.setMap(map);
        overlay11.setMap(null);
        overlay12.setMap(null);
        ATMoverlay.setMap(null);
        ATMoverlay1.setMap(null);
        ATMoverlay2.setMap(null);
        ATMoverlay3.setMap(null);
        ATMoverlay4.setMap(null);
        ATMoverlay5.setMap(null);
        ATMoverlay6.setMap(null);
        ATMoverlay7.setMap(null);
        overlayMoving(33.45612907037793, 126.56386061632756);
    });
    kakao.maps.event.addListener(busmarker11, 'click', function() {
        overlay.setMap(null);
        overlay1.setMap(null);
        overlay2.setMap(null);
        overlay3.setMap(null);
        overlay4.setMap(null);
        overlay5.setMap(null);
        overlay6.setMap(null);
        overlay7.setMap(null);
        overlay8.setMap(null);
        overlay9.setMap(null);
        overlay10.setMap(null);
        overlay11.setMap(map);
        overlay12.setMap(null);
        ATMoverlay.setMap(null);
        ATMoverlay1.setMap(null);
        ATMoverlay2.setMap(null);
        ATMoverlay3.setMap(null);
        ATMoverlay4.setMap(null);
        ATMoverlay5.setMap(null);
        ATMoverlay6.setMap(null);
        ATMoverlay7.setMap(null);
        overlayMoving(33.45677626917144, 126.56266613546954);
    });
    kakao.maps.event.addListener(busmarker12, 'click', function() {
        overlay.setMap(null);
        overlay1.setMap(null);
        overlay2.setMap(null);
        overlay3.setMap(null);
        overlay4.setMap(null);
        overlay5.setMap(null);
        overlay6.setMap(null);
        overlay7.setMap(null);
        overlay8.setMap(null);
        overlay9.setMap(null);
        overlay10.setMap(null);
        overlay11.setMap(null);
        overlay12.setMap(map);
        ATMoverlay.setMap(null);
        ATMoverlay1.setMap(null);
        ATMoverlay2.setMap(null);
        ATMoverlay3.setMap(null);
        ATMoverlay4.setMap(null);
        ATMoverlay5.setMap(null);
        ATMoverlay6.setMap(null);
        ATMoverlay7.setMap(null);
        overlayMoving(33.45781481654195, 126.56315033095102);
    });
    kakao.maps.event.addListener(ATMmarker, 'click', function() {
        overlay.setMap(null);
        overlay1.setMap(null);
        overlay2.setMap(null);
        overlay3.setMap(null);
        overlay4.setMap(null);
        overlay5.setMap(null);
        overlay6.setMap(null);
        overlay7.setMap(null);
        overlay8.setMap(null);
        overlay9.setMap(null);
        overlay10.setMap(null);
        overlay11.setMap(null);
        overlay12.setMap(null);
        ATMoverlay.setMap(map);
        ATMoverlay1.setMap(null);
        ATMoverlay2.setMap(null);
        ATMoverlay3.setMap(null);
        ATMoverlay4.setMap(null);
        ATMoverlay5.setMap(null);
        ATMoverlay6.setMap(null);
        ATMoverlay7.setMap(null);
        map.setCenter(ATMmarkerPosition);
    });
    kakao.maps.event.addListener(ATMmarker1, 'click', function() {
        overlay.setMap(null);
        overlay1.setMap(null);
        overlay2.setMap(null);
        overlay3.setMap(null);
        overlay4.setMap(null);
        overlay5.setMap(null);
        overlay6.setMap(null);
        overlay7.setMap(null);
        overlay8.setMap(null);
        overlay9.setMap(null);
        overlay10.setMap(null);
        overlay11.setMap(null);
        overlay12.setMap(null);
        ATMoverlay.setMap(null);
        ATMoverlay1.setMap(map);
        ATMoverlay2.setMap(null);
        ATMoverlay3.setMap(null);
        ATMoverlay4.setMap(null);
        ATMoverlay5.setMap(null);
        ATMoverlay6.setMap(null);
        ATMoverlay7.setMap(null);
        map.setCenter(ATMmarkerPosition1);
    });
    kakao.maps.event.addListener(ATMmarker2, 'click', function() {
        overlay.setMap(null);
        overlay1.setMap(null);
        overlay2.setMap(null);
        overlay3.setMap(null);
        overlay4.setMap(null);
        overlay5.setMap(null);
        overlay6.setMap(null);
        overlay7.setMap(null);
        overlay8.setMap(null);
        overlay9.setMap(null);
        overlay10.setMap(null);
        overlay11.setMap(null);
        overlay12.setMap(null);
        ATMoverlay.setMap(null);
        ATMoverlay1.setMap(null);
        ATMoverlay2.setMap(map);
        ATMoverlay3.setMap(null);
        ATMoverlay4.setMap(null);
        ATMoverlay5.setMap(null);
        ATMoverlay6.setMap(null);
        ATMoverlay7.setMap(null);
        map.setCenter(ATMmarkerPosition2);
    });
    kakao.maps.event.addListener(ATMmarker3, 'click', function() {
        overlay.setMap(null);
        overlay1.setMap(null);
        overlay2.setMap(null);
        overlay3.setMap(null);
        overlay4.setMap(null);
        overlay5.setMap(null);
        overlay6.setMap(null);
        overlay7.setMap(null);
        overlay8.setMap(null);
        overlay9.setMap(null);
        overlay10.setMap(null);
        overlay11.setMap(null);
        overlay12.setMap(null);
        ATMoverlay.setMap(null);
        ATMoverlay1.setMap(null);
        ATMoverlay2.setMap(null);
        ATMoverlay3.setMap(map);
        ATMoverlay4.setMap(null);
        ATMoverlay5.setMap(null);
        ATMoverlay6.setMap(null);
        ATMoverlay7.setMap(null);
        map.setCenter(ATMmarkerPosition3);
    });
    kakao.maps.event.addListener(ATMmarker4, 'click', function() {
        overlay.setMap(null);
        overlay1.setMap(null);
        overlay2.setMap(null);
        overlay3.setMap(null);
        overlay4.setMap(null);
        overlay5.setMap(null);
        overlay6.setMap(null);
        overlay7.setMap(null);
        overlay8.setMap(null);
        overlay9.setMap(null);
        overlay10.setMap(null);
        overlay11.setMap(null);
        overlay12.setMap(null);
        ATMoverlay.setMap(null);
        ATMoverlay1.setMap(null);
        ATMoverlay2.setMap(null);
        ATMoverlay3.setMap(null);
        ATMoverlay4.setMap(map);
        ATMoverlay5.setMap(null);
        ATMoverlay6.setMap(null);
        ATMoverlay7.setMap(null);
        map.setCenter(ATMmarkerPosition4);
    });
    kakao.maps.event.addListener(ATMmarker5, 'click', function() {
        overlay.setMap(null);
        overlay1.setMap(null);
        overlay2.setMap(null);
        overlay3.setMap(null);
        overlay4.setMap(null);
        overlay5.setMap(null);
        overlay6.setMap(null);
        overlay7.setMap(null);
        overlay8.setMap(null);
        overlay9.setMap(null);
        overlay10.setMap(null);
        overlay11.setMap(null);
        overlay12.setMap(null);
        ATMoverlay.setMap(null);
        ATMoverlay1.setMap(null);
        ATMoverlay2.setMap(null);
        ATMoverlay3.setMap(null);
        ATMoverlay4.setMap(null);
        ATMoverlay5.setMap(map);
        ATMoverlay6.setMap(null);
        ATMoverlay7.setMap(null);
        map.setCenter(ATMmarkerPosition5);
    });
    kakao.maps.event.addListener(ATMmarker6, 'click', function() {
        overlay.setMap(null);
        overlay1.setMap(null);
        overlay2.setMap(null);
        overlay3.setMap(null);
        overlay4.setMap(null);
        overlay5.setMap(null);
        overlay6.setMap(null);
        overlay7.setMap(null);
        overlay8.setMap(null);
        overlay9.setMap(null);
        overlay10.setMap(null);
        overlay11.setMap(null);
        overlay12.setMap(null);
        ATMoverlay.setMap(null);
        ATMoverlay1.setMap(null);
        ATMoverlay2.setMap(null);
        ATMoverlay3.setMap(null);
        ATMoverlay4.setMap(null);
        ATMoverlay5.setMap(null);
        ATMoverlay6.setMap(map);
        ATMoverlay7.setMap(null);
        map.setCenter(ATMmarkerPosition6);
    });
    kakao.maps.event.addListener(ATMmarker7, 'click', function() {
        overlay.setMap(null);
        overlay1.setMap(null);
        overlay2.setMap(null);
        overlay3.setMap(null);
        overlay4.setMap(null);
        overlay5.setMap(null);
        overlay6.setMap(null);
        overlay7.setMap(null);
        overlay8.setMap(null);
        overlay9.setMap(null);
        overlay10.setMap(null);
        overlay11.setMap(null);
        overlay12.setMap(null);
        ATMoverlay.setMap(null);
        ATMoverlay1.setMap(null);
        ATMoverlay2.setMap(null);
        ATMoverlay3.setMap(null);
        ATMoverlay4.setMap(null);
        ATMoverlay5.setMap(null);
        ATMoverlay6.setMap(null);
        ATMoverlay7.setMap(map);
        map.setCenter(ATMmarkerPosition7);
    });
    // 커스텀 오버레이를 닫기 위해 호출되는 함수입니다 
    function closeOverlay() {
        overlay.setMap(null);
        overlay1.setMap(null);
        overlay2.setMap(null);
        overlay3.setMap(null);
        overlay4.setMap(null);
        overlay5.setMap(null);
        overlay6.setMap(null);
        overlay7.setMap(null);
        overlay8.setMap(null);
        overlay9.setMap(null);
        overlay10.setMap(null);
        overlay11.setMap(null);
        overlay12.setMap(null);
        ATMoverlay.setMap(null);
        ATMoverlay1.setMap(null);
        ATMoverlay2.setMap(null);
        ATMoverlay3.setMap(null);
        ATMoverlay4.setMap(null);
        ATMoverlay5.setMap(null);
        ATMoverlay6.setMap(null);
        ATMoverlay7.setMap(null);
    }
    // 지도의 확대 축소 레벨이 바뀔때마다 실행되는 이벤트리스터입니다.
    kakao.maps.event.addListener(map, 'zoom_changed', function() {        
        var level = map.getLevel();// 지도의 현재 레벨을 얻어옵니다
        if (level >= 5) {
            busmarker.setMap(null);
            busmarker1.setMap(null);
            busmarker2.setMap(null);
            busmarker3.setMap(null);
            busmarker4.setMap(null);
            busmarker5.setMap(null);
            busmarker6.setMap(null);
            busmarker7.setMap(null);
            busmarker8.setMap(null);
            busmarker9.setMap(null);
            busmarker10.setMap(null);
            busmarker11.setMap(null);
            busmarker12.setMap(null);
            ATMmarker.setMap(null);
            ATMmarker1.setMap(null);
            ATMmarker2.setMap(null);
            ATMmarker3.setMap(null);
            ATMmarker4.setMap(null);
            ATMmarker5.setMap(null);
            ATMmarker6.setMap(null);
            ATMmarker7.setMap(null);
            overlay.setMap(null);
            overlay1.setMap(null);
            overlay2.setMap(null);
            overlay3.setMap(null);
            overlay4.setMap(null);
            overlay5.setMap(null);
            overlay6.setMap(null);
            overlay7.setMap(null);
            overlay8.setMap(null);
            overlay9.setMap(null);
            overlay10.setMap(null);
            overlay11.setMap(null);
            overlay12.setMap(null);
            ATMoverlay.setMap(null);
            ATMoverlay1.setMap(null);
            ATMoverlay2.setMap(null);
            ATMoverlay3.setMap(null);
            ATMoverlay4.setMap(null);
            ATMoverlay5.setMap(null);
            ATMoverlay6.setMap(null);
            ATMoverlay7.setMap(null);
        }
        else {
            busmarker.setMap(map);
            busmarker1.setMap(map);
            busmarker2.setMap(map);
            busmarker3.setMap(map);
            busmarker4.setMap(map);
            busmarker5.setMap(map);
            busmarker6.setMap(map);
            busmarker7.setMap(map);
            busmarker8.setMap(map);
            busmarker9.setMap(map);
            busmarker10.setMap(map);
            busmarker11.setMap(map);
            busmarker12.setMap(map);
            ATMmarker.setMap(map);
            ATMmarker1.setMap(map);
            ATMmarker2.setMap(map);
            ATMmarker3.setMap(map);
            ATMmarker4.setMap(map);
            ATMmarker5.setMap(map);
            ATMmarker6.setMap(map);
            ATMmarker7.setMap(map);
        }     
    });

    var bustoggle = true;
    var ATMtoggle = true;

    function delBus() {
        if (bustoggle == true) {
            busmarker.setMap(null);
            busmarker1.setMap(null);
            busmarker2.setMap(null);
            busmarker3.setMap(null);
            busmarker4.setMap(null);
            busmarker5.setMap(null);
            busmarker6.setMap(null);
            busmarker7.setMap(null);
            busmarker8.setMap(null);
            busmarker9.setMap(null);
            busmarker10.setMap(null);
            busmarker11.setMap(null);
            busmarker12.setMap(null);
            overlay.setMap(null);
            overlay1.setMap(null);
            overlay2.setMap(null);
            overlay3.setMap(null);
            overlay4.setMap(null);
            overlay5.setMap(null);
            overlay6.setMap(null);
            overlay7.setMap(null);
            overlay8.setMap(null);
            overlay9.setMap(null);
            overlay10.setMap(null);
            overlay11.setMap(null);
            overlay12.setMap(null);
            ATMoverlay.setMap(null);
            ATMoverlay1.setMap(null);
            ATMoverlay2.setMap(null);
            ATMoverlay3.setMap(null);
            ATMoverlay4.setMap(null);
            ATMoverlay5.setMap(null);
            ATMoverlay6.setMap(null);
            ATMoverlay7.setMap(null);
            bustoggle = !bustoggle;
        }
        else {
            busmarker.setMap(map);
            busmarker1.setMap(map);
            busmarker2.setMap(map);
            busmarker3.setMap(map);
            busmarker4.setMap(map);
            busmarker5.setMap(map);
            busmarker6.setMap(map);
            busmarker7.setMap(map);
            busmarker8.setMap(map);
            busmarker9.setMap(map);
            busmarker10.setMap(map);
            busmarker11.setMap(map);
            busmarker12.setMap(map);
            overlay.setMap(null);
            overlay1.setMap(null);
            overlay2.setMap(null);
            overlay3.setMap(null);
            overlay4.setMap(null);
            overlay5.setMap(null);
            overlay6.setMap(null);
            overlay7.setMap(null);
            overlay8.setMap(null);
            overlay9.setMap(null);
            overlay10.setMap(null);
            overlay11.setMap(null);
            overlay12.setMap(null);
            ATMoverlay.setMap(null);
            ATMoverlay1.setMap(null);
            ATMoverlay2.setMap(null);
            ATMoverlay3.setMap(null);
            ATMoverlay4.setMap(null);
            ATMoverlay5.setMap(null);
            ATMoverlay6.setMap(null);
            ATMoverlay7.setMap(null);
            bustoggle = !bustoggle;
        }     
    }
    function delATM() {
        if (ATMtoggle == true) {
            ATMmarker.setMap(null);
            ATMmarker1.setMap(null);
            ATMmarker2.setMap(null);
            ATMmarker3.setMap(null);
            ATMmarker4.setMap(null);
            ATMmarker5.setMap(null);
            ATMmarker6.setMap(null);
            ATMmarker7.setMap(null);
            overlay.setMap(null);
            overlay1.setMap(null);
            overlay2.setMap(null);
            overlay3.setMap(null);
            overlay4.setMap(null);
            overlay5.setMap(null);
            overlay6.setMap(null);
            overlay7.setMap(null);
            overlay8.setMap(null);
            overlay9.setMap(null);
            overlay10.setMap(null);
            overlay11.setMap(null);
            overlay12.setMap(null);
            ATMoverlay.setMap(null);
            ATMoverlay1.setMap(null);
            ATMoverlay2.setMap(null);
            ATMoverlay3.setMap(null);
            ATMoverlay4.setMap(null);
            ATMoverlay5.setMap(null);
            ATMoverlay6.setMap(null);
            ATMoverlay7.setMap(null);
            ATMtoggle = !ATMtoggle;
        }
        else {
            ATMmarker.setMap(map);
            ATMmarker1.setMap(map);
            ATMmarker2.setMap(map);
            ATMmarker3.setMap(map);
            ATMmarker4.setMap(map);
            ATMmarker5.setMap(map);
            ATMmarker6.setMap(map);
            ATMmarker7.setMap(map);
            overlay.setMap(null);
            overlay1.setMap(null);
            overlay2.setMap(null);
            overlay3.setMap(null);
            overlay4.setMap(null);
            overlay5.setMap(null);
            overlay6.setMap(null);
            overlay7.setMap(null);
            overlay8.setMap(null);
            overlay9.setMap(null);
            overlay10.setMap(null);
            overlay11.setMap(null);
            overlay12.setMap(null);
            ATMoverlay.setMap(null);
            ATMoverlay1.setMap(null);
            ATMoverlay2.setMap(null);
            ATMoverlay3.setMap(null);
            ATMoverlay4.setMap(null);
            ATMoverlay5.setMap(null);
            ATMoverlay6.setMap(null);
            ATMoverlay7.setMap(null);
            ATMtoggle = !ATMtoggle;
        }     
    }