/*
this is the js file for the popcorn thing!
*/

const popcornDisplay = document.getElementById("popcornDisplay")

function popcornLoop(p) {

  p.setup = function() {
    let canvas = p.createCanvas(700, 400)
    canvas.parent(popcornDisplay)
    canvas.style.touchAction = "none"
  }
  
  p.draw = function () {
    p.background("white")

    p.fill("aqua")
    p.text(p.mouseIsPressed p.mouseX, p.mouseY)
  }
}
 new p5(popcornLoop)
