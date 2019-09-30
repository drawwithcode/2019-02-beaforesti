var col1 = '#581845';
var col2 = '#900c3f';
var col3 = '#c70039';
var col4 = '#ff5733';
var col5 = '#ffc30f';

var colorList = [col3, col4, col5];


function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(col5)
  noStroke();
  angleMode(DEGREES);

}

function draw() {
  var x = random() * windowWidth;
  var y = random() * windowHeight;
  fill(lerpColor(color(col3), color(col5), frameCount/100));
  quad(x, y, x + 100, y, x+ 100, y+100, x, y+100);


  // triangles
  for (var t = 0; t < windowWidth; t += 100) {
    for (var u = 0; u < windowHeight; u += 100) {

      fill(color(col1));
      triangle(t, u, t + 100, u, t + 50, u + 50);
      fill(color(col2));
      triangle(t, u + 100, t + 100, u + 100, t + 50, u + 50);

      if (t < windowWidth / 3 && u < windowHeight / 3 || t > windowWidth / 3 && u > windowHeight / 3) {
        fill(lerpColor(color(col1), color(col4), frameCount/100));
        quad(t, u + 50, t + 50, u, t + 100, u + 50, t + 50, u + 100);
      } else if (t > windowWidth / 3 && u < windowHeight / 3 || t < windowWidth/3 && u > windowHeight/3) {
        fill(lerpColor(color(col1), color(col3), frameCount/100));
        quad(t, u + 50, t + 50, u, t + 100, u + 50, t + 50, u + 100);

      }
    }
  }
}
