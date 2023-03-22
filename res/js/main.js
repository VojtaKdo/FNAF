const play = document.getElementById("play");
const settings = document.getElementById("settings");
const gameName = document.getElementById("gameName");
const mainMenu = document.getElementById("mainMenu");

const mapImage = document.getElementById("mapImage");
const map = document.getElementById("map");

const moveLeft = document.getElementById("moveLeft");
const moveRight = document.getElementById("moveRight");

const camera = document.getElementById("camera");
const static = document.getElementById("static");
const camera1 = document.getElementById("camera1");
const camera2 = document.getElementById("camera2");
const camera3 = document.getElementById("camera3");
const camera4 = document.getElementById("camera4");
const camera5 = document.getElementById("camera5");
const cameraButton = document.getElementById("cameraButton");
const cameraButton1 = document.getElementById("cameraButton1");
const cameraButton2 = document.getElementById("cameraButton2");
const cameraButton3 = document.getElementById("cameraButton3");
const cameraButton4 = document.getElementById("cameraButton4");
const cameraButton5 = document.getElementById("cameraButton5");
const cameraOff = document.getElementById("cameraOff");
const cam = document.getElementById("cam");
const camBack = document.getElementById("camBack");

const animatronik = document.getElementById("animatronik");
const eyesSound = document.getElementById("eyesSound");

const clock = document.getElementById("clock");

let posA = 4;
let difA = 40;
let posB = 5;
let difB = 40;
let difD = 20;
let cameraOn = 0; //is camera open?
let cameraPosition = 1;
let lDoor = 0; //1=closed; 0=open
let rDoor = 0;
let random = 0;
let dead = 0; //1=dead
let lightsOff = 0; //0= lights are on
let time = 0;
let power = 100;
let usage = 1;
let powerTime = 0

//game systems
play.onclick=()=>{
setInterval(() => {
  if (dead == 0) {
    time++;
    if (time < 6) {
      clock.innerHTML = "12:" + time + "0";
    } else if (time < 12) {
      clock.innerHTML = "1:" + (time - 6) + "0";
    } else if (time < 18) {
      clock.innerHTML = "2:" + (time - 12) + "0";
    } else if (time < 24) {
      clock.innerHTML = "3:" + (time - 18) + "0";
    } else if (time < 30) {
      clock.innerHTML = "4:" + (time - 24) + "0";
    } else if (time < 36) {
      clock.innerHTML = "5:" + (time - 30) + "0";
    } else {
      console.log("You won!!!");
      clearInterval();
    }
  }
}, 60000);
}
setInterval(() => {
  if (powerTime+usage<10) {
    powerTime+=usage
  }else{
    powerTime+=usage
    powerTime-=10
    power--
    //update power %
  }
}, 1000);

//player movement

let loc = 4;
let back = 3;
function backDoor() {}

function moveL() {
  loc--;
  if (loc == 3) {
    moveLeft.style.display = "none";
    cam.style.display = "none";
    camera.style.display = "none";
    document.body.style.backgroundImage = "url(./res/css/doors.png)";
    if (posB == 0) {
      //jumpscare B
      dead = 1;
      console.log("You are fucking dead L");
    }
    controlPosition = setInterval(() => {
      if (posB == 0.1) {
      } else if (posB != 0.1) {
        setTimeout(() => {
          animatronik.style.display = "none";
          clearInterval(controlPosition);
        }, 0);
      }
    }, 1);
  }
  if (loc == 4) {
    moveRight.style.display = "block";
    moveLeft.style.display = "block";
    cam.style.display = "block";
    camera.style.display = "block";
    document.body.style.backgroundImage = "url(./res/css/mainOffice.png)";
    Spawn = setInterval(() => {
      if (posB == 0.1) {
        animatronik.style.display = "none";
      } else if (posB != 0.1) {
        clearInterval(Spawn);
      }
    }, 1);
  }
}
function moveR() {
  loc++;
  if (loc == 5) {
    moveRight.style.display = "none";
    cam.style.display = "none";
    camera.style.display = "none";
    animatronik.style.display = "none";
    document.body.style.backgroundImage = "url(./res/css/doors.png)";
    if (posA == 0) {
      //jumpscare A
      dead = 1;
      console.log("You are fucking dead L");
      animatronik.style.display = "none";
    }
  }
  if (loc == 4) {
    moveRight.style.display = "block";
    moveLeft.style.display = "block";
    cam.style.display = "block";
    camera.style.display = "block";
    animatronik.style.display = "none";
    document.body.style.backgroundImage = "url(./res/css/mainOffice.png)";
  }
}

