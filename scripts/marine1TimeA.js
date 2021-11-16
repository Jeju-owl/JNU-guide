function marine1TimeA() {
    var now = new Date();


    var nowHour = now.getHours();
    var nowMinute = now.getMinutes();
    var nowSecond = now.getSeconds();



    if(nowHour>=19 || now.getDay()==0 || now.getDay()==6 || nowHour<=6){
        document.querySelector("#AtimeMarine1").innerHTML = "운행 없음";
    }

    if(nowHour<19){
        if(nowHour==18){
            if(nowMinute>42){
                document.querySelector("#AtimeMarine1").innerHTML = "운행 없음";
            }
            else if(nowMinute<=42 && nowMinute>22){
                document.querySelector("#AtimeMarine1").innerHTML = Number(42-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=22 && nowMinute>2){
                document.querySelector("#AtimeMarine1").innerHTML = Number(22-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=2){
                document.querySelector("#AtimeMarine1").innerHTML = Number(2-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==17){
            if(nowMinute>42){
                document.querySelector("#AtimeMarine1").innerHTML = Number(62-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=42 && nowMinute>22){
                document.querySelector("#AtimeMarine1").innerHTML = Number(42-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=22 && nowMinute>2){
                document.querySelector("#AtimeMarine1").innerHTML = Number(22-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=2){
                document.querySelector("#AtimeMarine1").innerHTML = Number(2-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==16){
            if(nowMinute>32){ 
                document.querySelector("#AtimeMarine1").innerHTML = Number(62-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=32){
                document.querySelector("#AtimeMarine1").innerHTML = Number(32-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==15){
            if(nowMinute>47){ 
                document.querySelector("#AtimeMarine1").innerHTML = Number(92-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=47 && nowMinute>27){
                document.querySelector("#AtimeMarine1").innerHTML = Number(47-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=27 && nowMinute>7){
                document.querySelector("#AtimeMarine1").innerHTML = Number(27-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=7){
                document.querySelector("#AtimeMarine1").innerHTML = Number(7-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==14){
            if(nowMinute>32){ 
                document.querySelector("#AtimeMarine1").innerHTML = Number(67-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=32){
                document.querySelector("#AtimeMarine1").innerHTML = Number(32-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==13){
            if(nowMinute>47){ 
                document.querySelector("#AtimeMarine1").innerHTML = Number(92-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=47 && nowMinute>27){
                document.querySelector("#AtimeMarine1").innerHTML = Number(47-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=27 && nowMinute>7){
                document.querySelector("#AtimeMarine1").innerHTML = Number(27-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=7){
                document.querySelector("#AtimeMarine1").innerHTML = Number(7-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==12){
            if(nowMinute>42){ 
                document.querySelector("#AtimeMarine1").innerHTML = Number(67-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=42){
                document.querySelector("#AtimeMarine1").innerHTML = Number(42-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==11){
            if(nowMinute>22){
                if(nowMinute<=42 && nowMinute>22){
                    document.querySelector("#AtimeMarine1").innerHTML = Number(12-nowHour) + ":" + Number(42-nowMinute)+":"+Number(59-nowSecond);
                }
                else if(nowMinute>42){
                    document.querySelector("#AtimeMarine1").innerHTML = Number(102-nowMinute)+":"+Number(59-nowSecond);
                }
            }
            else if(nowMinute<=22){
                document.querySelector("#AtimeMarine1").innerHTML = Number(22-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==10){
            if(nowMinute>47){ 
                document.querySelector("#AtimeMarine1").innerHTML = Number(82-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=47 && nowMinute>27){
                document.querySelector("#AtimeMarine1").innerHTML = Number(47-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=27 && nowMinute>7){
                document.querySelector("#AtimeMarine1").innerHTML = Number(27-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=7){
                document.querySelector("#AtimeMarine1").innerHTML = Number(7-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==9){
            if(nowMinute>32){ 
                document.querySelector("#AtimeMarine1").innerHTML = Number(67-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=32){
                document.querySelector("#AtimeMarine1").innerHTML = Number(37-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==8){
            if(nowMinute>47){ 
                document.querySelector("#AtimeMarine1").innerHTML = Number(92-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=47 && nowMinute>27){
                document.querySelector("#AtimeMarine1").innerHTML = Number(47-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=27 && nowMinute>7){
                document.querySelector("#AtimeMarine1").innerHTML = Number(27-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=7){
                document.querySelector("#AtimeMarine1").innerHTML = Number(7-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==7){
            if(nowMinute>32){ 
                document.querySelector("#AtimeMarine1").innerHTML = Number(67-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowHour<=32){
                document.querySelector("#AtimeMarine1").innerHTML = "운행 없음";
            }
        }
    }
}

//매 초(600)마다 불러오는 함수
// setInterval(function() {
//     marine1TimeA();
// },600);