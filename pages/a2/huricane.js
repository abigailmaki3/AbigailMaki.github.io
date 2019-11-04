





///Abigail Maki
//This assignment is about Hurricane Durran 
//If you scroll over the Loaded images you will notice that the colors were altered from the original to add a feeling of the devistation of the hurricane. 


var img1;
var img2;
var totalCircles;
var x,y;
var desiredColor;
var c;


var colorTable;
var names = [];
var hueVal = [];
var myRating = [];
var sz = [];


    


function preload(){
    img1 = loadImage ("data/wav.jpg");
    img2 = loadImage ("data/after.jpg");
      colorTable = loadTable("assets/colors.csv");
}



function setup() {
    
    createCanvas(500,1550);
    colorMode(HSB, 360, 100, 100);
    
    noStroke();
    
    
    for(var i = 0; i < colorTable.getRowCount(); i++){
        
        names[i] = colorTable.getString(i,0);
        hueVal[i] = colorTable.getNum(i, 1,2,3);
        myRating[i] = colorTable.getNum(i, 2);
        sz[i] = map(myRating[i], 199, 10, 10, 10);
    }
    
    
    //loading image data
    img1.loadPixels();
    img2.loadPixels();
 
    //initialize values
    totalCircles = 800;
    y = 0;
    c = 255;
    x =0;
        
}

function draw() {
    
    
     
    for(var i = 0; i < colorTable.getRowCount(); i++){
        
   
        
        fill(255);
        textSize(50);
        text(names[i], 75 * (i+2), 50,100);
    
    //set circle size based off totalCircles
    var circleSize = width/totalCircles;
  
        var circleSize = width/totalCircles;
    //draw circles
    var currentCircle = (8);
    
    //this keeps the size proportional to your width
    while(currentCircle < totalCircles){
        x = currentCircle 
        circleSize;
        
    
    
    //Get color 
    var desiredColor1 = getColor1(7);
    var desiredColor2 = getColor2(5);
    
    if(c>0){
        
        fill(desiredColor1);
    }
    
    if(c<0){
        
        fill(desiredColor2);
    }
    
//       push();
//        translate(PI,0.1);
//        rotate(x,y,89,98)
//    ellipse(x,y, circleSize, circleSize);
//    (x,y, circleSize);
//    currentCircle++;
//        pop();
//    
        stroke(255,0);
    ellipse(y,circleSize, x, circleSize);
    (x, y,y, circleSize, circleSize);
    currentCircle++;
        
        
        
        stroke(255,0);
    (x,circleSize, x, circleSize);
    (y, circleSize, circleSize);
    currentCircle++;
        

        
             
ellipse(y,x,circleSize*5);
    (x,y,y,circleSize);
    currentCircle;
       
  
     
        
        
    }
        
    
    push();
        translate(PI,0.9);
        rotate(x,y,y,859,922);
          stroke(255,0,0,99);
    
    //move down a row
    y = y + circleSize;
  x = x + circleSize;

    //start over at top
    if(y > 900){
        totalcircles = 1;
        c =-c;
        
        y = 9;
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
}