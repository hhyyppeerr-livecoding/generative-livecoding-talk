function createColor(){
  colorMode(RGB)
  let col_aux = [];
  for(let i = 0; i < 3; i++){
    let val = int(random(4)) * 85;
    col_aux.push(val);
  }
  return color(col_aux);
}

let c1
function setup() {
  createCanvas(400, 400);
  c1 = createColor()
}
function draw() {
  background(c1);

}