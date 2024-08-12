//translate() nos deja cambiar el punto de origen de la esquina superior izquierda
//push() guarda en memoria el punto de origen actual
//pop() reestablece el ultimo punto de origen 
function setup() {
  createCanvas(400, 400);
  noStroke()
}

function draw() {
  background(220);
  fill(0)
  rect(0,0,200)
  push() //guardamos estado
  translate(width/2, height/2) //trasladamos
  fill(255,0,0)
  ellipse(0,0,100) //circulo rojo en el centro
  pop() //reestablecemos posicion de origen
  fill(255)//si no establecemos otro relleno, volvera a usar 0
  ellipse(0,0,100) //circulo gris en el origen
  
}