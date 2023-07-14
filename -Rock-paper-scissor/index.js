function computermove(){
    let randomNum = Math.floor((Math.random()*3)+1);
    let computer = '';
    if(randomNum === 1){
        computer = 'rock';
    }
    else if(randomNum === 2){
        computer = 'paper';
    }
    else{
        computer = 'scissor';
    }
    return computer;
}

let score = JSON.parse(localStorage.getItem('score'));
if(score===null){
    score = {
    wins: 0,
    loose: 0,
    tie: 0
    }
}
//document.querySelector('.js-score').innerHTML =  `Wins: ${score.wins} Loose: ${score.loose} Tie: ${score.tie}`;

updateScoreElement();

function playGame(playerMove){
    const computer = computermove();
    let result = '';
    
    if(playerMove === 'rock'){
        if(computer === 'rock'){
            result = "Tie!";
        }
        else if(computer === 'paper'){
            result = 'You loose!';
        }
        else{
            result = 'You win!';
        }
    }
    else if(playerMove==='paper'){
        if(computer === 'paper'){
            result = 'Tie!';
        }
        else if(computer === 'scissor'){
            result = 'You loose!';
        }
        else{
            result = 'You win!';
        }
    }
    else{
        if(computer === 'scissor'){
            result = 'Tie!';
        }
        else if(computer === 'rock'){
            result = 'You loose!';
        }
        else{
            result = 'You win!';
        }
    }

    if(result === 'Tie!'){
        score.tie +=1;
    }
    else if(result === 'You loose!'){
        score.loose +=1;
    }
    else if(result=== 'You win!'){
        score.wins +=1;
        
    }
    
    document.querySelector('.js-result').innerHTML = result;
    //document.querySelector('.js-move').innerHTML = `Your pick <img src="${playerMove}-emoji.png" class="rockemoji" > <img src="${computer}-emoji.png" class="paperemoji"> Computer pick.`
    document.querySelector('.js-move').innerHTML = `<img src="${computer}-emoji.png" class="computerpick">`;
    document.querySelector('.js-move2').innerHTML = `<img src="${playerMove}-emoji.png" class="playerpick">`;
    //document.querySelector('.js-score').innerHTML =  `Wins: ${score.wins} Loose: ${score.loose} Tie: ${score.tie}`;
    updateScoreElement();

    localStorage.setItem('score',JSON.stringify(score));

    //alert(`You picked ${playerMove}. Computer picked ${computer}.${result}. 
    //Wins: ${score.wins} Loose: ${score.loose} Tie: ${score.tie}`);
}
function updateScoreElement(){
    document.querySelector('.js-score').innerHTML =  `Wins: ${score.wins} Loose: ${score.loose} Tie: ${score.tie}`;  
}
