var playRed = 0;
var playGreen = 0;
var playYellow = 0;
var playBlue = 0;
var x = 0;
var count = 0;
var player1;
var player2;
var player3;
var player4;
var leftBorder; /*left border of the game*/

function redPlay() {
  var fill = window.getComputedStyle(document.getElementById("red"))
    .backgroundColor;
  if (fill == "rgb(223, 1, 1)") {
    document.getElementById("red").style.backgroundColor = "transparent";
    document.getElementById("startRed").style.backgroundColor = "#DF0101";
    playRed = 1;
  } else {
    document.getElementById("red").style.backgroundColor = "#DF0101";
    document.getElementById("startRed").style.backgroundColor = "transparent";
    playRed = 0;
  }
}

function greenPlay() {
  var fill = window.getComputedStyle(document.getElementById("green"))
    .backgroundColor;
  if (fill == "rgb(11, 97, 11)") {
    document.getElementById("green").style.backgroundColor = "transparent";
    document.getElementById("startGreen").style.backgroundColor = "#0B610B";
    playGreen = 1;
  } else {
    document.getElementById("green").style.backgroundColor = "#0B610B";
    document.getElementById("startGreen").style.backgroundColor = "transparent";
    playGreen = 0;
  }
}

function yellowPlay() {
  var fill = window.getComputedStyle(document.getElementById("yellow"))
    .backgroundColor;
  if (fill == "rgb(255, 255, 0)") {
    document.getElementById("yellow").style.backgroundColor = "transparent";
    document.getElementById("startYellow").style.backgroundColor = "#FFFF00";
    playYellow = 1;
  } else {
    document.getElementById("yellow").style.backgroundColor = "#FFFF00";
    document.getElementById("startYellow").style.backgroundColor =
      "transparent";
    playYellow = 0;
  }
}

function bluePlay() {
  var fill = window.getComputedStyle(document.getElementById("blue"))
    .backgroundColor;
  if (fill == "rgb(4, 4, 180)") {
    document.getElementById("blue").style.backgroundColor = "transparent";
    document.getElementById("startBlue").style.backgroundColor = "#0404B4";
    playBlue = 1;
  } else {
    document.getElementById("blue").style.backgroundColor = "#0404B4";
    document.getElementById("startBlue").style.backgroundColor = "transparent";
    playBlue = 0;
  }
}

