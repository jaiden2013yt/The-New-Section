/*
this is the js file for the popcorn thing!
*/

const popcornDisplay = document.getElementById("popcornDisplay")

function popcornLoop(p) {

  p.setup = function() {
    let canvas = p.createCanvas(700, 400)
    canvas.parent(popcornDisplay)
  }
  
  p.draw = function () {
    p.background("white")

    p.fill("aqua")
    p.circle(p.mouseX, p.mouseY, 10)
  }
}
 new p5(popcornLoop)
