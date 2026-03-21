/*
this is the js file for the popcorn thing!
*/

const popcornDisplay = document.getElementById("popcornDisplay")

function popcornLoop(p) {

  p.setup = function() {
    let canvas = p.createCanvas(700, 400)
    canvas.parent(popcornDisplay)
    canvas.style.touchAction = "none"

    	p.world.gravity.y = 10;

	p.ball = new p.Sprite();
	p.ball.diameter = 50;
	p.ball.y = 30;

	p.floor = new p.Sprite();
	p.floor.y = 190;
	p.floor.w = 238;
	p.floor.h = 5;
	p.floor.physics = p.STATIC;
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
