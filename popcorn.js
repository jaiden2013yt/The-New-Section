/*
this is the js file for the popcorn thing!
*/

const popcornDisplay = document.getElementById("popcornDisplay")

function popcornLoop(p) {

  p.setup = function() {
    let canvas = p.createCanvas(700, 400)
    canvas.parent(popcornDisplay)
    canvas.style.touchAction = "none"

    let box = new p.Sprite()

    p.world.gravity.y = 10

    let floor = new p.Sprite(p.width/2, p.height, 700, 15)
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
