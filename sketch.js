var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);  
btn_red = createButton ("RED");
btn_red.position(100,50);
btn_red.mousePressed(red.bg);
btn_green = createButton ("GREEN");
btn_green.position(250,50);
btn_green.mousePressed(green.bg);
}

function red_bg()
{
  r=255;
  b=0;
  b=0;
}
function red_bg()
{
  r=0;
  b=255;
  b=0;
}

function draw() {
  background(r,g,b);
  drawSprites()
}

