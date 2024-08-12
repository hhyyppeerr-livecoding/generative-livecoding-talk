function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  rectMode(CENTER)
  fill(0, 0, 255)
  noStroke()
  rect(width/2, height/2, 50, 50) //rectangulo azul
  
  //Circulos esquinas
  noFill()
  stroke(255, 0, 0)
  strokeWeight(20)
  ellipse(0, 0, 60, 60) 
  ellipse(width, 0, 60, 60)
  ellipse(width, height, 60, 60)
  ellipse(0, height, 60, 60)
  
  //circulos pequeños
  strokeWeight(1)
  stroke(0)
  ellipse(300,300,20)
  ellipse(width/2+100, height/2-100, 20)
  ellipse(width/2-100, height/2-100, 20)
  ellipse(width/2-100, height/2+100, 20)
  
  //linea
  line(width/2-100, height/2-100, width/2+100, height/2+100)
}