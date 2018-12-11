//We who are about to...
class Rocks {
//Makes our rocks of varying sizes, colors, and positions.
  constructor(startY) {
    this.pY = int(random(-200, -20));
    this.pX = random(10, 725);
    this.pY = -100;
    this.rR = random(10, 90);
    this.mY = random(3, 6);
    this.c = color(random (45, 70),random(45, 70),random(60, 90));
    this.length = r;
  }

//...salute you!  Getting familiar?
  frame() {
    this.motion();
    this.display();
  }

//Draw the rocks.
  display() {
    push();
    fill(this.c);
    ellipse(this.pX, this.pY, this.rR);
    pop();
  }

//Rocks fall...
  motion() {
    this.pY += this.mY;
  }

//...Everyone splices them with blasters.
  blast(){
    let index = asteroids.indexOf(this);
    asteroids.splice(index, 1);
  }

}
