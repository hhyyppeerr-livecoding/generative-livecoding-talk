function create_string(string){
  let new_string = ""
  for(let chr of string){
    if(chr == "0"){
      new_string += "1[0]0"
    }
    if(chr == "1"){
      new_string += "11"
    }
    if(chr == '['){
      new_string += '['
    }
    if(chr == ']'){
      new_string += ']'
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
  console.log(gens)
  return gens
}
function drawFractal(string, len){
  for(let chr of string){
    if(chr == "0"){
      line(0, 0, 0, -len)
      // ellipse(0, 100, 50, 50)
      translate(0, -len)
    }
    if(chr == "1"){
      line(0, 0, 0, -len)
      translate(0, -len)
    }
    if(chr == '['){
      push()
      rotate(12)
    }
    if(chr == ']'){
      pop()
      rotate(-12)
    }
  }
}

let axioma = "0"
let strings = []
function setup() {
  createCanvas(400, 400);
  background(220);
  translate(width/2, height)
  let generations = generate_strings("0", 15)
  console.log(generations[generations.length-1])
  drawFractal(generations[generations.length-1], 1)
}
function draw() {
}