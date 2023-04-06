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

const lightButton = document.getElementById("lightButton");
const closeButton = document.getElementById("closeButton");
const openButton = document.getElementById("openButton");
const lightButtonOff = document.getElementById("lightButtonOff");

const animatronik = document.getElementById("animatronik");
const eyesSound = document.getElementById("eyesSound");

const clock = document.getElementById("clock");
const powerCounter = document.getElementById("powerCounter");
const usageDisplay = document.getElementById("usageDisplay");
const powerful = document.getElementById("power");
//Camera popup sound
const cameraopensound = document.getElementById("cameraopensound");
cameraopensound.volume = 0.3;
//Mainmenu sound
const mainmenutheme = document.getElementById("mainmenutheme");
mainmenutheme.volume = 0.3;
//ambience
const fnafambience = document.getElementById("fnafambience");
fnafambience.volume = 0.3;
//door sounds
const doormovesound = document.getElementById("doormovesound");
doormovesound.volume = 0.3;
//turn around sound
const turnaround = document.getElementById("turnaround");
turnaround.volume = 0.6;
//turn back sound
const turnback = document.getElementById("turnback");
turnback.volume = 0.6;
//flashlight sound
const flashlight = document.getElementById("flashlight");
flashlight.volume = 0.6;

//amogus
const amogus = document.getElementById("amogus");
amogus.volume = 0.2;




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
let powerTime = 0;
let lightOn = 0;
let close = 0;
let openDoor = 0;

//game systems

function updateUsage() {
  if (usage == 1) {
    usageDisplay.src = "./res/img/BatteryUsage1.png"
  } else if (usage == 2) {
    usageDisplay.src = "./res/img/BatteryUsage2.png"
  } else if (usage == 3) {
    usageDisplay.src = "./res/img/BatteryUsage3.png"
  } else if (usage == 4) {
    usageDisplay.src = "./res/img/BatteryUsage4.png"
  }
}
function startTime() {
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
  }, 90000);
}
function startPower() {
  setInterval(() => {
  if (dead==0) {
    if (powerTime + usage < 12) {
      powerTime += usage
    } else {
      powerTime += usage
      powerTime -= 12
      power--
      powerCounter.innerHTML = power + "%"
    }
  }
}, 1000);
}

//player movement

let loc = 4;
let back = 3;

//Pohyd doleva
function moveL() {
  loc--;
  if (loc == 3) {
    moveLeft.style.display = "none";
    cam.style.display = "none";
    camera.style.display = "none";
    document.body.style.backgroundImage = "url(./res/css/doors.png)";
    lightButton.style.display = "block";
    closeButton.style.display = "block";
    if(close == 1){
      document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center center";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundAttachment = "fixed";
      document.body.style.background = "url(./res/img/doorsClosed.png)";
    }
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

//Pohyb doprava
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
    lightButton.style.display = "none";
    closeButton.style.display = "none";
    openButton.style.display = "none";
    document.body.style.backgroundImage = "url(./res/css/mainOffice.png)";
  }
}


function cams() {
  back--;
  if (back == 2) {
    turnaround.currentTime = 0;
    turnaround.play();
    moveRight.style.display = "none";
    moveLeft.style.display = "none";
    cam.style.display = "none";
    camera.style.display = "none";
    document.body.style.backgroundImage = "url(./res/css/darkDoor.png)";
    camBack.style.display = "block";
  }
}

//Venta
function camsBack() {
  back++;
  if (back == 3) {;
    turnback.currentTime = 0;
    turnback.play();
    moveRight.style.display = "block";
    moveLeft.style.display = "block";
    cam.style.display = "block";
    camera.style.display = "block";
    document.body.style.backgroundImage = "url(./res/css/mainOffice.png)";
    camBack.style.display = "none";
  }
}


//Animace kamer
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
  mathB = 100000 / ((random / 1.3) * difB);
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



//camera reload
function cameraReload() {
  if (cameraOn == 1) {
    animatronik.style.display = "none";
    if (cameraPosition == 1) {
      cameraopensound.play();
      if (posB == 1) {
        animatronik.style.display = "block";
      }
    } else if (cameraPosition == 2) {
      cameraopensound.play();
      if (posB == 2) {
        animatronik.style.display = "block";
      }
    } else if (cameraPosition == 3) {
      cameraopensound.play();
      if (posB == 3) {
        animatronik.style.display = "block";
      }
    } else if (cameraPosition == 4) {
      cameraopensound.play();
      if (posB == 4) {
        animatronik.style.display = "block";
      }
    } else if (cameraPosition == 5) {
      cameraopensound.play();
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
  cameraopensound.play();
  usage++
  updateUsage();
  cameraopensound.currentTime = "0";
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
  cameraopensound.play();
  usage--
  updateUsage();
  cameraopensound.currentTime = "0";
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
  cameraopensound.play();
  cameraopensound.currentTime = "0";
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
  cameraopensound.play();
  cameraopensound.currentTime = "0";
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
  cameraopensound.play();
  cameraopensound.currentTime = "0";
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
  cameraopensound.play();
  cameraopensound.currentTime = "0";
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
  cameraopensound.play();
  cameraopensound.currentTime = "0";
};
function closeDoors(){
  console.log(close);
  doormovesound.currentTime = 0;
  doormovesound.play();
  document.body.style.background = "url(./res/img/doorsClosed.png)";
}

function openDoors(){
  console.log(close);
  doormovesound.currentTime = 0;
  doormovesound.play();
  document.body.style.background = "url(./res/css/doors.png)";
}
closeButton.onclick = () => {
  closeButton.style.display = "none";
  doormovesound.play();
  openButton.style.display = "block";
  lightButton.style.display = "none";
  animatronik.style.display = "none";
  closeDoors();
  close = 1;
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center center";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundAttachment = "fixed";
  }
openButton.onclick = () => {
    closeButton.style.display = "block";
    doormovesound.play();
    openButton.style.display = "none";
    lightButton.style.display = "block";
    openDoors();
    close=0;
    document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center center";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundAttachment = "fixed";
    }



lightButton.onclick = () => {
  flashlight.currentTime = 0;
  flashlight.play();
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center center";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundAttachment = "fixed";

  lightOn += 1;
  setTimeout(()=>{
    lightOn -= 1;
  },0)
  if (lightOn == 1) {
    document.body.style.background = "url(./res/img/doorsLight.png)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
  }
  else if (lightOn == 0) {
    setTimeout(()=>{
      document.body.style.background = "url(./res/css/doors.png)";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundPosition = "center center";
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundAttachment = "fixed";
    },1)
  }
  if (posB == 0.1 && loc == 3 && lightOn == 1) {
    animatronik.style.display = "block";
  }
  else{
    animatronik.style.display = "none";
  }
}


//Main menu
play.onclick = () => {
  startTime();
  startPower();
  fnafambience.play();
  camera.style.display = "block";
  moveRight.style.display = "block";
  moveLeft.style.display = "block";
  camBack.style.display = "none";
  cam.style.display = "block";
  clock.style.display = "block";
  powerful.style.display = "block";
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

play.onmouseover = () => {
  play.innerHTML = `>> New Game`
  play.style.width = "400px"
}

play.onmouseleave = () => {
  play.innerHTML = `New Game`
  play.style.width = "310px"
}

settings.onmouseover = () => {
  settings.innerHTML = `>> Settings`
  settings.style.width = "310px"
}

settings.onmouseleave = () => {
  settings.innerHTML = `Settings`
  settings.style.width = "220px"
}



