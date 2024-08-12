let origenX
let origenY

let destinoX
let destinoY

let x
let y

let transicion = 0.0
let vel = 0.5

let w = 5
function setup() {
  createCanvas(400, 400);
  origenX = random(100,width-100)
  origenY = random(100,height-100)
  destinoX = random(100,width-100)
  destinoY = random(100,height-100)
    background(220);
  ellipseMode(CENTER)
}

function draw() {
  x = lerp(origenX, destinoX, transicion)
  y = lerp(origenY, destinoY, transicion)

  transicion += vel
  point(x,y)
  if(transicion > 1){
    vel = random(0.02, 0.03)
    transicion = 0
    origenX = destinoX
  origenY = destinoY
  destinoX = random(100,width-100)
  destinoY = random(100,height-100)
    noFill()
    ellipse(origenX, origenY, random(4,12))
  }
}