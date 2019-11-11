//curtain exercise

var img1;
var img2;
var totalCircles;
3, 9
var x, y;
var desiredColor;
e
var c;

function preload() {
    img1 = loadImage("data/back.png");
    img2 = loadImage("data/back.png");

}

function setup() {

    createCanvas(1300, 900);
    background(251, 11, 96);

    //loading image data
    img1.loadPixels();
    img2.loadPixels();

    //initialize values
    totalCircles = 900;
    y = 50;
    c = 255;


}

function draw() {
    fill(255, 255, 255, 8);
    textSize(105);
    text('Exploring', 10, 150);

    fill(505);
    textSize(705);
    text(' *', 400, 700);

    fill(255);
    textSize(205);
    text(' P5.js', 0, 450);


    var circleSize = width / totalCircles;

    var circleSize = width / totalCircles;
    //draw circles
    var currentCircle = (1);

    //this keeps the size proportional to your width
    while (currentCircle < totalCircles) {
        x = currentCircle
        circleSize;



        //Get color 
        var desiredColor1 = getColor1(1);
        var desiredColor2 = getColor2(1);

        if (c > 20) {

            fill(desiredColor1);
        }

        if (c < 1) {

            fill(desiredColor2);
            stroke(desiredColor2);
        }
        push();
        //stroke(255, 0, 0, 99);
        translate(900, 250, 89);
        rotate(PI / 0.0101);
        ellipse(x, y, circleSize, circleSize);
        (x, y, circleSize);
        currentCircle++;

        pop
        //        stroke(255, 255, 255);
        //        ellipse(y, circleSize, x, circleSize);
        //        (x, y, y, circleSize, circleSize);
        //        currentCircle++;



        stroke(255, 0);

        (x, circleSize, x, circleSize);
        (y, x, circleSize, circleSize);
        currentCircle++;



    }

    //move down a row
    y = y + circleSize;
    x = x + circleSize;

    //start over at top
    if (y > 300) {
        totalcircles = 130;
        c = -c;

        y = 2;
        x = 0;
    }



}

///////////////
function getColor1() {
    var desiredColor1 = img1.get(floor(x), floor(x, y));
    return desiredColor1;

}


function getColor2() {
    var desiredColor2 = img2.get(floor(x), floor(y));
    return desiredColor2;

}
