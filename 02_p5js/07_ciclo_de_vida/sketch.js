console.log("Mi primer log")
function preload(){
  console.log("preload")
}

console.log("Mi segundo log")
function setup() {
  createCanvas(400, 400);
  console.log("setup")
}

console.log("Mi tercer log")
function draw() {
  console.log("draw")
  if(frameCount == 5){
    noLoop()
  }
}
console.log("Mi cuarto log")