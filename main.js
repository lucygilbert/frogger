var canvas = document.getElementById("game");
var c = canvas.getContext("2d");
var gameTimer;
var lives = 5;
var score = 0;
var frogx = 250;
var frogy = 380;
var cars = [new Car(0, 72, 4), new Car(0, 122, 10), new Car(0, 172, 7), new Car(0, 222, 10), new Car(0, 272, 7), new Car(0, 322, 4)];

function main() {
	drawBkg();
	drawInfo();
	drawFrog();
	document.addEventListener("keydown", function (e) {
		moveFrog(e.keyCode);
	});
	gameTimer = setInterval(function () { gameStart(); }, 50);
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
	for (i in cars) {
		if (cars[i].x > 500) {
			var newCar = new Car(0, cars[i].y, cars[i].speed);
			cars.push(newCar);
			cars.splice(i, 1);
		}
	}
	for (i in cars) {
		c.fillStyle = "#FF0000";
		c.beginPath();
		c.arc(cars[i].x, cars[i].y, 20, 0, 2*Math.PI);
		c.fill();
		c.closePath();
		cars[i].x += cars[i].speed;
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
		frogy > 20 ? frogy -= 4 : gameWin();
		break;
		case 40:
		if (frogy < 380) frogy += 4;
		break;
		case 37:
		if (frogx > 0) frogx -= 4;
		break;
		case 39:
		if (frogx < 480) frogx += 4;
		break;
	}
}

function collision () {
	for (i in cars) {
		if (Math.sqrt( Math.pow(cars[i].x - frogx, 2) + Math.pow(cars[i].y - frogy, 2) ) < 40) {
			gameLose();
		}
	}
}

function gameWin() {
	frogx = 250;
	frogy = 375;
	score++;
}

function gameLose () {
	lives--;
	frogx = 250;
	frogy = 375;
	if (lives <= 0) {
		c.fillStyle = "#000000";
		c.fillRect(0, 0, 500, 400);
		c.fillStyle = "#FFFFFF";
		c.fillText("GAME OVER", 200, 190);
		c.fillText("SCORE: " + score, 200, 210);
		clearInterval(gameTimer);
	}
}

function Car (x, y, speed) {
	this.x = x;
	this.y = y;
	this.speed = speed;
}