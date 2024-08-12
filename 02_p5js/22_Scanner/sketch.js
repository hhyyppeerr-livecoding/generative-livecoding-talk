let imgs = []
let target
let target2 
function preload(){
  for(let i = 0; i< 5; i++){
    imgs.push(loadImage("img"+i+".jpg"))
  }
}
function setup() {
  createCanvas(800, 800);
  for(let i = 0; i<imgs.length; i++){
    imgs[i].resize(800,800)
  }
  target = random(imgs)
  target1 = random(imgs)
  background(220)
  // image(target, 0, 0)
  imageMode(CENTER)
}

function draw() {
  // let layer1 = createGraphics(400, 400)
  let slice = target.get(noise(frameCount/30)*800, 0, 4, 800)
  let slice1 = target1.get(noise(frameCount/20)*800, 0, 4, 800)
  image(slice, width/2+cos(frameCount/120)*420, height/2)
  // image(target, 0,0)
}