function dThrow() {
  /*left border of the game*/

  leftBorder = window.getComputedStyle(document.getElementById("ladders")).left;
  var leftBorderN = Number(leftBorder.replace("px", ""));
  /*current position*/
  var leftRed = window.getComputedStyle(document.getElementById("startRed"))
    .left;
  var topRed = window.getComputedStyle(document.getElementById("startRed")).top;
  var leftGreen = window.getComputedStyle(document.getElementById("startGreen"))
    .left;
  var topGreen = window.getComputedStyle(document.getElementById("startGreen"))
    .top;
  var leftYellow = window.getComputedStyle(
    document.getElementById("startYellow")
  ).left;
  var topYellow = window.getComputedStyle(
    document.getElementById("startYellow")
  ).top;
  var leftBlue = window.getComputedStyle(document.getElementById("startBlue"))
    .left;
  var topBlue = window.getComputedStyle(document.getElementById("startBlue"))
    .top;
  var step = 50; /*length of one step*/
  var leftRedN = Number(leftRed.replace("px", ""));
  var topRedN = Number(topRed.replace("px", ""));
  var leftGreenN = Number(leftGreen.replace("px", ""));
  var topGreenN = Number(topGreen.replace("px", ""));
  var leftYellowN = Number(leftYellow.replace("px", ""));
  var topYellowN = Number(topYellow.replace("px", ""));
  var leftBlueN = Number(leftBlue.replace("px", ""));
  var topBlueN = Number(topBlue.replace("px", ""));

  function moveRed() {
    var topCountR = ((topRedN + 35) / 50) % 2; /*even or uneben height?*/
    if (topCountR % 2 == 1) {
      var leftRedNew = leftRedN + x * step;
      var topRedNew = topRedN;
      if (leftRedNew <= leftBorderN + 10 * step) {
        document.getElementById("startRed").style.left = leftRedNew + "px";
      }
      if (leftRedNew > leftBorderN + 10 * step) {
        var help = leftRedNew - (leftBorderN + 10 * step);
        help = Math.ceil(help / 100) * 50 - 5;
        leftRedNew = leftBorderN + 10 * step - help;
        topRedNew = topRedN + step;
        document.getElementById("startRed").style.left = leftRedNew + "px";
        document.getElementById("startRed").style.top = topRedNew + "px";
      }
    }
    if (topCountR % 2 == 0) {
      var leftRedNew = leftRedN - x * step;
      var topRedNew = topRedN;
      if (leftRedNew >= leftBorderN) {
        document.getElementById("startRed").style.left = leftRedNew + "px";
      }
      if (leftRedNew < leftBorderN) {
        var help = leftBorderN - leftRedNew;
        help = Math.floor(help / 100) * 50 + 5;
        leftRedNew = leftBorderN + help;
        topRedNew = topRedN + step;
        document.getElementById("startRed").style.left = leftRedNew + "px";
        document.getElementById("startRed").style.top = topRedNew + "px";
      }
    }
    /*ladders & snakes*/
    if (topRedNew == 15 && leftRedNew == 505) {
      document.getElementById("startRed").style.left = 555 + "px";
      document.getElementById("startRed").style.top = 165 + "px";
    }
    if (topRedNew == 15 && leftRedNew == 605) {
      document.getElementById("startRed").style.left = 755 + "px";
      document.getElementById("startRed").style.top = 65 + "px";
    }
    if (topRedNew == 15 && leftRedNew == 855) {
      document.getElementById("startRed").style.left = 905 + "px";
      document.getElementById("startRed").style.top = 165 + "px";
    }
    if (topRedNew == 65 && leftRedNew == 605) {
      document.getElementById("startRed").style.left = 805 + "px";
      document.getElementById("startRed").style.top = 15 + "px";
    }
    if (topRedNew == 115 && leftRedNew == 455) {
      document.getElementById("startRed").style.left = 655 + "px";
      document.getElementById("startRed").style.top = 265 + "px";
    }
    if (topRedNew == 115 && leftRedNew == 805) {
      document.getElementById("startRed").style.left = 655 + "px";
      document.getElementById("startRed").style.top = 415 + "px";
    }
    if (topRedNew == 265 && leftRedNew == 905) {
      document.getElementById("startRed").style.left = 755 + "px";
      document.getElementById("startRed").style.top = 315 + "px";
    }
    if (topRedNew == 315 && leftRedNew == 505) {
      document.getElementById("startRed").style.left = 605 + "px";
      document.getElementById("startRed").style.top = 115 + "px";
    }
    if (topRedNew == 315 && leftRedNew == 655) {
      document.getElementById("startRed").style.left = 555 + "px";
      document.getElementById("startRed").style.top = 215 + "px";
    }
    if (topRedNew == 365 && leftRedNew == 455) {
      document.getElementById("startRed").style.left = 755 + "px";
      document.getElementById("startRed").style.top = 465 + "px";
    }
    if (topRedNew == 365 && leftRedNew == 905) {
      document.getElementById("startRed").style.left = 905 + "px";
      document.getElementById("startRed").style.top = 465 + "px";
    }
    if (topRedNew == 415 && leftRedNew == 605) {
      document.getElementById("startRed").style.left = 455 + "px";
      document.getElementById("startRed").style.top = 315 + "px";
    }
    if (topRedNew == 415 && leftRedNew == 805) {
      document.getElementById("startRed").style.left = 805 + "px";
      document.getElementById("startRed").style.top = 215 + "px";
    }
    if (topRedNew == 465 && leftRedNew == 555) {
      document.getElementById("startRed").style.left = 505 + "px";
      document.getElementById("startRed").style.top = 65 + "px";
    }
    if (topRedNew == 465 && leftRedNew == 705) {
      document.getElementById("startRed").style.left = 755 + "px";
      document.getElementById("startRed").style.top = 165 + "px";
    }
    if (topRedNew == 465 && leftRedNew == 855) {
      document.getElementById("startRed").style.left = 905 + "px";
      document.getElementById("startRed").style.top = 315 + "px";
    }
    /*End*/
    if (topRedNew == 465 && leftRedNew == 455) {
      document.getElementById("startRed").style.left = 455 + "px";
      document.getElementById("startRed").style.top = 465 + "px";
      document.getElementById("winner").innerHTML = "WINNER";
      alert("END!");
      document.getElementById("turn").innerHTML = "";
      document.getElementById("winner").style.color = "#DF0101";
      startPlay();
    }
    if (topRedNew > 465) {
      document.getElementById("startRed").style.left = leftRedN + "px";
      document.getElementById("startRed").style.top = 465 + "px";
    }
    /*kill*/
    // if (topRedNew == topGreenN && (leftRedNew == leftGreenN - 20)) {
    //   document.getElementById("startGreen").style.left = 425 + "px";
    //   document.getElementById("startGreen").style.top = 15 + "px";
    // }
    // if (leftRedNew == leftYellowN && (topRedNew == topYellowN - 20)) {
    //   document.getElementById("startYellow").style.left = 405 + "px";
    //   document.getElementById("startYellow").style.top = 35 + "px";
    // }
    // if (topRedNew == topBlueN - 20 && (leftRedNew == leftBlueN - 20)) {
    //   document.getElementById("startBlue").style.left = 425 + "px";
    //   document.getElementById("startBlue").style.top = 35 + "px";
    // }
  }

  function moveGreen() {
    var topCountG = ((topGreenN + 35) / 50) % 2; /*even or uneben height?*/
    if (topCountG % 2 == 1) {
      var leftGreenNew = leftGreenN + x * step;
      var topGreenNew = topGreenN;
      if (leftGreenNew <= leftBorderN + 10 * step) {
        document.getElementById("startGreen").style.left = leftGreenNew + "px";
      }
      if (leftGreenNew > leftBorderN + 10 * step) {
        var help = leftGreenNew - (leftBorderN + 10 * step);
        help = Math.ceil(help / 100) * 50 - 25;
        leftGreenNew = leftBorderN + 10 * step - help;
        topGreenNew = topGreenN + step;
        document.getElementById("startGreen").style.left = leftGreenNew + "px";
        document.getElementById("startGreen").style.top = topGreenNew + "px";
      }
    }
    if (topCountG % 2 == 0) {
      var leftGreenNew = leftGreenN - x * step;
      var topGreenNew = topGreenN;
      if (leftGreenNew >= leftBorderN) {
        document.getElementById("startGreen").style.left = leftGreenNew + "px";
      }
      if (leftGreenNew < leftBorderN) {
        var help = leftBorderN - leftGreenNew;
        help = Math.floor(help / 100) * 50 + 25;
        leftGreenNew = leftBorderN + help;
        topGreenNew = topGreenN + step;
        document.getElementById("startGreen").style.left = leftGreenNew + "px";
        document.getElementById("startGreen").style.top = topGreenNew + "px";
      }
    }
    /*ladders & snakes*/
    if (topGreenNew == 15 && leftGreenNew == 525) {
      document.getElementById("startGreen").style.left = 575 + "px";
      document.getElementById("startGreen").style.top = 165 + "px";
    }
    if (topGreenNew == 15 && leftGreenNew == 625) {
      document.getElementById("startGreen").style.left = 775 + "px";
      document.getElementById("startGreen").style.top = 65 + "px";
    }
    if (topGreenNew == 15 && leftGreenNew == 875) {
      document.getElementById("startGreen").style.left = 925 + "px";
      document.getElementById("startGreen").style.top = 165 + "px";
    }
    if (topGreenNew == 65 && leftGreenNew == 625) {
      document.getElementById("startGreen").style.left = 825 + "px";
      document.getElementById("startGreen").style.top = 15 + "px";
    }
    if (topGreenNew == 115 && leftGreenNew == 475) {
      document.getElementById("startGreen").style.left = 675 + "px";
      document.getElementById("startGreen").style.top = 265 + "px";
    }
    if (topGreenNew == 115 && leftGreenNew == 825) {
      document.getElementById("startGreen").style.left = 675 + "px";
      document.getElementById("startGreen").style.top = 415 + "px";
    }
    if (topGreenNew == 265 && leftGreenNew == 925) {
      document.getElementById("startGreen").style.left = 775 + "px";
      document.getElementById("startGreen").style.top = 315 + "px";
    }
    if (topGreenNew == 315 && leftGreenNew == 525) {
      document.getElementById("startGreen").style.left = 625 + "px";
      document.getElementById("startGreen").style.top = 115 + "px";
    }
    if (topGreenNew == 315 && leftGreenNew == 675) {
      document.getElementById("startGreen").style.left = 575 + "px";
      document.getElementById("startGreen").style.top = 215 + "px";
    }
    if (topGreenNew == 365 && leftGreenNew == 475) {
      document.getElementById("startGreen").style.left = 775 + "px";
      document.getElementById("startGreen").style.top = 465 + "px";
    }
    if (topGreenNew == 365 && leftGreenNew == 925) {
      document.getElementById("startGreen").style.left = 925 + "px";
      document.getElementById("startGreen").style.top = 465 + "px";
    }
    if (topGreenNew == 415 && leftGreenNew == 625) {
      document.getElementById("startGreen").style.left = 475 + "px";
      document.getElementById("startGreen").style.top = 315 + "px";
    }
    if (topGreenNew == 415 && leftGreenNew == 825) {
      document.getElementById("startGreen").style.left = 825 + "px";
      document.getElementById("startGreen").style.top = 215 + "px";
    }
    if (topGreenNew == 465 && leftGreenNew == 575) {
      document.getElementById("startGreen").style.left = 525 + "px";
      document.getElementById("startGreen").style.top = 65 + "px";
    }
    if (topGreenNew == 465 && leftGreenNew == 725) {
      document.getElementById("startGreen").style.left = 775 + "px";
      document.getElementById("startGreen").style.top = 165 + "px";
    }
    if (topGreenNew == 465 && leftGreenNew == 875) {
      document.getElementById("startGreen").style.left = 925 + "px";
      document.getElementById("startGreen").style.top = 315 + "px";
    }

    /*End*/
    if (topGreenNew == 465 && leftGreenNew == 475) {
      document.getElementById("startGreen").style.left = 475 + "px";
      document.getElementById("startGreen").style.top = 465 + "px";
      document.getElementById("winner").innerHTML = "WINNER";
      alert("END!");
      document.getElementById("turn").innerHTML = "";
      document.getElementById("winner").style.color = "#0B610B";
      startPlay();
    }
    if (topGreenNew > 465) {
      document.getElementById("startGreen").style.left = leftGreenN + "px";
      document.getElementById("startGreen").style.top = 465 + "px";
    }
    /*kill*/
    // if (topGreenNew == topRedN && leftGreenNew == leftRedN + 20) {
    //   document.getElementById("startRed").style.left = 405 + "px";
    //   document.getElementById("startRed").style.top = 15 + "px";
    // }
    // if (leftGreenNew == leftYellowN + 20 && topGreenNew == topYellowN - 20) {
    //   document.getElementById("startYellow").style.left = 405 + "px";
    //   document.getElementById("startYellow").style.top = 35 + "px";
    // }
    // if (topGreenNew == topBlueN - 20 && leftGreenNew == leftBlueN) {
    //   document.getElementById("startBlue").style.left = 425 + "px";
    //   document.getElementById("startBlue").style.top = 35 + "px";
    // }
  }

  function moveYellow() {
    var topCountY = ((topYellowN + 15) / 50) % 2; /*even or uneben height?*/
    if (topCountY % 2 == 1) {
      var leftYellowNew = leftYellowN + x * step;
      var topYellowNew = topYellowN;
      if (leftYellowNew <= leftBorderN + 10 * step) {
        document.getElementById("startYellow").style.left =
          leftYellowNew + "px";
      }
      if (leftYellowNew > leftBorderN + 10 * step) {
        var help = leftYellowNew - (leftBorderN + 10 * step);
        help = Math.ceil(help / 100) * 50 - 5;
        leftYellowNew = leftBorderN + 10 * step - help;
        topYellowNew = topYellowN + step;
        document.getElementById("startYellow").style.left =
          leftYellowNew + "px";
        document.getElementById("startYellow").style.top = topYellowNew + "px";
      }
    }
    if (topCountY % 2 == 0) {
      var leftYellowNew = leftYellowN - x * step;
      var topYellowNew = topYellowN;
      if (leftYellowNew >= leftBorderN) {
        document.getElementById("startYellow").style.left =
          leftYellowNew + "px";
      }
      if (leftYellowNew < leftBorderN) {
        var help = leftBorderN - leftYellowNew;
        help = Math.floor(help / 100) * 50 + 5;
        leftYellowNew = leftBorderN + help;
        topYellowNew = topYellowN + step;
        document.getElementById("startYellow").style.left =
          leftYellowNew + "px";
        document.getElementById("startYellow").style.top = topYellowNew + "px";
      }
    }
    /*ladders & snakes*/
    if (topYellowNew == 35 && leftYellowNew == 505) {      
      document.getElementById("startYellow").style.left = 555 + "px";
      document.getElementById("startYellow").style.top = 185 + "px";
    }
    if (topYellowNew == 35 && leftYellowNew == 605) {
      document.getElementById("startYellow").style.left = 755 + "px";
      document.getElementById("startYellow").style.top = 85 + "px";
    }
    if (topYellowNew == 35 && leftYellowNew == 855) {
      document.getElementById("startYellow").style.left = 905 + "px";
      document.getElementById("startYellow").style.top = 185 + "px";
    }
    if (topYellowNew == 85 && leftYellowNew == 605) {
      document.getElementById("startYellow").style.left = 805 + "px";
      document.getElementById("startYellow").style.top = 35 + "px";
    }
    if (topYellowNew == 135 && leftYellowNew == 455) {
      document.getElementById("startYellow").style.left = 655 + "px";
      document.getElementById("startYellow").style.top = 285 + "px";
    }
    if (topYellowNew == 135 && leftYellowNew == 805) {
      document.getElementById("startYellow").style.left = 655 + "px";
      document.getElementById("startYellow").style.top = 435 + "px";
    }
    if (topYellowNew == 285 && leftYellowNew == 905) {
      document.getElementById("startYellow").style.left = 755 + "px";
      document.getElementById("startYellow").style.top = 335 + "px";
    }
    if (topYellowNew == 335 && leftYellowNew == 505) {
      document.getElementById("startYellow").style.left = 605 + "px";
      document.getElementById("startYellow").style.top = 135 + "px";
    }
    if (topYellowNew == 335 && leftYellowNew == 655) {
      document.getElementById("startYellow").style.left = 555 + "px";
      document.getElementById("startYellow").style.top = 235 + "px";
    }
    if (topYellowNew == 385 && leftYellowNew == 455) {
      document.getElementById("startYellow").style.left = 755 + "px";
      document.getElementById("startYellow").style.top = 485 + "px";
    }
    if (topYellowNew == 385 && leftYellowNew == 905) {
      document.getElementById("startYellow").style.left = 905 + "px";
      document.getElementById("startYellow").style.top = 485 + "px";
    }
    if (topYellowNew == 435 && leftYellowNew == 605) {
      document.getElementById("startYellow").style.left = 455 + "px";
      document.getElementById("startYellow").style.top = 335 + "px";
    }
    if (topYellowNew == 435 && leftYellowNew == 805) {
      document.getElementById("startYellow").style.left = 805 + "px";
      document.getElementById("startYellow").style.top = 235 + "px";
    }
    if (topYellowNew == 485 && leftYellowNew == 555) {
      document.getElementById("startYellow").style.left = 505 + "px";
      document.getElementById("startYellow").style.top = 85 + "px";
    }
    if (topYellowNew == 485 && leftYellowNew == 705) {
      document.getElementById("startYellow").style.left = 755 + "px";
      document.getElementById("startYellow").style.top = 185 + "px";
    }
    if (topYellowNew == 485 && leftYellowNew == 855) {
      document.getElementById("startYellow").style.left = 905 + "px";
      document.getElementById("startYellow").style.top = 335 + "px";
    }

    /*End*/
    if (topYellowNew == 485 && leftYellowNew == 455) {
      document.getElementById("startYellow").style.left = 455 + "px";
      document.getElementById("startYellow").style.top = 485 + "px";
      document.getElementById("winner").innerHTML = "WINNER";
      alert("END!");
      document.getElementById("turn").innerHTML = "";
      document.getElementById("winner").style.color = "#FFFF00";
      startPlay();
    }
    if (topYellowNew > 485) {
      document.getElementById("startYellow").style.left = leftYellowN + "px";
      document.getElementById("startYellow").style.top = 485 + "px";
    }
    /*kill*/
    // if (topYellowNew == topGreenN + 20 && leftYellowNew == leftGreenN - 20) {
    //   document.getElementById("startGreen").style.left = 425 + "px";
    //   document.getElementById("startGreen").style.top = 15 + "px";
    // }
    // if (leftYellowNew == leftRedN && topYellowNew == topRedN + 20) {
    //   document.getElementById("startRed").style.left = 405 + "px";
    //   document.getElementById("startRed").style.top = 15 + "px";
    // }
    // if (topYellowNew == topBlueN && leftYellowNew == leftBlueN - 20) {
    //   document.getElementById("startBlue").style.left = 425 + "px";
    //   document.getElementById("startBlue").style.top = 35 + "px";
    // }
  }
  function moveBlue() {
    var topCountB = ((topBlueN + 15) / 50) % 2; /*even or uneben height?*/
    if (topCountB % 2 == 1) {
      var leftBlueNew = leftBlueN + x * step;
      var topBlueNew = topBlueN;
      if (leftBlueNew <= leftBorderN + 10 * step) {
        document.getElementById("startBlue").style.left = leftBlueNew + "px";
      }
      if (leftBlueNew > leftBorderN + 10 * step) {
        var help = leftBlueNew - (leftBorderN + 10 * step);
        help = Math.ceil(help / 100) * 50 - 25;
        leftBlueNew = leftBorderN + 10 * step - help;
        topBlueNew = topBlueN + step;
        document.getElementById("startBlue").style.left = leftBlueNew + "px";
        document.getElementById("startBlue").style.top = topBlueNew + "px";
      }
    }
    if (topCountB % 2 == 0) {
      var leftBlueNew = leftBlueN - x * step;
      var topBlueNew = topBlueN;
      if (leftBlueNew >= leftBorderN) {
        document.getElementById("startBlue").style.left = leftBlueNew + "px";
      }
      if (leftBlueNew < leftBorderN) {
        var help = leftBorderN - leftBlueNew;
        help = Math.floor(help / 100) * 50 + 25;
        leftBlueNew = leftBorderN + help;
        topBlueNew = topBlueN + step;
        document.getElementById("startBlue").style.left = leftBlueNew + "px";
        document.getElementById("startBlue").style.top = topBlueNew + "px";
      }
    }
    /*ladders & snakes*/
    if (topBlueNew == 35 && leftBlueNew == 525) {
      document.getElementById("startBlue").style.left = 575 + "px";
      document.getElementById("startBlue").style.top = 185 + "px";
    }
    if (topBlueNew == 35 && leftBlueNew == 625) {
      document.getElementById("startBlue").style.left = 775 + "px";
      document.getElementById("startBlue").style.top = 85 + "px";
    }
    if (topBlueNew == 35 && leftBlueNew == 875) {
      document.getElementById("startBlue").style.left = 925 + "px";
      document.getElementById("startBlue").style.top = 185 + "px";
    }
    if (topBlueNew == 85 && leftBlueNew == 625) {
      document.getElementById("startBlue").style.left = 825 + "px";
      document.getElementById("startBlue").style.top = 35 + "px";
    }
    if (topBlueNew == 135 && leftBlueNew == 475) {
      document.getElementById("startBlue").style.left = 675 + "px";
      document.getElementById("startBlue").style.top = 285 + "px";
    }
    if (topBlueNew == 135 && leftBlueNew == 825) {
      document.getElementById("startBlue").style.left = 675 + "px";
      document.getElementById("startBlue").style.top = 435 + "px";
    }
    if (topBlueNew == 285 && leftBlueNew == 925) {
      document.getElementById("startBlue").style.left = 775 + "px";
      document.getElementById("startBlue").style.top = 335 + "px";
    }
    if (topBlueNew == 335 && leftBlueNew == 525) {
      document.getElementById("startBlue").style.left = 625 + "px";
      document.getElementById("startBlue").style.top = 135 + "px";
    }
    if (topBlueNew == 335 && leftBlueNew == 675) {
      document.getElementById("startBlue").style.left = 575 + "px";
      document.getElementById("startBlue").style.top = 235 + "px";
    }
    if (topBlueNew == 385 && leftBlueNew == 475) {
      document.getElementById("startBlue").style.left = 775 + "px";
      document.getElementById("startBlue").style.top = 485 + "px";
    }
    if (topBlueNew == 385 && leftBlueNew == 925) {
      document.getElementById("startBlue").style.left = 925 + "px";
      document.getElementById("startBlue").style.top = 485 + "px";
    }
    if (topBlueNew == 435 && leftBlueNew == 625) {
      document.getElementById("startBlue").style.left = 475 + "px";
      document.getElementById("startBlue").style.top = 335 + "px";
    }
    if (topBlueNew == 435 && leftBlueNew == 825) {
      document.getElementById("startBlue").style.left = 825 + "px";
      document.getElementById("startBlue").style.top = 235 + "px";
    }
    if (topBlueNew == 485 && leftBlueNew == 575) {
      document.getElementById("startBlue").style.left = 525 + "px";
      document.getElementById("startBlue").style.top = 85 + "px";
    }
    if (topBlueNew == 485 && leftBlueNew == 725) {
      document.getElementById("startBlue").style.left = 775 + "px";
      document.getElementById("startBlue").style.top = 185 + "px";
    }
    if (topBlueNew == 485 && leftBlueNew == 875) {
      document.getElementById("startBlue").style.left = 925 + "px";
      document.getElementById("startBlue").style.top = 335 + "px";
    }

    /*End*/
    if (topBlueNew == 485 && leftBlueNew == 475) {
      document.getElementById("startBlue").style.left = 475 + "px";
      document.getElementById("startBlue").style.top = 485 + "px";
      document.getElementById("winner").innerHTML = "WINNER";
      alert("END!");
      document.getElementById("turn").innerHTML = "";
      document.getElementById("winner").style.color = "#0404B4";
      startPlay();
    }
    if (topBlueNew > 485) {
      document.getElementById("startBlue").style.left = leftBlueN + "px";
      document.getElementById("startBlue").style.top = 485 + "px";
    }
    /*kill*/
    // if (leftBlueNew == leftGreenN && topBlueNew == topGreenN + 20) {
    //   document.getElementById("startGreen").style.left = 425 + "px";
    //   document.getElementById("startGreen").style.top = 15 + "px";
    // }
    // /*alert(topBlueNew);
    //   alert(topYellowN);
    //   alert(leftBlueNew);
    //   alert(leftYellowN + 40);*/
    // if (topBlueNew == topYellowN && leftBlueNew == leftYellowN + 20) {
    //   document.getElementById("startYellow").style.left = 405 + "px";
    //   document.getElementById("startYellow").style.top = 35 + "px";
    // }
    // if (topBlueNew == topRedN + 20 && leftBlueNew == leftRedN + 20) {
    //   document.getElementById("startRed").style.left = 405 + "px";
    //   document.getElementById("startRed").style.top = 15 + "px";
    // }
  }
  count = count + 1; /*counting  dice*/
  var x = Math.floor(Math.random() * 6) + 1; // returns a random integer from 1 to 6
  /*document.getElementById("dice").innerHTML=x;*/
  switch (x) {
    case 1:
      document.getElementById("one").style.display = "block";
      document.getElementById("two1").style.display = "none";
      document.getElementById("two2").style.display = "none";
      document.getElementById("four1").style.display = "none";
      document.getElementById("four2").style.display = "none";
      document.getElementById("six1").style.display = "none";
      document.getElementById("six2").style.display = "none";

      break;
    case 2:
      document.getElementById("one").style.display = "none";
      document.getElementById("two1").style.display = "block";
      document.getElementById("two2").style.display = "block";
      document.getElementById("four1").style.display = "none";
      document.getElementById("four2").style.display = "none";
      document.getElementById("six1").style.display = "none";
      document.getElementById("six2").style.display = "none";

      break;
    case 3:
      document.getElementById("one").style.display = "block";
      document.getElementById("two1").style.display = "block";
      document.getElementById("two2").style.display = "block";
      document.getElementById("four1").style.display = "none";
      document.getElementById("four2").style.display = "none";
      document.getElementById("six1").style.display = "none";
      document.getElementById("six2").style.display = "none";

      break;
    case 4:
      document.getElementById("one").style.display = "none";
      document.getElementById("two1").style.display = "block";
      document.getElementById("two2").style.display = "block";
      document.getElementById("four1").style.display = "block";
      document.getElementById("four2").style.display = "block";
      document.getElementById("six1").style.display = "none";
      document.getElementById("six2").style.display = "none";

      break;
    case 5:
      document.getElementById("one").style.display = "block";
      document.getElementById("two1").style.display = "block";
      document.getElementById("two2").style.display = "block";
      document.getElementById("four1").style.display = "block";
      document.getElementById("four2").style.display = "block";
      document.getElementById("six1").style.display = "none";
      document.getElementById("six2").style.display = "none";

      break;
    case 6:
      document.getElementById("one").style.display = "none";
      document.getElementById("two1").style.display = "block";
      document.getElementById("two2").style.display = "block";
      document.getElementById("four1").style.display = "block";
      document.getElementById("four2").style.display = "block";
      document.getElementById("six1").style.display = "block";
      document.getElementById("six2").style.display = "block";

      break;
  }
  /*start game*/
  if (document.getElementById("turn").innerHTML != "") {
    /*2 players*/

    if (playRed + playGreen + playYellow + playBlue == 2) {
      if (count % 2 == 0) {
        document.getElementById("turn").innerHTML = "Player 1";
      } else {
        document.getElementById("turn").innerHTML = "Player 2";
      }
      /*player 1*/
      /*moving x*/
      /*1. player*/
      if (count % 2 == 1) {
        if (player1 == "red") {
          moveRed();
        }
        if (player1 == "green") {
          moveGreen();
        }
        if (player1 == "yellow") {
          moveYellow();
        }
      }
      /*2. player*/

      if (count % 2 == 0) {
        if (player2 == "green") {
          moveGreen();
        }
        if (player2 == "yellow") {
          moveYellow();
        }
        if (player2 == "blue") {
          moveBlue();
        }
      }
    }
    /*3 players*/

    if (playRed + playGreen + playYellow + playBlue == 3) {
      /* 1.player*/
      if (count % 3 == 1) {
        document.getElementById("turn").innerHTML = "Player 2";
        if (player1 == "red") {
          moveRed();
        }
        if (player1 == "green") {
          moveGreen();
        }
        if (player1 == "yellow") {
          moveYellow();
        }
      }
      if (count % 3 == 2) {
        document.getElementById("turn").innerHTML = "Player 3";
        if (player2 == "red") {
          moveRed();
        }
        if (player2 == "green") {
          moveGreen();
        }
        if (player2 == "yellow") {
          moveYellow();
        }
        if (player2 == "blue") {
          moveBlue();
        }
      }
      if (count % 3 == 0) {
        document.getElementById("turn").innerHTML = "Player 1";
        if (player3 == "yellow") {
          moveYellow();
        }
        if (player3 == "blue") {
          moveBlue();
        }
      }
    }
    /*4 players*/

    if (playRed + playGreen + playYellow + playBlue == 4) {
      document.getElementById("turn").innerHTML = "Player 2";
      if (count % 4 == 1) {
        moveRed();
      }
      if (count % 4 == 2) {
        document.getElementById("turn").innerHTML = "Player 3";
        moveGreen();
      }
      if (count % 4 == 3) {
        document.getElementById("turn").innerHTML = "Player 4";
        moveYellow();
      }
      if (count % 4 == 0) {
        document.getElementById("turn").innerHTML = "Player 1";
        moveBlue();
      }
    }
  }
}

