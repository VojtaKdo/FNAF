const play = document.getElementById("play");
const settings = document.getElementById("settings");
const backSettings = document.getElementById("backSettings");
const playCustom = document.getElementById("playCustom");
const deathScreen = document.getElementById("deathScreen");
const death = document.getElementById("death");
const backMenu = document.getElementById("backMenu");
const difficultySettings = document.getElementById("difficultySettings");
const difficultyScrapper = document.getElementById("difficultyScrapper");
const difficultySlaughter = document.getElementById("difficultySlaughter");
const difficultyHangman = document.getElementById("difficultyHangman");
const difficultyEyes = document.getElementById("difficultyEyes");
const difficultyCounter = document.getElementById("difficultyCounter");
const difficultyCounterScrapper = document.getElementById(
  "difficultyCounterScrapper"
);
const difficultyCounterSlaughter = document.getElementById(
  "difficultyCounterSlaughter"
);
const difficultyCounterHangman = document.getElementById(
  "difficultyCounterHangman"
);
const difficultyCounterEyes = document.getElementById("difficultyCounterEyes");
const decreaseDiff = document.getElementsByClassName("decreaseDiff");
const increaseDiff = document.getElementsByClassName("increaseDiff");
const numberDiff = document.getElementsByClassName("numberDiff");
const obalDiff = document.getElementsByClassName("obalDiff");
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
const amogusak = document.getElementById("amogusak");
const energy = document.getElementById("energy");
const energyBack = document.getElementById("energyBack");
const cameraButton = document.getElementById("cameraButton");
const cameraButton1 = document.getElementById("cameraButton1");
const cameraButton2 = document.getElementById("cameraButton2");
const cameraButton3 = document.getElementById("cameraButton3");
const cameraButton4 = document.getElementById("cameraButton4");
const cameraButton5 = document.getElementById("cameraButton5");
const cameraOff = document.getElementById("cameraOff");
const cam = document.getElementById("cam");
const camBack = document.getElementById("camBack");
const map1 = document.getElementById("map1");
const map2 = document.getElementById("map2");
const map3 = document.getElementById("map3");
const map4 = document.getElementById("map4");
const map5 = document.getElementById("map5");

const lightButton = document.getElementById("lightButton");
const lightButtonBack = document.getElementById("lightButtonBack");
const closeButton = document.getElementById("closeButton");
const closeButtonRight = document.getElementById("closeButtonRight");
const openButton = document.getElementById("openButton");
const openButtonRight = document.getElementById("openButtonRight");
const lightButtonOff = document.getElementById("lightButtonOff");

const animatronik = document.getElementById("animatronik");
const eyesSound = document.getElementById("eyesSound");

const clock = document.getElementById("clock");
const powerCounter = document.getElementById("powerCounter");
const usageDisplay = document.getElementById("usageDisplay");
const powerful = document.getElementById("power");
const turnoffmachine = document.getElementById("turnoffmachine");
const hangman = document.getElementById("hangman");
const scrapperJumpscare = document.getElementById("scrapperJumpscare");
const button = document.getElementById("button");
button.volume = 0.3;

const slaughtermovesound = document.getElementById("slaughtermovesound");
slaughtermovesound.volume = 0.3;
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
const robotFootsteps = document.getElementById("robotFootsteps");
robotFootsteps.volume = 0.3;

const energyDown = document.getElementById("energyDown");

const energyUp = document.getElementById("energyUp");

const radio = document.getElementById("radio");

const heartbeat = document.getElementById("heartbeat");

const appear = document.getElementById("appear");
//amogus
const amogus = document.getElementById("amogus");
const jumpscare = document.getElementById("jumpscare");

let posA = 4;
let difA = 1;
let posB = 5;
let difB = 1;
let posC = 4;
let difC = 1;
let difD = 1;
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
let lightOnBack = 0;
let close = 0;
let openDoor = 0;
let gamemode = 0; //1=custom night
let counterA = 1;
let counterB = 1;
let counterC = 1;
let counterD = 1;

//game systems

