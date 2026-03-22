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


    let wallWidth = 15
    
    let floor      = new p.Sprite(p.width/2, p.height, p.width, wallWidth, p.STATIC) //half visible
    let leftWall   = new p.Sprite(-(wallWidth/2), p.height/2, wallWidth, p.height, p.STATIC) // off screen
    let rightWall  = new p.Sprite(p.width+(wallWidth/2), p.height/2, wallWidth, p.height, p.STATIC) // off screen
    
    // hard coded values to prevent issues and to be better and more stable
    let cookerLeft   = new p.Sprite(65,    290, 5,  125, p.STATIC)
    let cookerRight  = new p.Sprite(160,   330, 5,  45,  p.STATIC)
    let cookerRight2 = new p.Sprite(160,   274, 5,  45,  p.STATIC)
    let cookerLip    = new p.Sprite(168, 318, 20, 9,  p.STATIC)
    cookerLip.rotation = 45
    let cookerBottom = new p.Sprite(112.5, 400, 95, 100, p.STATIC)
    let cookerTop    = new p.Sprite(112.5, 244, 95, 15,  p.STATIC)

    let table        = new p.Sprite(600, 400, 95, 100, p.STATIC)
  }
  
  p.draw = function () {
    //clear the srceen
    p.background("#FFDDDD")

    //set the color of the mouse indicator
    p.fill("aqua")
    if(p.mouseIsPressed === false) {
      p.fill("crimson")
      draggingElement = -1
    } 

   //mouse indicator
   p.circle(p.mouseX, p.mouseY, 5)

    if(draggingElement !== -1) {
      //alert("in dragging element not -1")

      //add the vector of the distsnce to the mouse cursor but scaled down (yes 200x , its what feels right to play) 
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
    if (Math.hypot(p.mouseX-mousePressStart.x, p.mouseY-mousePressStart.y) < 3) { //if mouse hasnt move much durning the press, run this
      newPopcorn()
    }
    
  }
  
  function newPopcorn() {
    const SP = new p.Sprite(p.mouseX, p.mouseY, 10)

    //physics properies
    SP.bounciness = 0.25
    SP.mass = 10 //weight
    SP.drag = 5  //air resistance 
    SP.rotationDrag = 2 //rotational friction

    SP.image = "https://jaiden2013yt.github.io/The-New-Section/Popcorn.png"
    SP.image.scale = 0.07 // we want it small, but the image i specified is large.

    //SP.debug = true;
    popcornList.push(SP)
  }

  function isDragging() {
    //find the element being selected (if any)
    draggingElement = popcornList.indexOf(
      popcornList.find((element) => {
        console.log(element.x, element.y)
        return Math.hypot(p.mouseX - element.x, p.mouseY - element.y) < 10
      })
    )
    /*
    //tests for that
    console.log(draggingElement, typeof(draggingElement), popcornList)
    alert(popcornList)
    popcornList[Number(draggingElement)].color = "green"
    */
  }
}
 new p5(popcornLoop)
