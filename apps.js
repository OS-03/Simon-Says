let gameSeq = [];
let userSeq = [];
let hightest_score = 0;
let buts = ["red","green","blue","yellow"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        started = true;
        levelup();
    }

});

function gameflash(btn){
 btn.classList.add("flash");
 setTimeout(function (){
    btn.classList.remove("flash");
 }, 230);
}


function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function (){
       btn.classList.remove("userflash");
    }, 230);
   }
function levelup(){
    userSeq = [];
    level++;
    h2.innerText = `LEVEL ${level}`;

    let choose = Math.floor(Math.random() * 3);
    let randColor = buts[choose];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    gameflash(randbtn);

}

function checkAns(idx){
hightest_score = Math.max(hightest_score,level);
if(gameSeq[idx] === userSeq[idx]){
    if(userSeq.length == gameSeq.length){
        setTimeout(levelup,300);
    }
}else{
    h2.innerHTML = `Game over Your score was <b>${level}</b><br/> Game highest Score is ${hightest_score}<br />press any key start again!`;
    document.querySelector('body').style.backgroundColor ="red";
    setTimeout(function(){
        document.querySelector('body').style.backgroundColor ="white";
    },50);
    resetgame();
}
}

function buttonPressed(){
let btn = this;
userflash(btn);
userColor = btn.getAttribute("id");
userSeq.push(userColor);
checkAns(userSeq.length-1);
}

btns = document.querySelectorAll(".btn");

for(btn of btns){
btn.addEventListener('click',buttonPressed);

}

function resetgame(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}