function updateUsage() {
  if (usage == 1) {
    usageDisplay.src = "./res/img/BatteryUsage1.png";
  } else if (usage == 2) {
    usageDisplay.src = "./res/img/BatteryUsage2.png";
  } else if (usage == 3) {
    usageDisplay.src = "./res/img/BatteryUsage3.png";
  } else if (usage == 4) {
    usageDisplay.src = "./res/img/BatteryUsage4.png";
  } else {
    usageDisplay.src = "./res/img/BatteryUsage0.png";
  }
}
function startTime() {
  if (gamemode == 0) {
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
    }, 15000);
  } else {
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
    }, 5000);
  }
}
function changeDif() {
  if (time == 6) {
    difA = 5;
    difB = 5;
    difC = 4;
    difD = 2;
  } else if (time == 12) {
    difA = 8;
    difB = 8;
    difC = 6;
    difD = 3;
  } else if (time == 18) {
    difA = 12;
    difB = 12;
    difC = 10;
    difD = 5;
  } else if (time == 24) {
    difA = 15;
    difB = 15;
    difC = 14;
    difD = 7;
  } else if (time == 30) {
    difA = 18;
    difB = 18;
    difC = 16;
    difD = 8;
  }
}
function startPower() {
  if (gamemode == 0) {
    powerGamemode0 = setInterval(() => {
      if (dead == 0) {
        if (power > 0) {
          if (powerTime + usage < 10) {
            powerTime += usage;
          } else {
            powerTime += usage;
            powerTime -= 10;
            power--;
            powerCounter.innerHTML = power + "%";
          }
        } else {
          powerEnergy();
          energyDown.play();
          energyUp.pause();
          energyUp.currentTime = 1;
          energyDown.volume = 0.5;
          clearInterval();
        }
      }
    }, 1000);
  } else {
    powerGamemode1 = setInterval(() => {
      if (dead == 0) {
        if (power > 0) {
          if (powerTime + usage < 3) {
            powerTime += usage;
          } else {
            powerTime += usage;
            powerTime -= 3;
            power--;
            powerCounter.innerHTML = power + "%";
          }
        } else {
          powerEnergy();
          energyDown.play();
          energyUp.pause();
          energyUp.currentTime = 1;
          energyDown.volume = 0.5;
          clearInterval();
        }
      }
    }, 1000);
  }
}
//energy off
function powerEnergy() {
  document.body.style.background = "url(./res/img/darkOffice.png)";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center center";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundAttachment = "fixed";
  moveLeft.style.display = "none";
  moveRight.style.display = "none";
  cam.style.display = "none";
  camera.style.display = "none";
  energy.style.display = "none";
  energyBack.style.display = "block";
  cameraButton.style.display = "none";
  openButton.style.display = "none";
  openButtonRight.style.display = "none";
  closeButton.style.display = "none";
  closeButtonRight.style.display = "none";
  lightButton.style.display = "none";
  lightButtonBack.style.display = "none";
  lDoor = 0;
  rDoor = 0;
  usage = 0;
  lightsOff = 1;
  updateUsage();
}
function ded() {
  if (lightsOff == 0) {
    document.body.style.background = "url(./res/css/mainOffice.png)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
  }
  if (lightsOff == 1) {
    document.body.style.background = "url(./res/img/darkOffice.png)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
  }
  moveLeft.style.display = "none";
  moveRight.style.display = "none";
  cam.style.display = "none";
  camBack.style.display = "none";
  camera.style.display = "none";
  energy.style.display = "none";
  energyBack.style.display = "none";
  cameraButton.style.display = "none";
  openButton.style.display = "none";
  openButtonRight.style.display = "none";
  closeButton.style.display = "none";
  closeButtonRight.style.display = "none";
  lightButton.style.display = "none";
  lightButtonBack.style.display = "none";
  camera.style.display = "none";
  cameraOff.style.display = "none";
  cameraButton.style.display = "none";
  amogusak.style.display = "none";
  energyDown.style.display = "none";
  clock.style.display = "none";
  powerCounter.style.display = "none";
  usageDisplay.style.display = "none";
  map1.style.display = "none";
  map2.style.display = "none";
  map3.style.display = "none";
  map4.style.display = "none";
  map5.style.display = "none";
  camera1.style.display = "none";
  camera2.style.display = "none";
  camera3.style.display = "none";
  camera4.style.display = "none";
  camera5.style.display = "none";
  heartbeat.pause();
}

function powerEnergyBack() {
  document.body.style.background = "url(./res/css/mainOffice.png)";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center center";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundAttachment = "fixed";
  moveLeft.style.display = "block";
  moveRight.style.display = "block";
  cam.style.display = "block";
  camera.style.display = "block";
  energy.style.display = "block";
  energyBack.style.display = "none";
  usage++;
  lightsOff = 0;
  updateUsage();
}

energy.onclick = () => {
  powerEnergy();
  energyDown.play();
  energyUp.pause();
  energyUp.currentTime = 1;
  energyDown.volume = 0.5;
  fnafambience.pause();
  heartbeat.currentTime = 0;
  heartbeat.play();
};
energyBack.onclick = () => {
  if (power > 0) {
    powerEnergyBack();
    energyUp.play();
    energyDown.pause();
    energyDown.currentTime = 0;
    energyUp.volume = 1;
    fnafambience.play();
    heartbeat.pause();
  }
};

//player movement

let loc = 4;
let back = 3;

