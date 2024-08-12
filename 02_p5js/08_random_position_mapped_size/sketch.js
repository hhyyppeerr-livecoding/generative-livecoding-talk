function setup() {
  createCanvas(600, 600);
  background(220);
}

function draw() {
  let margen = 100
  let x = random(margen, width-margen)
  let y = random(margen, height-margen)
  let w = map(y, 0, width, 0, 16)
  fill(220)
  ellipse(x, y, w)
}