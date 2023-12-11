// CS30 Major Project
// Jonah Johnson
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let player = new Sprite();
let floor = new Sprite();
function setup() {
  createCanvas(1600, 900);
  world.gravity.y = 10;
  player = {
  x : width/2,
  y : height/2,
  dx : 0,
  dy : 0,
  weight : 5,
  size : 50,
}

}

function draw() {
  background(220);
  updatePlayer();
  displayPlayer();
}

class Enemies {
  constructor(x, y) {
    this.x = x;
    this.y = y
  }
}

function displayPlayer() {
  square(player.x, player.y, player.size);
}

function updatePlayer() {
  player.x += player.dx;
  player.y += player.dy;
}

function centerPlayer() {
  player.x = width/2
  player.y = height/2
}

function keyPressed() {
  if(key === "a")
  
  if(key === "r") {
    centerPlayer();
    console.log("r")
  }
}
