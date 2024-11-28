let xStep, yStep;

function setup() {
  createCanvas(innerWidth, innerHeight);
  xStep = innerWidth / 30;
  yStep = innerHeight / 30;
  noLoop();
}

function drawRandomShape(x0, y0) {
  beginShape();

  vertex(x0, y0);

  //5 random points
  for (let i = 0; i < 5; i++) {
    const newX = x0 + random(0, 100);
    const newY = y0 + random(0, 100);
    vertex(newX, newY);
  }

  endShape(CLOSE);
}

function draw() {
  background(220);
  noStroke();

  console.log(xStep);
  console.log(yStep);

  for (let x = 0; x < width; x = x + xStep) {
    for (let y = 0; y < height; y = y + yStep) {
      fill(random(255), random(255), random(255));
      drawRandomShape(x, y);
    }
  }
}
