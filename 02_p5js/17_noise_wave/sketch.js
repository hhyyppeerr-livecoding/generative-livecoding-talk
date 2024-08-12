let yoff = 0;

function setup() {
  createCanvas(400, 400);
  background(20);
  stroke(220);
  noFill();
  
}

function draw() {
  background(0)
  strokeWeight(1)
  stroke(220)
  rectMode(CENTER)
  rect(width/2, height/2, 220, 310)
  drawWave(height/2, 0.1, 0.01, 200)
}
function drawPoint(x,y){
  for(let i=0; i<10; i++){
    let col = map(i,0,10,200,0)
    stroke(col)
    strokeWeight(6)
    point(x,y+(i*3))
  }
}
function drawWave(y, increment, scale, amplitude) {
  let xoff = 0;
  for (let x = 100; x <= width-100; x += 1) {
    let noiseValue = noise(xoff, yoff);
    let yOffset = map(noiseValue, 0, 1, -amplitude, amplitude);
    let pos = y + yOffset
    if (pos > height-58){
      pos = height-58
    }
    if(pos < 58){
      pos = 58
    }
    drawPoint(x, pos);
    xoff += scale;
  }
  yoff += increment/40;
}
