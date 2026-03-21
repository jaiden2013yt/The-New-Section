/*
this is the js file for the popcorn thing!
*/

const popcornDisplay = document.getElementById("popcornDisplay")

function popcornLoop(p) {

  p.setup = function() {
    let canvas = p.createCanvas(700, 400)
    canvas.parent(popcornDisplay)
    canvas.style.touchAction = "none"

    // world setup
    p.world.gravity.y = 10;

    // ball
    ball = new p.Sprite();
    ball.diameter = 40;
    ball.y = 50;
    ball.bounciness = 0.8;

    // ground
    ground = new p.Sprite();
    ground.y = 350;
    ground.w = 600;
    ground.h = 20;
    ground.collider = 'static'; // important
  }
  
  p.draw = function () {
    p.background("white")

    p.fill("aqua")
    // p.text(p.mouseIsPressed, p.mouseX, p.mouseY)

    if(p.mouseIsPressed === false) {
      p.fill("crimson")
    }

    p.circle(p.mouseX, p.mouseY, 10)
  }
}
 new p5(popcornLoop)
