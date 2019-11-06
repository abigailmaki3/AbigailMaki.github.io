

////////////////////////
let yoff = 0.0; // 

    var value;

//data exercise
var x,y;

var img1;

var names = [];

var sz = [];

var row=[];
var col =[];
var timear=[];
var graphArr = [];

var newTable;

function preload(){
    
     img1 = loadImage ("data/www.jpg");
    
  
    newTable=loadTable("assets/smtides.csv");
}




    
   

/////////////

let t = 1; // time variable

function setup() {
createCanvas(1700, 800);
colorMode(HSB, 360, 100, 100);    
noStroke();
       

///////////////////////TIME/////////////////
    for(let r = 0;r< newTable.getRowCount();r++)
    {
        for(let c= 0;c<newTable.getColumnCount(); c++)
        {
            if(c==0)
                append(timear,newTable.getString(r,0));
        }
    }
    
    for(let r = 0;     r< newTable.getRowCount();r++)
    {
    for(let c= 0;  c<newTable.getColumnCount(); c++)
        {
            if(c==1)
                append(graphArr,newTable.getString(r,1));
        }
    }
    
      
   
    print(graphArr);
    
 
}
    ///////////////////////TIME////////////////


function draw() 
{     
        
 background(img1); 
    
    /////////background sky
  r = map(mouseX, 100, 500, 205, 30);
  b = map(mouseX, 800, 1400, 170, 50);
  
    fill(r, 10, b);
 rect(0,0,1700,270);
    
    strokeWeight(.09);
    stroke(5);
   
    
     fill(55);
       rect(0,0,1680,60,78)
    
//////////sky background//////////
    
    
//////////////dot////////////////////////////
      let c = map(mouseX, 100, width, 90, 675);
  // Scale the mouseX value from 0 to 640 to a range between 40 and 300
  let d = map(mouseX, 300, 1400, 20, 500);
   fill(140, 16, 25);
  
    
/////////////dot//////////////////////////// 
 textSize(30);

    fill(255);
    text('00:00', 0, 50);  
   rect(100,0,1,100);  
       
    fill(215);
rect(10,0,1,100); 
 text('01:00', 100, 50);        
    
        fill(215);
rect(200,0,1,100); 
 text('01:00', 200, 50);    
    
        fill(215);
rect(300,0,1,100); 
 text('02:00', 300, 50);    
    
        fill(215);
rect(400,0,1,100); 
    
 text('03:00', 400, 50);    
     fill(215);
    
rect(600,0,1,100); 
 text('04:00', 500, 50);    
     fill(215);
    
      rect(600,0,1,100); 
 text('05:00', 600, 50);    

    fill(215);
rect(700,0,1,100); 
 text('06:00', 700, 50);    
    
    fill(215); 
rect(800,0,1,100); 
     text('07:00', 700, 50);
    fill(215);
 text('08:00', 800, 50);
    
    fill(215);
  rect(900,0,1,100); 
 text('09:00', 900, 50);    
    
    fill(215);
    rect(1000,0,1,100); 
 text('10:00', 1000, 50);    
    
    rect(1100,0,1,100); 
 text('11:00', 1100, 50);    
    
    rect(1200,0,1,100); 
 text('12:00', 1200, 50);    
       
    rect(1300,0,1,100); 
 text('13:00', 1300, 50);    
                    
     rect(1400,0,1,100); 
 text('14:00', 1400, 50);    
                             
         rect(1500,0,1,100); 
 text('15:00', 1500, 50);    
                             
                  
          rect(1600,0,1,100); 
 text('16:00', 1600, 50);    
                                       
    
    
    
    
    
    
    

text('Height of Wave in Feet', 850, 600); 

       textSize(40);
    fill(255);
    text('5 foot High Tides Caution', 250, 330);  
        textSize(40);
    fill(255);
    text('3-4 foot Fair Tides', 250, 450);  
         textSize(40);
    fill(255);
    text('1-2 Clear Tides', 250, 550);  
    
 
    
///////////LEVELS ///RECTANGLES////////////
    
    //3bottom red
    c = color('hsba(356, 93%, 98%, 0.5)');
    fill(c); // Use updated 'c' as fill color
    rect(0,270,width,80)


    //2 bottom up green
    c = color('hsba(160, 100%, 50%, 0.4)');
    fill(c); // Use updated 'c' as fill color
    rect(0,350,width,200)


    //bottom blue
    c = color('hsba(211, 93%, 34%, 0.5)');
    fill(c); // Use updated 'c' as fill color
   
    ///botom white
    rect(0,500,width,160)
    
     fill(255);  
    rect(0,600,1700,800);
   
  
    
/////////LEVELS ////RECTANGLES////////////
  
    
    
    


    
    
   
    
    
    /////////////////////////TIME///TABLE/start///
    

    var wave;
    
   textSize(106);
    
    if(mouseX< 100 && mouseX>110)
    {
        value = timear[0];
        wave =graphArr[0]
        
        
    } else if (mouseX>100 && mouseX<200)
    {
        value = timear[10];
        wave =graphArr[10]
    }
    else if (mouseX>200 && mouseX<300)
    {
        value = timear[20];
        wave =graphArr[20]
    }
    else if (mouseX>300 && mouseX<400)
    {
        value = timear[30];
        wave =graphArr[30]
    }
    
     else if (mouseX>400 && mouseX<500)
    {
        value = timear[40];
        wave =graphArr[40]
    }
    
    else if (mouseX>100 && mouseX<600)
    {
        value = timear[50];
        wave =graphArr[50]
    }
    
       else if (mouseX>100 && mouseX<700)
    {
        value = timear[60];
        wave =graphArr[60]
    }
           else if (mouseX>100 && mouseX<800)
    {
        value = timear[70];
    wave =graphArr[70]
    }
    
            else if (mouseX>100 && mouseX<900)
    {
        value = timear[80];
  wave =graphArr[80]
    }
    
              else if (mouseX>100 && mouseX<1000)
    {
        value = timear[90];
wave =graphArr[90]
    }
    
              else if (mouseX>100 && mouseX<1100)
    {
        value = timear[100];
  wave =graphArr[100]
    }
    
              else if (mouseX>100 && mouseX<1200)
    {
        value = timear[110];
   wave =graphArr[110]
    }
    
             else if (mouseX>100 && mouseX<1300)
    {
        value = timear[120];
wave =graphArr[120]
    }
    
         else if (mouseX>100 && mouseX<1400)
    {
        value = timear[130];
   wave =graphArr[130]
    }
          else if (mouseX>100 && mouseX<1500)
    {
        value = timear[140];
wave =graphArr[140]
    }
    
        else if (mouseX>100 && mouseX<1600)
    {
        value = timear[150];
  wave =graphArr[150]
    }
         else if (mouseX>100 && mouseX<1700)
    {
        value = timear[160];
   wave =graphArr[160]
    }
    
    else if (mouseX>100 && mouseX<1800)
    {
        value = timear[170];
   wave =graphArr[170]
    }
  
    ///////////////////////TIME TABLE stop//    
    
  
       fill(55);
    rectMode(CENTER);
    rect(850,210,289,110,78)
    rectMode(CORNER);
    fill(210);
      
    textAlign(CENTER);
    text(value,1700/2,250);    
    print(wave);
   
    
    colorMode(RGB);
    fill(0,255,255,50);
    ellipse(850,570, wave*100, wave*100);
    colorMode(HSB);
    textAlign(CENTER)
    fill(0);
    var size = map(wave,0,5,30,300);
    textSize(size);
    text(wave,850,570)
    
    
    for(var i = 1;i<graphArr.length;i++){
        ellipse(i*50,graphArr[i]*1,2,2);
    }
        /////////////wave ///////
     
for (let x = 0; x <= width; x = x + 2) {
    for (let y =-230; y <= 730; y = y + 950) {
      // starting point of each circle depends on mouse position
      const xAngle = map(mouseX, 0, width, -4 * PI, 4* PI, true);
      const yAngle = map(mouseY, 0, height, -40 * PI, 40 * PI, true);
      // and also varies based on the particle's location
      const angle = xAngle * (x / width) + yAngle * (y / height);

      // each particle moves in a circle
      const myX = x + 10 * cos(20 * PI * t + angle);
      const myY = y + 50 * sin(2 * PI * t + angle);

      ellipse(myX, myY,myX, 3,-6); // draw particle
        fill(254,171,252);
         ellipse(myX, myY,myX, 2,-9); // draw particle
        fill(0);
          ellipse(myX, myY,myX, 2,-9); // draw particle
        fill(175, 175, 84);
          
    }
  }

  t = t + 0.01; // update time
}

