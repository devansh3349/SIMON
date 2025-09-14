let gameSeq = [];
let userSeq = [];

let btns = ["red","blue","orange","green"];

let Level = 0;
let started = false;




document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game started");
        started = true;
         levelUp();
    }
}

    



);

function levelUp(){
    userSeq = [];
            Level = Level + 1;
            let h3 = document.querySelector("h3");
            h3.innerText = `Level ${Level}`;

            let randIdx = Math.floor(Math.random()*4);

    let randColor = btns[randIdx];

    gameSeq.push(randColor);
    console.log(gameSeq);

    let randBtn = document.querySelector(`.${randColor}`);

    flashUp(randBtn);

        
        
    }

function ansCheck(idx){
    console.log(`current Level : ${Level}`);
    
    if(gameSeq[idx] === userSeq[idx]){
        if(gameSeq.length == userSeq.length){
            setTimeout(levelUp,1000);
        }
        console.log("same value");
    }
    else{
        let h3 = document.querySelector("h3");
        h3.innerText = `Game Over! your Score was ${Level} Press any key to start again`;
        let body = document.querySelector("body");
         body.style.backgroundColor = "red";
         let aud = document.querySelector("audio");
         aud.play();
         aud.volume = 1;
         aud.currentTime = 0;

        setTimeout(function(){
            body.style.backgroundColor = "white";
        
        
        },500);
        
        
        reStart();
    }
}


function flashUp(btn){
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash");
  },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
  setTimeout(function(){
    btn.classList.remove("userflash");
  },250);
}

function btnPress(){
    userFlash(this);
    console.log("user pressed Button");
    let ColorN = this.getAttribute("id");
    userSeq.push(ColorN);
    console.log(userSeq);
    ansCheck(userSeq.length-1);
    
}

let allBtns = document.querySelectorAll("button");
for(let i=0;i<allBtns.length;i++){
    allBtns[i].addEventListener("click",btnPress
    )
}

let reStart = function(){
    started = false;
    gameSeq = [];
    userSeq = [];
    Level = 0;
}