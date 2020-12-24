let num = 20;
let mixnum;
let gravity = 0.05;
let snows = [];
let i = 0;

function setup() {
  mixnum = num;
  createCanvas(windowWidth, windowHeight);
  createObject();
  setInterval("createObject()", 2500);
}

function createObject() {
  for (; i < mixnum; i++) {
    snows[i] = new Snow(
      random(-windowWidth, windowWidth),  // 起始点x
      random(-60, 0),                     // 起始点y
      random(1, 5),                       // 宽度
      random(-2, 2),                       // x轴速度
      random(2, 4),                       // y轴速度
      0
    );
  }
  mixnum = mixnum + num;
}

function draw() {
  background('#181D1E');
  snows.forEach(snow => {
    snow.move();
    snow.display();
    snow.delete();
  });
}

function Snow(x, y, width, dx, dy, angle) {
  this.x = x; //落点横坐标
  this.y = y; //落点纵坐标
  this.move = function () {
    this.x += dx;
    this.y += dy;
    angle = angle + random(0, 0.02);
  };
  this.display = function () {
    snowflake(this.x, this.y, width, angle);
  };
  this.delete = function () {
    if (this.y >= windowHeight) {
      snows.splice(this, 1);
    }

  }
}

function snowflake(x, y, width, angle) {
  push();
  stroke('#72ECFF');
  strokeWeight(width);
  translate(x, y);
  rotate(angle);
  line(0, 0, 0, 10 * width);
  line(-3 * width, 7.5 * width, 0, 5 * width);
  line(3 * width, 7.5 * width, 0, 5 * width);
  line(-2.5 * width, 5 * width, 0, 3 * width);
  line(-1 * width, 3.8 * width, -2 * width, 3 * width);
  rotate(PI / 3);
  line(0, 0, 0, 10 * width);
  line(-3 * width, 7.5 * width, 0, 5 * width);
  line(3 * width, 7.5 * width, 0, 5 * width);
  line(-2.5 * width, 5 * width, 0, 3 * width);
  line(-1 * width, 3.8 * width, -2 * width, 3 * width);
  rotate(PI / 3);
  line(0, 0, 0, 10 * width);
  line(-3 * width, 7.5 * width, 0, 5 * width);
  line(3 * width, 7.5 * width, 0, 5 * width);
  line(-2.5 * width, 5 * width, 0, 3 * width);
  line(-1 * width, 3.8 * width, -2 * width, 3 * width);
  rotate(PI / 3);
  line(0, 0, 0, 10 * width);
  line(-3 * width, 7.5 * width, 0, 5 * width);
  line(3 * width, 7.5 * width, 0, 5 * width);
  line(-2.5 * width, 5 * width, 0, 3 * width);
  line(-1 * width, 3.8 * width, -2 * width, 3 * width);
  rotate(PI / 3);
  line(0, 0, 0, 10 * width);
  line(-3 * width, 7.5 * width, 0, 5 * width);
  line(3 * width, 7.5 * width, 0, 5 * width);
  line(-2.5 * width, 5 * width, 0, 3 * width);
  line(-1 * width, 3.8 * width, -2 * width, 3 * width);
  rotate(PI / 3);
  line(0, 0, 0, 10 * width);
  line(-3 * width, 7.5 * width, 0, 5 * width);
  line(3 * width, 7.5 * width, 0, 5 * width);
  line(-2.5 * width, 5 * width, 0, 3 * width);
  line(-1 * width, 3.8 * width, -2 * width, 3 * width);
  pop();
}