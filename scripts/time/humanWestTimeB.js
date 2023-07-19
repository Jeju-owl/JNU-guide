function humanWestTimeB() {
  if (document.querySelector("#BtimeHumanW")?.innerHTML === undefined) return;
  var now = new Date();
  var nowHour = now.getHours();
  var nowMinute = now.getMinutes();
  var nowSecond = now.getSeconds();

  if (nowHour >= 19 || now.getDay() == 0 || now.getDay() == 6 || nowHour <= 6) {
    document.querySelector("#BtimeHumanW").innerHTML = "운행 없음";
  } else if (nowHour < 19) {
    if (nowHour == 18) {
      if (nowMinute > 59) {
        document.querySelector("#BtimeHumanW").innerHTML = "운행 없음";
      } else if (nowMinute <= 59 && nowMinute > 39) {
        document.querySelector("#BtimeHumanW").innerHTML =
          Number(59 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 39 && nowMinute > 19) {
        document.querySelector("#BtimeHumanW").innerHTML =
          Number(39 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 19) {
        document.querySelector("#BtimeHumanW").innerHTML =
          Number(19 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 17) {
      if (nowMinute > 59) {
        document.querySelector("#BtimeHumanW").innerHTML =
          Number(79 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 59 && nowMinute > 39) {
        document.querySelector("#BtimeHumanW").innerHTML =
          Number(59 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 39 && nowMinute > 19) {
        document.querySelector("#BtimeHumanW").innerHTML =
          Number(39 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 19) {
        document.querySelector("#BtimeHumanW").innerHTML =
          Number(19 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 16) {
      if (nowMinute > 49) {
        document.querySelector("#BtimeHumanW").innerHTML =
          Number(79 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 49) {
        document.querySelector("#BtimeHumanW").innerHTML =
          Number(49 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 15) {
      if (nowMinute > 59) {
        document.querySelector("#BtimeHumanW").innerHTML =
          Number(109 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 59 && nowMinute > 39) {
        document.querySelector("#BtimeHumanW").innerHTML =
          Number(59 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 39 && nowMinute > 19) {
        document.querySelector("#BtimeHumanW").innerHTML =
          Number(39 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 19) {
        document.querySelector("#BtimeHumanW").innerHTML =
          Number(19 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 14) {
      if (nowMinute > 49) {
        document.querySelector("#BtimeHumanW").innerHTML =
          Number(79 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 49) {
        document.querySelector("#BtimeHumanW").innerHTML =
          Number(49 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 13) {
      if (nowMinute > 59) {
        document.querySelector("#BtimeHumanW").innerHTML =
          Number(109 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 59 && nowMinute > 39) {
        document.querySelector("#BtimeHumanW").innerHTML =
          Number(59 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 39 && nowMinute > 19) {
        document.querySelector("#BtimeHumanW").innerHTML =
          Number(39 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 19) {
        document.querySelector("#BtimeHumanW").innerHTML =
          Number(19 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 12) {
      if (nowMinute > 59) {
        document.querySelector("#BtimeHumanW").innerHTML =
          Number(79 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 59) {
        document.querySelector("#BtimeHumanW").innerHTML =
          Number(59 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 11) {
      if (nowMinute > 39) {
        if (nowMinute <= 59 && nowMinute > 39) {
          document.querySelector("#BtimeHumanW").innerHTML =
            Number(12 - nowHour) +
            ":" +
            Number(59 - nowMinute) +
            ":" +
            Number(59 - nowSecond);
        } else if (nowMinute > 59) {
          document.querySelector("#BtimeHumanW").innerHTML =
            Number(119 - nowMinute) + ":" + Number(59 - nowSecond);
        }
      } else if (nowMinute <= 39) {
        document.querySelector("#BtimeHumanW").innerHTML =
          Number(39 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 10) {
      if (nowMinute > 59) {
        document.querySelector("#BtimeHumanW").innerHTML =
          Number(99 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 59 && nowMinute > 39) {
        document.querySelector("#BtimeHumanW").innerHTML =
          Number(59 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 39 && nowMinute > 19) {
        document.querySelector("#BtimeHumanW").innerHTML =
          Number(39 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 19) {
        document.querySelector("#BtimeHumanW").innerHTML =
          Number(19 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 9) {
      if (nowMinute > 49) {
        document.querySelector("#BtimeHumanW").innerHTML =
          Number(79 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 49) {
        document.querySelector("#BtimeHumanW").innerHTML =
          Number(49 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 8) {
      if (nowMinute > 59) {
        document.querySelector("#BtimeHumanW").innerHTML =
          Number(109 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 59 && nowMinute > 39) {
        document.querySelector("#BtimeHumanW").innerHTML =
          Number(59 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 39 && nowMinute > 19) {
        document.querySelector("#BtimeHumanW").innerHTML =
          Number(39 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 19) {
        document.querySelector("#BtimeHumanW").innerHTML =
          Number(19 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 7) {
      if (nowMinute > 39) {
        document.querySelector("#BtimeHumanW").innerHTML =
          Number(79 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowHour <= 39) {
        document.querySelector("#BtimeHumanW").innerHTML = "운행 없음";
      }
    }
  }
}

//매 초(600)마다 불러오는 함수
setInterval(function () {
  humanWestTimeB();
}, 600);
