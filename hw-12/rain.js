//The class used to make our rain.
class Raindrops {
    constructor() {
      this.pX = random(-600, 720);
      this.pY = -10;
      this.rR = 20;
      this.mX = 5;
      this.mY = 10;
      this.c = color(180,180,200);
    }
    //Calls three seperate functions.  One to dictate motion, one to draw and
    //one to splice.
    frame() {
      this.motion();
      this.cutter();
      this.display();
    }
    //More spheres
    display() {
      push();
      translate(this.pX, this.pY);
      strokeWeight(1);
      stroke(235);
      fill(this.c);
      ellipse(0, 0, this.rR);
      pop();
    }
    //A nice slanted motion that also gives us some variables to play with.
    motion() {
      this.pX += this.mX;
      this.pY += this.mY;
    }
    //Basic splicer.  If the rain gets out of bounds, we cut it out of the array.
    //Saves memory and keeps the array uncluttered.
    cutter() {
    if (this.pY > 955 || this.pX > 710 || this.pY < -10 || this.px < -10) {
      let index = rain.indexOf(this);
      rain.splice(index, 1);
    }
  }
}
