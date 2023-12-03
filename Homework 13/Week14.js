//defining key movement variables
var W = 87;
var A = 65;
var S = 83;
var D = 68;
//player variables
var playerX = 64;
var playerY = 419;
//mouse click variables
var mouseShapeX;
var mouseShapeY;
//obstacle variables
var obstacleXs = [];
var obstacleYs = [];
var obstacleDiameters = [];
var obstacleSpeed = [];
var obstacleRed;
var obstacleGreen;
var obstacleBlue;

function setup(){
    createCanvas(500,500);
    
    for (var i = 0; i < 5; i++){
        obstacleXs[i] = random(0,455);
        obstacleYs[i] = random(0,455);
        obstacleDiameters[i] = random(5,20);
        obstacleSpeed[i] = random(5,10);
    }
}
function draw(){
    background(96,96,96);
    fill(0);
    /*x,y coord
    text("X: " + mouseX,100,200 );
    text("Y: " + mouseY,100,220 );*/
    //border
    rect(0,0,500,10);
    rect(0,0,10,500);
    rect(500,500,10,500);
    rect(500,500,500,10);
    rect(0,500,500,-10);
    rect(500,50,-10,500);
    //creating player
    fill(0,100,150);
    square(playerX,playerY,25);
    //player movement
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
    obstacleColorChange();
    
    for (var i = 0; i < obstacleXs.length; i++){
        square(obstacleXs[i], obstacleYs[i], obstacleDiameters[i]);
        obstacleSpeed[i] = random(1,10);

        obstacleXs[i] += obstacleSpeed[i];
        obstacleYs[i] += obstacleSpeed[i];

        if (obstacleXs[i] > 500){
            obstacleXs[i] = 0;
        }
        if (obstacleYs[i] > 500){
            obstacleYs[i] = 0;
        }
        
            }

    //create mouse click object
    fill(0);
    circle(mouseShapeX, mouseShapeY, 50);
    //exit text
    fill(0);
    textSize(15);
    text("Exit",458,35);

    //win text
    if(playerX>=495 && playerY<=40){
        textSize(60);
        text("You Win",150,250);
    }
}
 //on-click obstacle
function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
function obstacleColorChange(){
    obstacleRed = random(0,255);
    obstacleGreen = random(0,255);
    obstacleBlue = random(0,255);
    fill(obstacleRed,obstacleGreen,obstacleBlue);
}

