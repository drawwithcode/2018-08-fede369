var px = 0;
var py = 0;
var ax = 0;
var ay = 0;
var vx = 0;
var vy = 0;
var sp = 0.02;
var gr = 0.8;
var i = "incline to draw, shake to clear";
var sh = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  px = windowWidth / 2;
  py = windowHeight / 2;
  noStroke();
  background("#ac865e");
  angleMode(DEGREES);
}

function draw() {
  var size = pow(windowWidth * windowHeight, 0.15);

  fill("#8c0303");
  textSize(25);
  textAlign(CENTER);
  text(i, width / 2, height - size * 2);

  //move();

  fill("#ffec36");
  push();
  translate(width, 0);
  scale(-1, 1);
  ellipse(px + size / 2, py + size / 2, size);
  pop();

  fill("#3649ff");
  push();
  translate(0, height);
  scale(1, -1);
  ellipse(px + size / 2, py + size / 2, size);
  pop();
}

function deviceShaken() {
  sh = sh + 5;
  if (sh > 25) {
    sh = 0;
    background(45, 36, 30);
    i = "";
  }
}

function deviceMoved() {
  var size = pow(windowWidth * windowHeight, 0.15);
  ax = rotationX;
  ay = rotationY;

  vx = vx + ay;
  vy = vy + ax;
  py = py + vy * sp;
  px = px + vx * sp;

  if (px < 0) {
    px = 0;
    vx = -vx * gr;
  }
  if (py < 0) {
    py = 0;
    vy = -vy * gr;
  }
  if (px > width - size) {
    px = width - size;
    vx = -vx * gr;
  }
  if (py > height - size) {
    s = true;
    py = height - size;
    vy = -vy * gr;
  }
}
