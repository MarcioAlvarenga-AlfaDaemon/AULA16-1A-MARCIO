//Aula 16 Pensamento Computacional
let cor;
let posicaoHorizontal;
let posicaoVertical;

function setup() {
  createCanvas(400, 400);
  background("pink");
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  posicaoHorizontal = 200;
  posicaoVertical = 200;
}

function draw() {
  fill(cor);
  circle(posicaoHorizontal, posicaoVertical, 50);

  if (mouseX < posicaoHorizontal) {
    posicaoHorizontal--;
  }

  if (mouseX > posicaoHorizontal) {
    posicaoHorizontal++;
  }

  if (mouseY < posicaoVertical) {
    posicaoVertical--;
  }

  if (mouseY > posicaoVertical) {
    posicaoVertical++;
  }

  if (mouselsPressed) {
    cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
  }
}
