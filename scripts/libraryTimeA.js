// 코드 적기 전 체크리스트
// 1. 함수 이름 변경
// 2. id 이름 변경
// 3. index.html에 js파일 연동
// 4. overlay.js에 바뀐 id 이름 기입하기.

function libraryTimeA() {
    var now = new Date();

    var nowHour = now.getHours();
    var nowMinute = now.getMinutes();
    var nowSecond = now.getSeconds();



    if(nowHour>=19 || now.getDay()==0 || now.getDay()==6 || nowHour<=6){
        document.querySelector("#AtimeLib").innerHTML = "운행 없음";
    }

    else if(nowHour<19){
        if(nowHour==18){
            if(nowMinute>48){
                document.querySelector("#AtimeLib").innerHTML = "운행 없음";
            }
            else if(nowMinute<=48 && nowMinute>28){
                document.querySelector("#AtimeLib").innerHTML = Number(48-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=28 && nowMinute>8){
                document.querySelector("#AtimeLib").innerHTML = Number(28-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=8){
                document.querySelector("#AtimeLib").innerHTML = Number(8-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==17){
            if(nowMinute>48){
                document.querySelector("#AtimeLib").innerHTML = Number(68-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=48 && nowMinute>28){
                document.querySelector("#AtimeLib").innerHTML = Number(48-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=28 && nowMinute>8){
                document.querySelector("#AtimeLib").innerHTML = Number(28-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=8){
                document.querySelector("#AtimeLib").innerHTML = Number(8-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==16){
            if(nowMinute>38){ 
                document.querySelector("#AtimeLib").innerHTML = Number(68-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=38){
                document.querySelector("#AtimeLib").innerHTML = Number(38-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==15){
            if(nowMinute>53){ 
                document.querySelector("#AtimeLib").innerHTML = Number(98-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=53 && nowMinute>33){
                document.querySelector("#AtimeLib").innerHTML = Number(53-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=33 && nowMinute>13){
                document.querySelector("#AtimeLib").innerHTML = Number(33-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=13){
                document.querySelector("#AtimeLib").innerHTML = Number(13-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==14){
            if(nowMinute>38){ 
                document.querySelector("#AtimeLib").innerHTML = Number(73-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=38){
                document.querySelector("#AtimeLib").innerHTML = Number(38-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==13){
            if(nowMinute>53){ 
                document.querySelector("#AtimeLib").innerHTML = Number(98-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=53 && nowMinute>33){
                document.querySelector("#AtimeLib").innerHTML = Number(53-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=33 && nowMinute>13){
                document.querySelector("#AtimeLib").innerHTML = Number(33-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=13){
                document.querySelector("#AtimeLib").innerHTML = Number(13-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==12){
            if(nowMinute>48){ 
                document.querySelector("#AtimeLib").innerHTML = Number(73-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=48){
                document.querySelector("#AtimeLib").innerHTML = Number(48-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==11){
            if(nowMinute>28){
                if(nowMinute<=48 && nowMinute>28){
                    document.querySelector("#AtimeLib").innerHTML = Number(12-nowHour) + ":" + Number(48-nowMinute)+":"+Number(59-nowSecond);
                }
                else if(nowMinute>48){
                    document.querySelector("#AtimeLib").innerHTML = Number(108-nowMinute)+":"+Number(59-nowSecond);
                }
            }
            else if(nowMinute<=28){
                document.querySelector("#AtimeLib").innerHTML = Number(28-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==10){
            if(nowMinute>53){ 
                document.querySelector("#AtimeLib").innerHTML = Number(88-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=53 && nowMinute>33){
                document.querySelector("#AtimeLib").innerHTML = Number(53-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=33 && nowMinute>13){
                document.querySelector("#AtimeLib").innerHTML = Number(33-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=13){
                document.querySelector("#AtimeLib").innerHTML = Number(13-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==9){
            if(nowMinute>38){ 
                document.querySelector("#AtimeLib").innerHTML = Number(73-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=38){
                document.querySelector("#AtimeLib").innerHTML = Number(43-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==8){
            if(nowMinute>53){ 
                document.querySelector("#AtimeLib").innerHTML = Number(98-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=53 && nowMinute>33){
                document.querySelector("#AtimeLib").innerHTML = Number(53-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=33 && nowMinute>13){
                document.querySelector("#AtimeLib").innerHTML = Number(33-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=13){
                document.querySelector("#AtimeLib").innerHTML = Number(13-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==7){
            if(nowMinute>38){ 
                document.querySelector("#AtimeLib").innerHTML = Number(73-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowHour<=38){
                document.querySelector("#AtimeLib").innerHTML = "운행 없음";
            }
        }
    }
}

//매 초(600)마다 불러오는 함수
setInterval(function() {
    libraryTimeA();
},600);