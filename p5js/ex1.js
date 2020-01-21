function setup(){

  createCanvas(windowWidth,windowHeight);


}


function draw() {
  background(240);
  strokeWeight(2);

  line(width/2, height/2, mouseX, mouseY);
  line(width/2, height/2,mouseX,height/2);
  line(mouseX, mouseY,mouseX,height/2);

  textSize(width / 50);
  text(dist(width/2, height/2, mouseX, mouseY),50,50);

}
