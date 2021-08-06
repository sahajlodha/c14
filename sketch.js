var ball = {
  x:20 , 
  y:30 ,
  r:30 ,
  xspeed:0,
  yspeed:0,
  color:["blue","red","pink","green"]
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(ball.x,ball.y,ball.r);
  fill (ball.color[3]);
  ball.xspeed = 1;
  ball.x = ball.x+ball.xspeed;
}