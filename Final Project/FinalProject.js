//cloud variables
var cloudOneX = 46;
var cloudOneY = 77;
var cloudTwoX = 500;
var cloudTwoY = 130;
//cloud color variables
var cloudR = 255;
var cloudG = 255;
var cloudB = 255;
//sky color variables
var skyR = 112;
var skyG = 134;
var skyB = 255;
//hill color variables
var hillR = 77;
var hillG = 207;
var hillB = 74;
//key interaction variables
var space = 32;
var backSpace = 8;
var upArrow = 38;
var downArrow = 40;
// text interaction variables
var firstLineX = 425;
var thirdLineX = 450;
//moon/sun variables
var moonX = 322;
var moonY = 448;
var sunX = 408 
var sunY = 101

function setup(){
    createCanvas (800,500);

}
function draw(){
    background(skyR, skyG, skyB);
    /*mouse coords
    text("X: " + moonX,100,200 );
    text("Y: " + moonY,100,220 ); */
    //draws and moves moon/sun
    moon();
    sun();
    //draw environment
    drawHills();
    drawClouds();
    //moves the clouds
    cloudMovement();
    //text
    instructionText();
    //changes the time of day
    nightTimeChange();
    dayTimeChange();
}
function drawHills(){
    fill(hillR, hillG, hillB);
    ellipse(41,490,600,250);
    ellipse(368,525,600,250);
    ellipse(755,525,400,250);
}
function drawClouds(){
    fill(cloudR,cloudG,cloudB);
    ellipse(cloudOneX,cloudOneY,100,50);
    ellipse(cloudTwoX,cloudTwoY,60,25);
}
function cloudMovement(){
    if(cloudOneX >= 850){
        cloudOneX = -50;
    }
    else{
        cloudOneX+=1;
    }
    if(cloudTwoX >=850){
        cloudTwoX = -50;
    }
    else(cloudTwoX+=1);
}
function instructionText(){
    fill(255);
    text("Use up and down arrow keys to change time of day",firstLineX,200);
    text("Backspace to hide message",thirdLineX,250);
    if(keyIsDown(backSpace)){
        firstLineX = 1200;
        thirdLineX = 1200;
    }
}
function nightTimeChange(){
    if(keyIsDown(downArrow)){
        skyR -= 3;
        skyG -= 3;
        skyB -= 1;
    }
    if(skyB<=100){
        skyB = 101;
    }
    if(keyIsDown(downArrow)){
        cloudR -= 1;
        cloudG -= 1;
        cloudB -= 1;
    }
    if(cloudR <= 100){
        cloudR = 101;
        cloudG = 101;
        cloudB = 101;
    }
    if(keyIsDown(downArrow)){
        hillR -= 1;
        hillG -= 1;
        hillB -= 1;
    }
    if(hillG <= 80){
        hillR = 0;
        hillG = 80;
        hillB = 0;
    }
}
function dayTimeChange(){
    if(keyIsDown(upArrow)){
        skyR += 3;
        skyG += 3;
        skyB +=1;
    }
    if(skyB >= 255){
        skyR = 112;
        skyG = 134;
        skyB = 255;
    }
    if(keyIsDown(upArrow)){
        cloudR += 1;
        cloudG += 1;
        cloudB += 1;
    }
    if(keyIsDown(upArrow)){
        hillR += .5;
        hillG += 1;
        hillB += .5;
    }
    if(hillG >= 207){
        hillR = 77;
        hillG = 207;
        hillB = 74;
    }
}
function moon(){
    fill(240, 255, 110);
    circle(moonX,moonY,50);
    if(keyIsDown(downArrow)){
        moonY -= 3;
        moonX += .75;
    }
    else{
        if(keyIsDown(upArrow)){
            moonY += 3;
            moonX -=.75;
        }
    }
    if(moonY <= 101 && moonX >= 408){
        moonY = 101;
        moonX = 408;
    }
    else{
        if(moonY >= 448 && moonX <=322){
            moonY = 448;
            moonX = 322;
        }
    }
}
function sun(){
    fill(255, 191, 71);
    circle(sunX,sunY,75);
    if(keyIsDown(upArrow)){
        sunY -= 3;
        sunX += .75;
    }
    else{
        if(keyIsDown(downArrow)){
            sunY += 3;
            sunX -= .75;
        }
    }
    if(sunY <= 101 && sunX >= 408){
        sunY = 101;
        sunX = 408;
    }
    else{
        if(sunY >= 448 && sunX <=322){
            sunY = 448;
            sunX = 322;
        }
    }
}
    



