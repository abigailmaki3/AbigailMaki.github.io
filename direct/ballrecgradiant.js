var startX;
var startY;
var directionX;
var directionY;

    var rectH=60;
    var rectW=500;
    var rectX=6;

var shade;

function setup(){
    createCanvas(500,500);
    background(200);
    
    startX = width/2;
    startY= height/2;
    
    
  directionX = 10;
    directionY = 3;
        
}


function draw(){ 
    //reverse move
    
                  startX= startX + directionX;
                  startY= startY+ directionY;


    
    if(startX>(width)){
        directionX = -directionX;
    }
    
              if(startY>(height)){
               directionY = -directionY;}
           
if(startX<(0)){
        directionX = -directionX;}
   
    
                 if(startY<(0)){
                 directionY = -directionY;
    }
    
    
   
 shade =map(startX,0,width,0,255,65);
  fill(shade,98,76,78,98);

    
    
    y = map(mouseY,30,height,4,height-rectH,true);
        rect(rectX,y,rectW,rectH,true);
    
    stroke(67,8,65,87)
    fill(255,89)
     triangle(startX,startY,22,80,)
     line(startX,startY,mouseX,mouseY);
     

}

 if(mousePressed){
     fill(0);
        rect(25,20,20,20);
        
    }