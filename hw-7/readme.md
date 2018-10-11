Don-Vincent Snell, Mart 120.50

[Live Sketch Link](https://dvsnell.github.io/120-work/hw-7/)


# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing

Line 3 is the creation of a Javascript Object named "ball" using the `let` command.  Lines 4 through 10 establish the "ball" object's settings with global scope.

These settings are named "width", "x", "y", "delta_x", "delta_y", "scale_x", and "scale_y".  Based on these names, we can infer a few things about the "ball" object.  Since it has a "width", "x", and "y" position, we can assume it is a shape.  The name "ball" itself confirms the shape to be a rounded object, most likely an ellipse.

Lines 12 through 14 are our setup function, giving us a canvas as wide as the browser window's width and a height of 400 pixels.  The background is set to "255" which is white.

Lines 19 through 34 make up the bulk of this program, the draw function.  It is made up of three seperate chunks.
The first chunk is broken into two lines on 21 and 22.  Line 21 makes the "x" position of the "ball" object change by multiplying the "delta_x" by the "scale_x" and replacing the "x" position.  The mathematical equation allows this change to occur multiple times, replacing the "x" position each time.  Line 22 does the same, but changes the "y" position using "delta_y" and "scale_y" instead.

The second chunk of our program is a pair of `if` functions.  Lines 25 through 27 make up the first statement and say that if the "ball" objects "x" position is greater than or equal to the width of the background or if it is less than or equal to 0, then the "delta_x" should be multiplied by -1 with the new vlaue replacing the original "delta_x".  The second `if` function does the same thing in the "y" but basing the primary `if` statement off of the background height.  What this effectively does is make the ball "bounce" off the edges of the window, keeping it contained within.  The -1 multiplication causes the ball to shange direction upon hitting the limits listed.

The final chunk of our draw function lives on two lines and consist of the settiings of our ball.  It is set to have a fill of 255, also known as white, on line 32.  Line 33 is a simple shape draw, in this case an `ellipse` with an "x" and "y" position pulling their settings from the "ball" object.  To keep it a sphere, the same objects "width" variable is called twice, in the width and height location of the `ellipse` shape.

The last part of our code occupies lines 36 to 39 and is a new function that generates a change in the "scale_x" and "scale_y" on pressing the mouse button.  Line 37 changes the "scale_x" based on a `map` that trackes the users "mouseX" position when the button is pressed.  The variable "scale_x" changes from a value between 0 and the width of the background to between 0.5 and 10.  This helps constrain the object's motion when the mouse is clicked making its range of movement somewhat predictable, but also causes the speed and direction of the ball to change since we are replacing the "x" position on line 21 by multiplying the "delta_x" ( a number that is only multiplied by -1 when it hits the bounds of our canvas ) by "scale_x" ( which changes every mouse click to between 0.5 and 10 ) all based on mouse position.  Line 38 does the exact same thing to the "scale_y" but bases the map input on the "mouseY" position.

The ball bounces on the screen until you click, whereupon the direction and speed of the ball change based on the mouse position at the time.

## How did you alter the sketch?

My alterations were rather simple.  I moved the background to the draw function to remove the presistant ball trails, but I tied it to a frameCount modulo to keep the ghost of a tail on our ball.  I also used that modulo to make the ball change color and alpha randomly.  I placed an `else if` for the frame count to make the ball appear white and solid at a much shorter frequency, using a hacky image persistance effect to make the ball look white with a colored tail.

I also altered the bounce section of the `if` statements to make the ball bounce when its edges hit the walls of our canvas instead of when the center of it hit the walls.

I changed the `mousePressed` function into an `if (mouseIsPressed)` statement and made the change larger.  I also attached a spin to the ball, making it teleport slightly when the mouse was pressed and released.

Lastly, I used a `mousePressed` function that when activated displays a "Game Over" screen and stops the animation.  The way to trigger this event is to click on the ball itself, triggering an `if` statement that is tracking the distance between the ball and the mouse position, accounting for the width of the ball as well.  Clicking anywhere else, does nothing, effectively turning the ball into a button.
