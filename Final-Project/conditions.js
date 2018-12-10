class States {
  constructor() {
    // this.r = 15;
    // this.play = false;
    // this.end = false;
    // this.difficulty = 1;
  }

  startDisplay() {
    cursor();
    push();
    fill(0);
    imageMode(CENTER);
    image(menu, width/2, height /2);
    pop();
    push();
    fill(80, 10, 10);
    quad(0, 0, 750, 0, 700, 30, 50, 30);
    pop();
    push();
    fill(115, 10, 10);
    quad(0, 1000, 50, 970, 700, 970, 750, 1000);
    pop();
    push();
    fill(115, 10, 10);
    quad(0, 0, 50, 30, 50, 970, 0, 1000);
    pop();
    push();
    fill(80, 10, 10);
    quad(750, 0, 750, 1000, 700, 970, 700, 30);
    textAlign(CENTER);
    textSize(24);
    rectMode(CENTER);

    if (mouseX > 275 && mouseX < 475 && mouseY > 575 && mouseY < 625) {
        if (mouseIsPressed) {
           r = 15;
           play = 1;
           difficulty = 2000000;
           score = 0;
           timer = 0;
        }
        fill(220, 220, 220);
    } else {
        fill(120, 120, 120);
    }
    rect(width / 2, 600, 200, 50);
    fill(0);
    text('Easy', width / 2, 610);

    if (mouseX > 275 && mouseX < 475 && mouseY > 650 && mouseY < 700) {
        if (mouseIsPressed) {
          r = 20;
          play = 1;
          difficulty = 500000;
          score = 0;
          timer = 0;
        }
        fill(220, 220, 220);
    } else {
        fill(120, 120, 120);
    }
    rect(width / 2, 675, 200, 50);
    fill(0);
    text(`Medium`, width / 2, 685);

    if (mouseX > 275 && mouseX < 475 && mouseY > 725 && mouseY < 775) {
        fill(220, 220, 220);
        if (mouseIsPressed) {
          r = 30;
          play = 1;
          difficulty = 200000;
          score = 0;
          timer = 0;
        }
    } else {
        fill(120, 120, 120);
    }
    rect(width / 2, 750, 200, 50);
    fill(0);
    text('Hard', width / 2, 760);

    if (mouseX > 275 && mouseX < 475 && mouseY > 800 && mouseY < 850) {
      if (mouseIsPressed) {
         r = 15;
         play = 2;
         difficulty = 1;
         score = 0;
         timer = 0;
      }
        fill(220, 220, 220);
    } else {
        fill(120, 120, 120);
    }
    rect(width / 2, 825, 200, 50);
    fill(0);
    text(`Credits`, width / 2, 835);
    pop();
  }

  crashDisplay() {
    cursor();
    push();
    image(splode, 0, 0);
    fill(0, 0, 0, 100);
    rect(0, 0, 750, 1000);
    pop();
    push();
    textSize(72);
    textAlign(CENTER);
    text('You Made It!', width / 2, height / 2 -100);
    textSize(48);
    text('Your score was', width / 2, height / 2);
    textSize(36);
    text(score, width / 2, height / 2 + 45);
    textSize(24);
    text(`and it took you`, width / 2, height / 2 + 75);
    text(timer, width / 2, height / 2 + 100);
    text('seconds!', width / 2, height / 2 + 125);
    rectMode(CENTER);

    if (mouseX > 275 && mouseX < 475 && mouseY > 900 && mouseY < 950) {
      if (mouseIsPressed) {
         r = 15;
         play = 0;
         difficulty = 1;
         score = 0;
         timer = 0;
      }
        fill(220, 220, 220);
    } else {
        fill(120, 120, 120);
    }
    rect(width / 2, 925, 200, 50);
    fill(0);
    text(`Restart`, width / 2, 935);
    pop();
  }

  victoryDisplay() {
    cursor();
    push();
    image(planet, -800, -200);
    fill(0, 0, 0, 75);
    rect(0, 0, 750, 1000);
    fill(230, 230, 230);
    textSize(72);
    textAlign(CENTER);
    text('You Made It!', width / 2, height / 2 -100);
    textSize(48);
    text('Your score was', width / 2, height / 2);
    textSize(36);
    text(score, width / 2, height / 2 + 45);
    textSize(24);
    text(`and it took you`, width / 2, height / 2 + 75);
    text(timer, width / 2, height / 2 + 100);
    text('seconds!', width / 2, height / 2 + 125);
    rectMode(CENTER);
    fill(120, 120, 120);
    rect(width / 2, 700, 200, 50);
    fill(0);
    text('Restart!', width / 2, 710);

    if (mouseX > 275 && mouseX < 475 && mouseY > 800 && mouseY < 850 ) {
      if (mouseIsPressed) {
         r = 15;
         play = 2;
         difficulty = 1;
         score = 0;
         timer = 0;
      }
        fill(220, 220, 220);
    } else {
        fill(120, 120, 120);
    }
    fill(120, 120, 120);
    rect(width / 2, 775, 200, 50);
    fill(0);
    text(`Credits`, width / 2, 785);
    pop();
  }

  creditDisplay() {
    cursor();
    push();
    imageMode(CENTER);
    image(credit, width/2, height /2, 750, 1000);
    fill(0, 0, 0, 100);
    rect(0, 0, 750, 1000);
    pop();
    push();
    textAlign(CENTER);
    textSize(24);
    rectMode(CENTER);

    if (mouseX > 275 && mouseX < 475 && mouseY > 900 && mouseY < 950) {
      if (mouseIsPressed) {
         r = 15;
         play = 0;
         difficulty = 1;
         score = 0;
         timer = 0;
      }
        fill(220, 220, 220);
    } else {
        fill(120, 120, 120);
    }
    rect(width / 2, 925, 200, 50);
    fill(0);
    text(`Restart`, width / 2, 935);
    pop();
  }

}