//Pohyd doleva
function moveL() {
  loc--;
  if (loc == 3) {
    moveLeft.style.display = "none";
    /* lightButton.onmousedown = () => {
        moveRight.style.display = "none";
      }
      lightButton.onmouseup = () => {
        moveRight.style.display = "block";
      }*/
    cam.style.display = "none";
    camera.style.display = "none";
    lightButton.style.display = "block";
    amogusak.style.display = "none";
    energy.style.display = "none";
    if (lDoor == 1) {
      closeButton.style.display = "none";
      openButton.style.display = "block";
      document.body.style.background = "url(./res/img/doorsClosed.png)";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundPosition = "center center";
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundAttachment = "fixed";
      lightButton.style.display = "none";
    } else if (lDoor == 0) {
      closeButton.style.display = "block";
      openButton.style.display = "none";
      document.body.style.background = "url(./res/css/doors.png)";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundPosition = "center center";
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundAttachment = "fixed";
      lightButton.style.display = "block";
    }

    if (posB == 0) {
      //jumpscare B
      dead = 1;
      fnafambience.pause();
      jumpscare.currentTime = 0.3;
      jumpscare.play();
      ded();
      console.log("You are fucking dead L");
      setTimeout(() => {
        deathScreen.style.display = "flex";
        backMenu.style.display = "flex";
        document.body.style.background = "url(./res/img/static.gif)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center center";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundAttachment = "fixed";
      }, 1300);
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
    closeButtonRight.style.display = "none";
    openButton.style.display = "none";
    openButtonRight.style.display = "none";
    amogusak.style.display = "block";
    energy.style.display = "block";
    document.body.style.backgroundImage = "url(./res/css/mainOffice.png)";
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
    lightButton.style.display = "block";
    amogusak.style.display = "none";
    energy.style.display = "none";
    if (rDoor == 1) {
      closeButtonRight.style.display = "none";
      openButtonRight.style.display = "block";
      document.body.style.background = "url(./res/img/doorsClosed.png)";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundPosition = "center center";
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundAttachment = "fixed";
      lightButton.style.display = "none";
    } else if (rDoor == 0) {
      closeButtonRight.style.display = "block";
      openButtonRight.style.display = "none";
      document.body.style.background = "url(./res/css/doors.png)";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundPosition = "center center";
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundAttachment = "fixed";
      lightButton.style.display = "block";
    }
    if (posA == 0) {
      //jumpscare A
      dead = 1;
      fnafambience.pause();
      jumpscare.currentTime = 0.3;
      jumpscare.play();
      ded();
      console.log("You are fucking dead L");
      animatronik.style.display = "none";
      setTimeout(() => {
        deathScreen.style.display = "flex";
        backMenu.style.display = "flex";
        document.body.style.background = "url(./res/img/static.gif)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center center";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundAttachment = "fixed";
      }, 1300);
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
    closeButtonRight.style.display = "none";
    openButton.style.display = "none";
    openButtonRight.style.display = "none";
    amogusak.style.display = "block";
    energy.style.display = "block";
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
    energy.style.display = "none";
    energyBack.style.display = "none";
    document.body.style.backgroundImage = "url(./res/css/darkDoor.png)";
    lightButtonBack.style.display = "block";
    camBack.style.display = "block";
  }
}

//Venta
function camsBack() {
  back++;
  if (back == 3) {
    turnback.currentTime = 0;
    turnback.play();
    moveRight.style.display = "block";
    moveLeft.style.display = "block";
    cam.style.display = "block";
    camera.style.display = "block";
    energy.style.display = "block";
    document.body.style.backgroundImage = "url(./res/css/mainOffice.png)";
    camBack.style.display = "none";
    lightButtonBack.style.display = "none";
  }
}

//Animace kamer
function staticEffect() {
  document.body.style.background = "url(./res/img/static.gif)";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
  setTimeout(() => {}, 300);
}

function cameraButtonGone() {
  cameraButton1.style.display = "none";
  cameraButton2.style.display = "none";
  cameraButton3.style.display = "none";
  cameraButton4.style.display = "none";
  cameraButton5.style.display = "none";
  setTimeout(() => {
    cameraButton.style.display = "inline-block";
    cameraButton1.style.display = "inline-block";
    cameraButton2.style.display = "inline-block";
    cameraButton3.style.display = "inline-block";
    cameraButton4.style.display = "inline-block";
    cameraButton5.style.display = "inline-block";
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
let thomas = 0; //1= turning on, 2=on

let mathC = 0;
function moveCmath() {
  random = Math.random();
  mathC = 100000 / ((random / 1.1) * difC);
  if (mathC > 220000 / difC) {
    mathC = 220000 / difC;
  }
  console.log("C timer: " + mathC);
  moveCtimeout(mathC);
}

function moveCtimeout(timeout) {
  if (dead == 0) {
    movementC = setTimeout(() => {
      moveC();
      console.log("C moved to " + posC);
      moveCmath();
    }, timeout);
  }
}

let mathB = 0;
function moveBmath() {
  if (thomas == 2) {
    random = Math.random();
    mathB = 33000 / ((random / 1.3) * (2 * difB));
    if (mathB > 85800 / difB) {
      mathB = 85800 / difB;
    }
    console.log("B timer: " + mathB);
    moveBtimeout(mathB);
  } else {
    random = Math.random();
    mathB = 100000 / ((random / 1.3) * (2 * difB));
    if (mathB > 520000 / difB) {
      mathB = 520000 / difB;
    }
    console.log("B timer: " + mathB);
    moveBtimeout(mathB);
  }
}

function moveBtimeout(timeout) {
  if (dead == 0) {
    movementB = setTimeout(() => {
      moveB();
      
      console.log("B moved to " + posB);
      cameraReload();
      moveBmath();
    }, timeout);
  }
}

function machineBmath() {
  random = Math.random();
  mathThomas = 10000 / ((random / 1.5) * (2 * difB));
  console.log("Machine timer: " + mathThomas);
  thomasTimeout(mathThomas);
}

function thomasTimeout(timeout) {
  if (dead == 0) {
    movemenThomas = setTimeout(() => {
      slaughtermovesound.play();
      turnoffmachine.style.backgroundColor = ("green");
      turnoffmachine.innerHTML = ("Machine is on");
      console.log("Machine is on!");
      thomas = 1;
      setTimeout(() => {
        if (thomas == 0) {
          thomas = 2;
        }
      }, 10000);
    }, timeout);
  }
}

turnoffmachine.onclick = () => {
  if ((thomas = 1)) {
    turnoffmachine.style.backgroundColor = ("red");
    turnoffmachine.innerHTML = ("Machine is off");
    button.play();;
    thomas = 0;
  }
};

let mathA = 0;
function moveAmath() {
  random = Math.random();
  mathA = 100000 / (random * (difA * 2));
  if (mathA > 400000 / difA) {
    mathA = 400000 / difA;
  }
  console.log("A timer: " + mathA);
  moveAtimeout(mathA);
}

function moveAtimeout(timeout) {
  if (dead == 0) {
    movementA = setTimeout(() => {
      moveA();
      console.log("A moved to " + posA);
      cameraReload();
      moveAmath();
    }, timeout);
  }
}

function spawnEyes() {
  if (dead == 0) {
    console.log("Eyes has spawned!");
    eyesSound.play();
    movementD = setTimeout(() => {
      if (lightsOff == 0) {
        dead = 1;
        fnafambience.pause();
        jumpscare.currentTime = 0.3;
        jumpscare.play();
        ded();
        console.log("You fucking died L");
        setTimeout(() => {
          deathScreen.style.display = "flex";
          backMenu.style.display = "flex";
          document.body.style.background = "url(./res/img/static.gif)";
          document.body.style.backgroundRepeat = "no-repeat";
          document.body.style.backgroundPosition = "center center";
          document.body.style.backgroundSize = "cover";
          document.body.style.backgroundAttachment = "fixed";
        }, 1300);
        //Eyes jumpscare
      } else {
        heartbeat.play();
        heartbeat.volume = 0.3;
        document.body.style.background = "url(./res/img/darkOfficeEyes.png)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center center";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundAttachment = "fixed";
        setTimeout(() => {
          if (lightsOff == 0) {
            dead = 1;
            fnafambience.pause();
            jumpscare.currentTime = 0.3;
            jumpscare.play();
            console.log("You fucking died L");
            ded();
            //Eyes jumpscare
            setTimeout(() => {
              backMenu.style.display = "flex";
              deathScreen.style.display = "flex";
              document.body.style.background = "url(./res/img/static.gif)";
              document.body.style.backgroundRepeat = "no-repeat";
              document.body.style.backgroundPosition = "center center";
              document.body.style.backgroundSize = "cover";
              document.body.style.backgroundAttachment = "fixed";
            }, 1300);
          } else {
            document.body.style.background = "url(./res/img/darkOffice.png)";
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundPosition = "center center";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundAttachment = "fixed";
          }
        }, 500);
      }
    }, 5000);
  }
}

function moveC() {
  if (dead == 0) {
    if (posC == 0) {
      dead += 1;
      if (dead == 1) {
        fnafambience.pause();
        jumpscare.currentTime = 0.6;
        jumpscare.play();
        hangman.style.display = "block";
        console.log("You are fucking dead L");
        ded();
        setTimeout(() => {
          hangman.style.display = "none";
          document.body.style.background = "url(./res/img/static.gif)";
          document.body.style.backgroundRepeat = "no-repeat";
          document.body.style.backgroundPosition = "center center";
          document.body.style.backgroundSize = "cover";
          document.body.style.backgroundAttachment = "fixed";
          deathScreen.style.display = "flex";
          backMenu.style.display = "flex";
        }, 1300);
      }
      //Hangman jumpscare
    } else {
      if (back == 2) {
      } else {
        posC--;
        radio.play();
        radio.volume = 1;
      }
    }
  }
}

function moveB() {
  if (dead == 0) {
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
          fnafambience.pause();
          jumpscare.currentTime = 0.3;
          jumpscare.play();
          ded();
          setTimeout(() => {
            deathScreen.style.display = "flex";
            backMenu.style.display = "flex";
            document.body.style.background = "url(./res/img/static.gif)";
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundPosition = "center center";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundAttachment = "fixed";
          }, 1300);
          console.log("You are fucking dead L");
        }
        setTimeout(() => {
          if (dead == 0) {
            if (cameraOn == 1) {
              cameraOn = 0;
            }
            //jumpscare B
            dead = 1;
            fnafambience.pause();
            jumpscare.currentTime = 0.3;
            jumpscare.play();
            ded();
            setTimeout(() => {
              deathScreen.style.display = "flex";
              backMenu.style.display = "flex";
              document.body.style.background = "url(./res/img/static.gif)";
              document.body.style.backgroundRepeat = "no-repeat";
              document.body.style.backgroundPosition = "center center";
              document.body.style.backgroundSize = "cover";
              document.body.style.backgroundAttachment = "fixed";
            }, 1300);
            console.log("You are fucking dead L");
          }
        }, 3000);
      } else {
        robotFootsteps.play();
        robotFootsteps.currentTime = 0;
        random = Math.random();
        if (random <= 0.4) {
          posB = 5;
        } else {
          posB = 1;
        }
      }
    }
  }
}

function moveA() {
  if (posA == 4) {
    posA = 3;
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
        //jumpscare Scrapper
        dead = 1;
        fnafambience.pause();
        jumpscare.currentTime = 0.3;
        jumpscare.play();
        scrapperJumpscare.style.display = "block";
        ded();
        if (dead == 1 && rDoor == 0) {
          setTimeout(() => {
            scrapperJumpscare.style.display = "none";
            document.body.style.background = "url(./res/img/static.gif)";
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundPosition = "center center";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundAttachment = "fixed";
            deathScreen.style.display = "flex";
            backMenu.style.display = "flex";
          }, 1300);
        }
        console.log("You are fucking dead L");
      }
      setTimeout(() => {
        if (dead == 0) {
          if (cameraOn == 1) {
            cameraOn = 0;
          }
          //jumpscare Scrapper
          dead = 1;
          fnafambience.pause();
          jumpscare.currentTime = 0.3;
          jumpscare.play();
          scrapperJumpscare.style.display = "block";
          ded();
          if (dead == 1 && rDoor == 0) {
            setTimeout(() => {
              scrapperJumpscare.style.display = "none";
              document.body.style.background = "url(./res/img/static.gif)";
              document.body.style.backgroundRepeat = "no-repeat";
              document.body.style.backgroundPosition = "center center";
              document.body.style.backgroundSize = "cover";
              document.body.style.backgroundAttachment = "fixed";
              deathScreen.style.display = "flex";
              backMenu.style.display = "flex";
            }, 1300);
          }
          console.log("You are fucking dead L");
        }
      }, 3000);
    }
  } else {
    robotFootsteps.play();
    robotFootsteps.currentTime = 0;
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

//camera reload
function cameraReload() {
  if (cameraOn == 1) {
    animatronik.style.display = "none";
    if (cameraPosition == 1) {
      turnoffmachine.style.display = "none";
      if (posB == 1) {
        setTimeout(() => {
          if (lDoor == 1) {
            document.body.style.background =
              "url(./res/img/camOneSloughterDoor.jpg)";
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundPosition = "center center";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundAttachment = "fixed";
          } else if (lDoor == 0) {
            document.body.style.background =
              "url(./res/img/camOneSloughter.jpg)";
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundPosition = "center center";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundAttachment = "fixed";
          }
        }, 300);
      } else {
        setTimeout(() => {
          if (lDoor == 1) {
            document.body.style.background = "url(./res/img/camOneDoor.jpg)";
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundPosition = "center center";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundAttachment = "fixed";
          } else if (lDoor == 0) {
            document.body.style.background = "url(./res/img/camOne.jpg)";
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundPosition = "center center";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundAttachment = "fixed";
          }
        }, 300);
      }
    } else if (cameraPosition == 2) {
      turnoffmachine.style.display = "none";
      if (posA == 2) {
        setTimeout(() => {
          document.body.style.background = "url(./res/img/camTwoScrapper.png)";
          document.body.style.backgroundRepeat = "no-repeat";
          document.body.style.backgroundPosition = "center center";
          document.body.style.backgroundSize = "cover";
          document.body.style.backgroundAttachment = "fixed";
        }, 300);
      } else {
        setTimeout(() => {
          document.body.style.background = "url(./res/img/camTwo.png)";
          document.body.style.backgroundRepeat = "no-repeat";
          document.body.style.backgroundPosition = "center center";
          document.body.style.backgroundSize = "cover";
          document.body.style.backgroundAttachment = "fixed";
        }, 300);
      }
    } else if (cameraPosition == 3) {
      turnoffmachine.style.display = "none";
      if (posA == 3) {
        setTimeout(() => {
          document.body.style.background =
            "url(./res/img/camThreeScrapper.png)";
          document.body.style.backgroundRepeat = "no-repeat";
          document.body.style.backgroundPosition = "center center";
          document.body.style.backgroundSize = "cover";
          document.body.style.backgroundAttachment = "fixed";
        }, 300);
      } else {
        setTimeout(() => {
          document.body.style.background = "url(./res/img/camThree.png)";
          document.body.style.backgroundRepeat = "no-repeat";
          document.body.style.backgroundPosition = "center center";
          document.body.style.backgroundSize = "cover";
          document.body.style.backgroundAttachment = "fixed";
        }, 300);
      }
    } else if (cameraPosition == 4) {
      turnoffmachine.style.display = "none";

      if (posA == 4) {
        setTimeout(() => {
          document.body.style.background = "url(./res/img/camFourScrapper.png)";
          document.body.style.backgroundRepeat = "no-repeat";
          document.body.style.backgroundPosition = "center center";
          document.body.style.backgroundSize = "cover";
          document.body.style.backgroundAttachment = "fixed";
        }, 300);
      } else {
        setTimeout(() => {
          document.body.style.background = "url(./res/img/camFour.png)";
          document.body.style.backgroundRepeat = "no-repeat";
          document.body.style.backgroundPosition = "center center";
          document.body.style.backgroundSize = "cover";
          document.body.style.backgroundAttachment = "fixed";
        }, 300);
      }
    } else if (cameraPosition == 5) {
      setTimeout(() => {
        turnoffmachine.style.display = "block";
      }, 300);

      if (posB == 5) {
        setTimeout(() => {
          document.body.style.background =
            "url(./res/img/camFiveSloughter.jpg)";
          document.body.style.backgroundRepeat = "no-repeat";
          document.body.style.backgroundPosition = "center center";
          document.body.style.backgroundSize = "cover";
          document.body.style.backgroundAttachment = "fixed";
        }, 300);
      } else{
        setTimeout(() => {
          document.body.style.background = "url(./res/img/camFive.jpg)";
          document.body.style.backgroundRepeat = "no-repeat";
          document.body.style.backgroundPosition = "center center";
          document.body.style.backgroundSize = "cover";
          document.body.style.backgroundAttachment = "fixed";
        }, 300);
      }
    }
  }
}

//Camera
camera.onmouseenter = () => {
  cameraopensound.play();
  usage++;
  updateUsage();
  cameraopensound.currentTime = "0";
  document.body.style.transition = "0s";
  camera.style.display = "none";
  moveRight.style.display = "none";
  moveLeft.style.display = "none";
  camBack.style.display = "none";
  cam.style.display = "none";
  amogusak.style.display = "none";
  energy.style.display = "none";
  document.body.style.background = "url(./res/img/static.gif)";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center center";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundAttachment = "fixed";
  setTimeout(() => {
    cameraOff.style.display = "inline-block";
    cameraButton.style.display = "block";
    static.style.display = "none";
  }, 300);
  cameraReload();
  cameraOn = 1;
  clock.style.display = "none";
  if (cameraPosition == 1) {
    camera1.style.display = "block";
    cameraReload();
    map2.style.display = "none";
    map3.style.display = "none";
    map4.style.display = "none";
    map5.style.display = "none";
    setTimeout(() => {
      map1.style.display = "block";
    }, 300);
  }
  if (cameraPosition == 2) {
    camera2.style.display = "block";
    cameraReload();
    map1.style.display = "none";
    map3.style.display = "none";
    map4.style.display = "none";
    map5.style.display = "none";
    setTimeout(() => {
      map2.style.display = "block";
    }, 300);
  }
  if (cameraPosition == 3) {
    camera3.style.display = "block";
    cameraReload();
    map2.style.display = "none";
    map1.style.display = "none";
    map4.style.display = "none";
    map5.style.display = "none";
    setTimeout(() => {
      map3.style.display = "block";
    }, 300);
  }
  if (cameraPosition == 4) {
    camera4.style.display = "block";
    cameraReload();
    map2.style.display = "none";
    map3.style.display = "none";
    map1.style.display = "none";
    map5.style.display = "none";
    setTimeout(() => {
      map4.style.display = "block";
    }, 300);
  }
  if (cameraPosition == 5) {
    camera5.style.display = "block";
    cameraReload();
    map2.style.display = "none";
    map3.style.display = "none";
    map4.style.display = "none";
    map1.style.display = "none";
    setTimeout(() => {
      map5.style.display = "block";
    }, 300);
  }
};

cameraOff.onmouseenter = () => {
  turnoffmachine.style.display = "none";
  cameraopensound.play();
  usage--;
  updateUsage();
  cameraopensound.currentTime = "0";
  document.body.style.transition = "0.1s";
  cameraOff.style.display = "none";
  camera1.style.display = "none";
  camera2.style.display = "none";
  camera3.style.display = "none";
  camera4.style.display = "none";
  camera5.style.display = "none";
  cameraButton.style.display = "none";
  animatronik.style.display = "none";
  map1.style.display = "none";
  map2.style.display = "none";
  map3.style.display = "none";
  map4.style.display = "none";
  map5.style.display = "none";
  amogusak.style.display = "block";
  energy.style.display = "block";
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
  camera2.style.display = "none";
  camera3.style.display = "none";
  camera4.style.display = "none";
  camera5.style.display = "none";
  animatronik.style.display = "none";
  cameraOff.style.display = "none";
  cameraPosition = 1;
  cameraReload();
  cameraButtonGone();
  cameraopensound.play();
  cameraopensound.currentTime = "0";
  map2.style.display = "none";
  map3.style.display = "none";
  map4.style.display = "none";
  map5.style.display = "none";
  setTimeout(() => {
    map1.style.display = "block";
    camera1.style.display = "block";
    cameraOff.style.display = "block";
  }, 300);
};

cameraButton2.onclick = () => {
  staticEffect();
  camera1.style.display = "none";
  camera3.style.display = "none";
  camera4.style.display = "none";
  camera5.style.display = "none";
  animatronik.style.display = "none";
  cameraOff.style.display = "none";
  cameraPosition = 2;
  cameraReload();
  cameraButtonGone();
  cameraopensound.play();
  cameraopensound.currentTime = "0";
  map1.style.display = "none";
  map3.style.display = "none";
  map4.style.display = "none";
  map5.style.display = "none";
  setTimeout(() => {
    map2.style.display = "block";
    camera2.style.display = "block";
    cameraOff.style.display = "block";
  }, 300);
};

cameraButton3.onclick = () => {
  staticEffect();
  camera1.style.display = "none";
  camera2.style.display = "none";
  camera4.style.display = "none";
  camera5.style.display = "none";
  animatronik.style.display = "none";
  cameraOff.style.display = "none";
  cameraPosition = 3;
  cameraReload();
  cameraButtonGone();
  cameraopensound.play();
  cameraopensound.currentTime = "0";
  map2.style.display = "none";
  map1.style.display = "none";
  map4.style.display = "none";
  map5.style.display = "none";
  setTimeout(() => {
    map3.style.display = "block";
    camera3.style.display = "block";
    cameraOff.style.display = "block";
  }, 300);
};

cameraButton4.onclick = () => {
  staticEffect();
  camera1.style.display = "none";
  camera2.style.display = "none";
  camera3.style.display = "none";
  camera5.style.display = "none";
  animatronik.style.display = "none";
  cameraPosition = 4;
  cameraOff.style.display = "none";
  cameraReload();
  cameraButtonGone();
  cameraopensound.play();
  cameraopensound.currentTime = "0";
  map2.style.display = "none";
  map3.style.display = "none";
  map1.style.display = "none";
  map5.style.display = "none";
  setTimeout(() => {
    map4.style.display = "block";
    camera4.style.display = "block";
    cameraOff.style.display = "block";
  }, 300);
};

cameraButton5.onclick = () => {
  staticEffect();
  camera1.style.display = "none";
  camera2.style.display = "none";
  camera3.style.display = "none";
  camera4.style.display = "none";
  animatronik.style.display = "none";
  cameraPosition = 5;
  cameraOff.style.display = "none";
  cameraReload();
  cameraButtonGone();
  cameraopensound.play();
  cameraopensound.currentTime = "0";
  map2.style.display = "none";
  map3.style.display = "none";
  map4.style.display = "none";
  map1.style.display = "none";
  setTimeout(() => {
    map5.style.display = "block";
    camera5.style.display = "block";
    cameraOff.style.display = "block";
  }, 300);
};
function closeDoors() {
  doormovesound.currentTime = 0;
  doormovesound.play();
  lDoor += 1;
  console.log(lDoor);
  document.body.style.background = "url(./res/img/doorsClosed.png)";
}
function closeDoorsRight() {
  doormovesound.currentTime = 0;
  doormovesound.play();
  rDoor += 1;
  console.log(rDoor);
  document.body.style.background = "url(./res/img/doorsClosed.png)";
}

function openDoors() {
  doormovesound.currentTime = 0;
  doormovesound.play();
  lDoor -= 1;
  console.log(lDoor);
  document.body.style.background = "url(./res/css/doors.png)";
}
function openDoorsRight() {
  doormovesound.currentTime = 0;
  doormovesound.play();
  rDoor -= 1;
  console.log(rDoor);
  document.body.style.background = "url(./res/css/doors.png)";
}
closeButton.onclick = () => {
  closeButton.style.display = "none";
  doormovesound.play();
  openButton.style.display = "block";
  lightButton.style.display = "none";
  animatronik.style.display = "none";
  usage++;
  updateUsage();
  closeDoors();
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center center";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundAttachment = "fixed";
};
closeButtonRight.onclick = () => {
  closeButtonRight.style.display = "none";
  doormovesound.play();
  openButtonRight.style.display = "block";
  lightButton.style.display = "none";
  //animatronik.style.display = "none";
  usage++;
  updateUsage();
  closeDoorsRight();
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center center";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundAttachment = "fixed";
};
openButton.onclick = () => {
  closeButton.style.display = "block";
  doormovesound.play();
  openButton.style.display = "none";
  lightButton.style.display = "block";
  usage--;
  updateUsage();
  openDoors();
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center center";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundAttachment = "fixed";
};
openButtonRight.onclick = () => {
  closeButtonRight.style.display = "block";
  doormovesound.play();
  openButtonRight.style.display = "none";
  lightButton.style.display = "block";
  usage--;
  updateUsage();
  openDoorsRight();
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center center";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundAttachment = "fixed";
};

lightButton.onmouseenter = () => {
  flashlight.currentTime = 0;
  flashlight.play();
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center center";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundAttachment = "fixed";
  lightOn += 1;
  setTimeout(() => {}, 0);
  if (lightOn == 1) {
    document.body.style.background = "url(./res/img/doorsLight.png)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
  } else if (lightOn == 0) {
    settimeout(() => {
      document.body.style.background = "url(./res/css/doors.png)";
      document.body.style.backgroundrepeat = "no-repeat";
      document.body.style.backgroundposition = "center center";
      document.body.style.backgroundsize = "cover";
      document.body.style.backgroundattachment = "fixed";
    }, 1);
  }
  if (posB == 0.1 && loc == 3 && lightOn == 1) {
    appear.play();
    appear.currentTime = 1.5;
    appear.volume = 0.5;
    document.body.style.background = "url(./res/img/doorsLightSlaughter.png)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
  } else if (posA == 0.2 && loc == 5 && lightOn == 1) {
    appear.play();
    appear.currentTime = 1.5;
    appear.volume = 0.5;
    document.body.style.background = "url(./res/img/doorsLightScrapper.png)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
  } else {
    animatronik.style.display = "none";
  }
};
lightButton.onmouseleave = () => {
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center center";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundAttachment = "fixed";
  lightOn -= 1;
  if (lightOn == 0) {
    setTimeout(() => {
      document.body.style.background = "url(./res/css/doors.png)";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundPosition = "center center";
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundAttachment = "fixed";
      animatronik.style.display = "none";
    }, 1);
  }
};

lightButtonBack.onmouseenter = () => {
  flashlight.currentTime = 0;
  flashlight.play();
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center center";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundAttachment = "fixed";
  lightOnBack += 1;
  setTimeout(() => {}, 0);
  if (lightOnBack == 1) {
    if (posC == 1) {
      document.body.style.background = "url(./res/img/hangmanDoorLight.png)";
      //ukázat animatronika
      setTimeout(() => {
        //schovat animatronika
        random = Math.random();
        if (random < 1 / 3) {
          posC = 4;
        } else if (random < 2 / 3) {
          posC = 3;
        } else {
          posC = 2;
        }
        console.log("C moved to " + posC);
      }, 5000);
    } else {
      document.body.style.background = "url(./res/img/darkDoorLight.png)";
    }
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
  } else if (lightOnBack == 0) {
    settimeout(() => {
      document.body.style.background = "url(./res/css/darkDoor.png)";
      document.body.style.backgroundrepeat = "no-repeat";
      document.body.style.backgroundposition = "center center";
      document.body.style.backgroundsize = "cover";
      document.body.style.backgroundattachment = "fixed";
    }, 1);
  }
};
lightButtonBack.onmouseleave = () => {
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center center";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundAttachment = "fixed";
  lightOnBack -= 1;
  if (lightOnBack == 0) {
    setTimeout(() => {
      document.body.style.background = "url(./res/css/darkDoor.png)";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundPosition = "center center";
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundAttachment = "fixed";
      animatronik.style.display = "none";
    }, 1);
  }
};
//Main menu
play.onclick = () => {
  startTime();
  startPower();
  mainmenutheme.pause();
  fnafambience.play();
  camera.style.display = "block";
  moveRight.style.display = "block";
  moveLeft.style.display = "block";
  camBack.style.display = "none";
  cam.style.display = "block";
  clock.style.display = "block";
  powerful.style.display = "block";
  amogusak.style.display = "block";
  energy.style.display = "block";
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
  moveCmath();
  machineBmath();
  setInterval(() => {
    random = Math.random();
    if (random * 10000 <= difD * 3) {
      spawnEyes();
    }
  }, 1000);
  cameraOn = 0;
};
amogusak.onclick = () => {
  amogus.play();
  amogus.volume = 0.5;
  amogus.currentTime = 0.3;
};

play.onmouseover = () => {
  play.innerHTML = `>>NewGame`;
  play.style.width = "280px";
};

play.onmouseleave = () => {
  play.innerHTML = `New Game`;
  play.style.width = "200px";
};

settings.onmouseover = () => {
  settings.innerHTML = `>>CustomNight`;
  settings.style.width = "300px";
};

settings.onmouseleave = () => {
  settings.innerHTML = `Custom Night`;
  settings.style.width = "250px";
};

backSettings.onmouseover = () => {
  backSettings.innerHTML = `>>Back`;
  backSettings.style.width = "260px";
};

backSettings.onmouseleave = () => {
  backSettings.innerHTML = `Back`;
  backSettings.style.width = "150px";
};

settings.onclick = () => {
  difficultyScrapper.style.display = "inline-block";
  difficultySlaughter.style.display = "inline-block";
  difficultyHangman.style.display = "inline-block";
  difficultyEyes.style.display = "inline-block";
  difficultyCounterScrapper.style.display = "block";
  difficultyCounterSlaughter.style.display = "block";
  difficultyCounterHangman.style.display = "block";
  difficultyCounterEyes.style.display = "block";
  backSettings.style.display = "block";
  playCustom.style.display = "block";
  document.body.style.background = "black";
  settings.style.display = "none";
  play.style.display = "none";
  gameName.style.display = "none";
  mainMenu.style.display = "none";
  decreaseDiff[0].innerHTML = `<`;
  increaseDiff[0].innerHTML = `>`;
  decreaseDiff[1].innerHTML = `<`;
  increaseDiff[1].innerHTML = `>`;
  decreaseDiff[2].innerHTML = `<`;
  increaseDiff[2].innerHTML = `>`;
  decreaseDiff[3].innerHTML = `<`;
  increaseDiff[3].innerHTML = `>`;
};

decreaseDiff[0].onclick = () => {
  counterA--;
  numberDiff[0].innerHTML = `${counterA}`;
  if (counterA <= 0) {
    counterA = 20;
    numberDiff[0].innerHTML = `${counterA}`;
  }
};

increaseDiff[0].onclick = () => {
  counterA++;
  numberDiff[0].innerHTML = `${counterA}`;
  if (counterA > 20) {
    counterA = 1;
    numberDiff[0].innerHTML = `${counterA}`;
  }
};

decreaseDiff[1].onclick = () => {
  counterB--;
  numberDiff[1].innerHTML = `${counterB}`;
  if (counterB <= 0) {
    counterB = 20;
    numberDiff[1].innerHTML = `${counterB}`;
  }
};

increaseDiff[1].onclick = () => {
  counterB++;
  numberDiff[1].innerHTML = `${counterB}`;
  if (counterB > 20) {
    counterB = 1;
    numberDiff[1].innerHTML = `${counterB}`;
  }
};

decreaseDiff[2].onclick = () => {
  counterC--;
  numberDiff[2].innerHTML = `${counterC}`;
  if (counterC <= 0) {
    counterC = 20;
    numberDiff[2].innerHTML = `${counterC}`;
  }
};

increaseDiff[2].onclick = () => {
  counterC++;
  numberDiff[2].innerHTML = `${counterC}`;
  if (counterC > 20) {
    counterC = 1;
    numberDiff[2].innerHTML = `${counterC}`;
  }
};

decreaseDiff[3].onclick = () => {
  counterD--;
  numberDiff[3].innerHTML = `${counterD}`;
  if (counterD <= 0) {
    counterD = 20;
    numberDiff[3].innerHTML = `${counterD}`;
  }
};

increaseDiff[3].onclick = () => {
  counterD++;
  numberDiff[3].innerHTML = `${counterD}`;
  if (counterD > 20) {
    counterD = 1;
    numberDiff[3].innerHTML = `${counterD}`;
  }
};

backSettings.onclick = () => {
  difficultyScrapper.style.display = "none";
  difficultySlaughter.style.display = "none";
  difficultyHangman.style.display = "none";
  difficultyEyes.style.display = "none";
  difficultyCounterScrapper.style.display = "none";
  difficultyCounterSlaughter.style.display = "none";
  difficultyCounterHangman.style.display = "none";
  difficultyCounterEyes.style.display = "none";
  backSettings.style.display = "none";
  playCustom.style.display = "none";
  document.body.style.background = "url(./res/img/staticMenu.gif)";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center center";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundAttachment = "fixed";
  settings.style.display = "block";
  play.style.display = "block";
  gameName.style.display = "block";
  mainMenu.style.display = "block";
};

window.onload = () => {
  mainmenutheme.play();
  mainmenutheme.volume = 0.3;
};

playCustom.onclick = () => {
  gamemode = 1;
  difA = counterA;
  difB = counterB;
  difC = counterC;
  difD = counterD;
  difficultyScrapper.style.display = "none";
  difficultySlaughter.style.display = "none";
  difficultyHangman.style.display = "none";
  difficultyEyes.style.display = "none";
  difficultyCounterScrapper.style.display = "none";
  difficultyCounterSlaughter.style.display = "none";
  difficultyCounterHangman.style.display = "none";
  difficultyCounterEyes.style.display = "none";
  backSettings.style.display = "none";
  playCustom.style.display = "none";
  startTime();
  startPower();
  mainmenutheme.pause();
  fnafambience.play();
  camera.style.display = "block";
  moveRight.style.display = "block";
  moveLeft.style.display = "block";
  camBack.style.display = "none";
  cam.style.display = "block";
  clock.style.display = "block";
  powerful.style.display = "block";
  amogusak.style.display = "block";
  energy.style.display = "block";
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
  moveCmath();
  machineBmath();
  setInterval(() => {
    random = Math.random();
    if (random * 10000 <= difD * 3) {
      spawnEyes();
    }
  }, 1000);
  cameraOn = 0;
};


