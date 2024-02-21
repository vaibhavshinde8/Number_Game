let num=(Math.random());
let rnum=num*99;
 rnum=parseInt(rnum);

 const userInput=document.querySelector("#guessField");
 const submit=document.querySelector("#submit");

 const prev_guess=document.querySelector(".guess");
 const rem_guess=document.querySelector(".last-result");

 const lowOrhi=document.querySelector(".lowOrhi");

 const start=document.querySelector(".result");

 const p=document.createElement("p");

 let prevGuess=[];
 let numGuess=1;
 let playGame=true;

 if(playGame){
    submit.addEventListener("click",function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
 }
 
 function validateGuess(guess){
    if(isNaN(guess)){
        console.log("please enter a valid number");
    }
    else if(guess < 1){
        console.log("please enter larger number");
    }
    else if(guess > 100){
        console.log("please enter Lower Number");
    }
    else{
        prevGuess.push(guess);
        if(numGuess===11){
            displayGuess(guess);
            displayMassage(`Game over. Random Number Was ${rnum}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }

    }
 }

 function checkGuess(guess){
        if(guess===rnum){
            displayMassage(`You Gussted right`);
            endGame();
        }
       else if(guess < rnum){
            displayMassage(`Number is Too low`);
        }
        else if(guess > rnum){
            displayMassage(`Number is Too High`);
        }
 }

 function displayGuess(guess){   //cleanUp guesses
    userInput.value='';
    prev_guess.innerHTML+=`${guess},   `;
    numGuess++;
    rem_guess.innerHTML=`${11-numGuess}`;
 }

 function displayMassage(massage){
lowOrhi.innerHTML=`<h2>${massage} </h2>`;
 
}
function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML='<h2 id="newGame">Start new Game </h2>';
    start.appendChild(p);
    playGame=false;
    newGame();
}

function newGame(){
const newbtn=document.querySelector("#newGame");
newbtn.addEventListener("click",function(e){
     num=(Math.random());
     rnum=num*99;
     rnum=parseInt(rnum);
     prevGuess=[];
     numGuess=1;
     prev_guess.innerHTML='';
     rem_guess.innerHTML=`${12-numGuess}`;
     userInput.removeAttribute("disable");
     start.removeChild(p);
     playGame=true;
})
}

