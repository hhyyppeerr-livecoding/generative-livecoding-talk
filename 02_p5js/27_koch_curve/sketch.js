function create_string(string) {
  let new_string = "";
  for (let i = 0; i < string.length; i++) {
    let chr = string[i];
    if (chr == "F") {
      new_string += "F+F-F-F+F";
    } else {
      new_string += chr;
    }
  }
  return new_string;
}

function generate_strings(axiom, generations) {
  let gens = axiom;
  for (let i = 0; i <= generations; i++) {
    gens = create_string(gens);
  }
  return gens;
}

function drawFractal(string, len) {
  let ang = 90 * (PI / 180);
  for (let chr of string) {
    if (chr == "F") {
      line(0, 0, 0, -len);
      translate(0, -len);
    } else if (chr == "-") {
      rotate(-ang);
    } else if (chr == "+") {
      rotate(ang);
    }
  }
}

let axioma = "F";
let generations = 3;
let gen;

function setup() {
  createCanvas(400, 400);
  background(220);
  translate(0, height);
  gen = generate_strings(axioma, generations);
  drawFractal(gen, 5);
}
