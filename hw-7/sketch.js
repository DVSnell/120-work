
/*
let ball = {};
ball.width = 40;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;

function setup() {
    createCanvas(windowWidth, 400);
    background(255);
}



function draw() {

    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;


    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }

    fill(255);
    ellipse(ball.x, ball.y, ball.width, ball.width);
}

function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);
}
*/


let ball = {};
ball.width = 40;
ball.x = 20;
ball.y = 20;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;
// Added to make the ball "teleport" when mouse is pressed.
ball.spin = 0.5;


function setup() {
    //Altered for larger "Play area"
    createCanvas(windowWidth, 800);
    // Change Angle to degrees for spin
    angleMode(DEGREES);
}


function draw() {
    //  Adds a non-persistent "ghost tail" effect to the ball.
    //  Make the ball and its tails a bit prettier.
    if (frameCount % 20 < 2){
        background(0);
        fill(random(255), random(255), random(255), random(100, 255));
    //  Uses image persistance to make the ball look predominately white with a changing tail.
  } else if (frameCount % 5 <= 1){
        background(0);
        fill(255, 255, 255, 255);
    }
    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;

    //  Altered to make the ball bounce from the edge instead of from the center.
    if (ball.x >= width-20 || ball.x <= 20) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height-20 || ball.y <= 20) {
        ball.delta_y = -1 * ball.delta_y;
    }

    //  Switched to mouseIsPressed and widened map variables for added insanity.
    //  Added ball.spin to give a type of "teleportation" to the ball.
    if (mouseIsPressed) {
      ball.scale_x = map(mouseX, 0, width, 0.1, 20);
      ball.scale_y = map(mouseY, 0, height, 0.1, 20);
      rotate(ball.spin);
      ball.spin = ball.spin + 0.2;
    }
    //

    ellipse(ball.x, ball.y, ball.width, ball.width);

}

    //  Created Event to occur when the mouse is clicked on the ball itself.
function mousePressed() {
    //Tracks the distance between the mouse location and the ball location
    let mRange = dist(mouseX, mouseY, ball.x, ball.y);
    //  States that if the mouse is pressed while within the ball, to display text and stop the program.
    if(mRange < ball.width) {
      background(155);
      fill(0);
      textSize(72);
      textAlign(CENTER);
      text('Game Over', width/2, height/2);
      textSize(24);
      text('You caught the ball!', width/2, (height/2)+60);
      noLoop();
    }
  }
