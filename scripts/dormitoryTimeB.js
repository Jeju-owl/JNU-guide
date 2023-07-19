// 코드 적기 전 체크리스트
// 1. 함수 이름 변경
// 2. id 이름 변경
// 3. index.html에 js파일 연동
// 4. overlay.js에 바뀐 id 이름 기입하기.
function dormitoryTimeB() {
    if(document.querySelector("#AtimeDrom")?.innerHTML === undefined) return;
    var now = new Date();

    var nowHour = now.getHours();
    var nowMinute = now.getMinutes();
    var nowSecond = now.getSeconds();

    if(nowHour>=19 || now.getDay()==0 || now.getDay()==6 || nowHour<=6){
        document.querySelector("#BtimeDrom").innerHTML = "운행 없음";
    }

    else if(nowHour<19){
        if(nowHour==18){
            if(nowMinute>58){
                document.querySelector("#BtimeDrom").innerHTML = "운행 없음";
            }
            else if(nowMinute<=58 && nowMinute>38){
                document.querySelector("#BtimeDrom").innerHTML = Number(58-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=38 && nowMinute>18){
                document.querySelector("#BtimeDrom").innerHTML = Number(38-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=18){
                document.querySelector("#BtimeDrom").innerHTML = Number(18-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==17){
            if(nowMinute>58){
                document.querySelector("#BtimeDrom").innerHTML = Number(78-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=58 && nowMinute>38){
                document.querySelector("#BtimeDrom").innerHTML = Number(58-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=38 && nowMinute>18){
                document.querySelector("#BtimeDrom").innerHTML = Number(38-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=18){
                document.querySelector("#BtimeDrom").innerHTML = Number(18-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==16){
            if(nowMinute>48){ 
                document.querySelector("#BtimeDrom").innerHTML = Number(78-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=48){
                document.querySelector("#BtimeDrom").innerHTML = Number(48-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==15){
            if(nowMinute>58){ 
                document.querySelector("#BtimeDrom").innerHTML = Number(108-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=58 && nowMinute>38){
                document.querySelector("#BtimeDrom").innerHTML = Number(58-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=38 && nowMinute>18){
                document.querySelector("#BtimeDrom").innerHTML = Number(38-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=18){
                document.querySelector("#BtimeDrom").innerHTML = Number(18-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==14){
            if(nowMinute>48){ 
                document.querySelector("#BtimeDrom").innerHTML = Number(78-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=48){
                document.querySelector("#BtimeDrom").innerHTML = Number(48-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==13){
            if(nowMinute>58){ 
                document.querySelector("#BtimeDrom").innerHTML = Number(108-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=58 && nowMinute>38){
                document.querySelector("#BtimeDrom").innerHTML = Number(58-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=38 && nowMinute>18){
                document.querySelector("#BtimeDrom").innerHTML = Number(38-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=18){
                document.querySelector("#BtimeDrom").innerHTML = Number(18-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==12){
            if(nowMinute>58){ 
                document.querySelector("#BtimeDrom").innerHTML = Number(78-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=58){
                document.querySelector("#BtimeDrom").innerHTML = Number(58-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==11){
            if(nowMinute>38){
                if(nowMinute<=58 && nowMinute>38){
                    document.querySelector("#BtimeDrom").innerHTML = Number(12-nowHour) + ":" + Number(58-nowMinute)+":"+Number(59-nowSecond);
                }
                else if(nowMinute>58){
                    document.querySelector("#BtimeDrom").innerHTML = Number(118-nowMinute)+":"+Number(59-nowSecond);
                }
            }
            else if(nowMinute<=38){
                document.querySelector("#BtimeDrom").innerHTML = Number(38-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==10){
            if(nowMinute>58){ 
                document.querySelector("#BtimeDrom").innerHTML = Number(98-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=58 && nowMinute>38){
                document.querySelector("#BtimeDrom").innerHTML = Number(58-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=38 && nowMinute>18){
                document.querySelector("#BtimeDrom").innerHTML = Number(38-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=18){
                document.querySelector("#BtimeDrom").innerHTML = Number(18-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==9){
            if(nowMinute>48){ 
                document.querySelector("#BtimeDrom").innerHTML = Number(78-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=48){
                document.querySelector("#BtimeDrom").innerHTML = Number(48-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==8){
            if(nowMinute>58){ 
                document.querySelector("#BtimeDrom").innerHTML = Number(108-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=58 && nowMinute>38){
                document.querySelector("#BtimeDrom").innerHTML = Number(58-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=38 && nowMinute>18){
                document.querySelector("#BtimeDrom").innerHTML = Number(38-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=18){
                document.querySelector("#BtimeDrom").innerHTML = Number(18-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==7){
            if(nowMinute>38){ 
                document.querySelector("#BtimeDrom").innerHTML = Number(78-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowHour<=38){
                document.querySelector("#BtimeDrom").innerHTML = "운행 없음";
            }
        }
    }
}

//매 초(600)마다 불러오는 함수
setInterval(function() {
    dormitoryTimeB();
},600);
