// Setup
function setup(){

    //Canvas creation command
    createCanvas(800, 800);
    background('black');
    angleMode(DEGREES);
}

//Global Variables
let colors = ['rgb(255, 0, 0)', 'rgb(0, 255, 0)', 'rgb(0, 0, 255)', 'rgb(255, 255, 255)', 'rgb(0, 0, 0)'];
let spin = 0;
let orbitX = 100;
let orbitY = 100;

//Adding Draw function
function draw(){

    //Establish animation settings
    frameRate(30);
    noCursor();

    //Put some English on the draw when Mouse is pressed.
    if (mouseIsPressed){
      spin = spin + 2;
      rotate(spin * 2);
    }

    //Mouse controlled grid maker
    push();
    strokeWeight(2);
    stroke('white');
    line(mouseX, 0, mouseX, width);
    line(0, mouseY, height, mouseY);
    pop();

    //Generate some random lines with some modulo to slow it down.
    if (frameCount % 30 >= 20 ){
      strokeWeight(random(1,5));
      stroke(random(colors));
      line(random(5, width), random(5, height), random(5, width), random(5, height));
    }

    //Rectangles are nice and add more color.
    if (frameCount % 40 <= 10 ){
      strokeWeight(random(0, 12));
      stroke(random(colors));
      fill(random(colors));
      rotate(spin / 5 );
      rect(random(5, width), random(5, height), random(5, width / 5), random(5, height / 5));
    }
}
    //Fun With Buttons: The Up Arrow Stops the loop, the Down Arrow Restarts the loop.
function keyReleased(){
    if (key === 'ArrowUp'){
      noLoop();
    } else if (key === 'ArrowDown'){
      loop();
    }
}
