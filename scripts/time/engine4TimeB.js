function engine4TimeB() {
  if (document.querySelector("#BtimeEngine4")?.innerHTML === undefined) return;
  var now = new Date();
  var nowHour = now.getHours();
  var nowMinute = now.getMinutes();
  var nowSecond = now.getSeconds();

  if (nowHour >= 19 || now.getDay() == 0 || now.getDay() == 6 || nowHour <= 6) {
    document.querySelector("#BtimeEngine4").innerHTML = "운행 없음";
  } else if (nowHour < 19) {
    if (nowHour == 18) {
      if (nowMinute > 54) {
        document.querySelector("#BtimeEngine4").innerHTML = "운행 없음";
      } else if (nowMinute <= 54 && nowMinute > 34) {
        document.querySelector("#BtimeEngine4").innerHTML =
          Number(54 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 34 && nowMinute > 14) {
        document.querySelector("#BtimeEngine4").innerHTML =
          Number(34 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 14) {
        document.querySelector("#BtimeEngine4").innerHTML =
          Number(14 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 17) {
      if (nowMinute > 54) {
        document.querySelector("#BtimeEngine4").innerHTML =
          Number(74 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 54 && nowMinute > 34) {
        document.querySelector("#BtimeEngine4").innerHTML =
          Number(54 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 34 && nowMinute > 14) {
        document.querySelector("#BtimeEngine4").innerHTML =
          Number(34 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 14) {
        document.querySelector("#BtimeEngine4").innerHTML =
          Number(14 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 16) {
      if (nowMinute > 44) {
        document.querySelector("#BtimeEngine4").innerHTML =
          Number(74 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 44) {
        document.querySelector("#BtimeEngine4").innerHTML =
          Number(44 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 15) {
      if (nowMinute > 54) {
        document.querySelector("#BtimeEngine4").innerHTML =
          Number(104 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 54 && nowMinute > 34) {
        document.querySelector("#BtimeEngine4").innerHTML =
          Number(54 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 34 && nowMinute > 14) {
        document.querySelector("#BtimeEngine4").innerHTML =
          Number(34 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 14) {
        document.querySelector("#BtimeEngine4").innerHTML =
          Number(14 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 14) {
      if (nowMinute > 44) {
        document.querySelector("#BtimeEngine4").innerHTML =
          Number(74 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 44) {
        document.querySelector("#BtimeEngine4").innerHTML =
          Number(44 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 13) {
      if (nowMinute > 54) {
        document.querySelector("#BtimeEngine4").innerHTML =
          Number(104 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 54 && nowMinute > 34) {
        document.querySelector("#BtimeEngine4").innerHTML =
          Number(54 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 34 && nowMinute > 14) {
        document.querySelector("#BtimeEngine4").innerHTML =
          Number(34 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 14) {
        document.querySelector("#BtimeEngine4").innerHTML =
          Number(14 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 12) {
      if (nowMinute > 54) {
        document.querySelector("#BtimeEngine4").innerHTML =
          Number(74 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 54) {
        document.querySelector("#BtimeEngine4").innerHTML =
          Number(54 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 11) {
      if (nowMinute > 34) {
        if (nowMinute <= 54 && nowMinute > 34) {
          document.querySelector("#BtimeEngine4").innerHTML =
            Number(12 - nowHour) +
            ":" +
            Number(54 - nowMinute) +
            ":" +
            Number(59 - nowSecond);
        } else if (nowMinute > 54) {
          document.querySelector("#BtimeEngine4").innerHTML =
            Number(114 - nowMinute) + ":" + Number(59 - nowSecond);
        }
      } else if (nowMinute <= 34) {
        document.querySelector("#BtimeEngine4").innerHTML =
          Number(34 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 10) {
      if (nowMinute > 54) {
        document.querySelector("#BtimeEngine4").innerHTML =
          Number(94 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 54 && nowMinute > 34) {
        document.querySelector("#BtimeEngine4").innerHTML =
          Number(54 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 34 && nowMinute > 14) {
        document.querySelector("#BtimeEngine4").innerHTML =
          Number(34 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 14) {
        document.querySelector("#BtimeEngine4").innerHTML =
          Number(14 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 9) {
      if (nowMinute > 44) {
        document.querySelector("#BtimeEngine4").innerHTML =
          Number(74 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 44) {
        document.querySelector("#BtimeEngine4").innerHTML =
          Number(44 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 8) {
      if (nowMinute > 54) {
        document.querySelector("#BtimeEngine4").innerHTML =
          Number(104 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 54 && nowMinute > 34) {
        document.querySelector("#BtimeEngine4").innerHTML =
          Number(54 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 34 && nowMinute > 14) {
        document.querySelector("#BtimeEngine4").innerHTML =
          Number(34 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 14) {
        document.querySelector("#BtimeEngine4").innerHTML =
          Number(14 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 7) {
      if (nowMinute > 34) {
        document.querySelector("#BtimeEngine4").innerHTML =
          Number(74 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowHour <= 34) {
        document.querySelector("#BtimeEngine4").innerHTML = "운행 없음";
      }
    }
  }
}

//매 초(600)마다 불러오는 함수
setInterval(function () {
  engine4TimeB();
}, 600);
