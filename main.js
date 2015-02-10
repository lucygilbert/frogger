var canvas = document.getElementById("game");
var c = canvas.getContext("2d");
var lives = 5;
var score = 0;
var frogx = 250;
var frogy = 380;
var lane1Cars = [new Car(0, 72)];
var lane2Cars = [new Car(0, 122)];
var lane3Cars = [new Car(0, 172)];
var lane4Cars = [new Car(0, 222)];
var lane5Cars = [new Car(0, 272)];
var lane6Cars = [new Car(0, 322)];

function main() {
	drawBkg();
	drawInfo();
	drawFrog();
	document.addEventListener("keydown", function (e) {
		moveFrog(e.keyCode);
	});
	var gameTimer = setInterval(gameStart, 50);
}

function gameStart() {
	canvas.width = canvas.width;
	drawBkg();
	drawInfo();
	drawCars();
	drawFrog();
	collision();
}

function drawBkg () {
	c.fillStyle = "#006600";
	c.fillRect(0, 0, 500, 50);
	c.fillRect(0, 350, 500, 50);
	c.fillStyle = "#FFFFFF";
	c.fillRect(0, 99, 500, 2);
	c.fillRect(0, 149, 500, 2);
	c.fillRect(0, 199, 500, 2);
	c.fillRect(0, 249, 500, 2);
	c.fillRect(0, 299, 500, 2);
}

function drawInfo () {
	c.font = "20px Arial";
	c.fillText("Lives: " + lives, 10, 20);
	c.fillText("Score: " + score, 10, 40);
}

function drawCars () {
	if (lane1Cars[lane1Cars.length - 1].x > 500) {
		lane1Cars.pop();
		var newCar = new Car(0, 72);
		lane1Cars.unshift(newCar);
	}
	if (lane2Cars[lane2Cars.length - 1].x > 500) {
		lane2Cars.pop();
		var newCar = new Car(0, 122);
		lane2Cars.unshift(newCar);
	}
	if (lane3Cars[lane3Cars.length - 1].x > 500) {
		lane3Cars.pop();
		var newCar = new Car(0, 172);
		lane3Cars.unshift(newCar);
		
	}
	if (lane4Cars[lane4Cars.length - 1].x > 500) {
		lane4Cars.pop();
		var newCar = new Car(0, 222);
		lane4Cars.unshift(newCar);
		
	}
	if (lane5Cars[lane5Cars.length - 1].x > 500) {
		lane5Cars.pop();
		var newCar = new Car(0, 272);
		lane5Cars.unshift(newCar);
		
	}
	if (lane6Cars[lane6Cars.length - 1].x > 500) {
		lane6Cars.pop();
		var newCar = new Car(0, 322);
		lane6Cars.unshift(newCar);
		
	}
	for (i in lane1Cars) {
		c.fillStyle = "#FF0000";
		c.beginPath();
		c.arc(lane1Cars[i].x, lane1Cars[i].y, 20, 0, 2*Math.PI);
		c.fill();
		c.closePath();
		lane1Cars[i].x += 4;
	}
	for (i in lane2Cars) {
		c.fillStyle = "#FF0000";
		c.beginPath();
		c.arc(lane2Cars[i].x, lane2Cars[i].y, 20, 0, 2*Math.PI);
		c.fill();
		c.closePath();
		lane2Cars[i].x += 10;
	}
	for (i in lane3Cars) {
		c.fillStyle = "#FF0000";
		c.beginPath();
		c.arc(lane3Cars[i].x, lane3Cars[i].y, 20, 0, 2*Math.PI);
		c.fill();
		c.closePath();
		lane3Cars[i].x += 7;
	}
	for (i in lane4Cars) {
		c.fillStyle = "#FF0000";
		c.beginPath();
		c.arc(lane4Cars[i].x, lane4Cars[i].y, 20, 0, 2*Math.PI);
		c.fill();
		c.closePath();
		lane4Cars[i].x += 10;
	}
	for (i in lane5Cars) {
		c.fillStyle = "#FF0000";
		c.beginPath();
		c.arc(lane5Cars[i].x, lane5Cars[i].y, 20, 0, 2*Math.PI);
		c.fill();
		c.closePath();
		lane5Cars[i].x += 7;
	}
	for (i in lane6Cars) {
		c.fillStyle = "#FF0000";
		c.beginPath();
		c.arc(lane6Cars[i].x, lane6Cars[i].y, 20, 0, 2*Math.PI);
		c.fill();
		c.closePath();
		lane6Cars[i].x += 4;
	}
}

function drawFrog () {
	c.fillStyle = "#00FF00";
	c.beginPath();
	c.arc(frogx, frogy, 20, 0, 2*Math.PI);
	c.fill();
	c.closePath();
}

function moveFrog (key) {
	switch (key) {
		case 38:
		frogy > 20 ? frogy -= 3 : gameWin();
		break;
		case 40:
		if (frogy < 380) frogy += 3;
		break;
		case 37:
		if (frogx > 0) frogx -= 3;
		break;
		case 39:
		if (frogx < 480) frogx += 3;
		break;
	}
}

function collision () {
	
}

function gameWin() {
	frogx = 250;
	frogy = 375;
	score += 1;
}

function gameLose () {

}

function Car (x, y) {
	this.x = x;
	this.y = y;
}