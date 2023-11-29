// Wait for the DOM to finish loading before running the game
// Get button elements and add evernt listeners to them

document.addEventListener('DOMContentLoaded', function(){
    let buttons = document.getElementsByTagName('button');

    for(let button of buttons){
        button.addEventListener('click',function(){
            if (this.getAttribute('data-type') === 'submit'){
                alert('You click submit!');
            } else {
                let gameType=this.getAttribute('data-type');
                alert(`You click ${gameType}`);
            }
        } )
    }

})

function runGame(){

}

function checkAnswer(){

}

function calculateCorrectanswer(){

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubstractQuestion() {

}

function displayMultiplyQustion() {

}