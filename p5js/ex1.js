const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;

let ground;
const boxes = [];
let bird;
let world, engine;
let mConstraint;
let slingshot;

let dotImg;
let boxImg;
let bkgImg;
var contador;
var contar;

function preload() {
  dotImg = loadImage('ball.png');
  boxImg = loadImage('benfica.png');
  bkgImg = loadImage('foot.jpg');
}

function setup() {
  const canvas = createCanvas(711, 400);
    contador = 0;
  contar = false;
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height - 10, width, 20);
  for (let i = 0; i < 3; i++) {
    boxes[i] = new Box(450, 300 - i * 75, 84, 100);
  }
  bird = new Bird(150, 300, 25);

  slingshot = new SlingShot(200, 200, bird.body);

  const mouse = Mouse.create(canvas.elt);
  const options = {
    mouse: mouse,
  }


  mouse.pixelRatio = pixelDensity();
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint)
}

function keyPressed() {
  if (key == ' ') {
    World.remove(world, bird.body);
    bird = new Bird(150, 300, 25);
    slingshot.attach(bird.body);
  }

}

function mouseReleased() {
  setTimeout(() => {
    slingshot.fly();
  }, 100);
  // contagem é falso novamente e o contador é redefinido
  contar = false;


}

function draw() {
  background(bkgImg);

  textSize(32);
  text('FORCA E ACELERAÇÃO', width/4, height/8);

  Matter.Engine.update(engine);
  ground.show();
  for (let box of boxes) {
    box.show();
  }
  slingshot.show();
  bird.show();

  fill(255);
  noStroke();
  textFont('Helvetica');
  textSize(20);
  text("FORÇA: " + contador, 20, 40);
  text("VELOCIDADE:" +contador, 20,70);
  if (frameCount % 10 != 0 && contar) {

    //aumenta o valor do contador
    contador++;
  }
}

//esta função é ativada quando a tela é tocada: altere contagem para true
function touchStarted() {
  contar = true;
}
