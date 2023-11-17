//defining key movement variables
var W = 87;
var A = 65;
var S = 83;
var D = 68;
//player variables
var playerX = 64;
var playerY = 419;
//obstacle variables
var obstacleOneX = 0;
var obstacleOneY = 87;
var obstacleTwoX = 302;
var obstacleTwoY = 0;
//mouse click variables
var mouseShapeX;
var mouseShapeY;

function setup(){
    createCanvas(500,500);
}
function draw(){
    background(96,96,96);
    fill(0);
    /*x,y coord
    text("X: " + mouseX,100,200 );
    text("Y: " + mouseY,100,220 );*/

    createBorder();

    createPlayer();

    playerMovement();

    CreateObstacles();

    obstacleMovement();

    createMouseObject();

    exitText();

    winText();
}
function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
//border
function createBorder(){
    rect(0,0,500,10);
    rect(0,0,10,500);
    rect(500,500,10,500);
    rect(500,500,500,10);
    rect(0,500,500,-10);
    rect(500,50,-10,500);
}
//creating player
function createPlayer(){
    fill(0,100,150);
    square(playerX,playerY,25);
}
 //player movement
function playerMovement(){
    if(keyIsDown(87)){
        playerY -= 5;
    }
    if(keyIsDown(65)){
        playerX -= 5;
    }
    if(keyIsDown(83)){
        playerY += 5;
    }
    if(keyIsDown(68)){
        playerX += 5;
    }
}
//create two obstacles
function CreateObstacles(){
    fill(255,0,0);
    rect(obstacleOneX,obstacleOneY,20,100);
    fill(255,255,0);
    rect(obstacleTwoX,obstacleTwoY,150,30);
}
//move the two obstacles
function obstacleMovement(){
    if(obstacleOneX<=500 || obstacleTwoY<500){
        obstacleOneX+=5;
        obstacleTwoY+=5;
    }
    else {
        obstacleOneX = 0;
        obstacleTwoY = 0; 
    }
}
//create the on-click obstacle
function createMouseObject(){
    fill(25,55,80);
    circle(mouseShapeX, mouseShapeY, 50);
}
//generate the exit text
function exitText(){
    fill(0);
    textSize(15);
    text("Exit",458,35);
}
//show "you win" when going through exit
function winText(){
    if(playerX>=495 && playerY<=40){
        textSize(60);
        text("You Win",150,250);
    }
}