function player() {
  /*no player selected*/

  if (playRed == 0 && playGreen == 0 && playYellow == 0 && playBlue == 0) {
    document.getElementById("player1").innerHTML = "";
    document.getElementById("player2").innerHTML = "";
    document.getElementById("player3").innerHTML = "";
    document.getElementById("player4").innerHTML = "";
    player1 = "";
    player2 = "";
    player3 = "";
    player4 = "";
  }
  /*1. Player*/

  if (playRed == 1 && playGreen == 0 && playYellow == 0 && playBlue == 0) {
    document.getElementById("player1").innerHTML = "Player 1: Red";
    document.getElementById("player2").innerHTML = "";
    document.getElementById("player3").innerHTML = "";
    document.getElementById("player4").innerHTML = "";
    player1 = "red";
    player2 = "";
    player3 = "";
    player4 = "";
  }
  if (playRed == 0 && playGreen == 1 && playYellow == 0 && playBlue == 0) {
    document.getElementById("player1").innerHTML = "Player 1: Green";
    document.getElementById("player2").innerHTML = "";
    document.getElementById("player3").innerHTML = "";
    document.getElementById("player4").innerHTML = "";
    player1 = "green";
    player2 = "";
    player3 = "";
    player4 = "";
  }
  if (playRed == 0 && playGreen == 0 && playYellow == 1 && playBlue == 0) {
    document.getElementById("player1").innerHTML = "Player 1: Yellow";
    document.getElementById("player2").innerHTML = "";
    document.getElementById("player3").innerHTML = "";
    document.getElementById("player4").innerHTML = "";
    player1 = "yellow";
    player2 = "";
    player3 = "";
    player4 = "";
  }
  if (playRed == 0 && playGreen == 0 && playYellow == 0 && playBlue == 1) {
    document.getElementById("player1").innerHTML = "Player 1: Blue";
    document.getElementById("player2").innerHTML = "";
    document.getElementById("player3").innerHTML = "";
    document.getElementById("player4").innerHTML = "";
    player1 = "blue";
    player2 = "";
    player3 = "";
    player4 = "";
  }
  /*  2. player*/
  if (playRed == 1 && playGreen == 1 && playYellow == 0 && playBlue == 0) {
    document.getElementById("player1").innerHTML = "Player 1: Red";
    document.getElementById("player2").innerHTML = "Player 2: Green";
    document.getElementById("player3").innerHTML = "";
    document.getElementById("player4").innerHTML = "";
    player1 = "red";
    player2 = "green";
    player3 = "";
    player4 = "";
  }
  if (playRed == 1 && playGreen == 0 && playYellow == 1 && playBlue == 0) {
    document.getElementById("player1").innerHTML = "Player 1: Red";
    document.getElementById("player2").innerHTML = "Player 2: Yellow";
    document.getElementById("player3").innerHTML = "";
    document.getElementById("player4").innerHTML = "";
    player1 = "red";
    player2 = "yellow";
    player3 = "";
    player4 = "";
  }
  if (playRed == 1 && playGreen == 0 && playYellow == 0 && playBlue == 1) {
    document.getElementById("player1").innerHTML = "Player 1: Red";
    document.getElementById("player2").innerHTML = "Player 2: Blue";
    document.getElementById("player3").innerHTML = "";
    document.getElementById("player4").innerHTML = "";
    player1 = "red";
    player2 = "blue";
    player3 = "";
    player4 = "";
  }
  if (playRed == 0 && playGreen == 1 && playYellow == 1 && playBlue == 0) {
    document.getElementById("player1").innerHTML = "Player 1: Green";
    document.getElementById("player2").innerHTML = "Player 2: Yellow";
    document.getElementById("player3").innerHTML = "";
    document.getElementById("player4").innerHTML = "";
    player1 = "green";
    player2 = "yellow";
    player3 = "";
    player4 = "";
  }
  if (playRed == 0 && playGreen == 1 && playYellow == 0 && playBlue == 1) {
    document.getElementById("player1").innerHTML = "Player 1: Green";
    document.getElementById("player2").innerHTML = "Player 2: Blue";
    document.getElementById("player3").innerHTML = "";
    document.getElementById("player4").innerHTML = "";
    player1 = "green";
    player2 = "blue";
    player3 = "";
    player4 = "";
  }
  if (playRed == 0 && playGreen == 0 && playYellow == 1 && playBlue == 1) {
    document.getElementById("player1").innerHTML = "Player 1: Yellow";
    document.getElementById("player2").innerHTML = "Player 2: Blue";
    document.getElementById("player3").innerHTML = "";
    document.getElementById("player4").innerHTML = "";
    player1 = "yellow";
    player2 = "blue";
    player3 = "";
    player4 = "";
  }
  /* 3. player*/
  if (playRed == 1 && playGreen == 1 && playYellow == 1 && playBlue == 0) {
    document.getElementById("player1").innerHTML = "Player 1: Red";
    document.getElementById("player2").innerHTML = "Player 2: Green";
    document.getElementById("player3").innerHTML = "Player 3: Yellow";
    document.getElementById("player4").innerHTML = "";
    player1 = "red";
    player2 = "green";
    player3 = "yellow";
    player4 = "";
  }
  if (playRed == 1 && playGreen == 1 && playYellow == 0 && playBlue == 1) {
    document.getElementById("player1").innerHTML = "Player 1: Red";
    document.getElementById("player2").innerHTML = "Player 2: Green";
    document.getElementById("player3").innerHTML = "Player 3: Blue";
    document.getElementById("player4").innerHTML = "";
    player1 = "red";
    player2 = "green";
    player3 = "blue";
    player4 = "";
  }
  if (playRed == 1 && playGreen == 0 && playYellow == 1 && playBlue == 1) {
    document.getElementById("player1").innerHTML = "Player 1: Red";
    document.getElementById("player2").innerHTML = "Player 2: Yellow";
    document.getElementById("player3").innerHTML = "Player 3: Blue";
    document.getElementById("player4").innerHTML = "";
    player1 = "red";
    player2 = "yellow";
    player3 = "blue";
    player4 = "";
  }
  if (playRed == 0 && playGreen == 1 && playYellow == 1 && playBlue == 1) {
    document.getElementById("player1").innerHTML = "Player 1: Green";
    document.getElementById("player2").innerHTML = "Player 2: Yellow";
    document.getElementById("player3").innerHTML = "Player 3: Blue";
    document.getElementById("player4").innerHTML = "";
    player1 = "green";
    player2 = "yellow";
    player3 = "blue";
    player4 = "";
  }
  /* 4. player*/
  if (playRed == 1 && playGreen == 1 && playYellow == 1 && playBlue == 1) {
    document.getElementById("player1").innerHTML = "Player 1: Red";
    document.getElementById("player2").innerHTML = "Player 2: Green";
    document.getElementById("player3").innerHTML = "Player 3: Yellow";
    document.getElementById("player4").innerHTML = "Player 4: Blue";
    player1 = "red";
    player2 = "green";
    player3 = "yellow";
    player4 = "blue";
  }
}

