/*
this is the js file for the popcorn thing!
*/

const popcornDisplay = document.getElementById("popcornDisplay")

function popcornLoop(p) {
let mousePressStart;
window.popcornList = [];
window.draggingElement = -1
  p.setup = function() {
    let canvas = p.createCanvas(700, 400)
    canvas.parent(popcornDisplay)
    canvas.style.touchAction = "none"

    let box = new p.Sprite()

    p.world.gravity.y = 25

    let floor      = new p.Sprite(p.width/2, p.height, p.height, 15, p.STATIC)
    let leftWall   = new p.Sprite(-7.5, p.height/2, 15, p.width, p.STATIC)
  }
  
  p.draw = function () {
    p.background("white")

    p.fill("aqua")
    // p.text(p.mouseIsPressed, p.mouseX, p.mouseY)

    if(p.mouseIsPressed === false) {
      p.fill("crimson")
      draggingElement = -1
    } 

   p.circle(p.mouseX, p.mouseY, 5)

    if(draggingElement !== -1) {
      //alert("wooo")
      popcornList[draggingElement].vel.x += (p.mouseX - popcornList[draggingElement].x)/200
      popcornList[draggingElement].vel.y += (p.mouseY - popcornList[draggingElement].y)/200

      p.stroke("red")
      p.line(popcornList[draggingElement].x, popcornList[draggingElement].y, p.mouseX, p.mouseY)
      p.stroke("black")
    }
  }

  p.mousePressed = function () {
    mousePressStart = {x: p.mouseX, y: p.mouseY}
    isDragging()
  }
  p.mouseReleased = function () {
    if (Math.hypot(p.mouseX-mousePressStart.x, p.mouseY-mousePressStart.y) < 3) {
      newPopcorn()
    }
    
  }
  
  function newPopcorn() {
    const SP = new p.Sprite(p.mouseX, p.mouseY, 10)
    SP.bounciness = 0.25
    SP.mass = 10
    SP.drag = 5
    SP.rotationDrag = 2
    popcornList.push(SP)
  }

  function isDragging() {
    draggingElement = popcornList.indexOf(
      popcornList.find((element) => {
        console.log(element.x, element.y)
        return Math.hypot(p.mouseX - element.x, p.mouseY - element.y) < 10
      })
    )
    console.log(draggingElement, typeof(draggingElement), popcornList)
    //alert(popcornList)
    popcornList[Number(draggingElement)].color = "green"
  }
}
 new p5(popcornLoop)
