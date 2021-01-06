var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];


var divisionHeight=300;
var score =0;
var particle;
//var turn = 0;
var gameState = "Play";

function setup() {
  
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");

  Engine.update(engine);
 

  if(gameState = "Play"){

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   
 textSize(20);
 stroke("green");
 fill("white");
 text("Score : "+score,20,30);


 textSize(15);
 text("500", 20, 530);

 text("500", 120, 530);

 text("500", 200, 530);

 text("500", 280, 530);

 text("100", 360, 530);

 text("100", 440, 530);

 text("100", 520, 530);

 text("200", 600, 530);

 text("200", 680, 530);

 text("200", 760, 530);

 stroke("yellow");
   fill("white");
   strokeWeight(4);

}
else{
  if(gameState = "end"){

    textSize(40)
    fill("white");
    text("GAME OVER", 400, 400);
  }
}

if(particles.x < 300){
  text("SCORE : 500", 20, 30);
}
  


}