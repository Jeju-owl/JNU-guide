function pharmacyTimeA() {
  if (document.querySelector("#AtimePharm")?.innerHTML === undefined) return;
  var now = new Date();
  var nowHour = now.getHours();
  var nowMinute = now.getMinutes();
  var nowSecond = now.getSeconds();

  if (nowHour >= 19 || now.getDay() == 0 || now.getDay() == 6 || nowHour <= 6) {
    document.querySelector("#AtimePharm").innerHTML = "운행 없음";
  } else if (nowHour < 19) {
    if (nowHour == 18) {
      if (nowMinute > 41) {
        document.querySelector("#AtimePharm").innerHTML = "운행 없음";
      } else if (nowMinute <= 41 && nowMinute > 21) {
        document.querySelector("#AtimePharm").innerHTML =
          Number(41 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 21 && nowMinute > 1) {
        document.querySelector("#AtimePharm").innerHTML =
          Number(21 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 1) {
        document.querySelector("#AtimePharm").innerHTML =
          Number(1 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 17) {
      if (nowMinute > 41) {
        document.querySelector("#AtimePharm").innerHTML =
          Number(61 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 41 && nowMinute > 21) {
        document.querySelector("#AtimePharm").innerHTML =
          Number(41 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 21 && nowMinute > 1) {
        document.querySelector("#AtimePharm").innerHTML =
          Number(21 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 1) {
        document.querySelector("#AtimePharm").innerHTML =
          Number(1 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 16) {
      if (nowMinute > 31) {
        document.querySelector("#AtimePharm").innerHTML =
          Number(61 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 31) {
        document.querySelector("#AtimePharm").innerHTML =
          Number(31 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 15) {
      if (nowMinute > 46) {
        document.querySelector("#AtimePharm").innerHTML =
          Number(91 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 46 && nowMinute > 26) {
        document.querySelector("#AtimePharm").innerHTML =
          Number(46 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 26 && nowMinute > 6) {
        document.querySelector("#AtimePharm").innerHTML =
          Number(26 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 6) {
        document.querySelector("#AtimePharm").innerHTML =
          Number(6 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 14) {
      if (nowMinute > 31) {
        document.querySelector("#AtimePharm").innerHTML =
          Number(66 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 31) {
        document.querySelector("#AtimePharm").innerHTML =
          Number(31 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 13) {
      if (nowMinute > 46) {
        document.querySelector("#AtimePharm").innerHTML =
          Number(91 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 46 && nowMinute > 26) {
        document.querySelector("#AtimePharm").innerHTML =
          Number(46 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 26 && nowMinute > 6) {
        document.querySelector("#AtimePharm").innerHTML =
          Number(26 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 6) {
        document.querySelector("#AtimePharm").innerHTML =
          Number(6 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 12) {
      if (nowMinute > 41) {
        document.querySelector("#AtimePharm").innerHTML =
          Number(66 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 41) {
        document.querySelector("#AtimePharm").innerHTML =
          Number(41 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 11) {
      if (nowMinute > 21) {
        if (nowMinute <= 41 && nowMinute > 21) {
          document.querySelector("#AtimePharm").innerHTML =
            Number(12 - nowHour) +
            ":" +
            Number(41 - nowMinute) +
            ":" +
            Number(59 - nowSecond);
        } else if (nowMinute > 41) {
          document.querySelector("#AtimePharm").innerHTML =
            Number(101 - nowMinute) + ":" + Number(59 - nowSecond);
        }
      } else if (nowMinute <= 21) {
        document.querySelector("#AtimePharm").innerHTML =
          Number(21 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 10) {
      if (nowMinute > 46) {
        document.querySelector("#AtimePharm").innerHTML =
          Number(81 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 46 && nowMinute > 26) {
        document.querySelector("#AtimePharm").innerHTML =
          Number(46 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 26 && nowMinute > 6) {
        document.querySelector("#AtimePharm").innerHTML =
          Number(26 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 6) {
        document.querySelector("#AtimePharm").innerHTML =
          Number(6 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 9) {
      if (nowMinute > 31) {
        document.querySelector("#AtimePharm").innerHTML =
          Number(66 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 31) {
        document.querySelector("#AtimePharm").innerHTML =
          Number(31 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 8) {
      if (nowMinute > 46) {
        document.querySelector("#AtimePharm").innerHTML =
          Number(91 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 46 && nowMinute > 26) {
        document.querySelector("#AtimePharm").innerHTML =
          Number(46 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 26 && nowMinute > 6) {
        document.querySelector("#AtimePharm").innerHTML =
          Number(26 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 6) {
        document.querySelector("#AtimePharm").innerHTML =
          Number(6 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 7) {
      if (nowMinute > 31) {
        document.querySelector("#AtimePharm").innerHTML =
          Number(66 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowHour <= 31) {
        document.querySelector("#AtimePharm").innerHTML = "운행 없음";
      }
    }
  }
}

// //매 초(600)마다 불러오는 함수
setInterval(function () {
  pharmacyTimeA();
}, 600);
