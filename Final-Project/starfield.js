class Stars {
  constructor() {
    this.pX = int(random(10, 725));
    this.pY = int(random(-700, 0));
    this.mY = random(0.1, 0.5);
  }

  frame() {
    this.motion();
    this.display();
  }

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

  motion() {
    this.pY += this.mY;
  }
}
