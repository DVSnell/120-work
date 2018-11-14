//The class we use to create slappy.
class Pusher {
    //It's a ball...
    constructor() {
      this.pX = 100;
      this.pY = 200;
      this.rR = 60;
    }
    //... with a random alpha.  No motion controls since it is controlled by the
    //mouse.
    display() {
      push();
      translate(this.pX, this.pY);
      fill(color(255, 255, 255, (random(120))));
      ellipse(0, 0, this.rR);
      pop();
    }
  }
