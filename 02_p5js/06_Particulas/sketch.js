function createColor(){
  // colorMode(HSB)
  let h = random(255)
  let s = 220
  let b = 255
  return color(h, s, b)
}
class Pelota{
  constructor(){
    this.x = width/2
    this.y = height/2
    this.w = random(5,30)
    this.maxVel = 4
    this.c = createColor()
    this.velX = random(-this.maxVel, this.maxVel)
    this.velY = random(-this.maxVel, this.maxVel)
  }
  show(){
    noStroke()
    fill(this.c)
    ellipse(this.x, this.y, this.w)
  }
  update(){
    this.x += this.velX
    this.y += this.velY
    
    this.checkLimits()
  }
  checkLimits(){
    if(this.x > width - this.w/2 || this.x < this.w/2){
      this.velX = -this.velX
    }
    if(this.y > height - this.w/2 || this.y < this.w/2){
      this.velY = -this.velY
    }
  }
}

let pelotas = []
function setup() {
  createCanvas(400, 400);
  for(let i=0; i<20; i++){
    pelotas.push(new Pelota())
  }
  
}

function draw() {
  background(20);
  
  for(let i=0; i<pelotas.length; i++){
    pelotas[i].show()
    pelotas[i].update()
  }
}