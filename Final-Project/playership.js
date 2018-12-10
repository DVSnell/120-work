class Rocket {
    constructor() {
      this.alp = random(0, 80);
      this.pX = constrain((width / 2), 50, 700);
      this.pY = height / 1.25;
      this.rS = 50;
      this.rF = 190;
      this.strafe = 0;
      this.thrust = 0;
    }

    display() {
    translate(this.pX, this.pY);
    //Scale Correction
    scale(0.5, 0.5);
    push();
    //Rocket Exhaust
    noStroke();
    fill(color(190, 53, 25, this.alp));
    quad(0, 75, -40, 95, 0, 180, 40, 95);
    pop();
    push();
    noStroke();
    fill(color(255, 126, 0, this.alp));
    quad(20, 80, -25, 100, 10, 150, 30, 110);
    pop();
    push();
    noStroke();
    scale(-1, 1);
    fill(color(255, 126, 0, this.alp));
    quad(20, 80, -25, 100, 10, 150, 30, 110);
    pop();
    push();
    noStroke();
    fill(color(255, 239, 0, this.alp));
    quad(0, 85, -20, 110, -5, 130, 15, 100);
    pop();
    push();
    noStroke();
    scale(-1, 1);
    fill(color(255, 239, 0, this.alp));
    quad(0, 85, -20, 110, -5, 130, 15, 100);
    pop();
    //Rocket Body
    push();
    strokeWeight(4);
    stroke(110);
    fill(190);
    quad(0, 0, -40, 100, 0, 80, 40, 100);
    line(0, 50, 0, -120);
    ellipse(0, 0, 50, 190);
    ellipse(0, -120, 8, 8);
    //Rocketship Windows
    strokeWeight(2);
    fill(160, 255, 255);
    ellipse(0, -60, 15, 15);
    ellipse(0, -30, 25, 25);
    ellipse(0, 0, 15, 15);
    pop();
    //Our Hit Box for collision detection.
    push();
    translate(-this.pX, -this.pY);
    strokeWeight(0);
    fill(255,0,0);
    ellipse(this.pX , this.pY, this.rS, this.rF);
    pop();
    }

    moveLR(m) {
      this.strafe = m;
    }
    moveUD(m) {
      this.thrust = m;
    }

    motion(m) {
      this.pX += this.strafe * 10;
      this.pY += this.thrust * 10;
    }
}
