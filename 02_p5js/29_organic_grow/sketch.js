function create_string(string){
  let new_string = ""
  for(let chr of string){
    if(chr == "X"){
      new_string += "F+[[X]-X]-F[-FX]+X"
    }
    if(chr == "F"){
      new_string += "FF"
    }
    else{
      new_string += chr
    }
  }
  return new_string
}

function generate_strings(axiom, generations){
  let gens = []
  gens.push(axiom)
  gens.push(create_string(axiom))
  for(let i = 0; i < generations; i++){
    gens.push(create_string(gens[i]))
  }
  return gens
}

function drawFractal(string, len){
  let sin_val = sin(frameCount/10)
  let ang = map(sin_val, -1, 1, 25,25.02)
  for(let chr of string){
    if(chr == "F"){
      let long = random(2,7)
    
      line(0, 0, 0, -long)
      translate(0, -long)
    }
    if(chr == "-"){
      rotate(ang)
    }
    if(chr == "+"){
      rotate(-ang)
    }
    if(chr == '['){
      push()
    }
    if(chr == ']'){
      pop()
    }
    
  }
}

let axioma = "0"
let strings = []
let generations
let gen
function setup() {
  createCanvas(400, 400);
  background(220);
  translate(width/2, height)
  generations = generate_strings("X", 7)
  gen = generations[generations.length-1]
  drawFractal(generations[generations.length-1], 10)
}
function draw() {
  // background(220)
  // translate(width/2, height)
  
  // drawFractal(generations[generations.length-1], 25)
  
  
}