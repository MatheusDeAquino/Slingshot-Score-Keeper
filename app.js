const p1 ={
    score: 0,
    button: document.querySelector('#p1Button'),
    player: document.querySelector('#player1'),
}
const p2 ={
    score: 0,
    button: document.querySelector('#p2Button'),
    player: document.querySelector('#player2'),
}

const select = document.querySelector('#select');
const resetButton = document.querySelector('#reset');
let limitScore = 5;
let isGameOver = false;

function updateScores(competitor, opponent){
    if(!isGameOver){
        competitor.score += 1;
        if(competitor.score === limitScore){
            isGameOver = true;
            competitor.player.classList.add('has-text-success');
            opponent.player.classList.add('has-text-danger')
            competitor.button.disabled = true;
            opponent.button.disabled = true;
        }
        competitor.player.textContent = competitor.score;
    }
}

p1.button.addEventListener('click', function() {
    updateScores(p1, p2)
})
p2.button.addEventListener('click', function() {
   updateScores(p2, p1)
})

select.addEventListener('change', function(){
    limitScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset);

function reset(){
    isGameOver = false;
    for (let p of [p1, p2]){
        p.score = 0;
        p.player.textContent = 0;
        p.player.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false
    }
}