function studentTimeA() {
    var now = new Date();


    var nowHour = now.getHours();
    var nowMinute = now.getMinutes();
    var nowSecond = now.getSeconds();



    if(nowHour>=19 || now.getDay()==0 || now.getDay()==6 || nowHour<=6){
        document.querySelector("#Atime").innerHTML = "운행 없음";
    }

    if(nowHour<19){
        if(nowHour==18){
            if(nowMinute>44){
                document.querySelector("#Atime").innerHTML = "운행 없음";
            }
            else if(nowMinute<=44 && nowMinute>24){
                document.querySelector("#Atime").innerHTML = Number(44-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=24 && nowMinute>4){
                document.querySelector("#Atime").innerHTML = Number(24-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=4){
                document.querySelector("#Atime").innerHTML = Number(4-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==17){
            if(nowMinute>44){
                document.querySelector("#Atime").innerHTML = Number(64-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=44 && nowMinute>24){
                document.querySelector("#Atime").innerHTML = Number(44-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=24 && nowMinute>4){
                document.querySelector("#Atime").innerHTML = Number(24-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=4){
                document.querySelector("#Atime").innerHTML = Number(4-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==16){
            if(nowMinute>34){ 
                document.querySelector("#Atime").innerHTML = Number(64-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=34){
                document.querySelector("#Atime").innerHTML = Number(34-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==15){
            if(nowMinute>49){ 
                document.querySelector("#Atime").innerHTML = Number(94-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=49 && nowMinute>29){
                document.querySelector("#Atime").innerHTML = Number(49-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=29 && nowMinute>9){
                document.querySelector("#Atime").innerHTML = Number(29-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=9){
                document.querySelector("#Atime").innerHTML = Number(9-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==14){
            if(nowMinute>34){ 
                document.querySelector("#Atime").innerHTML = Number(69-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=34){
                document.querySelector("#Atime").innerHTML = Number(34-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==13){
            if(nowMinute>49){ 
                document.querySelector("#Atime").innerHTML = Number(94-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=49 && nowMinute>29){
                document.querySelector("#Atime").innerHTML = Number(49-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=29 && nowMinute>9){
                document.querySelector("#Atime").innerHTML = Number(29-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=9){
                document.querySelector("#Atime").innerHTML = Number(9-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==12){
            if(nowMinute>44){ 
                document.querySelector("#Atime").innerHTML = Number(69-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=44){
                document.querySelector("#Atime").innerHTML = Number(44-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==11){
            if(nowMinute>24){
                if(nowMinute<=44 && nowMinute>24){
                    document.querySelector("#Atime").innerHTML = Number(12-nowHour) + ":" + Number(44-nowMinute)+":"+Number(59-nowSecond);
                }
                else if(nowMinute>44){
                    document.querySelector("#Atime").innerHTML = Number(104-nowMinute)+":"+Number(59-nowSecond);
                }
            }
            else if(nowMinute<=24){
                document.querySelector("#Atime").innerHTML = Number(24-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==10){
            if(nowMinute>49){ 
                document.querySelector("#Atime").innerHTML = Number(83-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=49 && nowMinute>29){
                document.querySelector("#Atime").innerHTML = Number(49-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=29 && nowMinute>9){
                document.querySelector("#Atime").innerHTML = Number(29-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=9){
                document.querySelector("#Atime").innerHTML = Number(9-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==9){
            if(nowMinute>34){ 
                document.querySelector("#Atime").innerHTML = Number(69-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=34){
                document.querySelector("#Atime").innerHTML = Number(39-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==8){
            if(nowMinute>49){ 
                document.querySelector("#Atime").innerHTML = Number(94-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=49 && nowMinute>29){
                document.querySelector("#Atime").innerHTML = Number(49-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=29 && nowMinute>9){
                document.querySelector("#Atime").innerHTML = Number(29-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=9){
                document.querySelector("#Atime").innerHTML = Number(9-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==7){
            if(nowMinute>34){ 
                document.querySelector("#Atime").innerHTML = Number(69-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowHour<=34){
                document.querySelector("#Atime").innerHTML = "운행 없음";
            }
        }
    }
}

//매 초(600)마다 불러오는 함수
setInterval(function() {
    studentTimeA();
},600);