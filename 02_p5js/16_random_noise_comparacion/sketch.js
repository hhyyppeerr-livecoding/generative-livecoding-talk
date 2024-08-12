function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  point(frameCount%width, (height/2-50)+random(50))
  point(frameCount%width, (height/2+50)+noise(frameCount/100)*50)
  if(frameCount%width == 0){
    background(220)
  }
}