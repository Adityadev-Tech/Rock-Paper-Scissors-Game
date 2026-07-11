
let UserScore = 0 , CompScore = 0 ;
// getting all the elements 
let GivenChoices = document.querySelectorAll("#images-container img");
let showfinalMsg = document.querySelector("#finalmsg") ;
let Uscore = document.querySelector("#Unum") ;
let Cscore = document.querySelector("#Cnum") ;
let btn = document.querySelector("button") ;


// reset option 
btn.addEventListener("click"  , () =>{
        UserScore= 0 ;
        CompScore= 0; 
        Uscore.innerText =0 ;
        Cscore.innerText = 0 ;
});


// generating a random computer choice
const ComputerChoice = () => {
    let AvailOptions = ["rock", "paper", "scissors"];
    let idx = Math.floor(Math.random() * 3);
    return AvailOptions[idx];
} 
//updation of scores 
const showingTheWinner = (WhatCOMPchoose ,UserChoice ,DidUserWin)=> {
    if(DidUserWin) {
        UserScore++ ;
        Uscore.innerText = UserScore;
        showfinalMsg.innerText = "Congratulation You Won!" ;
        showfinalMsg.style.background = "#27F56F" ; 
        
        
        
    }
    else {
        CompScore++ ;
        Cscore.innerText =CompScore ;
        showfinalMsg.innerText ="You lost ! Try Again" ;
        showfinalMsg.style.background = "#F52727" ; 
    }
}

// starting the game 
const gamePlay = (UserChoice) => {
    const WhatCOMPchoose = ComputerChoice();

    if (WhatCOMPchoose === UserChoice) {
        showfinalMsg.innerText= "The match is a draw" ; 
        showfinalMsg.style.background = "#E727F5";

    }
    else {
        let DidUserWin;
        if (UserChoice === "rock") {
            DidUserWin = WhatCOMPchoose === "scissors" ? true : false;
        }
        else if (UserChoice === "paper") {
            DidUserWin = WhatCOMPchoose === "rock" ? true : false;
        }
        else {
            DidUserWin = WhatCOMPchoose === "paper" ?true:false;
        }
        showingTheWinner(WhatCOMPchoose ,UserChoice ,DidUserWin) ; 
    }

}

// Getting the choice of the user
GivenChoices.forEach((options) => {
    options.addEventListener("click", () => {
        const UserChoice = options.id;
        gamePlay(UserChoice) ;
    });
});
