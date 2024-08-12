class Turtle{
  constructor(action){
    this.action = action
    this.len = 1
  }
  forward(){
    line(0,0,0,this.len)
    translate(0,this.len)
  }
  left(){
    angleMode(DEGREES)
    rotate(-90)
  }
  right(){
    angleMode(DEGREES)
    rotate(90)
  }
  update(){
    for(let chr of this.action){
      if(chr == "F"){
        this.forward()
      }
      if(chr == "R"){
        this.right()
      }
      if(chr == "L"){
        this.left()
      }
      if(chr == "Q"){
        this.len++
      }
    }
  }
}
let t 
function setup() {
  createCanvas(400, 400);
  background(220);
  t = new Turtle("FRQ")
  translate(width/2, height/2)
  for(let i=0; i<200; i++){
  t.update()
  }
 
}

function draw() {
}