
function entranceTimeA() {
    var now = new Date();


    var nowHour = now.getHours();
    var nowMinute = now.getMinutes();
    var nowSecond = now.getSeconds();



    if(nowHour>=19 || now.getDay()==0 || now.getDay()==6){
        console.log("운행 없음");
    }

    if(nowHour<19){
        if(nowHour<=18){
            if(nowMinute>40){
                console.log("운행 없음");
            }
            else if(nowMinute<=40){
                console.log(40-nowMinute,":", 59-nowSecond);
            }
            else if(nowMinute<=20){
                console.log(20-nowMinute,":", 59-nowSecond);
            }
        }
        else if(nowHour<=17){
            if(nowMinute>40){
                console.log(60-nowMinute,":", 59-nowSecond);
            }
            else if(nowMinute<=40){
                console.log(40-nowMinute,":", 59-nowSecond);
            }
            else if(nowMinute<=20){
                console.log(20-nowMinute,":", 59-nowSecond);
            }
        }
        else if(nowHour<=16){
            if(nowMinute>30){ 
                console.log(60-nowMinute,":", 59-nowSecond);
            }
            else if(nowMinute<=30){
                console.log(30-nowMinute,":", 59-nowSecond);
            }
        }
        else if(nowHour<=15){
            if(nowMinute>45){ 
                console.log(60-nowMinute,":", 59-nowSecond);
            }
            else if(nowMinute<=45){
                console.log(45-nowMinute,":", 59-nowSecond);
            }
            else if(nowMinute<=25){
                console.log(25-nowMinute,":", 59-nowSecond);
            }
            else if(nowMinute<=5){
                console.log(5-nowMinute,":", 59-nowSecond);
            }
        }
        else if(nowHour<=14){
            if(nowMinute>30){ 
                console.log(60-nowMinute,":", 59-nowSecond);
            }
            else if(nowMinute<=30){
                console.log(30-nowMinute,":", 59-nowSecond);
            }
        }
        else if(nowHour<=13){
            if(nowMinute>45){ 
                console.log(60-nowMinute,":", 59-nowSecond);
            }
            else if(nowMinute<=45){
                console.log(45-nowMinute,":", 59-nowSecond);
            }
            else if(nowMinute<=25){
                console.log(25-nowMinute,":", 59-nowSecond);
            }
            else if(nowMinute<=5){
                console.log(5-nowMinute,":", 59-nowSecond);
            }
        }
        else if(nowHour<=12){
            if(nowMinute>40){ 
                console.log(60-nowMinute,":", 59-nowSecond);
            }
            else if(nowMinute<=40){
                console.log(40-nowMinute,":", 59-nowSecond);
            }
        }
        else if(nowHour<=11){
            if(nowMinute>20){ 
                console.log(60-nowMinute,":", 59-nowSecond);
            }
            else if(nowMinute<=20){
                console.log(20-nowMinute,":", 59-nowSecond);
            }
        }
        else if(nowHour<=10){
            if(nowMinute>45){ 
                console.log(60-nowMinute,":", 59-nowSecond);
            }
            else if(nowMinute<=45){
                console.log(45-nowMinute,":", 59-nowSecond);
            }
            else if(nowMinute<=25){
                console.log(25-nowMinute,":", 59-nowSecond);
            }
            else if(nowMinute<=5){
                console.log(5-nowMinute,":", 59-nowSecond);
            }
        }
        else if(nowHour<=9){
            if(nowMinute>30){ 
                console.log(60-nowMinute,":", 59-nowSecond);
            }
            else if(nowMinute<=30){
                console.log(30-nowMinute,":", 59-nowSecond);
            }
        }
        else if(nowHour<=8){
            if(nowMinute>45){ 
                console.log(60-nowMinute,":", 59-nowSecond);
            }
            else if(nowMinute<=45){
                console.log(45-nowMinute,":", 59-nowSecond);
            }
            else if(nowMinute<=25){
                console.log(25-nowMinute,":", 59-nowSecond);
            }
            else if(nowMinute<=5){
                console.log(5-nowMinute,":", 59-nowSecond);
            }
        }

    }


}


setInterval(function() {
    entranceTimeA();
},600);