//Declare a global array and effector object.
let rain = [];
let slappy;

//Lay down our canvas, hides our cursor, and set framerate.
function setup() {
  createCanvas(700, 950);
  frameRate(30);
  noCursor();
}
//Make witht he pretty.  Since we want to erase every frame, most of our action
//is in draw.
function draw() {
  background(0);
  //Call for a single slappy item of the Pusher class to be drawn at the mouse's
  //location and using the specifications of slapp.js' Pusher display function.
  slappy = new Pusher();
  slappy.pX = mouseX;
  slappy.pY = mouseY;
  slappy.display();
  //Summon some rain into our array using the Raindrops object in rain.js.
  for (let i = 0; i < 2; i++) {
      rain.push(new Raindrops() );
  }
  //Our interaction code.  If any single element of the rain array gets close to
  //slappy, they get pushed away in the opposite direction with a color change.
  //Does double duty as our rain display, motion, and cutting functions.
  for (let i = 0; i < rain.length; i++) {
    let d = dist(rain[i].pX, rain[i].pY, slappy.pX, slappy.pY);
    let r = rain[i].rR + slappy.rR;
    if (d < r) {
      rain[i].mX *= random(-2, -0.5);
      rain[i].mY *= random(-2, -0.5);
      rain[i].c = color(random(255), random(255), random(255));
    }
    rain[i].frame();
  }
}
