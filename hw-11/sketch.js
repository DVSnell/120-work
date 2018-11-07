//Declare a global object to control car body color
let cars = [];
let carsCount = 6;
//Setup and canvas creation
function setup() {
  createCanvas(windowWidth, 300);
  for (let i = 0; i < carsCount; i++) {
      cars.push(new Racecar() );
  }
}

//Draw function to create background and road.  Also hides mouse.
function draw() {
  background('rgb(68, 176, 222)');
  fill('rgb(20, 64, 4)');
  stroke('rgb(10, 36, 0)');
  rect(0, height - 160, width, 170);
  fill('rgb(20, 20, 20)');
  stroke('rgb(10, 36, 0)');
  rect(0, height - 150, width, 100);
  fill(180);
  noStroke();
  rect(0, height - 150, width, 5);
  rect(0, height - 50, width, 10);

  //Runs our cars array frame functions.
  for (let i = 0; i < cars.length; i++) {
    cars[i].frame();
  }
}
class Racecar {
    //Sets our Racecars' variables: Initial starting point, movement values,
    //and colors.
    constructor() {
      this.pX = random(120, width - 120);
      this.pY = random(height - 150, height - 70);
      this.mX = random(0, 3);
      this.mY = random(0, 3);
      this.r = random(255);
      this.g = random(255);
      this.b = random(255);
    }
    //Our package of functions, one to draw the cars and the other to move them.
    frame() {
      this.display();
      this.motion();
    }

    display() {
      //Racecar Body
      push();
      translate(this.pX, this.pY);
      strokeWeight(1.5);
      fill(color(this.r, this.g, this.b));
      stroke(color(this.r - 33, this.g - 42, this.b - 16));
      arc(25, 2, 180, 45, radians(180), radians(0), PIE);
      arc(-40, 2, 135, 80, radians(180), radians(0), PIE);
      strokeWeight(0);
      arc(25, 2, 178, 42, radians(180), radians(0), PIE);
      //Racecar Tires
      strokeWeight(1.5);
      fill('rgb(36, 36, 36)');
      stroke('rgb(0, 0, 0)');
      ellipse(70, 2, 30);
      ellipse(-70, 2, 30);
      fill('rgb(171, 171, 171)');
      stroke('rgb(85, 85, 85)');
      ellipse(70, 2, 10);
      ellipse(-70, 2, 10);
      //Racecar Wheel Wells and Door Line
      fill(color(this.r, this.g, this.b));
      stroke(color(this.r - 33, this.g - 42, this.b - 16));
      arc(70, 0, 35, 30, radians(180), radians(0), PIE);
      arc(-70, 0, 35, 30, radians(180), radians(0), PIE);
      line(-29, -20, -19, 2);
      //Racecar Window
      fill('rgb(17, 192, 223)');
      stroke('rgb(1, 162, 190)');
      arc(-30, -21, 90, 24, radians(250), radians(0), PIE);
      pop();
    }
    //Makes our cars move.  Haven't quite cracked collision detection/avoidance
    //yet. Dist with bounding boxes and position checks are... complicated.
    //It does account for collision with the walls and it keeps them on the
    //road, though.
    motion() {
      this.pX += this.mX;
      this.pY += this.mY;
        if (this.pX >= width - 115 || this.pX <= 115) {
          this.mX *= -1;
        }
        if (this.pY >= height - 65 || this.pY <= height - 160) {
          this.mY *= -1;
        }
    }
}
