let seed = 240
function createColor(){
  let col_aux = [];
  for(let i = 0; i < 3; i++){
    let val = int(random(4)) * 85;
    col_aux.push(val);
  }
  return color(col_aux);
}
let frontColor
let nextColor
function setup() {
  createCanvas(600, 600);
  textSize(10)
  textAlign(LEFT,TOP)
  background(220);
  noiseSeed(seed)
  noiseSeed(seed)
  frontColor = createColor()
  nextColor = createColor()
}

let vel = 0.02
let t = 0
let t2 = 1
let t3 = 2
let colorTransition = 0
let iteraciones = 1
function draw() {
  fill(220)
  noStroke()
  rect(0,0,400, 40)
  fill(0)
  text("Seed: "+seed,10,10)
  text("Iterations: "+int(frameCount/iteraciones), 10, 20)
  stroke(0)
  let noiseX = noise(t)
  let noiseY = noise(t2)
  let noiseVel = noise(t3)
  
  let q = 50
  let x = map(noiseX, 0, 1, q, width-q)
  let x2 = map(noiseX, 0, 1, width-q, q)
  let y = map(noiseY, 0, 1, q, height-q)
  let vel1 = map(noiseVel, 0, 1, 0.005, 0.03)
  let w = map(vel1, 0.005, 0.02, 50, 0)
  
  let c = lerpColor(frontColor, nextColor, colorTransition)
  colorTransition += 0.02
  if(colorTransition > 1){
    frontColor = nextColor
    nextColor = createColor()
    colorTransition = 0
  }
  fill(220)
  strokeWeight(0.5)
  ellipse(x,y,w)
  // ellipse(x2,y,w)
  t+=vel1
  t2+=vel1
  t3+=vel
  if(frameCount%10000 == 0){
    saveCanvas("output", "png")
    t = 0
    t2 = 1
    t3 = 2
    colorTransition = 0
    seed = random(200)
    iteraciones++
      noiseSeed(seed)
  noiseSeed(seed)
    background(220)
  }
}