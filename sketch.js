// CS30 Major Project
// Jonah Johnson
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



function setup() {
  createCanvas(1600, 900);
  world.gravity.y = 10;
  let player = {
  x : width/2,
  y : height/2,
  dx : 5,
  dy : 0,
  weight,
  width : 10,
  height : 10,
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
  square(player.x, player.y, 10);
}

function updatePlayer() {
  player.x += player.dx;
  player.y += player.dy;
}

function centerPlayer() {
  player.x = width/2
  player.y 
}

function keyPressed() {
  centerPlayer();
  console.log("r");
}
