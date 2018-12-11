//Outback counting stars...
class Stars {
  constructor(startY) {

//Spawns our initial set of stars.
    if (startY == null) {
      this.pY = int(random(-10, 0));
    } else {
      this.pY = startY;
    }

//Moves them at variable speeds and twinkles them.
    this.pX = int(random(10, 725));
    this.mY = random(0.1, 0.5);
  }

//Contains our functions for easier reference.
  frame() {
    this.motion();
    this.display();
  }

//Our actual star shapes.  A pair of quads was enough.
  display() {
    push();
    translate(this.pX, this.pY);
    scale(random(0.85, 1.15));
    noStroke();
    fill(255);
    quad(0, 10, 1, 0, 0, -10, -1, 0);
    quad(0, 1, 10, 0, 0, -1, -10, 0);
    pop();
  }

//Make with the slow drop.
  motion() {
    this.pY += this.mY;
  }
}
