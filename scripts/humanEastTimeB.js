// 코드 적기 전 체크리스트
// 1. 함수 이름 변경
// 2. id 이름 변경
// 3. index.html에 js파일 연동
// 4. overlay.js에 바뀐 id 이름 기입하기.
function humanEastTimeB() {
    var now = new Date();

    var nowHour = now.getHours();
    var nowMinute = now.getMinutes();
    var nowSecond = now.getSeconds();

    if(nowHour>=19 || now.getDay()==0 || now.getDay()==6 || nowHour<=6){
        document.querySelector("#BtimeHumanE").innerHTML = "운행 없음";
    }

    else if(nowHour<19){
        if(nowHour==18){
            if(nowMinute>57){
                document.querySelector("#BtimeHumanE").innerHTML = "운행 없음";
            }
            else if(nowMinute<=57 && nowMinute>37){
                document.querySelector("#BtimeHumanE").innerHTML = Number(57-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=37 && nowMinute>17){
                document.querySelector("#BtimeHumanE").innerHTML = Number(37-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=17){
                document.querySelector("#BtimeHumanE").innerHTML = Number(17-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==17){
            if(nowMinute>57){
                document.querySelector("#BtimeHumanE").innerHTML = Number(77-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=57 && nowMinute>37){
                document.querySelector("#BtimeHumanE").innerHTML = Number(57-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=37 && nowMinute>17){
                document.querySelector("#BtimeHumanE").innerHTML = Number(37-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=17){
                document.querySelector("#BtimeHumanE").innerHTML = Number(17-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==16){
            if(nowMinute>47){ 
                document.querySelector("#BtimeHumanE").innerHTML = Number(77-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=47){
                document.querySelector("#BtimeHumanE").innerHTML = Number(47-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==15){
            if(nowMinute>57){ 
                document.querySelector("#BtimeHumanE").innerHTML = Number(107-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=57 && nowMinute>37){
                document.querySelector("#BtimeHumanE").innerHTML = Number(57-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=37 && nowMinute>17){
                document.querySelector("#BtimeHumanE").innerHTML = Number(37-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=17){
                document.querySelector("#BtimeHumanE").innerHTML = Number(17-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==14){
            if(nowMinute>47){ 
                document.querySelector("#BtimeHumanE").innerHTML = Number(77-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=47){
                document.querySelector("#BtimeHumanE").innerHTML = Number(47-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==13){
            if(nowMinute>57){ 
                document.querySelector("#BtimeHumanE").innerHTML = Number(107-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=57 && nowMinute>37){
                document.querySelector("#BtimeHumanE").innerHTML = Number(57-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=37 && nowMinute>17){
                document.querySelector("#BtimeHumanE").innerHTML = Number(37-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=17){
                document.querySelector("#BtimeHumanE").innerHTML = Number(17-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==12){
            if(nowMinute>57){ 
                document.querySelector("#BtimeHumanE").innerHTML = Number(77-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=57){
                document.querySelector("#BtimeHumanE").innerHTML = Number(57-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==11){
            if(nowMinute>37){
                if(nowMinute<=57 && nowMinute>37){
                    document.querySelector("#BtimeHumanE").innerHTML = Number(12-nowHour) + ":" + Number(57-nowMinute)+":"+Number(59-nowSecond);
                }
                else if(nowMinute>57){
                    document.querySelector("#BtimeHumanE").innerHTML = Number(117-nowMinute)+":"+Number(59-nowSecond);
                }
            }
            else if(nowMinute<=37){
                document.querySelector("#BtimeHumanE").innerHTML = Number(37-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==10){
            if(nowMinute>57){ 
                document.querySelector("#BtimeHumanE").innerHTML = Number(97-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=57 && nowMinute>37){
                document.querySelector("#BtimeHumanE").innerHTML = Number(57-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=37 && nowMinute>17){
                document.querySelector("#BtimeHumanE").innerHTML = Number(37-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=17){
                document.querySelector("#BtimeHumanE").innerHTML = Number(17-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==9){
            if(nowMinute>47){ 
                document.querySelector("#BtimeHumanE").innerHTML = Number(77-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=47){
                document.querySelector("#BtimeHumanE").innerHTML = Number(47-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==8){
            if(nowMinute>57){ 
                document.querySelector("#BtimeHumanE").innerHTML = Number(107-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=57 && nowMinute>37){
                document.querySelector("#BtimeHumanE").innerHTML = Number(57-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=37 && nowMinute>17){
                document.querySelector("#BtimeHumanE").innerHTML = Number(37-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=17){
                document.querySelector("#BtimeHumanE").innerHTML = Number(17-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==7){
            if(nowMinute>37){ 
                document.querySelector("#BtimeHumanE").innerHTML = Number(77-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowHour<=37){
                document.querySelector("#BtimeHumanE").innerHTML = "운행 없음";
            }
        }
    }
}

//매 초(600)마다 불러오는 함수
setInterval(function() {
    humanEastTimeB();
},600);