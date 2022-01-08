var hr,mn, sc;
var hrangle, mnangle, scangle;
function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background(0);  
translate(200,200);
rotate(-90);
hr=hour();
mn=minute();
sc=second();
scangle=map(sc,0,60,0,360);
mnangle=map(mn,0,60,0,360);
hrangle=map(hr%12,0,12,0,360);
//drawing seconds hand
push();
rotate(scangle);
stroke('red');
strokeWeight(7);
line(0,0,100,0);
pop();
// drawing minutes hand
push();
rotate(mnangle);
stroke('yellow');
strokeWeight(7);
line(0,0,75,0);
pop();
//drwaing hour hand
push();
rotate(hrangle);
stroke('blue');
strokeWeight(7);
line(0,0,50,0);
pop();
noFill();
stroke('red');
strokeWeight(7);
arc(0,0,300,300,0,scangle)
//arc for minute
stroke('yellow');
strokeWeight(7);
arc(0,0,280,280,0,mnangle)
// arc for hour
stroke('blue');
strokeWeight(7);
arc(0,0,260,260,0,hrangle)
}