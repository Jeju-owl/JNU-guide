// 코드 적기 전 체크리스트
// 1. 함수 이름 변경
// 2. id 이름 변경
// 3. index.html에 js파일 연동
// 4. overlay.js에 바뀐 id 이름 기입하기.

function marine4TimeA() {
    var now = new Date();

    var nowHour = now.getHours();
    var nowMinute = now.getMinutes();
    var nowSecond = now.getSeconds();

    if(nowHour>=19 || now.getDay()==0 || now.getDay()==6 || nowHour<=6){
        document.querySelector("#AtimeMarine4").innerHTML = "운행 없음";
    }

    else if(nowHour<19){
        if(nowHour==18){
            if(nowMinute>51){
                document.querySelector("#AtimeMarine4").innerHTML = "운행 없음";
            }
            else if(nowMinute<=51 && nowMinute>31){
                document.querySelector("#AtimeMarine4").innerHTML = Number(51-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=31 && nowMinute>11){
                document.querySelector("#AtimeMarine4").innerHTML = Number(31-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=11){
                document.querySelector("#AtimeMarine4").innerHTML = Number(11-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==17){
            if(nowMinute>51){
                document.querySelector("#AtimeMarine4").innerHTML = Number(71-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=51 && nowMinute>31){
                document.querySelector("#AtimeMarine4").innerHTML = Number(51-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=31 && nowMinute>11){
                document.querySelector("#AtimeMarine4").innerHTML = Number(31-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=11){
                document.querySelector("#AtimeMarine4").innerHTML = Number(11-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==16){
            if(nowMinute>41){ 
                document.querySelector("#AtimeMarine4").innerHTML = Number(71-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=41){
                document.querySelector("#AtimeMarine4").innerHTML = Number(41-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==15){
            if(nowMinute>56){ 
                document.querySelector("#AtimeMarine4").innerHTML = Number(101-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=56 && nowMinute>36){
                document.querySelector("#AtimeMarine4").innerHTML = Number(56-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=36 && nowMinute>16){
                document.querySelector("#AtimeMarine4").innerHTML = Number(36-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=16){
                document.querySelector("#AtimeMarine4").innerHTML = Number(16-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==14){
            if(nowMinute>41){ 
                document.querySelector("#AtimeMarine4").innerHTML = Number(76-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=41){
                document.querySelector("#AtimeMarine4").innerHTML = Number(41-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==13){
            if(nowMinute>56){ 
                document.querySelector("#AtimeMarine4").innerHTML = Number(101-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=56 && nowMinute>36){
                document.querySelector("#AtimeMarine4").innerHTML = Number(56-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=36 && nowMinute>16){
                document.querySelector("#AtimeMarine4").innerHTML = Number(36-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=16){
                document.querySelector("#AtimeMarine4").innerHTML = Number(16-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==12){
            if(nowMinute>51){ 
                document.querySelector("#AtimeMarine4").innerHTML = Number(76-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=51){
                document.querySelector("#AtimeMarine4").innerHTML = Number(51-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==11){
            if(nowMinute>31){
                if(nowMinute<=51 && nowMinute>31){
                    document.querySelector("#AtimeMarine4").innerHTML = Number(12-nowHour) + ":" + Number(51-nowMinute)+":"+Number(59-nowSecond);
                }
                else if(nowMinute>51){
                    document.querySelector("#AtimeMarine4").innerHTML = Number(111-nowMinute)+":"+Number(59-nowSecond);
                }
            }
            else if(nowMinute<=31){
                document.querySelector("#AtimeMarine4").innerHTML = Number(30-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==10){
            if(nowMinute>56){ 
                document.querySelector("#AtimeMarine4").innerHTML = Number(91-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=56 && nowMinute>36){
                document.querySelector("#AtimeMarine4").innerHTML = Number(56-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=36 && nowMinute>16){
                document.querySelector("#AtimeMarine4").innerHTML = Number(36-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=16){
                document.querySelector("#AtimeMarine4").innerHTML = Number(16-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==9){
            if(nowMinute>41){ 
                document.querySelector("#AtimeMarine4").innerHTML = Number(76-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=41){
                document.querySelector("#AtimeMarine4").innerHTML = Number(46-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==8){
            if(nowMinute>56){ 
                document.querySelector("#AtimeMarine4").innerHTML = Number(101-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=56 && nowMinute>36){
                document.querySelector("#AtimeMarine4").innerHTML = Number(56-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=36 && nowMinute>16){
                document.querySelector("#AtimeMarine4").innerHTML = Number(36-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=16){
                document.querySelector("#AtimeMarine4").innerHTML = Number(16-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==7){
            if(nowMinute>41){ 
                document.querySelector("#AtimeMarine4").innerHTML = Number(76-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowHour<=41){
                document.querySelector("#AtimeMarine4").innerHTML = "운행 없음";
            }
        }
    }
}

//매 초(600)마다 불러오는 함수
setInterval(function() {
    marine4TimeA();
},600);