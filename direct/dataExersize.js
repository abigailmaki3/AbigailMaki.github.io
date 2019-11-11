//data exercise


var colorTable;
var names = [];
var hueVal = [];
var myRating = [];
var sz = [];

function preload(){
    
    colorTable = loadTable("assets/colors.csv");
}


function setup(){
    
    createCanvas (900,600);
    colorMode(HSB, 360, 100, 100);
    
    noStroke();
    
    
    for(var i = 0; i < colorTable.getRowCount(); i++){
        
        names[i] = colorTable.getString(i,0);
        hueVal[i] = colorTable.getNum(i, 1,2,3,4,5);
        myRating[i] = colorTable.getNum(i, 2,3);
        sz[i] = map(myRating[i], 1, 20, 20, 50,90);
   
    }
      
    
    
}

function draw(){
    
    background(255);
    
    for(var i = 0; i < colorTable.getRowCount(); i++){
        
        rotate(map(mouseX, 2, width, 0, PI));
          rectMode(RADIUS);
        fill(hueVal[i], 40, 80);
         stroke(hueVal[i], 70, 180);
        stroke(0,90);
                
        
    ellipse(75 *(i+1), 400, sz[i+1], sz[i]);
          
    rect(75 *(i+2), 300, sz[i], sz[i]);
        stroke(hueVal[i], 70, 180);
        strokeWeight(25);
    
        
         fill(hueVal[i],255,10,0,110);
    rect(75 *(i+3), 200, sz[i], sz[i]);
       
        stroke(hueVal[i],125,78,9);
        
        strokeWeight(5);
        
//        rectMode(RADIUS);
        
         fill(hueVal[i],255,0,9);
     rect(75 *(i+1), 100, sz[i], sz[i],2); 
        
         fill(hueVal[i],125,7,9);
         textSize(25);
        text(names[i], 75 * (i+1), 350);
        
        
        fill(255);
        ellipse(75 *(i+1), 300, sz[i], sz[i]);
        
       
    }
}