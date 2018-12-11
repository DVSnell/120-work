//Global Variables and Arrays and other things so the code doesn't break.
let asteroids = [];
let r = 15;
let blaster = [];
let playership = [];
let starfield = [];
let score = 0;
let timer = 0;
let conditions;
let play = 0;
let difficulty = 1;
let clockInterval;

//Lets load some external files.  Little bit of everything in here.
function preload() {
    soundFormats('mp3', 'wav');
    bgmusic = loadSound('sounds/FuriousFreak.mp3');
    menu = loadImage('images/menubg.jpg');
    laserblast = loadSound('sounds/blastsound.wav');
    splode = loadImage('images/explosion.jpg');
    planet = loadImage('images/planet.jpg');
    font = loadFont('fonts/Quantum.otf');
    instruct = loadFont('fonts/hemi.ttf');
}

//Call our setup and start the background music.
function setup() {
  reUp();
  bgmusic.setVolume(0.2);
  bgmusic.loop();
}

//Our actual setup function minus the music.  These are things we need to reset
//our condition buttons are pressed.  They set array lengths, give us default values,
//and spawn our rocket, start our score timer, and draw the initial stars.
function reUp() {
  asteroids.length = 0;
  r = 15;
  blaster.length = 0;
  playership.length = 0;
  starfield.length = 0;
  score = 0;
  timer = 0;
  play = 0;
  difficulty = 1;
  createCanvas(750, 1000);
  playership = new Rocket();
  clockInterval = setInterval(progress, 2000);
  for (var s = 0; s < 50; s++) {
      starfield.push(new Stars( random(0, height) ));
  }
}

//This is a clock stoper triggered on certain events down below, namely triggering a new state.
function stopGameDetails(){
  clearInterval(clockInterval);
}

//This progresses our score and timer.
function progress() {
  score += 10;
  timer += 2;
}

//It's gonna get a little weird down here now...
function draw() {

//..beacuse we drive what is in the draw loop with "States" set up in our conditions.js file.
//The states are our start screen, our victory screen, our instructions/credit page, our loss
//screen and finally, our actual game play screen.  Thus begins my madness.
if (play === 0) {
  background(0);
  States.startDisplay();
} else if (play === 4) {
  background(0);
  stopGameDetails();
  States.victoryDisplay();
} else if (play === 2) {
  background(0);
  stopGameDetails();
  States.creditDisplay();
} else if (play === 3) {
  background(0);
  stopGameDetails();
  States.crashDisplay();
} else if (play === 1) {
    noCursor();
    background(0);

//So in our gameplay screen we need to make and draw some stars beyond our initial set from reUp.
    for (let t = 0; t < 50 - starfield.length; t++) {
        starfield.push(new Stars());
    }
    for (let u = 0; u < starfield.length; u++) {
        starfield[u].frame();
    }

//And we need some debris for our player to blast.
    for (let a = 0; a < r - asteroids.length; a++) {
        asteroids.push(new Rocks());
    }

    for (let a = 0; a < asteroids.length; a++) {
        asteroids[a].frame();
    }

//This for loop checks to see if our blasters have hit a rock, and if so, splice the rock and
//increment our score counter.
  for (let b = 0; b < blaster.length; b++) {
    blaster[b].frame();
    for (let e = 0; e < asteroids.length; e++) {
      if (blaster[b].blast(asteroids[e])) {
        asteroids[e].blast();
        score+=5;
      }
    }
  }

//This bit removes our blaster that just destroyed a rock from above.  No shooting through rocks!
//It also cuts the blaster if it passes beyond the screen
  for (let y = blaster.length - 1; y >= 0; y--) {
    if (blaster[y].cut === true ){
      blaster.splice(y, 1);
    }
    else if (blaster[y].pY < -5){
      blaster.splice(y, 1);
    }
  }

//This splices the asteroids when they pass beyond the bottom of the screen so they don't clutter up the array
  for (let a = asteroids.length - 1; a >= 0; a--) {
    if (asteroids[a].pY > 1100) {
      asteroids.splice(a, 1);
    }

//And this does the same for the stars.
  }
  for (let z = starfield.length - 1; z >= 0; z--) {
    if (starfield[z].pY > 1020) {
      starfield.splice(z, 1);
    }
  }

//Here's our base HUD with the score tracker.  It also calls our ship to be drawn.
  push();
  fill(80, 10, 10);
  quad(0, 0, 750, 0, 700, 30, 50, 30);
  fill(255);
  textFont(font);
  textSize(16);
  text('Score:', 50, 20);
  text(score, 150, 20);
  pop();
  push();
  playership.display();
  pop();

//Here we track asteroid/ship collisions and, if occuring, trigger a lose state.
  for (let v = 0; v < asteroids.length; v++) {
    let dis = dist(asteroids[v].pX, asteroids[v].pY, playership.pX, playership.pY);
    let rad = asteroids[v].rR + ((playership.rF) || (playership.rS));
    if (dis < rad) {
      stopGameDetails();
      play = 3;
    }
  }

//This forces our players to stay in their sector by generating the lose state if they try to leave the play area.
  if (playership.pX >= width + 25 || playership.pX <= -25 || playership.pY >= height + 25 || playership.pY <= -25) {
      stopGameDetails();
      play = 3;
    }

//This controls our ship motion.
  playership.motion();

//This is used to track and trigger our win state.  Why such a huge number?  We're using
//Division to affect difficulty, so easy has a score threshhold of 500, medium is 3500,
//and hard is 5000.  We also throw more rocks at you, too.
  if (score >= (1000000000 / difficulty)) {
    stopGameDetails();
    play = 4;
  }
}
}

//this function stops our ship from sliding around when a button is no longer pressed...
function keyReleased() {
  if (key === 'ArrowRight') {
    playership.moveLR(0);
  } else if (key === 'ArrowLeft'){
    playership.moveLR(0);
  } else if (key === 'ArrowUp') {
    playership.moveUD(0);
  } else if (key === 'ArrowDown') {
    playership.moveUD(0);
  }
}

//..And this moves the ship when we do press buttons.  It also fires our blaster when space is used.
function keyPressed() {
  if (key === ' ') {
    blaster.push(new Laser(playership.pX, playership.pY));
    laserblast.playMode('restart');
    laserblast.play();
  }
  if (key === 'ArrowRight') {
    playership.moveLR(1);
  } else if (key === 'ArrowLeft') {
    playership.moveLR(-1);
  } else if (key === 'ArrowUp') {
    playership.moveUD(-1);
  } else if (key === 'ArrowDown') {
    playership.moveUD(1);
  }
}
