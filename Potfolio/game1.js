score = 0;
cross = true;


document.onkeydown = function(e){
    console.log("key code is ", e.keyCode)
    if(e.keyCode ==38){
       player = document.querySelector('.player');
       player.classList.add('animatePlayer')
       setTimeout(() =>{
        player.classList.remove('animatePlayer')
       },700);
    } 
    if(e.keyCode ==39){
       player = document.querySelector('.player');
       playerX =parseInt(window.getComputedStyle(player,null).getPropertyValue('left'));
       player.style.left = playerX +112 +"px";
    }
    if(e.keyCode ==37){
        player = document.querySelector('.player');
        playerX =parseInt(window.getComputedStyle(player,null).getPropertyValue('left'));
        player.style.left = (playerX -112) +"px";
     }
}
setInterval(() => {
    player = document.querySelector('.player');
    gameOver = document.querySelector('.gameOver');
    dragon = document.querySelector('.dragon');
    px = parseInt(window.getComputedStyle(player,null).getPropertyValue('left'));
    py = parseInt(window.getComputedStyle(player,null).getPropertyValue('top'));
    dx = parseInt(window.getComputedStyle(dragon,null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dragon,null).getPropertyValue('top'));

    offsetX = Math.abs(px - dx);
    offsetY = Math.abs(py - dy);
    if(offsetX<73 && offsetY<52){
        gameOver.style.visibility = 'visible';
        dragon.classList.remove('dragonAni')
        
    }
    else if( offsetX<145 && cross){
        score+=1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur= parseFloat(window.getComputedStyle(dragon,null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            dragon.style.animationDuration = newDur + 's';
        }, 500);
       
    }

},10);

function updateScore(score){
    scoreCont.innerHTML = "Your Score:" + score
}
