let seed = 20
function createColor(){
  let col_aux = [];
  for(let i = 0; i < 3; i++){
    let val = int(random(4)) * 85;
    col_aux.push(val);
  }
  return color(col_aux);
}

function setup() {
  createCanvas(800, 600);
  background(220);
  noiseSeed(seed)
  randomSeed(seed)
}
let t = 0
let c = 180

let w = 10
function draw() {
  translate(width/4, height/4)
  fill(180)

  let noise_val = noise(t)
  let noise_val2 = noise(t+0.5)
  let x = map(noise_val, 0, 1, 0, width/2)
  let y = map(noise_val2, 0, 1, 0, height/2)
  let x2 = map(noise_val, 0, 1, width/2, 0)
  let y2 = map(noise_val2, 0, 1, 0, height/2)
  let polar_noise = map(noise_val, 0, 1, -1, 1)
  w -= 0.1
stroke(0)
  strokeWeight(0.5)
  fill(220)
  stroke(0)
  ellipse(x,y, w)
  ellipse(x2,y2, w)
  t += noise(t)/100
  if(w <= 0){
    // background(220)
    t = random(30,20000)
    w = random(frameCount/100)
    c = createColor()
    
  }
}