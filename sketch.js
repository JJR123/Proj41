const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint; 

var drop;  
var a;
var drops=[];
var boy, boyImg; 
var maxDrops=100;  
var lightning, thunder1, thunder2, thunder3, t1,t2,t3; 
var select_thunder;


function preload(){
    boyImg = loadImage("Sprites/Boy.png");  
    t1= loadImage("Sprites/thunder1.png"); 
    t2= loadImage("Sprites/thunder2.png"); 
    t3= loadImage("Sprites/thunder3.png");
}



function setup(){
    createCanvas(800,600);
    boy= createSprite(400,430,50,50);
    boy.addImage("boy",boyImg); 
    boy.scale = 0.1;
}
function draw(){
    rectMode(CENTER); 
    background("black"); 

    if(frameCount%333){
    for(var i=0; i<maxDrops; i++){ 
        /*drops.push(new createDrops(random(0,400), random(0,400)));
        drops.push(new Drops(random(0,400), random(0,400)));
   */ 
        a= createSprite(random(0,800), random(0,800), 1, 30); 
        a.velocityY=3;
        a.shapeColor=("cyan"); 
        a.lifetime=1;
    
    }
    } 

    if(frameCount%3){ 
        //lightning= createSprite(random(0,800), 10); 
       //lightning.addImage("thunder"+(random(1,3))); 
       
        select_thunder = random(1,3);
  
  //if (World.frameCount % 100 == 0) {
    if (select_thunder == 1) {
        Thunder1();
    } else if (select_thunder == 2) {
        Thunder2();
    } else if (select_thunder == 3) {
        Thunder3();
    } 
    
  //} 


        //lightning.addImage("t1", thunder1);
        //lightning.scale=0.0001; 
        
    }
    

    Thunder1(); 
    Thunder2(); 
    Thunder3();

    drawSprites(); 
    //drop.update();
}    

function Thunder1(){   
  
    thunder1 = createSprite(random(0, 800),10);
    thunder1.scale=1;  
    thunder1.addImage("t1", t1); 
    thunder1.lifetime=1;  
    }    
    
function Thunder2(){   
  
        thunder2 = createSprite(random(0, 800), 10);
        thunder2.scale=0.5;  
        thunder2.addImage("t2", t2); 
        thunder2.lifetime=1;  
}    
    
function Thunder3(){   
  
            thunder3 = createSprite(random(0, 800), 10);
            thunder3.scale=0.5;  
            thunder3.addImage("t3", t3); 
            thunder3.lifetime=1;  
}    
            


