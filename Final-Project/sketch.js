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

function preload() {
    menu = loadImage('images/menubg.jpg');
    splode = loadImage('images/explosion.jpg');
    planet = loadImage('images/planet.jpg');
    credit = loadImage('images/idea.jpg');
}

function setup() {
  reUp();
}

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
  conditions = new States();
  setInterval(progress, 2000);
}

function progress() {
  score += 10;
  timer += 2;
}

function draw() {

if (play === 0) {
  background(0);
  conditions.startDisplay();
}

if (play === 1) {
    noCursor();
    background(0);

  for (let s = 0; s < 50; s++) {
    starfield.push(new Stars());
    starfield[s].frame();

  }

  for (let i = 0; i < r; i++) {
      asteroids.push(new Rocks());
      asteroids[i].frame();
  }
  for (let b = 0; b < blaster.length; b++) {
    blaster[b].frame();
    for (let e = 0; e < asteroids.length; e++) {
      if (blaster[b].blast(asteroids[e])) {
        asteroids[e].blast();
        score+=5;
      }
    }
  }

  for (let y = blaster.length - 1; y >= 0; y--) {
    if (blaster[y].cut === true ){
      blaster.splice(y, 1);
    }
    else if (blaster[y].pY < 15){
      blaster.splice(y, 1);
    }
  }
  for (let a = 0; a < asteroids.length; a++) {
    if (asteroids[a].pY > 1020) {
      asteroids.pY = -50;
      asteroids.splice(a, 1);
    }

  }
  for (let z = starfield.length - 1; z >= 0; z--) {
    if (starfield[z].pY > 1020) {
      starfield.splice(z, 1);
    }
  }

  push();
  fill(80, 10, 10);
  quad(0, 0, 750, 0, 700, 30, 50, 30);
  fill(255);
  textSize(16);
  text('Score:', 50, 20);
  text(score, 150, 20);
  pop();
  push();
  playership.display();
  pop();

  for (let v = 0; v < asteroids.length; v++) {
    let d = dist(asteroids[v].pX, asteroids[v].pY, playership.pX, playership.pY);
    let r = asteroids[v].rR + ((playership.rF - 170) || (playership.rS - 20));
    if (d < r) {
      reUp();
      play = 3;
    }
  }

  playership.motion();

  if (score >= (1000000000 / difficulty)) {
    conditions.victoryDisplay();
    play = 0;
  }
}

if (play === 2) {
  background(0);
  conditions.creditDisplay();
}

if (play === 3) {
  background(0);
  conditions.crashDisplay();
}

}

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

function keyPressed() {
  if (key === ' ') {
    blaster.push(new Laser(playership.pX, playership.pY));
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
