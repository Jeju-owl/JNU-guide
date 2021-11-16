// 코드 적기 전 체크리스트
// 1. 함수 이름 변경
// 2. id 이름 변경
// 3. index.html에 js파일 연동
// 4. id 이름 변경
// 5. overlay.js에 바뀐 id 이름 기입하기.

function humanEastTimeA() {
    var now = new Date();

    var nowHour = now.getHours();
    var nowMinute = now.getMinutes();
    var nowSecond = now.getSeconds();



    if(nowHour>=19 || now.getDay()==0 || now.getDay()==6 || nowHour<=6){
        document.querySelector("#AtimeHumanE").innerHTML = "운행 없음";
    }

    if(nowHour<19){
        if(nowHour==18){
            if(nowMinute>46){
                document.querySelector("#AtimeHumanE").innerHTML = "운행 없음";
            }
            else if(nowMinute<=46 && nowMinute>26){
                document.querySelector("#AtimeHumanE").innerHTML = Number(46-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=26 && nowMinute>6){
                document.querySelector("#AtimeHumanE").innerHTML = Number(26-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=6){
                document.querySelector("#AtimeHumanE").innerHTML = Number(6-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==17){
            if(nowMinute>46){
                document.querySelector("#AtimeHumanE").innerHTML = Number(66-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=46 && nowMinute>26){
                document.querySelector("#AtimeHumanE").innerHTML = Number(46-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=26 && nowMinute>6){
                document.querySelector("#AtimeHumanE").innerHTML = Number(26-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=6){
                document.querySelector("#AtimeHumanE").innerHTML = Number(6-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==16){
            if(nowMinute>36){ 
                document.querySelector("#AtimeHumanE").innerHTML = Number(66-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=36){
                document.querySelector("#AtimeHumanE").innerHTML = Number(36-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==15){
            if(nowMinute>51){ 
                document.querySelector("#AtimeHumanE").innerHTML = Number(96-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=51 && nowMinute>31){
                document.querySelector("#AtimeHumanE").innerHTML = Number(51-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=31 && nowMinute>11){
                document.querySelector("#AtimeHumanE").innerHTML = Number(31-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=11){
                document.querySelector("#AtimeHumanE").innerHTML = Number(11-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==14){
            if(nowMinute>36){ 
                document.querySelector("#AtimeHumanE").innerHTML = Number(71-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=36){
                document.querySelector("#AtimeHumanE").innerHTML = Number(36-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==13){
            if(nowMinute>51){ 
                document.querySelector("#AtimeHumanE").innerHTML = Number(96-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=51 && nowMinute>31){
                document.querySelector("#AtimeHumanE").innerHTML = Number(51-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=31 && nowMinute>11){
                document.querySelector("#AtimeHumanE").innerHTML = Number(31-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=11){
                document.querySelector("#AtimeHumanE").innerHTML = Number(11-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==12){
            if(nowMinute>46){ 
                document.querySelector("#AtimeHumanE").innerHTML = Number(71-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=46){
                document.querySelector("#AtimeHumanE").innerHTML = Number(46-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==11){
            if(nowMinute>26){
                if(nowMinute<=46 && nowMinute>26){
                    document.querySelector("#AtimeHumanE").innerHTML = Number(12-nowHour) + ":" + Number(46-nowMinute)+":"+Number(59-nowSecond);
                }
                else if(nowMinute>46){
                    document.querySelector("#AtimeHumanE").innerHTML = Number(106-nowMinute)+":"+Number(59-nowSecond);
                }
            }
            else if(nowMinute<=26){
                document.querySelector("#AtimeHumanE").innerHTML = Number(26-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==10){
            if(nowMinute>51){ 
                document.querySelector("#AtimeHumanE").innerHTML = Number(86-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=51 && nowMinute>31){
                document.querySelector("#AtimeHumanE").innerHTML = Number(51-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=31 && nowMinute>11){
                document.querySelector("#AtimeHumanE").innerHTML = Number(31-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=11){
                document.querySelector("#AtimeHumanE").innerHTML = Number(11-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==9){
            if(nowMinute>36){ 
                document.querySelector("#AtimeHumanE").innerHTML = Number(71-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=36){
                document.querySelector("#AtimeHumanE").innerHTML = Number(41-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==8){
            if(nowMinute>51){ 
                document.querySelector("#AtimeHumanE").innerHTML = Number(96-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=51 && nowMinute>31){
                document.querySelector("#AtimeHumanE").innerHTML = Number(51-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=31 && nowMinute>11){
                document.querySelector("#AtimeHumanE").innerHTML = Number(31-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=11){
                document.querySelector("#AtimeHumanE").innerHTML = Number(11-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==7){
            if(nowMinute>36){ 
                document.querySelector("#AtimeHumanE").innerHTML = Number(71-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowHour<=36){
                document.querySelector("#AtimeHumanE").innerHTML = "운행 없음";
            }
        }
    }
}

//매 초(600)마다 불러오는 함수
setInterval(function() {
    humanEastTimeA();
},600);