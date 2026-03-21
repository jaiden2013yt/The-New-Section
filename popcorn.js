/*
this is the js file for the popcorn thing!
*/

const popcornDisplay = document.getElementById("popcornDisplay")

function popcornLoop(p) {
let mousePressStart;
let popcornList = [];
  
  p.setup = function() {
    let canvas = p.createCanvas(700, 400)
    canvas.parent(popcornDisplay)
    canvas.style.touchAction = "none"

    let box = new p.Sprite()

    p.world.gravity.y = 10

    let floor = new p.Sprite(p.width/2, p.height, 700, 15, p.STATIC)

  }
  
  p.draw = function () {
    p.background("white")

    p.fill("aqua")
    // p.text(p.mouseIsPressed, p.mouseX, p.mouseY)

    if(p.mouseIsPressed === false) {
      p.fill("crimson")
    } 
    //newPopcorn()



      
    

    
   p.circle(p.mouseX, p.mouseY, 5)
  }

  p.mousePressed = function () {
    mousePressStart = {x: p.mouseX, y: p.mouseY}
  }
  p.mouseReleased = function () {
    if (Math.hypot(p.mouseX-mousePressStart.x, p.mouseY-mousePressStart.y) < 3) {
      newPopcorn()
    }
  }
  
  function newPopcorn() {
    const SP = new p.Sprite(p.mouseX, p.mouseY, 10)
    popcornList.push(SP)
  }
}
 new p5(popcornLoop)