function cams() {
  back--;
  if (back == 2) {
    moveRight.style.display = "none";
    moveLeft.style.display = "none";
    cam.style.display = "none";
    camera.style.display = "none";
    document.body.style.backgroundImage = "url(./res/css/darkDoor.png)";
    camBack.style.display = "block";
  }
}
function camsBack() {
  back++;
  if (back == 3) {
    moveRight.style.display = "block";
    moveLeft.style.display = "block";
    cam.style.display = "block";
    camera.style.display = "block";
    document.body.style.backgroundImage = "url(./res/css/mainOffice.png)";
    camBack.style.display = "none";
  }
}

function staticEffect() {
  document.body.style.background = "url(./res/img/static.gif)";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
  setTimeout(() => {
    document.body.style.background = "gray";
  }, 300);
}

moveLeft.onmouseover = () => {
  moveL();
};
moveRight.onmouseover = () => {
  moveR();
};
cam.onmousedown = () => {
  cams();
  console.log(back);
};
camBack.onmousedown = () => {
  camsBack();
  console.log(back);
};

//animatronic movement

let mathB = 0;
function moveBmath() {
  random = Math.random();
  mathB = 100000 / ((random/1.3) * difB);
  console.log("B timer: " + mathB);
  moveBtimeout(mathB);
}

function moveBtimeout(timeout) {
  setTimeout(() => {
    moveB();
    console.log("B moved to " + posB);
    cameraReload();
    moveBmath();
  }, timeout);
}

let mathA = 0;
function moveAmath() {
  random = Math.random();
  mathA = 100000 / (random * difA);
  console.log("A timer: " + mathA);
  moveAtimeout(mathA);
}

function moveAtimeout(timeout) {
  setTimeout(() => {
    moveA();
    console.log("A moved to " + posA);
    cameraReload();
    moveAmath();
  }, timeout);
}

function spawnEyes() {
  console.log("Eyes has spawned!");
  eyesSound.play();
  setTimeout(() => {
    if (lightsOff == 0) {
      console.log("You fucking died L");
      //Eyes jumpscare
    } else {
      //Eyes appears
      setTimeout(() => {
        if (lightsOff == 0) {
          console.log("You fucking died L");
          //Eyes jumpscare
        } else {
          //Eyes dissapears
        }
      }, 250);
    }
  }, 5000);
}

function moveB() {
  if (posB == 5) {
    random = Math.random();
    if (random >= 0.2) {
      posB = 1;
    }
  } else if (posB == 1) {
    random = Math.random();
    if (random >= 0.3) {
      posB = 0.1; //0.1=left door
    }
  } else if (posB == 0.1) {
    if (lDoor == 0) {
      posB = 0; //0=office
      if (loc == 3) {
        //jumpscare B
        dead = 1;
        console.log("You are fucking dead L");
      }
      setTimeout(() => {
        if (dead == 0) {
          if (cameraOn == 1) {
            cameraOn = 0;
          }
          //jumpscare B
          dead = 1;
          console.log("You are fucking dead L");
        }
      }, 3000);
    } else {
      random = Math.random();
      if (random <= 0.4) {
        posB = 5;
      } else {
        posB = 1;
      }
    }
  }
}

function moveA() {
  if (posA == 4) {
    posA = 2;
  } else if (posA == 3) {
    random = Math.random();
    if (random <= 0.15) {
      posA = 4;
    } else if (random <= 0.55) {
      posA = 2;
    } else {
      posA = 0.3; //0.3=hallway
    }
  } else if (posA == 2) {
    random = Math.random();
    if (random >= 0.15) {
      posA = 0.3;
    } else {
      posA = 3;
    }
  } else if (posA == 0.3) {
    if (random <= 0.1) {
      posA = 3;
    } else if (random <= 0.3) {
      posA = 2;
    } else {
      posA = 0.2; //0.2=right door
    }
  } else if (posA == 0.2) {
    if (rDoor == 0) {
      posA = 0; //0=office
      if (loc == 5) {
        //jumpscare A
        dead = 1;
        console.log("You are fucking dead L");
      }
      setTimeout(() => {
        if (dead == 0) {
          if (cameraOn == 1) {
            cameraOn = 0;
          }
          //jumpscare A
          dead = 1;
          console.log("You are fucking dead L");
        }
      }, 3000);
    } else {
      random = Math.random();
      if (random <= 0.25) {
        posA = 3;
      } else if (random <= 0.6) {
        posA = 2;
      } else {
        posA = 0.3;
      }
    }
  }
}
play.onclick = () => {
  moveBmath();
  moveAmath();
  setInterval(() => {
    random = Math.random();
    if (random * 10000 <= difD * 2) {
      spawnEyes();
    }
  }, 1000);
  cameraOn = 0;
};

