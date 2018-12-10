//Declare global variables including alpha for the rocket engine and our starfield array.
let alp = 0;
let starfield = [];

//Declare a global object to control background color
let bg = {};
bg.r = 46;
bg.g = 185;
bg.b = 235;
bg.a = 0;

//Setup and canvas creation
function setup() {
  createCanvas(1200, 900);
}

//Draw function to create background and hide mouse.
function draw() {
  background(color(bg.r, bg.g, bg.b));
  noCursor();

  //Make Stars every frame, adding them to the starfield array.
  //First i initializes and second controls amount of starfield on screen.
  //Higher numbers increases starfield density.
  //Also makes the sky change from blue to black.
  for (let i = 0; i < 15; i++) {
    starfield.push(new star());
    bg.r -= 0.75;
    bg.g -= 0.75;
    bg.b -= 0.75;
  }

  //Keep those stars spawning with a for of loop,
  //updating their position and drawing more using the nested
  //motion and display functions within the starfield function.
  for (let star of starfield) {
    star.motion();
    star.display();
  }

  //Make our Rocketship appear.
  rocketShip();
}

//The start of the star function.
function star() {

  //Base settings control X and Y start position and use scatter to determine
  //spawning.  pY ensures stars spawn either right on the edge or before coming
  //on screen.
  this.pX = 0;
  this.pY = random(-100, 0);
  this.scatter = int(sq(random(1, width / 0.5)));

  //Ties our motion rate for the position into a new nested function called time.
  this.motion = function(time) {

    //Uses scatter to determine initial value to be pushed to the draw function
    ///through the motion function.
    this.pX = this.scatter;

    //Splice Stars out of Starfield when they pass below bottom of screen
    if (this.pY > height) {
      let index = starfield.indexOf(this);
      starfield.splice(index, 1);
    }

    //Make Star motion dependent on mouse press.  Move at +3 as base and +6
    //when pressed
    if (mouseIsPressed){
      this.pY += 6;
    }
    else {
      this.pY += 3;
    }
  };

  //This display function holds our star design.
  this.display = function() {
    push();
    translate(this.pX, this.pY);

    //Make them twinkle.
    scale(random(0.85, 1.15));

    //Star shapes.
    noStroke();
    fill(255);
    quad(0, 10, 1, 0, 0, -10, -1, 0);
    quad(0, 1, 10, 0, 0, -1, -10, 0);
    pop();
  };
}

//A simple design for our rocketship, wrapped up in a function for ease.  Can
// be transferred to a different file when we get to that level of coding.
function rocketShip(){
  let  rocketX = width / 2;
  let  rocketY = height / 2;
    push();

    //Mouse Controller
    translate(rocketX, rocketY);

    //Scale Correction
    scale(0.5, 0.5);
    push();

    //Rocket Exhaust
    noStroke();
    fill(color(190, 53, 25, alp));
    quad(0, 75, -40, 95, 0, 180, 40, 95);
    pop();
    push();
    noStroke();
    fill(color(255, 126, 0, alp));
    quad(20, 80, -25, 100, 10, 150, 30, 110);
    pop();
    push();
    noStroke();
    scale(-1, 1);
    fill(color(255, 126, 0, alp));
    quad(20, 80, -25, 100, 10, 150, 30, 110);
    pop();
    push();
    noStroke();
    fill(color(255, 239, 0, alp));
    quad(0, 85, -20, 110, -5, 130, 15, 100);
    pop();
    push();
    noStroke();
    scale(-1, 1);
    fill(color(255, 239, 0, alp));
    quad(0, 85, -20, 110, -5, 130, 15, 100);
    pop();

    //Rocket Body
    push();
    strokeWeight(4);
    stroke(110);
    fill(190);
    quad(0, 0, -40, 100, 0, 80, 40, 100);
    line(0, 50, 0, -120);
    ellipse(0, 0, 50, 190);
    ellipse(0, -120, 8, 8);

    //Rocketship Windows
    strokeWeight(2);
    fill(160, 255, 255);
    ellipse(0, -60, 15, 15);
    ellipse(0, -30, 25, 25);
    ellipse(0, 0, 15, 15);
    pop();
    pop();

    //Makes our rocket engine pulse brighter when mouse is pressed.
    if (mouseIsPressed){
      alp = random(120, 255);
    }
    else {
      alp = random(0, 80);
    }
    if ((keyIsPressed == true) && (key == 39)){
      rocketX += 10;
  }
}
