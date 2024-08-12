let img
function preload(){
  img = loadImage("img (1).jpg")
}
function setup() {
  createCanvas(400, 400);
  img.resize(400,400)
  background(220)
  // image(img, 0, 0)
  imageMode(CENTER)
}



function draw() {
  let slice = img.get(noise(frameCount/70)*200, noise(frameCount/60)*200, 20, 20)
  image(slice, noise(frameCount/80)*400, noise(frameCount/120)*400,100, noise(frameCount/100)*300)
}