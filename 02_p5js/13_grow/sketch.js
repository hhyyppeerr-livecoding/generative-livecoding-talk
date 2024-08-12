let n_particles = 0
let p;
function createColor(){
  colorMode(HSB)
  let h = 100
  let s = random(0,220)
  let b = random(120)
  let c = color(h, s, b)
  return c
}
function setup() {
  createCanvas(800, 200);
  colorMode(HSB)
  let c = color(40,40,255)
  background(c);
  p = new Particle(width / 2, height / 2);
}
let particles = []
function draw() {
  p.update();
  p.show();
  // console.log(p.maxChildren)

  let x = noise(frameCount/100)*width
  let y = noise(frameCount/80)*height
  particles.push(new Particle(x, y))
  
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 7;
    this.options = [this.up, this.down, this.left, this.right];
    this.colores = [];
    this.addColor();
    this.health = int(random(4, 15));
    this.children = []
    this.maxChildren = 10
    this.vel = this.size
    this.n_particles = 0
  }
  addColor(){
    this.colores = []
    for(let i=0; i<1; i++){
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
    for(const particle of this.children){
      particle.show()
      particle.update()
    }
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

    if (this.health <= 0 && n_particles < this.maxChildren) {
      // background(0)
      this.children.push(new Particle(this.x, this.y))
      this.children.push(new Particle(this.x, this.y))
      n_particles += 2
    }
    
  }

  up() {
    this.y -= this.vel;
  }

  down() {
    this.y += this.vel;
  }

  left() {
    this.x -= this.vel;
  }

  right() {
    this.x += this.vel;
  }
}
