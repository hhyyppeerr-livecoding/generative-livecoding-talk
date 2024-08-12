let imgs = []
function preload(){
  for(let i=0; i<22; i++){
    imgs.push(loadImage(i+".png"))
  }
}
class Mangler{
  constructor(){
    this.target = random(icons)
  }
  update(){
    if(frameCount%2 == 0){
    this.target.img = random(imgs)      
    }
    if(frameCount%20 == 0){
      this.target = random(icons)
    }
  }
  
}
class Icon{
  constructor(){
    this.img = random(imgs)
    this.x = random(width)
    this.y = random(-this.img.height, height)
  }
  
  show(){
    image(this.img, this.x, this.y)
  }
  
  update(){
    this.y += 4 
    if(this.y > height){
      this.y = -this.img.height
      this.x = random(width-this.img.width)
    }
    if(this.x > width-this.img.width){
      this.x = width-this.img.width
    }
    if(this.x < 0){
      this.x = 0
    }
  }
}

let icons = []
let manglers = []
function setup() {
  createCanvas(600, 600);
  noSmooth()
  for(let i=0; i<150; i++){
    icons.push(new Icon())
  }
  for(let i= 0; i < 12; i++){
    manglers.push(new Mangler())
  }
}

function draw() {
  background(0, 128, 128);
  for(let i=0; i<icons.length; i++){
    icons[i].show()
    icons[i].update()
  }
  for(let i=0; i<manglers.length; i++){
    manglers[i].update()
  }
}