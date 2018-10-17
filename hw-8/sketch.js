//Pixel Painter by Don-Vincent Snell

//Give us a simple canvas of 800x800
function setup() {
    createCanvas(800, 800);
}

//Global Objects

//Color object, for controlling the color as a variable.  Why negative?  Because Math.
let color = {};
color.r = -140;
color.g = -140;
color.b = -140;
color.a = 0;

//Box Object.  Our "pixels" we can paint with.  Used to draw rectangles.
let box = {};
box.posX = 100;
box.posY = 100;
box.d = 20;

//Here we go...
function draw() {

    //A few more variables.
    //Math.  Yay.  So we are pulling the mouse position and measuring it's distance
    //from the center of the canvas, mapping it down, constraining it between 0
    //and 255, and making it an integer.
    let m = int(constrain(map(dist(mouseX, mouseY, 400, 400), 0, 400, 0, 255), 0, 255));
    //Creates a pair of constrained mouse variables to keep our pixels in the right place.
    let mX = constrain(mouseX, 0, 780);
    let mY = constrain(mouseY, 0, 780);

    //Since color bottoms out at 0, the negative values don't do much here.
    background(color.r, color.g, color.b, color.a);
    //Makes our rectangles draw from their center.
    rectMode(CENTER);
    //For loops!  A nested loop that draws our "pixels" using data from the box object.
    //First, from top to bottom, following our constrained mouse with a bit of space
    //between each.  The speed withi which the mouse is moved also generates "noise"
    //in our pattern as values change to quickly for the color and position to update smoothly.
    for (let boxY = 20; boxY <= mY; boxY += 22) {
      //Then left to right, still following the constrained mouse and with space.
        for (let boxX = 20; boxX <= mX; boxX += 22) {
          //Says where to place the box and what settings to use.  The Fill settings
          //are rather maleable and  work with the negative values in our color object
          //to vary the shade.  And why the random alpha?  Click your mouse.
            box.posX = boxX;
            box.posY = boxY;
            fill(color.r+(mY-445), color.g+(mX-445), color.b+(m), random(0,255));
            rect(box.posX, box.posY, box.d, box.d);
        }
    }
}
//Wanna see something cool?  This changes the background to black, but more importantly,
//it triggers the alpha in the background.  Since our background changes with each loop
//of the draw function, we get a dark strobe effect on our pattern.  Clicking it again,
//resets the alpha to 0.
function mouseClicked() {
    if (color.a === 0) {
      color.a = 255;
    } else {
      color.a = 0;
    }
}
