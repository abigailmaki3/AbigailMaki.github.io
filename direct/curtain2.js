//curtain exercise

var img1;
var img2;
var totalCircles;3,9
var x,y;
var desiredColor;e
var c;

function preload(){
    img1 = loadImage ("data/hert.jpg");
    img2 = loadImage ("data/sshhe.jpg");
  
}

function setup() {
    
    createCanvas(1300,1400);
    background(150);
    
    //loading image data
    img1.loadPixels();
    img2.loadPixels();
 
    //initialize values
    totalCircles = 900;
    y = 0;
    c = 255;
 
        
}

function draw() {
    
    //set circle size based off totalCircles
    var circleSize = width/totalCircles;
  
        var circleSize = width/totalCircles;
    //draw circles
    var currentCircle = (80);
    
    //this keeps the size proportional to your width
    while(currentCircle < totalCircles){
        x = currentCircle 
        circleSize;
        
    
    
    //Get color 
    var desiredColor1 = getColor1();
    var desiredColor2 = getColor2(5);
    
    if(c>0){
        
        fill(desiredColor1);
    }
    
    if(c<0){
        
        fill(desiredColor2);
        stroke(desiredColor2);
    }
    
      
       
          //stroke(255,0,0,99);
         translate(500, 340);
          rotate(PI / 3.0);
    ellipse(x,y, circleSize, circleSize);
    (x,y,y, circleSize);
    currentCircle++;
     
         
        stroke(0,255,255);
    ellipse(y,circleSize, x, circleSize);
    (x, y,y, circleSize, circleSize);
    currentCircle++;
       
        
        
        stroke(255,0);
     
    (x,circleSize, x, circleSize);
    (y, x,circleSize, circleSize);
    currentCircle++;
        

        

ellipse(y,x,circleSize*5);
    (x,y,y,circleSize);
    currentCircle;
                 
ellipse(y,x, circleSize*5);
    (x,y, y,circleSize);
    currentCircle;              
  
    }
    
    //move down a row
    y = y + circleSize;
  x = x + circleSize;

    //start over at top
    if(y > 1300){
        totalcircles = 1;
        c =-c;
        
        y = 2;
        x =0;
    }
    
   
    
}

///////////////
function getColor1() {
    var desiredColor1 = img1.get(floor(x), floor(y));
    return desiredColor1;
    
}


function getColor2() {
    var desiredColor2 = img2.get(floor(x), floor(y));
    return desiredColor2;
    
}