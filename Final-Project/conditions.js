//Ready to go mad?  Here we go...
class States {

//Nothing actually needed here since we're simulating some drawn displays.
  constructor() {
  }

//Our Start Screen. With Buttons for difficulty and instructions on how to play.
  static startDisplay() {
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
    textFont(font);
    textAlign(CENTER);
    textSize(96);
    fill(255);
    text('I.D.I.O.T.', (width / 2)+3, 203);
    textSize(36);
    text('Interplanetary Debris Interdiction and Observation Taskforce', 64, 246, 600);
    fill(150);
    textSize(96);
    text('I.D.I.O.T.', width / 2, 200);
    textSize(36);
    text('Interplanetary Debris Interdiction and Observation Taskforce', 63, 245, 600);
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
    text(`Instructions`, width / 2, 835);
    pop();
  }

//Our Lose Condition Screen. Displays your score and time and lets you restart the game.
  static crashDisplay() {
    cursor();
    push();
    image(splode, 0, 0);
    fill(0, 0, 0, 100);
    rect(0, 0, 750, 1000);
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
    pop();
    push();
    fill(180, 20, 20);
    textFont(font);
    textSize(64);
    textAlign(CENTER);
    text('You Crashed!', width / 2, height / 2 -100);
    textSize(48);
    text('Your score was', width / 2, height / 2);
    textSize(36);
    text(score, width / 2, height / 2 + 45);
    textSize(24);
    text(`and you lasted`, width / 2, height / 2 + 75);
    text(timer, width / 2, height / 2 + 100);
    text('seconds!', width / 2, height / 2 + 125);
    rectMode(CENTER);
    if (mouseX > 275 && mouseX < 475 && mouseY > 900 && mouseY < 950) {
      if (mouseIsPressed) {
         reUp();
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

//Our Un-Lose Condition Screen. Fine, you can call it a "Win Condition".  Displays your
//score and time and lets you restart the game.
  static victoryDisplay() {
    cursor();
    push();
    image(planet, -800, -200);
    fill(0, 0, 0, 75);
    rect(0, 0, 750, 1000);
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
    pop();
    push();
    fill(230, 230, 230);
    textFont(font);
    textSize(64);
    textAlign(CENTER);
    text('This Sector', width / 2, height / 2 -130);
    text('Is Safe!', width / 2, height / 2 -70);
    textSize(48);
    text('Your score is', width / 2, height / 2);
    textSize(36);
    text(score, width / 2, height / 2 + 45);
    textSize(24);
    text(`and it took you`, width / 2, height / 2 + 75);
    text(timer, width / 2, height / 2 + 100);
    text('seconds!', width / 2, height / 2 + 125);
    rectMode(CENTER);
    if (mouseX > 275 && mouseX < 475 && mouseY > 900 && mouseY < 950) {
      if (mouseIsPressed) {
         reUp();
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

//Our Instructions Screen. Tells you how to play and give s midgen of back story.
//Takes you back to the start screen with a button.
  static creditDisplay() {
    cursor();
    push();
    fill(0, 0, 0);
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
    pop();
    push();
    textFont(font);
    textAlign(CENTER);
    textSize(96);
    fill(255);
    text('I.D.I.O.T.', (width / 2)+3, 203);
    textSize(36);
    text('Interplanetary Debris Interdiction and Observation Taskforce', 64, 246, 600);
    fill(150);
    textSize(96);
    text('I.D.I.O.T.', width / 2, 200);
    textSize(36);
    text('Interplanetary Debris Interdiction and Observation Taskforce', 63, 245, 600);
    textSize(24);
    textFont(instruct);
    text('As an agent of I.D.I.O.T. you are sworn to protect a sector of space above your homeworld from dangerous interplanetary shipping debris.  Use the ARROW KEYS to steer your ship and the SPACEBAR to fire your Blasters.  Destroy enough debris to ensure your sector is safe until you are called to service again!', 120, 450, 500);
    textSize(14);
    text('A game by Don-Vincent Snell', 120, 750, 500);
    text('Furious Freak Kevin MacLeod (incompetech.com) Licensed under Creative Commons: By Attribution 3.0 License http://creativecommons.org/licenses/by/3.0/', 180, 800, 400);
    textFont(font);
    textSize(24);
    rectMode(CENTER);
    if (mouseX > 275 && mouseX < 475 && mouseY > 900 && mouseY < 950) {
      if (mouseIsPressed) {
         reUp();
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
