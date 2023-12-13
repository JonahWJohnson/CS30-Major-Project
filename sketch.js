let player;
let input = {
	x : 'neutral',
	y : 'neutral',
}

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
	player.dashing = false

	floor = new Sprite();
	floor.y = 870;
	floor.w = width;
	floor.h = 5
	floor.collider = 'static';

}

function draw() {
	background('gray');
	checkInputs();
	playerMovement();
}


function playerMovement() {
	// left right movement
	if (input.x = 'right') {
		player.vel.x = 10 + player.dx;

	}
	if (input.) {
		player.vel.x = -10;
	}
	if (input.x = 'neutal') {
		player.vel.x = 0
	}

	if (kb.presses('space')) {
		player.vel.y = -10;
	}

// shift/dash
	if (kb.presses('shift')) {
		dash();	
	}
}

function dash() {
	if (kb.pressing('d')) {
		for (i = 0; i < player.dashLength; i++) {
			player.dx += 1
		}
	}
}

function checkInputs() {
// checks wasd input and sets input.x and input.y 
// to up, up, left, down, right, or neutral accordingly
	if (kb.pressing('d') && kb.pressing('a')) {
		input.x = 'neutral'
	}
	else if (kb.pressing('d')) {
		input.x = 'right'
	}
	else if (kb.pressing('a')) {
		input.x = 'left'
	}
	else {
		input.x = 'neutral'
	}
	if (kb.pressing('w') && kb.pressing('s')) {
		input.y = 'neutral'
	}
	else if (kb.pressing('w')) {
		input.y = 'up'
	}
	else if (kb.pressing('s')) {
		input.y = 'down'
	}
	else {
		input.y = 'neutral'
	}

	// if (input.x !== 'neutral') {
	// 	console.log(input.x)
	// }
	// if (input.y !== 'neutral') {
	// 	console.log(input.y)
	// }
}