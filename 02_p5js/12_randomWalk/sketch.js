let p;
function createColor(){
  let col_aux = [];
  for(let i = 0; i < 3; i++){
    let val = int(random(4)) * 85;
    col_aux.push(val);
  }
  return color(col_aux);
}
function setup() {
  createCanvas(400, 400);
  background(0);
  p = new Particle(width / 2, height / 2);
}

function draw() {
  p.update();
  p.show();
}

class Particle {
  constructor() {
    this.x = width/2;
    this.y = height/2;
    this.size = 8;
    this.options = [this.up, this.down, this.left, this.right];
    this.colores = [];
    this.addColor();
    this.health = 1000;
    
  }
  addColor(){
    this.colores = []
    for(let i=0; i<3; i++){
      this.colores.push(createColor())
    }
  }
  checkLimits(){
    if(this.x < 0 || this.x > width || this.y < 0 || this.y > height){
      this.x = width/2
      this.y = height/2
    }
  }
  show() {
    noStroke()
    this.colorea()
    rect(this.x, this.y, this.size);
  }
  colorea(){
    if(this.health == 0){
      fill(this.colores[0])
    }
    else{
      fill(random(this.colores))
    }
  }
  update() {
    if(this.health == 0){
      return
    }
    let index = floor(random(this.options.length)); // Generar un índice aleatorio
    let selectedFunction = this.options[index]; // Obtener la función seleccionada
    selectedFunction.call(this);
    this.checkLimits();
    this.health--;
  }

  up() {
    this.y -= this.size;
  }

  down() {
    this.y += this.size;
  }

  left() {
    this.x -= this.size;
  }

  right() {
    this.x += this.size;
  }
}
