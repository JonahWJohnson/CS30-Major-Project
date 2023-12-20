let player;
let floor;

function setup() {
	new Canvas(1600, 900);
	world.gravity.y = 20;

	player = new Sprite();
	player.y = height/2;
	player.x = width/2;
	player.width = 30;
	player.height = 30;
	player.friction = 0
	player.bouncinessd = 0
	player.dashLength = 20
	player.grounded = false
	player.canDash = true
	player.dashing = false
	player.color = 'red'

	floor = new Sprite();
	floor.y = 870;
	floor.w = width;
	floor.h = 10
	floor.collider = 'static';
}

function draw() {
	background('gray');
	checkCollide();
	playerMovement();
	// console.log(player.canDash)
}


function playerMovement() {
	// left right movement (a,d)
	if (kb.pressing('d')) {
		player.vel.x = 10;
	}
	else if (kb.pressing('a')) {
		player.vel.x = -10;
	}
	else {
		player.vel.x = 0
	}

	//jump (space)
	if (kb.presses('space')) {
		player.vel.y = -10;
	}

	//dash (shift)
	if (kb.presses('shift')) {
		if (player.canDash) {
			dash();
		}				
	}
}

function dash() {
	//checks if player meets conditions to dash and dashes if so
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
	//checks if player is on the ground and changes player.isGrounded state variable accordingly
	if (player.colliding(floor)) {
		player.grounded = true;
		console.log(player.grounded);
		player.color = 'green'
	}
	else {
		player.grounded = false
		player.color = 'red'
	}
	//console.log(player.grounded);
}