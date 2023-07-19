// 코드 적기 전 체크리스트
// 1. 함수 이름 변경
// 2. id 이름 변경
// 3. index.html에 js파일 연동
// 4. overlay.js에 바뀐 id 이름 기입하기.

function medicineTimeA() {
  if (document.querySelector("#AtimeMedi")?.innerHTML === undefined) return;

  var now = new Date();

  var nowHour = now.getHours();
  var nowMinute = now.getMinutes();
  var nowSecond = now.getSeconds();

  if (nowHour >= 19 || now.getDay() == 0 || now.getDay() == 6 || nowHour <= 6) {
    document.querySelector("#AtimeMedi").innerHTML = "운행 없음";
  } else if (nowHour < 19) {
    if (nowHour == 18) {
      if (nowMinute > 49) {
        document.querySelector("#AtimeMedi").innerHTML = "운행 없음";
      } else if (nowMinute <= 49 && nowMinute > 29) {
        document.querySelector("#AtimeMedi").innerHTML =
          Number(49 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 29 && nowMinute > 9) {
        document.querySelector("#AtimeMedi").innerHTML =
          Number(29 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 9) {
        document.querySelector("#AtimeMedi").innerHTML =
          Number(9 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 17) {
      if (nowMinute > 49) {
        document.querySelector("#AtimeMedi").innerHTML =
          Number(69 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 49 && nowMinute > 29) {
        document.querySelector("#AtimeMedi").innerHTML =
          Number(49 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 29 && nowMinute > 9) {
        document.querySelector("#AtimeMedi").innerHTML =
          Number(29 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 9) {
        document.querySelector("#AtimeMedi").innerHTML =
          Number(9 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 16) {
      if (nowMinute > 39) {
        document.querySelector("#AtimeMedi").innerHTML =
          Number(69 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 39) {
        document.querySelector("#AtimeMedi").innerHTML =
          Number(39 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 15) {
      if (nowMinute > 54) {
        document.querySelector("#AtimeMedi").innerHTML =
          Number(99 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 54 && nowMinute > 34) {
        document.querySelector("#AtimeMedi").innerHTML =
          Number(54 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 34 && nowMinute > 14) {
        document.querySelector("#AtimeMedi").innerHTML =
          Number(34 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 14) {
        document.querySelector("#AtimeMedi").innerHTML =
          Number(14 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 14) {
      if (nowMinute > 39) {
        document.querySelector("#AtimeMedi").innerHTML =
          Number(74 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 39) {
        document.querySelector("#AtimeMedi").innerHTML =
          Number(39 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 13) {
      if (nowMinute > 54) {
        document.querySelector("#AtimeMedi").innerHTML =
          Number(99 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 54 && nowMinute > 34) {
        document.querySelector("#AtimeMedi").innerHTML =
          Number(54 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 34 && nowMinute > 14) {
        document.querySelector("#AtimeMedi").innerHTML =
          Number(34 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 14) {
        document.querySelector("#AtimeMedi").innerHTML =
          Number(14 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 12) {
      if (nowMinute > 49) {
        document.querySelector("#AtimeMedi").innerHTML =
          Number(74 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 49) {
        document.querySelector("#AtimeMedi").innerHTML =
          Number(49 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 11) {
      if (nowMinute > 29) {
        if (nowMinute <= 49 && nowMinute > 29) {
          document.querySelector("#AtimeMedi").innerHTML =
            Number(12 - nowHour) +
            ":" +
            Number(49 - nowMinute) +
            ":" +
            Number(59 - nowSecond);
        } else if (nowMinute > 49) {
          document.querySelector("#AtimeMedi").innerHTML =
            Number(109 - nowMinute) + ":" + Number(59 - nowSecond);
        }
      } else if (nowMinute <= 29) {
        document.querySelector("#AtimeMedi").innerHTML =
          Number(29 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 10) {
      if (nowMinute > 54) {
        document.querySelector("#AtimeMedi").innerHTML =
          Number(89 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 54 && nowMinute > 34) {
        document.querySelector("#AtimeMedi").innerHTML =
          Number(54 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 34 && nowMinute > 14) {
        document.querySelector("#AtimeMedi").innerHTML =
          Number(34 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 14) {
        document.querySelector("#AtimeMedi").innerHTML =
          Number(14 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 9) {
      if (nowMinute > 39) {
        document.querySelector("#AtimeMedi").innerHTML =
          Number(74 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 39) {
        document.querySelector("#AtimeMedi").innerHTML =
          Number(44 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 8) {
      if (nowMinute > 54) {
        document.querySelector("#AtimeMedi").innerHTML =
          Number(99 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 54 && nowMinute > 34) {
        document.querySelector("#AtimeMedi").innerHTML =
          Number(54 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 34 && nowMinute > 14) {
        document.querySelector("#AtimeMedi").innerHTML =
          Number(34 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 14) {
        document.querySelector("#AtimeMedi").innerHTML =
          Number(14 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 7) {
      if (nowMinute > 39) {
        document.querySelector("#AtimeMedi").innerHTML =
          Number(74 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowHour <= 39) {
        document.querySelector("#AtimeMedi").innerHTML = "운행 없음";
      }
    }
  }
}

//매 초(600)마다 불러오는 함수
setInterval(function () {
  medicineTimeA();
}, 600);
