function humanEastTimeA() {
  if (document.querySelector("#AtimeHumanE")?.innerHTML === undefined) return;
  var now = new Date();
  var nowHour = now.getHours();
  var nowMinute = now.getMinutes();
  var nowSecond = now.getSeconds();

  if (nowHour >= 19 || now.getDay() == 0 || now.getDay() == 6 || nowHour <= 6) {
    document.querySelector("#AtimeHumanE").innerHTML = "운행 없음";
  } else if (nowHour < 19) {
    if (nowHour == 18) {
      if (nowMinute > 47) {
        document.querySelector("#AtimeHumanE").innerHTML = "운행 없음";
      } else if (nowMinute <= 47 && nowMinute > 27) {
        document.querySelector("#AtimeHumanE").innerHTML =
          Number(47 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 27 && nowMinute > 7) {
        document.querySelector("#AtimeHumanE").innerHTML =
          Number(27 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 7) {
        document.querySelector("#AtimeHumanE").innerHTML =
          Number(7 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 17) {
      if (nowMinute > 47) {
        document.querySelector("#AtimeHumanE").innerHTML =
          Number(67 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 47 && nowMinute > 27) {
        document.querySelector("#AtimeHumanE").innerHTML =
          Number(47 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 27 && nowMinute > 7) {
        document.querySelector("#AtimeHumanE").innerHTML =
          Number(27 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 7) {
        document.querySelector("#AtimeHumanE").innerHTML =
          Number(7 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 16) {
      if (nowMinute > 37) {
        document.querySelector("#AtimeHumanE").innerHTML =
          Number(67 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 37) {
        document.querySelector("#AtimeHumanE").innerHTML =
          Number(37 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 15) {
      if (nowMinute > 52) {
        document.querySelector("#AtimeHumanE").innerHTML =
          Number(97 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 52 && nowMinute > 32) {
        document.querySelector("#AtimeHumanE").innerHTML =
          Number(52 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 32 && nowMinute > 12) {
        document.querySelector("#AtimeHumanE").innerHTML =
          Number(32 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 12) {
        document.querySelector("#AtimeHumanE").innerHTML =
          Number(12 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 14) {
      if (nowMinute > 37) {
        document.querySelector("#AtimeHumanE").innerHTML =
          Number(72 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 37) {
        document.querySelector("#AtimeHumanE").innerHTML =
          Number(37 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 13) {
      if (nowMinute > 52) {
        document.querySelector("#AtimeHumanE").innerHTML =
          Number(97 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 52 && nowMinute > 32) {
        document.querySelector("#AtimeHumanE").innerHTML =
          Number(52 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 32 && nowMinute > 12) {
        document.querySelector("#AtimeHumanE").innerHTML =
          Number(32 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 12) {
        document.querySelector("#AtimeHumanE").innerHTML =
          Number(12 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 12) {
      if (nowMinute > 47) {
        document.querySelector("#AtimeHumanE").innerHTML =
          Number(72 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 47) {
        document.querySelector("#AtimeHumanE").innerHTML =
          Number(47 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 11) {
      if (nowMinute > 27) {
        if (nowMinute <= 47 && nowMinute > 27) {
          document.querySelector("#AtimeHumanE").innerHTML =
            Number(12 - nowHour) +
            ":" +
            Number(47 - nowMinute) +
            ":" +
            Number(59 - nowSecond);
        } else if (nowMinute > 47) {
          document.querySelector("#AtimeHumanE").innerHTML =
            Number(107 - nowMinute) + ":" + Number(59 - nowSecond);
        }
      } else if (nowMinute <= 27) {
        document.querySelector("#AtimeHumanE").innerHTML =
          Number(27 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 10) {
      if (nowMinute > 52) {
        document.querySelector("#AtimeHumanE").innerHTML =
          Number(87 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 52 && nowMinute > 32) {
        document.querySelector("#AtimeHumanE").innerHTML =
          Number(52 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 32 && nowMinute > 12) {
        document.querySelector("#AtimeHumanE").innerHTML =
          Number(32 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 12) {
        document.querySelector("#AtimeHumanE").innerHTML =
          Number(12 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 9) {
      if (nowMinute > 37) {
        document.querySelector("#AtimeHumanE").innerHTML =
          Number(72 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 37) {
        document.querySelector("#AtimeHumanE").innerHTML =
          Number(42 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 8) {
      if (nowMinute > 52) {
        document.querySelector("#AtimeHumanE").innerHTML =
          Number(97 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 52 && nowMinute > 32) {
        document.querySelector("#AtimeHumanE").innerHTML =
          Number(52 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 32 && nowMinute > 12) {
        document.querySelector("#AtimeHumanE").innerHTML =
          Number(32 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowMinute <= 12) {
        document.querySelector("#AtimeHumanE").innerHTML =
          Number(12 - nowMinute) + ":" + Number(59 - nowSecond);
      }
    } else if (nowHour == 7) {
      if (nowMinute > 37) {
        document.querySelector("#AtimeHumanE").innerHTML =
          Number(72 - nowMinute) + ":" + Number(59 - nowSecond);
      } else if (nowHour <= 37) {
        document.querySelector("#AtimeHumanE").innerHTML = "운행 없음";
      }
    }
  }
}

//매 초(600)마다 불러오는 함수
setInterval(function () {
  humanEastTimeA();
}, 600);
