let slider_h
let slider_s
let slider_b

function setup() {
  createCanvas(400, 400);
  slider_h = createSlider(0, 255)
  slider_s = createSlider(0, 255)
  slider_b = createSlider(0, 255)
}

function draw() {
  colorMode(HSB)
  let h = slider_h.value()
  let s = slider_s.value()
  let b = slider_b.value()
  background(color(h, s, b));
}