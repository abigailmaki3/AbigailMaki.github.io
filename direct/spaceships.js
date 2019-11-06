///Abigail Maki 
//Modularity Assignment 5



var ballR; 
var ballB;
var ballT;


var shade;




function setup() 
{
  createCanvas(1000, 1000);
  colorMode(HSB, 360, 100, 100);
  
   ballR = new Ball(200, 200, 5, 2, 10);
   ballB = new Ball(400, 400, 3, 6, 190);
   ballT = new Ball(500, 450, 2, 7, 20);
}

function draw() 
{
  background(90);
 
    

  ballR.drawBall1();
  ballB.drawBall();
   
  ballR.moveBall();
  ballB.moveBall();  
  ballT.moveBall();
    
  ballR.bounceBall();
  ballB.bounceBall();
  ballT.bounceBall(); 
    
    
    if(ballR.isCollided(ballB.x, ballB.y,ballT.z)){
        
        ballR.reset();
        ballB.reset();
         ballT.reset();
        background(200,9,255);
    }
    
    


}

//Now we also have speed properties of the ball
//so we can move and bounce
function Ball(ballX, ballY, speedX, speedY, hueBall)
{
  this.x = ballX;
  this.y = ballY;
    
    
  this.spX = speedX;
  this.spY = speedY;
    
  this.hBall = hueBall;
    
    
        
//these are like putting functions in your functions
  this.drawBall1 = function() {
    Stroke();
    
      fill(this.hBall, 0, 89);
       
      ellipse(this.y,this.x,shade, 300,293); 
      stroke(230,7);
      
      //head
     ellipse(this.y,67,this.y,32, 20); 
      stroke(60,7);
     
      
      
      
      
ellipse(startY*25,startX/2,40,200);
        fill(256,9,9,9);
    
ellipse(startY*25,startX/3,20,700,9);
        fill(25,9);
    
    //horizontal circles
    stroke(230,79);
    
    fill(0,255,70);
ellipse(750,700,startX,startY,7,5);

      
  }
  
    
//these are like putting functions in your functions
  this.drawBall = function() {
    noStroke();
    fill(this.hBall, 90, 89);
       
      line(this.y,this.x, 30,23); 
      stroke(230,7);
      
      //head
      ellipse(this.y,this.x, 32, 20); 
      stroke(20,7,98);
      
      rect(this.y,this.x, 7,this.x, 29); 
      stroke(20,7,);
      fill(random,2,90);
      
    ellipse(this.y,this.x, 450, 100); 
      stroke(2,7);
      
      fill(100,7,8);
       rect(this.y+5,this.x, 5, 100); 
      stroke(23,9);
      
    ellipse(this.y+8,this.x,this.x, 45, 10); 
      stroke(235,9);
      
      fill(random,0,98,9);
        ellipse(this.y+6,this.x,this.x, 45, 100); 
      stroke(235);
      
      

      
  }
  //these are like putting functions in your functions
  this.drawBall1 = function() {
      
    noStroke();
    fill(this.hBall, 90, 8);
       
      rect(this.y, 30,60); 
      stroke(random,890,0);
      
      //head
      ellipse(this.y,this.y,this.x, 39, 20); 
      stroke(299,7);
      fill(20,9);
      
      ellipse(this.y,this.x, 7,this.x,this.drawball,29); 
      stroke(10,7,);
      fill(random,20,18);
      
    ellipse(this.y,this.x, 45, 100); 
       fill(245);
      //moon
      ellipse(this.y, 45, 88); 
      fill(34,208,0);
          ellipse(this.y*2, 4, 10); 
      ellipse(this.y/2, 5, 10);
      
      ellipse(this.y/3, 65, 20);
      rect(this.y+4,4,10);
      stroke(2,9,3);
      
      fill(100,7,8);
       rect(this.y+5,this.x, 5, 10); 
      stroke(23,9);
      
       fill(100,7,80);
       ellipse(this.y,this.x, 100, 10); 
      stroke(23,9);
      
        fill(this.hBall, 9, 89);
       rotate(map(mouseX, 70, width, 0, PI));
    ellipse(this.y+8,this.x,this.x, 4, 10); 
      stroke(255,9);
        
    
      
        ellipse(this.y+6,this.x,this.x, 45, 100); 
      stroke(25);
      
      
      
      
      
      
      

      
  }
  
  this.moveBall = function() {
    this.x += this.spX;(78);
    this.y += this.spY;
    this.z += this.spZ;  
  }
  
  this.bounceBall = function() {
    if (this.x < 70 || this.x > width - 50)
    this.spX = -this.spX;
     if (this.y < 50 || this.y > height - 50)
    this.spY = -this.spY;
      
    
  }
  
  
  
  
  
  this.isCollided = function(otherX, otherY){
      if(dist(this.x, this.y, otherX, otherY) <= 200)
          
          
          return true; 
      
      
  }
  
  this.reset = function(){
      background(90);
      this.x = random(50, width-3);
      this.y = random(50, height-20);
     
      
      this.spX = random(1,1);
      this.spY = random(2,6);
      
      this.hBall = random(360);
      
  }
  
}