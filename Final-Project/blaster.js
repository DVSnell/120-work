//PewPew
class Laser {
  constructor() {
//ties them to the ships condition.  Als sets up our true false scut statement for
//when they hit a rock.
    this.pX = playership.pX;
    this.pY = playership.pY;
    this.rR = 5;
    this.cut = false;
  }

//Good old container frame.
  frame() {
    this.motion();
    this.display();
  }

//Used to show our little green friends in action.
  display() {
    push();
    strokeWeight(2);
    stroke(100,150,0);
    fill(0,200,0, 200);
    ellipse (this.pX+20, this.pY, this.rR, 50);
    pop();
    push();
    strokeWeight(3);
    stroke(100,150,0);
    fill(0,200,0, 200);
    ellipse (this.pX-20, this.pY, this.rR, 50);
    pop();
  }

//Moves those blasts.
  motion() {
    this.pY -= 20;
  }

//Helps determine whether or not we cut asteroids and blaster shots on intersect.
  blast(asteroids) {
    let bd = dist (this.pX, this.pY, asteroids.pX, asteroids.pY);
    if (bd < (this.rR + 5) + asteroids.rR) {
      this.cut = true;
      return true;
    } else {
      return false;
    }
  }
}
