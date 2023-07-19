// 코드 적기 전 체크리스트
// 1. 함수 이름 변경
// 2. id 이름 변경
// 3. index.html에 js파일 연동
// 4. overlay.js에 바뀐 id 이름 기입하기.
function marine1TimeB() {
  if (document.querySelector("#BtimeMarine1")?.innerHTML === undefined) return;

  var now = new Date();

  var nowHour = now.getHours();
  var nowMinute = now.getMinutes();
  var nowSecond = now.getSeconds();

  if (nowHour >= 19 || now.getDay() == 0 || now.getDay() == 6 || nowHour <= 6) {
    document.querySelector("#BtimeMarine1").innerHTML = "운행 없음";
  } else if (nowHour < 19) {
    if (nowHour == 18) {
      if (nowMinute > 52) {
        document.querySelector("#BtimeMarine1").innerHTML = "운행 없음";
      } else if (nowMinute <= 52 && nowMinute > 32) {
        document.querySelector("#BtimeMarine1").innerHTML =
          Number(52 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 32 && nowMinute > 12) {
        document.querySelector("#BtimeMarine1").innerHTML =
          Number(32 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 12) {
        document.querySelector("#BtimeMarine1").innerHTML =
          Number(12 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 17) {
      if (nowMinute > 52) {
        document.querySelector("#BtimeMarine1").innerHTML =
          Number(72 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 52 && nowMinute > 32) {
        document.querySelector("#BtimeMarine1").innerHTML =
          Number(52 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 32 && nowMinute > 12) {
        document.querySelector("#BtimeMarine1").innerHTML =
          Number(32 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 12) {
        document.querySelector("#BtimeMarine1").innerHTML =
          Number(12 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 16) {
      if (nowMinute > 42) {
        document.querySelector("#BtimeMarine1").innerHTML =
          Number(72 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 42) {
        document.querySelector("#BtimeMarine1").innerHTML =
          Number(42 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 15) {
      if (nowMinute > 52) {
        document.querySelector("#BtimeMarine1").innerHTML =
          Number(102 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 52 && nowMinute > 32) {
        document.querySelector("#BtimeMarine1").innerHTML =
          Number(52 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 32 && nowMinute > 12) {
        document.querySelector("#BtimeMarine1").innerHTML =
          Number(32 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 12) {
        document.querySelector("#BtimeMarine1").innerHTML =
          Number(12 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 14) {
      if (nowMinute > 42) {
        document.querySelector("#BtimeMarine1").innerHTML =
          Number(72 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 42) {
        document.querySelector("#BtimeMarine1").innerHTML =
          Number(42 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 13) {
      if (nowMinute > 52) {
        document.querySelector("#BtimeMarine1").innerHTML =
          Number(102 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 52 && nowMinute > 32) {
        document.querySelector("#BtimeMarine1").innerHTML =
          Number(52 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 32 && nowMinute > 12) {
        document.querySelector("#BtimeMarine1").innerHTML =
          Number(32 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 12) {
        document.querySelector("#BtimeMarine1").innerHTML =
          Number(12 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 12) {
      if (nowMinute > 52) {
        document.querySelector("#BtimeMarine1").innerHTML =
          Number(72 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 52) {
        document.querySelector("#BtimeMarine1").innerHTML =
          Number(52 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 11) {
      if (nowMinute > 32) {
        if (nowMinute <= 52 && nowMinute > 32) {
          document.querySelector("#BtimeMarine1").innerHTML =
            Number(12 - nowHour) +
            ":" +
            Number(52 - nowMinute) +
            ":" +
            Number(59 - nowSecond);
        } else if (nowMinute > 52) {
          document.querySelector("#BtimeMarine1").innerHTML =
            Number(112 - nowMinute) + ":" + Number(59 - nowSecond);
        }
      } else if (nowMinute <= 32) {
        document.querySelector("#BtimeMarine1").innerHTML =
          Number(32 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 10) {
      if (nowMinute > 52) {
        document.querySelector("#BtimeMarine1").innerHTML =
          Number(92 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 52 && nowMinute > 32) {
        document.querySelector("#BtimeMarine1").innerHTML =
          Number(52 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 32 && nowMinute > 12) {
        document.querySelector("#BtimeMarine1").innerHTML =
          Number(32 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 12) {
        document.querySelector("#BtimeMarine1").innerHTML =
          Number(12 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 9) {
      if (nowMinute > 42) {
        document.querySelector("#BtimeMarine1").innerHTML =
          Number(72 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 42) {
        document.querySelector("#BtimeMarine1").innerHTML =
          Number(42 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 8) {
      if (nowMinute > 52) {
        document.querySelector("#BtimeMarine1").innerHTML =
          Number(102 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 52 && nowMinute > 32) {
        document.querySelector("#BtimeMarine1").innerHTML =
          Number(52 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 32 && nowMinute > 12) {
        document.querySelector("#BtimeMarine1").innerHTML =
          Number(32 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 12) {
        document.querySelector("#BtimeMarine1").innerHTML =
          Number(12 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 7) {
      if (nowMinute > 32) {
        document.querySelector("#BtimeMarine1").innerHTML =
          Number(72 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowHour <= 32) {
        document.querySelector("#BtimeMarine1").innerHTML = "운행 없음";
      }
    }
  }
}

//매 초(600)마다 불러오는 함수
setInterval(function () {
  marine1TimeB();
}, 600);
