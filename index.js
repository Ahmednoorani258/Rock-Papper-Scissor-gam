let userScr = 0
let compScr = 0
let userprint = document.querySelector('#userscore')
let compprint = document.querySelector('#compscore')
let resetbtn = document.querySelector('.btn')

const choices = document.querySelectorAll(".choice")
let msg = document.querySelector('#msg')

const genCompChoice = ()=>{
    const options = ['rock','paper','scissor']
    let randInd = Math.floor(Math.random()*3)
    return options[randInd]
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScr++
        userprint.innerText = `${userScr}`
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = 'Green'
    }else{
        compScr++
        compprint.innerText = `${userScr}`
        msg.innerText = `You lose ${compChoice} beats Your ${userChoice} `
        msg.style.backgroundColor = 'red'
    }

}


const playGame = (userChoice)=>{
    const compChoice = genCompChoice()
    if(userChoice === compChoice){
        msg.innerText = 'draw'
        msg.style.backgroundColor = 'yellow'
        msg.style.color = 'black'
    }else{
        let userWin = true
        if(userChoice === 'rock'){
            userWin = compChoice ==='paper'?false:true;
        }else if(userChoice === 'paper'){
            userWin = compChoice === 'rock'?true:false;
        }else {
            userWin = compChoice === 'paper'?true:false;
        }
        showWinner(userWin,userChoice,compChoice)
    }
}


choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    });
});

resetbtn.addEventListener('click',() => {
    userScr = 0
    compScr = 0
    compprint.innerText = `${userScr}`
    userprint.innerText = `${userScr}`
    msg.innerText = 'Play Your Next Move'
})