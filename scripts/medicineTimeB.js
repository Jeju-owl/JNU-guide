// 코드 적기 전 체크리스트
// 1. 함수 이름 변경
// 2. id 이름 변경
// 3. index.html에 js파일 연동
// 4. overlay.js에 바뀐 id 이름 기입하기.
function medicineTimeB() {
    var now = new Date();

    var nowHour = now.getHours();
    var nowMinute = now.getMinutes();
    var nowSecond = now.getSeconds();

    if(nowHour>=19 || now.getDay()==0 || now.getDay()==6 || nowHour<=6){
        document.querySelector("#BtimeMedi").innerHTML = "운행 없음";
    }

    if(nowHour<19){
        if(nowHour==18){
            if(nowMinute>55){
                document.querySelector("#BtimeMedi").innerHTML = "운행 없음";
            }
            else if(nowMinute<=55 && nowMinute>35){
                document.querySelector("#BtimeMedi").innerHTML = Number(55-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=35 && nowMinute>15){
                document.querySelector("#BtimeMedi").innerHTML = Number(35-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=15){
                document.querySelector("#BtimeMedi").innerHTML = Number(15-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==17){
            if(nowMinute>55){
                document.querySelector("#BtimeMedi").innerHTML = Number(75-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=55 && nowMinute>35){
                document.querySelector("#BtimeMedi").innerHTML = Number(55-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=35 && nowMinute>15){
                document.querySelector("#BtimeMedi").innerHTML = Number(35-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=15){
                document.querySelector("#BtimeMedi").innerHTML = Number(15-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==16){
            if(nowMinute>45){ 
                document.querySelector("#BtimeMedi").innerHTML = Number(75-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=45){
                document.querySelector("#BtimeMedi").innerHTML = Number(45-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==15){
            if(nowMinute>55){ 
                document.querySelector("#BtimeMedi").innerHTML = Number(105-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=55 && nowMinute>35){
                document.querySelector("#BtimeMedi").innerHTML = Number(55-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=35 && nowMinute>15){
                document.querySelector("#BtimeMedi").innerHTML = Number(35-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=15){
                document.querySelector("#BtimeMedi").innerHTML = Number(15-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==14){
            if(nowMinute>45){ 
                document.querySelector("#BtimeMedi").innerHTML = Number(75-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=45){
                document.querySelector("#BtimeMedi").innerHTML = Number(45-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==13){
            if(nowMinute>55){ 
                document.querySelector("#BtimeMedi").innerHTML = Number(105-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=55 && nowMinute>35){
                document.querySelector("#BtimeMedi").innerHTML = Number(55-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=35 && nowMinute>15){
                document.querySelector("#BtimeMedi").innerHTML = Number(35-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=15){
                document.querySelector("#BtimeMedi").innerHTML = Number(15-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==12){
            if(nowMinute>55){ 
                document.querySelector("#BtimeMedi").innerHTML = Number(75-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=55){
                document.querySelector("#BtimeMedi").innerHTML = Number(55-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==11){
            if(nowMinute>35){
                if(nowMinute<=55 && nowMinute>35){
                    document.querySelector("#BtimeMedi").innerHTML = Number(12-nowHour) + ":" + Number(55-nowMinute)+":"+Number(59-nowSecond);
                }
                else if(nowMinute>55){
                    document.querySelector("#BtimeMedi").innerHTML = Number(115-nowMinute)+":"+Number(59-nowSecond);
                }
            }
            else if(nowMinute<=35){
                document.querySelector("#BtimeMedi").innerHTML = Number(35-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==10){
            if(nowMinute>55){ 
                document.querySelector("#BtimeMedi").innerHTML = Number(95-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=55 && nowMinute>35){
                document.querySelector("#BtimeMedi").innerHTML = Number(55-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=35 && nowMinute>15){
                document.querySelector("#BtimeMedi").innerHTML = Number(35-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=15){
                document.querySelector("#BtimeMedi").innerHTML = Number(15-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==9){
            if(nowMinute>45){ 
                document.querySelector("#BtimeMedi").innerHTML = Number(75-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=45){
                document.querySelector("#BtimeMedi").innerHTML = Number(45-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==8){
            if(nowMinute>55){ 
                document.querySelector("#BtimeMedi").innerHTML = Number(105-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=55 && nowMinute>35){
                document.querySelector("#BtimeMedi").innerHTML = Number(55-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=35 && nowMinute>15){
                document.querySelector("#BtimeMedi").innerHTML = Number(35-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=15){
                document.querySelector("#BtimeMedi").innerHTML = Number(15-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==7){
            if(nowMinute>35){ 
                document.querySelector("#BtimeMedi").innerHTML = Number(75-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowHour<=35){
                document.querySelector("#BtimeMedi").innerHTML = "운행 없음";
            }
        }
    }
}

//매 초(600)마다 불러오는 함수
setInterval(function() {
    medicineTimeB();
},600);