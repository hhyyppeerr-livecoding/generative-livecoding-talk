let velX, velY
let x, y, ancho_circulo, col
let maxVel = 5
function createColor(){
  colorMode(HSB)
  let h = int(random(255))
  let s = 200
  let b = 255
  return color(h, s, b)
}
function setup() {
  createCanvas(400, 400);
  velX = random(-maxVel, maxVel)
  velY = random(-maxVel, maxVel)
  console.log(velX, velY)
  x = width/2
  y = height/2
  ancho_circulo = 20
  noStroke()
  col = createColor()
  fill(col)
}

function draw() {
  background(20);
  ellipse(x, y, ancho_circulo)
  x += velX
  y += velY
  fill(col)
  
  if(x > width-ancho_circulo/2 || x < ancho_circulo/2){
    velX = -velX
    col = createColor()
  }
  if(y > height-ancho_circulo/2 || y < ancho_circulo/2){
    velY = -velY
    col = createColor()
  }
}