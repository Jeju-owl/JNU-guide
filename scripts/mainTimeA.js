function mainTimeA() {
    var now = new Date();


    var nowHour = now.getHours();
    var nowMinute = now.getMinutes();
    var nowSecond = now.getSeconds();



    if(nowHour>=19 || now.getDay()==0 || now.getDay()==6 || nowHour<=6){
        document.querySelector("#Atime").innerHTML = "운행 없음";
    }

    if(nowHour<19){
        if(nowHour==18){
            if(nowMinute>43){
                document.querySelector("#Atime").innerHTML = "운행 없음";
            }
            else if(nowMinute<=43 && nowMinute>23){
                document.querySelector("#Atime").innerHTML = Number(43-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=23 && nowMinute>3){
                document.querySelector("#Atime").innerHTML = Number(23-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=3){
                document.querySelector("#Atime").innerHTML = Number(3-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==17){
            if(nowMinute>43){
                document.querySelector("#Atime").innerHTML = Number(63-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=43 && nowMinute>23){
                document.querySelector("#Atime").innerHTML = Number(43-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=23 && nowMinute>3){
                document.querySelector("#Atime").innerHTML = Number(23-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=3){
                document.querySelector("#Atime").innerHTML = Number(3-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==16){
            if(nowMinute>33){ 
                document.querySelector("#Atime").innerHTML = Number(63-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=33){
                document.querySelector("#Atime").innerHTML = Number(33-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==15){
            if(nowMinute>48){ 
                document.querySelector("#Atime").innerHTML = Number(93-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=48 && nowMinute>28){
                document.querySelector("#Atime").innerHTML = Number(48-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=28 && nowMinute>8){
                document.querySelector("#Atime").innerHTML = Number(28-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=8){
                document.querySelector("#Atime").innerHTML = Number(8-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==14){
            if(nowMinute>33){ 
                document.querySelector("#Atime").innerHTML = Number(68-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=33){
                document.querySelector("#Atime").innerHTML = Number(33-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==13){
            if(nowMinute>48){ 
                document.querySelector("#Atime").innerHTML = Number(93-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=48 && nowMinute>28){
                document.querySelector("#Atime").innerHTML = Number(48-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=28 && nowMinute>8){
                document.querySelector("#Atime").innerHTML = Number(28-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=8){
                document.querySelector("#Atime").innerHTML = Number(8-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==12){
            if(nowMinute>43){ 
                document.querySelector("#Atime").innerHTML = Number(68-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=43){
                document.querySelector("#Atime").innerHTML = Number(43-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==11){
            if(nowMinute>23){
                if(nowMinute<=43 && nowMinute>23){
                    document.querySelector("#Atime").innerHTML = Number(12-nowHour) + ":" + Number(43-nowMinute)+":"+Number(59-nowSecond);
                }
                else if(nowMinute>43){
                    document.querySelector("#Atime").innerHTML = Number(103-nowMinute)+":"+Number(59-nowSecond);
                }
            }
            else if(nowMinute<=23){
                document.querySelector("#Atime").innerHTML = Number(23-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==10){
            if(nowMinute>48){ 
                document.querySelector("#Atime").innerHTML = Number(83-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=48 && nowMinute>28){
                document.querySelector("#Atime").innerHTML = Number(48-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=28 && nowMinute>8){
                document.querySelector("#Atime").innerHTML = Number(28-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=8){
                document.querySelector("#Atime").innerHTML = Number(8-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==9){
            if(nowMinute>33){ 
                document.querySelector("#Atime").innerHTML = Number(68-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=33){
                document.querySelector("#Atime").innerHTML = Number(38-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==8){
            if(nowMinute>48){ 
                document.querySelector("#Atime").innerHTML = Number(93-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=48 && nowMinute>28){
                document.querySelector("#Atime").innerHTML = Number(48-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=28 && nowMinute>8){
                document.querySelector("#Atime").innerHTML = Number(28-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=8){
                document.querySelector("#Atime").innerHTML = Number(8-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==7){
            if(nowMinute>33){ 
                document.querySelector("#Atime").innerHTML = Number(68-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowHour<=33){
                document.querySelector("#Atime").innerHTML = "운행 없음";
            }
        }
    }
}

//매 초(600)마다 불러오는 함수
setInterval(function() {
    mainTimeA();
},600);