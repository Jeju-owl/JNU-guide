// 학생회관B -> 오류 있을수있음
// 코드 적기 전 체크리스트
// 1. 함수 이름 변경
// 2. id 이름 변경
// 3. index.html에 js파일 연동
// 4. overlay.js에 바뀐 id 이름 기입하기.
function studentTimeB() {
    var now = new Date();

    var nowHour = now.getHours();
    var nowMinute = now.getMinutes();
    var nowSecond = now.getSeconds();

    if(nowHour>=20 || now.getDay()==0 || now.getDay()==6 || nowHour<=6){
        document.querySelector("#BtimeStud").innerHTML = "운행 없음";
    }

    if(nowHour<20){
        if(nowHour==19){
            if(nowMinute>0){
                document.querySelector("#BtimeStud").innerHTML = "운행 없음";
            }
        }
        if(nowHour==18){
            if(nowMinute>40){
                document.querySelector("#BtimeStud").innerHTML = Number(60-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=40 && nowMinute>20){
                document.querySelector("#BtimeStud").innerHTML = Number(40-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=20){
                document.querySelector("#BtimeStud").innerHTML = Number(20-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==17){
            if(nowMinute>40){
                document.querySelector("#BtimeStud").innerHTML = Number(60-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=40 && nowMinute>20){
                document.querySelector("#BtimeStud").innerHTML = Number(40-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=20){
                document.querySelector("#BtimeStud").innerHTML = Number(20-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==16){
            if(nowMinute>50){ 
                document.querySelector("#BtimeStud").innerHTML = Number(80-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=50){
                document.querySelector("#BtimeStud").innerHTML = Number(50-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==15){
            if(nowMinute>40){ 
                document.querySelector("#BtimeStud").innerHTML = Number(60-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=40 && nowMinute>20){
                document.querySelector("#BtimeStud").innerHTML = Number(40-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=20){
                document.querySelector("#BtimeStud").innerHTML = Number(20-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==14){
            if(nowMinute>50){ 
                document.querySelector("#BtimeStud").innerHTML = Number(80-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=50){
                document.querySelector("#BtimeStud").innerHTML = Number(50-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==13){
            if(nowMinute>40){ 
                document.querySelector("#BtimeStud").innerHTML = Number(60-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=40 && nowMinute>20){
                document.querySelector("#BtimeStud").innerHTML = Number(40-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=20){
                document.querySelector("#BtimeStud").innerHTML = Number(20-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        // else if(nowHour==12){
        //     if(nowMinute>0){ 
        //         document.querySelector("#BtimeStud").innerHTML = Number(59-nowMinute)+":"+Number(59-nowSecond);
        //     }
        // }
        else if(nowHour==11 || nowHour==12){
            if(nowMinute>40){
                if(nowMinute<=59 && nowMinute>39){
                    document.querySelector("#BtimeStud").innerHTML = Number(12-nowHour) + ":" + Number(59-nowMinute)+":"+Number(59-nowSecond);
                }
                else if(nowMinute>59){
                    document.querySelector("#BtimeStud").innerHTML = Number(119-nowMinute)+":"+Number(59-nowSecond);
                }
            }
            else if(nowMinute<=40){
                document.querySelector("#BtimeStud").innerHTML = Number(40-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==10){
            if(nowMinute>59){ 
                document.querySelector("#BtimeStud").innerHTML = Number(99-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=59 && nowMinute>39){
                document.querySelector("#BtimeStud").innerHTML = Number(59-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=39 && nowMinute>19){
                document.querySelector("#BtimeStud").innerHTML = Number(39-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=19){
                document.querySelector("#BtimeStud").innerHTML = Number(19-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==9){
            if(nowMinute>49){ 
                document.querySelector("#BtimeStud").innerHTML = Number(79-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=49){
                document.querySelector("#BtimeStud").innerHTML = Number(49-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==8){
            if(nowMinute>59){ 
                document.querySelector("#BtimeStud").innerHTML = Number(109-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=59 && nowMinute>39){
                document.querySelector("#BtimeStud").innerHTML = Number(59-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=39 && nowMinute>19){
                document.querySelector("#BtimeStud").innerHTML = Number(39-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=19){
                document.querySelector("#BtimeStud").innerHTML = Number(19-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==7){
            if(nowMinute>39){ 
                document.querySelector("#BtimeStud").innerHTML = Number(79-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowHour<=39){
                document.querySelector("#BtimeStud").innerHTML = "운행 없음";
            }
        }
    }
}

//매 초(600)마다 불러오는 함수
setInterval(function() {
    studentTimeB();
},600);