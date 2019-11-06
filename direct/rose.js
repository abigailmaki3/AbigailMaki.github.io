//CSMA102
//Intro to Programming
//FALL 2019
//THEOHAR, ECHO
//Abigail Maki
//abigailmaki3@gmail.com



function setup() {


}

function setup() {
    pixelDensity(1);
    createCanvas(1500, 1500, 98);
    background(39, 38, 7);

    {
        if (mouseX > 300)
            fill(200, 30, 0)
    }
}

function draw() {


}


function mousePressed() {
    stroke(246, 30, 7, 125)

    fill(1)
    strokeWeight(random(3, 359, 1));


    point(mouseX, mouseY, random(120), random(50));



}

function mouseDragged() {

    fill(20)
    strokeWeight(random(3, 0, 10, 22));

    //function {mouseDragged()
    line(mouseX, mouseY, random(20), random(30));
    stroke(248, 124, 194, 80)


}
