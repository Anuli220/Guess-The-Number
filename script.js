let secretNumber = Math.floor(Math.random()*100) + 1;
let items = 0;
let attempts = 0;

function guessCheck(){
    const input = document.getElementById("guessInput"); 
    const message = document.getElementById("message"); 
    const attemptsText = document.getElementById("attempts");
    const guess = Number(input.value);
    
    if(!guess){
        message.innerText = "Please Enter A Number";
        return;
    }
    attempts++;

    attemptsText.innerText = "attempts: " + attempts;

    if(guess === secretNumber){
        message.innerText = "Correct! You Guessed The Number!";
    }else if (guess > secretNumber){
        message.innerText = "Too High!";
    }else{
        message.innerText = "Too Low!";
    }
    
    input.value = "";
}

function resetGame(){
    secretNumber = Math.floor(Math.random()+100) + 1;
    items = 0;
    document.getElementById("attempts").innerText = "Attempts = 0";
    document.getElementById("message").innerText = "Start Guessing";
    document.getAnimations("guessInput").value = "";

}