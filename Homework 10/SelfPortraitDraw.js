
/*var x = 100;
var y = 100;*/
// head colors
var headRed = 102;
var headGreen = 0;
var headBlue = 204;
// left eye colors
var leftEyeRed = 0;
var leftEyeGreen = 204;
var leftEyeBlue = 204;
// head variables
var headX = 250;
var headY = 150;
var headMove = 1;
//left eye variables
var leftEyeX = 220;
var leftEyeY = 116;
var leftEyeMove = 1;
// left leg variables
var leftLegX = 257;
var leftLegY = 480;
var leftLegMove = 1;
// right leg variables
var rightLegX = 344;
var rightLegY = 480;
var rightLegMove = 1;
// defines X and Y for the shoulder portion of the left arm
var leftArm1X = 232;
var leftArm1Y = 297;
var leftArmMove1 = 1;
// defines X and Y for the wrist portion of the left arm
var leftArm2X = 169;
var leftArm2Y = 350;
var leftArmMove2 = 1;
// title change variables
var size = 25;
var sizeChangeCount = 0
var sizeChangeAmount = 1

function setup() {
    createCanvas(500,600);
    headMove = floor(random(1,10));
    leftEyeMove = floor(random(1,8));
    leftLegMove = floor(random(1,8));
    rightLegMove = floor(random(1,8));
    leftArmMove1 = floor(random(1,8));
    leftArmMove2 = floor(random(1,8));
}
function draw() {
   
    background(14,94,27);

   /* text("X: " + mouseX,100,200 );

    text("Y: " + mouseY,100,220 ); */
    
    strokeWeight(1);

    fill(headRed,headGreen,headBlue);
    //head
    circle(headX,headY,150);
    headX+=headMove;
    if(headX >= 440 || headX <= 45){
        headMove *=-1;
    }
    if(headX >= 440){
        headRed = 40;
    }
    if(headX <=45){
        headRed = 102;
    }
    
    
    fill(51,255,153);
    //green body
    triangle(200,450,275,250,400,450);

    fill(102,0,51);
    //red body
    triangle(234,435,281,297,370,435);

    fill(leftEyeRed,leftEyeGreen,leftEyeBlue);
    // eye
    square(leftEyeX,leftEyeY,25);
    leftEyeY+=leftEyeMove;
    leftEyeX+=leftEyeMove;
    if(leftEyeY>= 234 || leftEyeY<=14){
        leftEyeMove*=-1;
    }
    if(leftEyeX>=391 || leftEyeX<=220){
        leftEyeMove*=-1;
    }
    if(leftEyeY>=234 || leftEyeX>=391){
        leftEyeBlue = 20;
    }
    if(leftEyeY<=14 || leftEyeX<=220){
        leftEyeBlue = 204;
    }
    //eye
    ellipse(287,126,25,20);
    //nose
    triangle(254,162,263,138,273,162);
    //mouth
    arc(248, 185, 50, 50, 0, PI);

    stroke("black");

    strokeWeight(5);
    //pupil
    point(234,127);
    // pupil
    point(288,127);

    strokeWeight(20);
    // left arm (our left)
    line(leftArm1X,leftArm1Y,leftArm2X,leftArm2Y);
    leftArm1Y+=leftArmMove1;
    leftArm2Y+=leftArmMove2;
    if(leftArm1Y>=328 || leftArm1Y<=256){
        leftArmMove1*=-1;
    }
    if(leftArm2Y>=383 || leftArm2Y<=300){
        leftArmMove2*=-1;
    }
    // right arm
    line(357,293,393,366);
    // left leg (our left)
    rect(leftLegX,leftLegY,10,75);
    leftLegX += leftLegMove;
    if(leftLegX>=306 || leftLegX<=229){
        leftLegMove *=-1;
    }
    console.log(leftLegMove);
    // right leg
    rect(rightLegX,rightLegY,10,75);
    rightLegY+=rightLegMove;
    if(rightLegY>=553 || rightLegY<=424){
        rightLegMove*=-1;
    }
    
   
    strokeWeight(1);

    fill("white");
    text('Self Portrait', 75,50);
    textSize(size);
    size+=sizeChangeAmount;
    sizeChangeCount++;
    if(sizeChangeCount > 5){
        sizeChangeAmount *=-1;
        sizeChangeCount = 0;
    }
    text('Adam K.J.', 70,524);

    
}
