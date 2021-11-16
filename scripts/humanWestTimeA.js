function humanWestTimeA() {
    var now = new Date();


    var nowHour = now.getHours();
    var nowMinute = now.getMinutes();
    var nowSecond = now.getSeconds();



    if(nowHour>=19 || now.getDay()==0 || now.getDay()==6 || nowHour<=6){
        document.querySelector("#AtimeHumanW").innerHTML = "운행 없음";
    }

    if(nowHour<19){
        if(nowHour==18){
            if(nowMinute>45){
                document.querySelector("#AtimeHumanW").innerHTML = "운행 없음";
            }
            else if(nowMinute<=45 && nowMinute>25){
                document.querySelector("#AtimeHumanW").innerHTML = Number(45-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=25 && nowMinute>5){
                document.querySelector("#AtimeHumanW").innerHTML = Number(25-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=5){
                document.querySelector("#AtimeHumanW").innerHTML = Number(5-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==17){
            if(nowMinute>45){
                document.querySelector("#AtimeHumanW").innerHTML = Number(65-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=45 && nowMinute>25){
                document.querySelector("#AtimeHumanW").innerHTML = Number(45-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=25 && nowMinute>5){
                document.querySelector("#AtimeHumanW").innerHTML = Number(25-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=5){
                document.querySelector("#AtimeHumanW").innerHTML = Number(5-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==16){
            if(nowMinute>35){ 
                document.querySelector("#AtimeHumanW").innerHTML = Number(65-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=35){
                document.querySelector("#AtimeHumanW").innerHTML = Number(35-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==15){
            if(nowMinute>50){ 
                document.querySelector("#AtimeHumanW").innerHTML = Number(95-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=50 && nowMinute>30){
                document.querySelector("#AtimeHumanW").innerHTML = Number(50-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=30 && nowMinute>10){
                document.querySelector("#AtimeHumanW").innerHTML = Number(30-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=10){
                document.querySelector("#AtimeHumanW").innerHTML = Number(10-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==14){
            if(nowMinute>35){ 
                document.querySelector("#AtimeHumanW").innerHTML = Number(70-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=35){
                document.querySelector("#AtimeHumanW").innerHTML = Number(35-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==13){
            if(nowMinute>50){ 
                document.querySelector("#AtimeHumanW").innerHTML = Number(95-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=50 && nowMinute>30){
                document.querySelector("#AtimeHumanW").innerHTML = Number(50-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=30 && nowMinute>10){
                document.querySelector("#AtimeHumanW").innerHTML = Number(30-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=10){
                document.querySelector("#AtimeHumanW").innerHTML = Number(10-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==12){
            if(nowMinute>45){ 
                document.querySelector("#AtimeHumanW").innerHTML = Number(70-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=45){
                document.querySelector("#AtimeHumanW").innerHTML = Number(45-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==11){
            if(nowMinute>25){
                if(nowMinute<=45 && nowMinute>25){
                    document.querySelector("#AtimeHumanW").innerHTML = Number(12-nowHour) + ":" + Number(45-nowMinute)+":"+Number(59-nowSecond);
                }
                else if(nowMinute>45){
                    document.querySelector("#AtimeHumanW").innerHTML = Number(105-nowMinute)+":"+Number(59-nowSecond);
                }
            }
            else if(nowMinute<=25){
                document.querySelector("#AtimeHumanW").innerHTML = Number(25-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==10){
            if(nowMinute>50){ 
                document.querySelector("#AtimeHumanW").innerHTML = Number(85-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=50 && nowMinute>30){
                document.querySelector("#AtimeHumanW").innerHTML = Number(50-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=30 && nowMinute>10){
                document.querySelector("#AtimeHumanW").innerHTML = Number(30-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=10){
                document.querySelector("#AtimeHumanW").innerHTML = Number(10-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==9){
            if(nowMinute>35){ 
                document.querySelector("#AtimeHumanW").innerHTML = Number(70-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=35){
                document.querySelector("#AtimeHumanW").innerHTML = Number(40-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==8){
            if(nowMinute>50){ 
                document.querySelector("#AtimeHumanW").innerHTML = Number(95-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=50 && nowMinute>30){
                document.querySelector("#AtimeHumanW").innerHTML = Number(50-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=30 && nowMinute>10){
                document.querySelector("#AtimeHumanW").innerHTML = Number(30-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=10){
                document.querySelector("#AtimeHumanW").innerHTML = Number(10-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==7){
            if(nowMinute>35){ 
                document.querySelector("#AtimeHumanW").innerHTML = Number(70-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowHour<=35){
                document.querySelector("#AtimeHumanW").innerHTML = "운행 없음";
            }
        }
    }
}

//매 초(600)마다 불러오는 함수
setInterval(function() {
    humanWestTimeA();
},600);