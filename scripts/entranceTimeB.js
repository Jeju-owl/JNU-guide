function entranceTimeB() {
    var now = new Date();


    var nowHour = now.getHours();
    var nowMinute = now.getMinutes();
    var nowSecond = now.getSeconds();



    if(nowHour>=19 || now.getDay()==0 || now.getDay()==6 || nowHour<=6){
        document.querySelector("#Atime").innerHTML = "운행 없음";
    }

    if(nowHour<19){
        if(nowHour==18){
            if(nowMinute>50){
                document.querySelector("#Atime").innerHTML = "운행 없음";
            }
            else if(nowMinute<=50 && nowMinute>30){
                document.querySelector("#Atime").innerHTML = Number(50-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=30 && nowMinute>10){
                document.querySelector("#Atime").innerHTML = Number(30-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=10){
                document.querySelector("#Atime").innerHTML = Number(10-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==17){
            if(nowMinute>50){
                document.querySelector("#Atime").innerHTML = Number(70-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=30 && nowMinute>50){
                document.querySelector("#Atime").innerHTML = Number(30-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=10){
                document.querySelector("#Atime").innerHTML = Number(10-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==16){
            if(nowMinute>40){ 
                document.querySelector("#Atime").innerHTML = Number(70-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=40){
                document.querySelector("#Atime").innerHTML = Number(40-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==15){
            if(nowMinute>50){ 
                document.querySelector("#Atime").innerHTML = Number(100-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=50 && nowMinute>30){
                document.querySelector("#Atime").innerHTML = Number(50-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=30 && nowMinute>10){
                document.querySelector("#Atime").innerHTML = Number(30-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=10){
                document.querySelector("#Atime").innerHTML = Number(10-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==14){
            if(nowMinute>40){ 
                document.querySelector("#Atime").innerHTML = Number(70-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=40){
                document.querySelector("#Atime").innerHTML = Number(40-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==13){
            if(nowMinute>50){ 
                document.querySelector("#Atime").innerHTML = Number(100-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=50 && nowMinute>30){
                document.querySelector("#Atime").innerHTML = Number(50-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=30 && nowMinute>10){
                document.querySelector("#Atime").innerHTML = Number(30-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=10){
                document.querySelector("#Atime").innerHTML = Number(10-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==12){
            if(nowMinute>50){ 
                document.querySelector("#Atime").innerHTML = Number(70-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=50){
                document.querySelector("#Atime").innerHTML = Number(50-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==11){
            if(nowMinute>30){
                if(nowMinute<=50 && nowMinute>30){
                    document.querySelector("#Atime").innerHTML = Number(12-nowHour) + ":" + Number(50-nowMinute)+":"+Number(59-nowSecond);
                }
                else if(nowMinute>50){
                    document.querySelector("#Atime").innerHTML = Number(110-nowMinute)+":"+Number(59-nowSecond);
                }
            }
            else if(nowMinute<=30){
                document.querySelector("#Atime").innerHTML = Number(30-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==10){
            if(nowMinute>50){ 
                document.querySelector("#Atime").innerHTML = Number(90-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=50 && nowMinute>30){
                document.querySelector("#Atime").innerHTML = Number(50-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=30 && nowMinute>10){
                document.querySelector("#Atime").innerHTML = Number(30-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=10){
                document.querySelector("#Atime").innerHTML = Number(10-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==9){
            if(nowMinute>40){ 
                document.querySelector("#Atime").innerHTML = Number(70-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=40){
                document.querySelector("#Atime").innerHTML = Number(40-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==8){
            if(nowMinute>50){ 
                document.querySelector("#Atime").innerHTML = Number(100-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=50 && nowMinute>30){
                document.querySelector("#Atime").innerHTML = Number(50-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=30 && nowMinute>10){
                document.querySelector("#Atime").innerHTML = Number(30-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowMinute<=10){
                document.querySelector("#Atime").innerHTML = Number(10-nowMinute)+":"+Number(59-nowSecond);
            }
        }
        else if(nowHour==7){
            if(nowMinute>30){ 
                document.querySelector("#Atime").innerHTML = Number(70-nowMinute)+":"+Number(59-nowSecond);
            }
            else if(nowHour<=30){
                document.querySelector("#Atime").innerHTML = "운행 없음";
            }
        }
    }
}

// //매 초(600)마다 불러오는 함수
// setInterval(function() {
//     entranceTimeB();
// },600);