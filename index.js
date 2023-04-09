// Game constants
let snakeDirection ={x:0,y:0};
let lastPaintTime=0; 
let speed=1;
let snakeArr=[
    {x:13,y:15},{x:13,y:16},{x:13,y:17},{x:13,y:18}
];
let food={x:14,y:4};
let boardElement=document.getElementById('board');
let score=0;
// Game functions

function main(timeSinceWebsiteLoaded){

    // requestAnimationFrame runs main as callback therefore below code will run before main.
    window.requestAnimationFrame(main);

    if((timeSinceWebsiteLoaded-lastPaintTime)/1000<1/speed){
        return;
    }
    // below code will only run if condition inside if statement is not satisfied. 
    console.log(timeSinceWebsiteLoaded);
    lastPaintTime=timeSinceWebsiteLoaded;
    gameEngine();
}


function gameEngine(){
    // Part1: updating the snake variable





    // Part2: Display the snake 
    boardElement.innerHTML='';
    snakeArr.forEach((e,index)=>{
        snakeElement=document.createElement('div');
        snakeElement.style.gridRowStart=e.y;
        snakeElement.style.gridColumnStart=e.x;
        
        if (index==0){
            snakeElement.classList.add('head')
        }
        else{
            snakeElement.classList.add('snake');
        }

        boardElement.appendChild(snakeElement);
    })

    // Part3: Display the food 
  
    foodElement=document.createElement('div');
    foodElement.style.gridRowStart=food.y;
    foodElement.style.gridColumnStart=food.x;
    foodElement.classList.add('food');

    boardElement.appendChild(foodElement);

}





// Main logic starts here

// below method tells the browser to repaint the screen. But before the repaint run the main function.
window.requestAnimationFrame(main);
window.addEventListener('keydown',e=>{
    inputDir={x:0,y:1} // snakes start moving
    switch(e.key){
        case "ArrowUp":
            console.log('ArrowUP');
            snakeDirection.x=0;
            snakeDirection.y=-1;
            break
        case "ArrowDown":
            console.log('ArrowDown');
            snakeDirection.x=0;
            snakeDirection.y=1;
            break
        case "ArrowRight":
            console.log('ArrowRight');
            snakeDirection.x=1;
            snakeDirection.y=0;
            break
        case "ArrowLeft":
            console.log('ArrowLeft');
            snakeDirection.x=-1;
            snakeDirection.y=0;
            break
    }

})
