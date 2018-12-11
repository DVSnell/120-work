//Lets make the player ship.
class Rocket {

//We establish some base parameters.  Nothing really out of the way here.
    constructor() {
      this.pX = width / 2;
      this.pY = height / 1.25;
      this.rS = 110;
      this.rF = 40;
      this.strafe = 0;
      this.thrust = 0;
    }

//Contains our ship to be drawn.
    display() {
    push();
    strokeWeight(2);
    fill(180,180,255);
    ellipse(this.pX-15, this.pY+12, 18, 15);
    ellipse(this.pX+15, this.pY+12, 18, 15);
    fill(100);
    stroke(110);
    rectMode(CENTER);
    rect(this.pX+20, this.pY-10, 3, 20);
    rect(this.pX-20, this.pY-10, 3, 20);
    quad(this.pX, (this.pY-30), (this.pX+50), (this.pY+10), (this.pX), (this.pY+15), (this.pX-50), (this.pY+10));
    strokeWeight(4);
    line(this.pX, (this.pY+2), this.pX, (this.pY+18));
    strokeWeight(2);
    fill(50);
    stroke(70);
    ellipse(this.pX, this.pY-15, 7, 18);
    pop();

// //Our Hit Box for collision detection.
    push();
    strokeWeight(0);
    fill(255,0,0,0);
    ellipse(this.pX , this.pY, this.rS, this.rF);
    pop();
    }

//These receive input from the arrow keys...
    moveLR(m) {
      this.strafe = m;
    }
    moveUD(m) {
      this.thrust = m;
    }
    
//Which drives our motion deltas.
    motion(m) {
      this.pX += this.strafe * 10;
      this.pY += this.thrust * 10;
    }
}