function cameraReload() {
  if (cameraOn == 1) {
    animatronik.style.display = "none";
    if (cameraPosition == 1) {
      if (posB == 1) {
        animatronik.style.display = "block";
      }
    } else if (cameraPosition == 2) {
      if (posB == 2) {
        animatronik.style.display = "block";
      }
    } else if (cameraPosition == 3) {
      if (posB == 3) {
        animatronik.style.display = "block";
      }
    } else if (cameraPosition == 4) {
      if (posB == 4) {
        animatronik.style.display = "block";
      }
    } else if (cameraPosition == 5) {
      if (posB == 5) {
        animatronik.style.display = "block";
      }
    } else {
      animatronik.style.display = "none";
    }
  } else {
    animatronik.style.display = "none";
  }
}

//Camera
camera.onmouseenter = () => {
  camera.style.display = "none";
  moveRight.style.display = "none";
  moveLeft.style.display = "none";
  camBack.style.display = "none";
  cam.style.display = "none";
  document.body.style.background = "url(./res/img/static.gif)";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
  setTimeout(() => {
    mapImage.style.display = "inline-block";
    cameraOff.style.display = "inline-block";
    camera1.style.display = "block";
    cameraButton.style.display = "block";
    document.body.style.background = "gray";
    static.style.display = "none";
  }, 300);
  cameraReload();
  cameraOn = 1;
  clock.style.display = "none";
};

cameraOff.onmouseenter = () => {
  cameraOff.style.display = "none";
  camera1.style.display = "none";
  camera2.style.display = "none";
  camera3.style.display = "none";
  camera4.style.display = "none";
  camera5.style.display = "none";
  mapImage.style.display = "none";
  cameraButton.style.display = "none";
  animatronik.style.display = "none";
  document.body.style.background = "url(./res/img/static.gif)";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
  setTimeout(() => {
    camera.style.display = "block";
    moveRight.style.display = "block";
    moveLeft.style.display = "block";
    camBack.style.display = "none";
    cam.style.display = "block";
    clock.style.display = "block";
    document.body.style.background = "gray";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundImage = "url(./res/css/mainOffice.png)";
    static.style.display = "none";
  }, 300);
  cameraOn = 0;
};

cameraButton1.onclick = () => {
  staticEffect();
  camera1.style.display = "block";
  camera2.style.display = "none";
  camera3.style.display = "none";
  camera4.style.display = "none";
  camera5.style.display = "none";
  animatronik.style.display = "none";
  cameraPosition = 1;
  cameraReload();
};

cameraButton2.onclick = () => {
  staticEffect();
  camera2.style.display = "block";
  camera1.style.display = "none";
  camera3.style.display = "none";
  camera4.style.display = "none";
  camera5.style.display = "none";
  animatronik.style.display = "none";
  cameraPosition = 2;
  cameraReload();
};

cameraButton3.onclick = () => {
  staticEffect();
  camera3.style.display = "block";
  camera1.style.display = "none";
  camera2.style.display = "none";
  camera4.style.display = "none";
  camera5.style.display = "none";
  animatronik.style.display = "none";
  cameraPosition = 3;
  cameraReload();
};

cameraButton4.onclick = () => {
  staticEffect();
  camera4.style.display = "block";
  camera1.style.display = "none";
  camera2.style.display = "none";
  camera3.style.display = "none";
  camera5.style.display = "none";
  animatronik.style.display = "none";
  cameraPosition = 4;
  cameraReload();
};

cameraButton5.onclick = () => {
  staticEffect();
  camera5.style.display = "block";
  camera1.style.display = "none";
  camera2.style.display = "none";
  camera3.style.display = "none";
  camera4.style.display = "none";
  animatronik.style.display = "none";
  cameraPosition = 5;
  cameraReload();
};

play.onclick = () => {
  camera.style.display = "block";
  moveRight.style.display = "block";
  moveLeft.style.display = "block";
  camBack.style.display = "none";
  cam.style.display = "block";
  clock.style.display = "block";
  document.body.style.background = "gray";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center center";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundAttachment = "fixed";
  document.body.style.backgroundImage = "url(./res/css/mainOffice.png)";
  static.style.display = "none";
  play.style.display = "none";
  settings.style.display = "none";
  gameName.style.display = "none";
  mainMenu.style.display = "none";
  animatronik.style.display = "none";
  moveBmath();
  moveAmath();
  setInterval(() => {
    random = Math.random();
    if (random * 10000 <= difD * 2) {
      spawnEyes();
    }
  }, 1000);
  cameraOn = 0;
};



