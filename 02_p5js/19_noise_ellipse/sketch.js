let colorFront;
let t = 0
let t2 = 0
let vel = 0.01
class Counter{
  constructor(end){
    this.count = 0
    this.end = end
    this.flag = false
  }
  
  init(){
    this.count = 0
    this.flag = false
  }
  
  checkCount(){
    if(this.count >= this.end){
      this.flag = true
    }
  }
  
  update(){
    if(!this.flag){
        this.count++
      this.checkCount()
    }
  }
}
function setup() {
  createCanvas(800, 800);
  background(220);
  colorFront = color(0)
  colorFront.setAlpha(random(20,100))
  // noiseDetail(4, 0.3)
}

let go = true;
let contador = 0
function draw() {
  translate(width/2, height/2)
  let x = sin(t)*200
  let y = -cos(t)*200
  let x2 = -sin(t)*200
  let y2 = -cos(t)*200
  if(go){
   t += vel
  t2 += vel*1.5
  colorFront.setAlpha(noise(t)*200)
  noFill()
  stroke(colorFront)
  ellipse(x, y, noise(t2)*100, noise(t2)*100)
  ellipse(x2, y2, noise(t2)*100, noise(t2)*100) 
  }
  
  if(t > PI){
    go = false
    contador++
    if(contador > 50){
      contador = 0
      t = 0
      go = true
      background(220)
    }
  }
  
}