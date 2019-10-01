//sunrise colours
var col1 = '#db907d';
var col2 = '#6d54a9';
var col3 = '#022660';
var col4 = '#ce75c2';
var col5 = '#0d469d';

var colorList = [col1, col2, col3, col4, col5];

//sunset colours
var colS1 = '#ffd400';
var colS2 = '#f40001';
var colS3 = '#381c2a';
var colS4 = '#f48740';
var colS5 = '#3c3b5f';

var colorListS = [colS1, colS2, colS3, colS4, colS5];


function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(255);
  noStroke();
  frameRate(25);
}

function draw() {

  for (var t = 0; t < windowWidth; t += 100) {
    for (var u = 0; u < windowHeight; u += 100) {

      if (frameCount < 100) {

        //from sunrise to sunset
        fill(lerpColor(color(col1), color(colS1), frameCount / 100));
        triangle(t, u, t + 100, u, t + 50, u + 50);
        fill(lerpColor(color(col2), color(colS2), frameCount / 100));
        triangle(t + 50, u + 50, t + 100, u, t + 100, u + 100);
        fill(lerpColor(color(col3), color(colS3), frameCount / 100));
        triangle(t, u + 100, t + 100, u + 100, t + 50, u + 50);
        fill(lerpColor(color(col4), color(colS4), frameCount / 100));
        triangle(t, u, t + 50, u + 50, t, u + 100);

        // text
        fill(255);
        noStroke();
        textSize(20);
        textAlign(CENTER, CENTER);
        text('Wait till the Sunset colours', width / 2, 50);

      } else if (frameCount > 110) {
        //text
        noStroke();
        textSize(40);
        text('Click to stop crazy colours', width / 2, height / 2);

        // crazy colours sunrise and sunset

        var index = floor(random() * colorList.length);
        var colorHex = colorList[index];
        fill(color(colorHex));
        triangle(t, u, t + 100, u, t + 50, u + 50);

        var indexS = floor(random() * colorListS.length);
        var colorHexS = colorListS[indexS];
        fill(color(colorHexS));
        triangle(t, u + 100, t + 100, u + 100, t + 50, u + 50);
      }
    }
  }
}

function mousePressed() {
  noLoop();
}
