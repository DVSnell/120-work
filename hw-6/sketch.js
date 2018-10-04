//Global Variables include color, the rectangle corners, mouse limits, the four snakes as objects, and a counter.
let color = 0;
let corners = 0;
let mX = 0;
let mY = 0;
let strW = 5;

let snakeA ={
startX: 0,
startY: 0,
endX: 480,
endY: 480,
};

let snakeB ={
startX: 960,
startY: 0,
endX: 480,
endY: 480,
};

let snakeC ={
startX: 0,
startY: 960,
endX: 480,
endY: 480,
};

let snakeD ={
startX: 960,
startY: 960,
endX: 480,
endY: 480,
};

let count = 0;

// Setup
function setup(){
    //Canvas creation command
    createCanvas(960, 960);
    //Random background, but kept dark for visibility.
    background(random(25), random(25), random(25));
}

//Adding Draw function
function draw(){
    //Establish animation settings
    frameRate(60);
    noCursor();

    //Give our snakes some color
    color = random(125, 255);

    //Let us play with some shapes using the Mouse
    strokeWeight(1);
    stroke(180, 180, 180, 15);
    //A rectangle that slowly sweeps in
    fill(random(130), random(130), random(130), 1);
    //The corners are controlled by the mouse at an accelerated rate giving an uneven gradient effect, with constraints
    corners = map((sq(mouseX)), 0, width, 0, 360);
    //Makes the rectangle move.
    rect(1 * (960 / frameCount), 1 * (960 / frameCount) , 960, 960, corners);

    //Allows the mouse to do stuff for entertainment purposes
    //Limits the mouse movement.
    mX = constrain(mouseX, 125, 835);
    mY = constrain(mouseY, 125, 835);
    //Actually draws the circle.
    ellipse(mX, mY, 240, 240);

    //Make our serpentish buddies load in slowly and keep the counter from progressing too fast.
    if (frameCount % 300 == 0){
    //Snake A
    //Start the line
    strokeWeight(strW + 2);
    stroke(color, 0, 0);
    line(snakeA.startX, snakeA.startY, snakeA.endX, snakeA.endY);
    //Make the old end point of the line the new start point of the line.
    snakeA.startX = snakeA.endX;
    snakeA.startY = snakeA.endY;
    //Move the snake in a random direction
    snakeA.endX = random(width);
    snakeA.endY = random(height);

    //Snake B
    //Start the line
    strokeWeight(strW + 3);
    stroke(0, color, 0);
    line(snakeB.startX, snakeB.startY, snakeB.endX, snakeB.endY);
    //Make the old end point of the line the new start point of the line.
    snakeB.startX = snakeB.endX;
    snakeB.startY = snakeB.endY;
    //Move the snake in a random direction
    snakeB.endX = random(width);
    snakeB.endY = random(height);

    //Snake C
    //Start the line
    strokeWeight(strW + 4);
    stroke(0, 0, color);
    line(snakeC.startX, snakeC.startY, snakeC.endX, snakeC.endY);
    //Make the old end point of the line the new start point of the line.
    snakeC.startX = snakeC.endX;
    snakeC.startY = snakeC.endY;
    //Move the snake in a random direction
    snakeC.endX = random(width);
    snakeC.endY = random(height);

    //Snake D
    //Start the line
    strokeWeight(strW + 6);
    stroke(color, color, color);
    line(snakeD.startX, snakeD.startY, snakeD.endX, snakeD.endY);
    //Make the old end point of the line the new start point of the line.
    snakeD.startX = snakeD.endX;
    snakeD.startY = snakeD.endY;
    //Move the snake in a random direction
    snakeD.endX = random(width);
    snakeD.endY = random(height);

    //Increase the counter
    count++;
    //Shrink the snake's stroke weight.
    strW = strW - 2;
    }
    //When the counter hits the designated number, stop the animation.
    if (count == 15){
      noLoop();
    }
}
