let player;

function setup() {
	new Canvas(1600, 900);
	world.gravity.y = 10;

	player = new Sprite();
	player.y = height/2;
	player.x = width/2;
	player.dx = 5;
	player.radius = 50;
	player.friction = 2
	player.grounded = false
	player.canDash = true

	floor = new Sprite();
	floor.y = 870;
	floor.w = width;
	floor.h = 5
	floor.collider = 'static';

}

function draw() {
	background('gray');
	playerMovement();
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
		player.vel.x = 0;
	}

	if (kb.presses('space') && player.grounded) {
		player.vel.y = 10;
	}

// shift/dash
	if (kb.presses) {
		
	}
}

function dash() {
	if (kb.pressing('d')) {

	}
}

function checkColide() {
	if (player.collide(floor)) {
		player.grounded = true;
	}
	else {
		player.grounded = false
	}

}