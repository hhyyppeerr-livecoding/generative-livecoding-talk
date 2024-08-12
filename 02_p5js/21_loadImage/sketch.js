let img
function preload(){
  img = loadImage("1.jfif")
}
function setup() {
  createCanvas(600, 600);
  img.resize(400,400)
}

function draw() {
  background(220);
  image(img,0,0)
}