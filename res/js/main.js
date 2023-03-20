const mapImage = document.getElementById("mapImage");
const map = document.getElementById("map");

const doorLeft = document.getElementById("doorLeft");
const doorRight = document.getElementById("doorRight");
const darkDoor = document.getElementById("darkDoor");
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

//player movement

let loc = 4;
let back = 3;
function backDoor() {}

function moveL() {
  loc--;
  if (loc == 3) {
    doorLeft.style.display = "block";
    moveLeft.style.display = "none";
    cam.style.display = "none";
    camera.style.display = "none";
    if (posB == 0) {
      //jumpscare B
      dead = 1;
      console.log("You are fucking dead L");
    }
    controlPosition = setInterval(()=>{
      if (posB == 0.1) {
        animatronik.style.display = "block";
      } else if (posB != 0.1) {
        setTimeout(()=>{
          animatronik.style.display = "none";
          clearInterval(controlPosition);
        },0)
      }
    },1)
  }
  if (loc == 4) {
    doorLeft.style.display = "none";
    doorRight.style.display = "none";
    moveRight.style.display = "block";
    moveLeft.style.display = "block";
    cam.style.display = "block";
    camera.style.display = "block";
    Spawn = setInterval(() => {
      if (posB == 0.1) {
        animatronik.style.display = "block";
      } else if (posB != 0.1) {
        animatronik.style.display = "none";
        clearInterval(Spawn);
      }
    }, 1);
  }
}
function moveR() {
  loc++;
  if (loc == 5) {
    doorRight.style.display = "block";
    moveRight.style.display = "none";
    cam.style.display = "none";
    camera.style.display = "none";
    animatronik.style.display = "none";
    if (posA == 0) {
      //jumpscare A
      dead = 1;
      console.log("You are fucking dead L");
    }
  }
  if (loc == 4) {
    doorRight.style.display = "none";
    doorLeft.style.display = "none";
    moveRight.style.display = "block";
    moveLeft.style.display = "block";
    cam.style.display = "block";
    camera.style.display = "block";
    animatronik.style.display = "none";
  }
}

function cams() {
  back--;
  if (back == 2) {
    doorLeft.style.display = "none";
    doorRight.style.display = "none";
    moveRight.style.display = "none";
    moveLeft.style.display = "none";
    cam.style.display = "none";
    camera.style.display = "none";
    document.body.style.backgroundColor = "#4E4E4E";
    darkDoor.style.display = "block";
    camBack.style.display = "block";
  }
}
function camsBack() {
  back++;
  if (back == 3) {
    doorLeft.style.display = "none";
    doorRight.style.display = "none";
    moveRight.style.display = "block";
    moveLeft.style.display = "block";
    cam.style.display = "block";
    camera.style.display = "block";
    document.body.style.backgroundColor = "gray";
    darkDoor.style.display = "none";
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
  mathB = 100000 / (random * difB);
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
  console.log("Eyes has spawned!")
  eyesSound.play()
  setTimeout(() => {
    if (lightsOff==0) {
      console.log("You fucking died L")
      //Eyes jumpscare
    }else{
      //Eyes appears
      setTimeout(() => {
        if (lightsOff==0) {
          console.log("You fucking died L")
          //Eyes jumpscare
        }else{
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
window.onload = () => {
  moveBmath();
  moveAmath();
  setInterval(() => {
    random=Math.random()
    if (random*10000<=difD*2) {
      spawnEyes();
    }
  }, 1000);
};

function cameraReload() {
  if(cameraOn == 1){
    animatronik.style.display = "none";
if (cameraPosition==1) {
  if (posB==1) {
    animatronik.style.display = "block";
  }
}else if (cameraPosition==2) {
  if (posB==2) {
    animatronik.style.display = "block";
  }
}else if (cameraPosition==3) {
  if (posB==3) {
    animatronik.style.display = "block";
  }
}else if (cameraPosition==4) {
  if (posB==4) {
    animatronik.style.display = "block";
  }
}else if (cameraPosition==5) {
  if (posB==5) {
    animatronik.style.display = "block";
  }
}else{
  animatronik.style.display = "none";
}
}

else if (cameraOn = 0){
    if (posB==0.1 && loc == 3) {
      animatronik.style.display = "block";
    }
    else{
      animatronik.style.display = "none";
    }
}
}

//Camera
camera.onmouseenter = () => {
  camera.style.display = "none";
  doorLeft.style.display = "none";
  doorRight.style.display = "none";
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
    document.body.style.background = "gray";
    document.body.style.backgroundImage = "url(./res/css/mainOffice.png)";
    static.style.display = "none";
  }, 300);
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


