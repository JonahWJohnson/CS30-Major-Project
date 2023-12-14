let player;
let floor;

function setup() {
	new Canvas(1600, 900);
	world.gravity.y = 20;

	player = new Sprite();
	player.y = height/2;
	player.x = width/2;
	player.radius = 50;
	player.friction = 2
	player.dashLength = 20
	player.grounded = false
	player.canDash = true
	player.dashing = false

	floor = new Sprite();
	floor.y = 870;
	floor.w = width;
	floor.h = 5
	floor.collider = 'static';

}

function draw() {
	background('gray');
	checkCollide();
	playerMovement();
	// console.log(player.canDash)
}


function playerMovement() {
	// left right movement
	if (kb.pressing('d')) {
		player.vel.x = 10;
	}
	else if (kb.pressing('a')) {
		player.vel.x = -10;
	}
	else {
		player.vel.x = 0
	}
	if (kb.presses('space')) {
		player.vel.y = -10;
	}

// shift/dash
	if (kb.presses('shift')) {
		if (player.canDash) {
			dash();
		}				
	}
}

function dash() {
	player.canDash = false;
	if (player.isGrounded) {
		player.canDash = true;
	}
	if (kb.pressing('d')) {
		for (i = 0; i < player.dashLength; i++) {
			player.dx += 1;
			
		}
	}
}

function checkCollide() {
	if (player.colliding(floor)) {
		player.grounded = true;
		console.log(player.grounded);
	}
	else {
		player.grounded = false
	}
	console.log(player.grounded);
}