x = 525;
y = 250;

vx = 0;
vy = 20;

deltaVx = 0;
deltaVy = 0;

mass = 3.0;
dt = 0.1;

function draw(){
    // Update velocities
    vx += deltaVx;
  	vy += deltaVy;

    // Update location
    x += vx*dt;
  	y += vy*dt;

    // velocity is unchanged if there are no forces
    deltaVx = 0;
  	deltaVy = 0;

    // This will clear the screen and re-draw it
    display();

    // Add more graphics here before the end of draw()
    drawBlob(x,y,vx,vy,0,0);

} // end draw()
