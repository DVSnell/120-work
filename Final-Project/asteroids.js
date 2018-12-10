class Rocks {
  constructor() {
    this.pX = random(10, 725);
    this.pY = -1800;
    this.rR = 20;
    this.mY = random(3, 6);
    this.c = color(180,180,200);
    this.length = r;
  }

  frame() {
    this.motion();
    this.display();
  }

  display() {
    push();
    strokeWeight(1);
    stroke(235);
    fill(this.c);
    ellipse(this.pX, this.pY, this.rR);
    pop();
  }

  motion() {
    this.pY += this.mY;
  }

  blast(){
    let index = asteroids.indexOf(this);
    asteroids.splice(index, 1);
  }

  smash(){
    let index = asteroids.indexOf(this);
    asteroids.splice(index, 1);
  }
}