function start() {
  /*only 1 player -> error*/
  if (playRed + playGreen + playYellow + playBlue <= 1) {
    alert("Choose at least 2 players");
  }
  document.getElementById("turn").innerHTML = "Player 1";
  document.getElementById("winner").innerHTML = "";
  count = 0;
  if (player1 == "red") {
    if (window.innerWidth > 1000) {
      document.getElementById("startRed").style.left = 405 + "px";
      document.getElementById("startRed").style.top = 15 + "px";
    } else {
      document.getElementById("startRed").style.left = 105 + "px";
      document.getElementById("startRed").style.top = 15 + "px";
    }
  }
  if (player2 == "green" || player1 == "green") {
    if (window.innerWidth > 1000) {
      document.getElementById("startGreen").style.left = 425 + "px";
      document.getElementById("startGreen").style.top = 15 + "px";
    } else {
      document.getElementById("startGreen").style.left = 125 + "px";
      document.getElementById("startGreen").style.top = 15 + "px";
    }
  }
  if (player2 == "yellow" || player1 == "yellow" || player3 == "yellow") {
    if (window.innerWidth > 1000) {
      document.getElementById("startYellow").style.left = 405 + "px";
      document.getElementById("startYellow").style.top = 35 + "px";
    } else {
      document.getElementById("startYellow").style.left = 105 + "px";
      document.getElementById("startYellow").style.top = 35 + "px";
    }
  }
  if (player2 == "blue" || player3 == "blue" || player4 == "blue") {
    if (window.innerWidth > 1000) {
      document.getElementById("startBlue").style.left = 425 + "px";
      document.getElementById("startBlue").style.top = 35 + "px";
    } else {
      document.getElementById("startBlue").style.left = 125 + "px";
      document.getElementById("startBlue").style.top = 35 + "px";
    }
  }
}
function startPlay(){
      document.getElementById("startRed").style.left = 405 + "px";
      document.getElementById("startRed").style.top = 15 + "px";
      document.getElementById("startGreen").style.left = 425 + "px";
      document.getElementById("startGreen").style.top = 15 + "px";
      document.getElementById("startYellow").style.left = 405 + "px";
      document.getElementById("startYellow").style.top = 35 + "px";
      document.getElementById("startBlue").style.left = 425 + "px";
      document.getElementById("startBlue").style.top = 35 + "px";
}