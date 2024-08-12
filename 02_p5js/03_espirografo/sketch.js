let colorBack = 220
let colorFront = 20
let angle = 0;
let ancho = 100;
let alto = 100;
let q = 20
let vueltas = 0
let vel = 0.1
function createColor(){
  colorMode(HSB)
  let hue = random(255)
  let sat = random(220,255)
  let bright = random(255)
  let col = color(hue, sat, 255)
  return col
}
function setup() {
  createCanvas(600, 600);
  background(colorBack);
  colorFront = createColor()
  colorFront.setAlpha(map(q, 0, 200, 0.1, 0.5))
  rectMode(CENTER)
  stroke(colorFront)
  noFill()
}

function draw() {
  if (angle > 2 * PI) {
    q = int(random(0,200))
    vel = map(q, 0, 200, 0.1, 0.02)
    angle = 0;
    ancho = random(100)
    alto = ancho
    vueltas++;
    colorFront = color(0)
    colorFront.setAlpha(map(q, 0, 200, 0.1, 0.5))
    if(vueltas > 10){
      vueltas = 0
      background(colorBack);      
    }
  }
  stroke(colorFront)
  translate(width / 2, height / 2);
  ellipse(sin(angle) * q, -cos(angle) * q, ancho, alto);
  angle += vel;
}
