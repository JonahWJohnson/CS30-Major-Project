let player;

function setup() {
	new Canvas(1600, 900);
	world.gravity.y = 20;

	player = new Sprite();
	player.y = height/2;
	player.x = width/2;
	player.dx = 0;
	player.radius = 50;
	player.friction = 2
	player.dashLength = 20
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
		player.vel.x = 10 + player.dx;

	}
	else if (kb.pressing('a')) {
		player.vel.x = -10 + player.dx;
	}
	else {
		player.vel.x = player.dx;
	}

	if (kb.presses('space')) {
		player.vel.y = -10;
	}

// shift/dash
	if (kb.presses('shift')) {
		if (kb.pressing('d')) {
			for (i = 0; i < player.dashLength; i++) {
				player.dx += 1
			}
		}	
	}
}

function dash() {
	if (kb.pressing('d')) {

	}
}

function checkColide() {

}