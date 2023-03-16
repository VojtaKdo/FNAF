
const mapImage = document.getElementById("mapImage");

const doorLeft = document.getElementById("doorLeft");
const doorRight = document.getElementById("doorRight");
const moveLeft = document.getElementById("moveLeft");
const moveRight = document.getElementById("moveRight");

const camera = document.getElementById("camera");
const cam = document.getElementById("cam");

let posA = 4;
let posB = 5;
let cameraOn = 0;    //is camera open?
let lDoor = 0;       //1=closed; 0=open
let rDoor = 0;     
let random = 0;
function virus
(){window.close();
}

//player movement


let loc = 4;
function moveL() {
    loc--;
    if(loc==3){
        doorLeft.style.display = "block";
        moveLeft.style.display = "none";
        cam.style.display = "none";
        
    }
    if(loc==4){
        doorLeft.style.display = "none";
        doorRight.style.display = "none";
        moveRight.style.display = "block";
        moveLeft.style.display = "block";
        cam.style.display = "block";
    }
}
function moveR() {
    loc++;
    if(loc==5){
        doorRight.style.display = "block";
        moveRight.style.display = "none";
        cam.style.display = "none";
    }
    if(loc==4){
        doorRight.style.display = "none";
        doorLeft.style.display = "none";
        moveRight.style.display = "block";
        moveLeft.style.display = "block";
        cam.style.display = "block";
        
    }
    
}

function cams(){
    doorLeft.style.display = "none";
        doorRight.style.display = "none";
        moveRight.style.display = "none";
        moveLeft.style.display = "none";
        cam.style.display = "none";
        document.body.style.backgroundColor = "steelblue";
}

moveLeft.onmouseover = () => {
    moveL();
  }
  moveRight.onmouseover = () => {
      moveR();
    }
    cam.onmouseover = () => {
        cams();
      }


//animatronic A,B movement
function deathB(){
    if(cameraOn==1){
        
    }
}

function moveB(){
    if(posB==5){
        random=Math.random
        if (random<=0.2){
            posB=1
        }
    }
    else if(posB==1){
        random=Math.random
        if(random<=0.2){
            posB=0.1        //0.1=left door
        }
    }
    else if(posB==0.1){
        if(lDoor==0){
            posB=0          //0=office
        }
        else{
            random=Math.random
            if(random<=0.4){
                posB=5
            }else{
                posB=1
            }
        }
    }
}

//Camera
camera.onmouseenter = () => {
    camera.style.display = "none";
    camera.style.backgroundColor = "green";
    let s = 0;
    s++;
    console.log(s);

}
