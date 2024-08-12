let unifont;
let caracter;
let colorBack = 0
let colorFront = 220
let fin = 10000;
let string = ""
function getChar(){
  let val = int(random(fin))
  let caracter = String.fromCharCode(val)
  return caracter
 
}

function preload() {
  unifont = loadFont("unifont.otf")
}
function setup() {
  createCanvas(400, 400);
  textFont(unifont)
  background(colorBack)
  noSmooth()
  
   fill(colorFront)
  textSize(40)
  textAlign(LEFT,TOP)
  textWrap(CHAR)
  textLeading(textSize()+1)
}

function draw() {
  string += getChar()
  text(string, 0, 0, 399, 399)
  if(string.length > 140){
    background(0)
    string = ""
  }
}