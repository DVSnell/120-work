// Setup
function setup(){

    //Canvas creation command
    createCanvas(900, 700);

}

//Adding Draw function
function draw(){


      //Sky
      background('rgb(77, 214, 247)');
      translate(450, 340);
      scale(2);

      //Main Body
      fill('rgb(92, 121, 9)');
      stroke('rgb(30, 70, 5)');
      rect(-100, -90, 200, 250, 80, 80, 0, 0);

      //Arms
      rect(-70, 40, 30, 120, 20, 0, 5, 5);

      rect(40, 40, 30, 120, 0, 20, 5, 5);

      //Arm blending
      noStroke();
      ellipse(0, 30, 130, 120);

      //Legs
      stroke('rgb(30, 70, 5)');
      rect(-150, 10, 50, 150, 90, 15, 0, 15);

      rect(100, 10, 50, 150, 15, 90, 15, 0);

      //Head

      push();

      fill('rgb(92, 121, 9)');
      ellipse(0, -30, 150, 100);

      //Eyes
      fill('rgb(222, 92, 20)');
      stroke('rgb(200, 70, 10)');
      arc(20, -50, 30, 30, radians(20), radians(150));

      fill('rgb(125, 0, 0)');
      stroke('rgb(100, 0, 0)');
      arc(20, -50, 10, 10, radians(20), radians(150));

      fill('rgb(92, 121, 9)');
      stroke('black');
      arc(20, -55, 36, 18, radians(180), radians(0));

      arc(20, -52, 30, 12, radians(180), radians(0));

      push();

      scale(-1, 1);
      fill('rgb(222, 92, 20)');
      stroke('rgb(200, 70, 10)');
      arc(20, -50, 30, 30, radians(20), radians(150));

      fill('rgb(125, 0, 0)');
      stroke('rgb(100, 0, 0)');
      arc(20, -50, 10, 10, radians(20), radians(150));

      fill('rgb(92, 121, 9)');
      stroke('black');
      arc(20, -55, 36, 18, radians(180), radians(0));

      arc(20, -52, 30, 12, radians(180), radians(0));

      pop();

      //Snout
      strokeWeight(5);
      stroke('black');
      point(30, -12);

      push();

      scale(-1, 1);
      strokeWeight(5);
      point(30, -12);

      pop();

      fill('rgb(92, 121, 9)');
      strokeWeight(2);
      arc(0, -12, 60, 30, radians(0), radians(180));

      strokeWeight(4);
      line(-12, -7, -10, -10);

      line(10, -10, 12, -7);

      strokeWeight(1);
      arc(-40, -10, 10, 30, radians(90), radians(270));

      arc(40, -10, 10, 30, radians(270), radians(90));

      //Teeth

      push();

      translate(-10, -10);
      fill('white');
      strokeWeight(1);
      stroke('lightgrey');
      quad(15, 14, 15, 30, 25, 30, 30, 11);

      push();
      scale(-1, 1);
      translate(-20, -0);
      fill('white');
      strokeWeight(1);
      stroke('lightgrey');
      quad(15, 14, 20, 33, 25, 30, 30, 11);
      pop();

      pop();

      //Crest
      fill('rgb(223, 162, 17)');
      stroke('rgb(190, 120, 1)');
      arc(0, -25, 40, 10, radians(180), radians(0));

      arc(0, -20, 30, 9, radians(180), radians(0));

      arc(0, -90, 18, 85, radians(180), radians(0));

      arc(0, -80, 13, 75, radians(180), radians(0));

      arc(0, -70, 8, 65, radians(180), radians(0));

      arc(0, -60, 3, 55, radians(180), radians(0));



      //Chest Colorization
      fill('rgb(223, 162, 17)');
      stroke('rgb(190, 120, 1)');
      ellipse(0, 200, 76, 350);

      arc(0, 40, 30, 9, radians(0), radians(180));

      arc(0, 50, 40, 10, radians(0), radians(180));

      arc(0, 60, 46, 11, radians(0), radians(180));

      arc(0, 70, 50, 12, radians(0), radians(180));

      arc(0, 80, 56, 13, radians(0), radians(180));

      arc(0, 90, 59, 14, radians(0), radians(180));

      arc(0, 100, 63, 15, radians(0), radians(180));

      arc(0, 110, 65, 16, radians(0), radians(180));

      arc(0, 120, 67, 17, radians(0), radians(180));

      arc(0, 130, 69, 18, radians(0), radians(180));

      arc(0, 140, 71, 19, radians(0), radians(180));

      arc(0, 150, 73, 20, radians(0), radians(180));

      //Ground
      fill('rgb(6, 60, 0)');
      stroke('rgb(1, 33, 0)');
      rect(-450, 160, 900, 250);

      //Claws
      push();

      translate(45, 15);
      fill('white');
      stroke('lightgrey');
      triangle(0, 150, 2, 140, -2, 140);

      translate(10, 0);
      triangle(0, 150, 2, 140, -2, 140);

      translate(10,0);
      triangle(0, 150, 2, 140, -2, 140);

      scale(1.5, 1.5);
      translate(30, -47);
      triangle(0, 150, 2, 140, -2, 140);

      translate(10, 0);
      triangle(0, 150, 2, 140, -2, 140);

      translate(10,0);
      triangle(0, 150, 2, 140, -2, 140);

      pop();

      //Claws 2: The Other Side
      push();

      scale(-1, 1);
      translate(45, 15);
      fill('white');
      stroke('lightgrey');
      triangle(0, 150, 2, 140, -2, 140);

      translate(10, 0);
      triangle(0, 150, 2, 140, -2, 140);

      translate(10,0);
      triangle(0, 150, 2, 140, -2, 140);

      scale(1.5, 1.5);
      translate(30, -47);
      triangle(0, 150, 2, 140, -2, 140);

      translate(10, 0);
      triangle(0, 150, 2, 140, -2, 140);

      translate(10,0);
      triangle(0, 150, 2, 140, -2, 140);

      pop();

      /* Origin Target */
      //fill('white');
      //stroke('rgb(0, 0, 0)');
      //ellipse(0, 0, 10, 10);
}
