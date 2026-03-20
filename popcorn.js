/*
this is the js file for the popcorn thing!
*/

const popcornDisplay = document.getElementById("popcornDisplay")

function popcornLoop(p) {

  p.setup = function() {
    let canvas = p.createCanvas(400, 700);
    canvas.parent(popcornDisplay);
  }
  
  p.draw = function () {
    p.square(200, 200, 40)
  }
}
 new p5(popcornLoop)
