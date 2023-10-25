function setup() {
    createCanvas(500,600);
}
function draw() {
    background(14,94,27);

    strokeWeight(1);

    fill(102,0,204);

    circle(250,150,150);

    fill(51,255,153);

    triangle(200,450,275,250,400,450);

    fill(102,0,51);

    triangle(234,435,281,297,370,435);

    fill(0,204,204);

    square(220,116,25);

    ellipse(287,126,25,20);

    triangle(254,162,263,138,273,162);

    arc(248, 185, 50, 50, 0, PI);

    stroke("black");

    strokeWeight(5);

    point(234,127);

    point(288,127);

    strokeWeight(20);

    line(232,297,169,350);

    line(357,293,393,366);
    
    rect(257,480,10,75);

    rect(344,480,10,75);

    strokeWeight(1);

    fill("white");

    text('Self Portrait', 75,50);

    text('Adam K.J.', 70,524);

    textSize(25);
}
