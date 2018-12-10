class Laser {
  constructor() {
    this.pX = playership.pX;
    this.pY = playership.pY;
    this.rR = 5;
    this.cut = false;
  }

  frame() {
    this.motion();
    this.display();
  }

  display() {
    push();
    fill(0,200,0);
    ellipse (this.pX+20, this.pY, this.rR, 50);
    pop();
    push();
    fill(0,200,0);
    ellipse (this.pX-20, this.pY, this.rR, 50);
    pop();
  }

  motion() {
    this.pY -= 20;
  }

  blast(asteroids) {
    let bd = dist (this.pX, this.pY, asteroids.pX, asteroids.pY);
    if (bd < (this.rR + 20) + asteroids.rR) {
      this.cut = true;
      return true;
    } else {
      return false;
    }
  }
}
