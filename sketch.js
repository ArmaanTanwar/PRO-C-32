const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var pig1;
var log1;
var polygon_img;
var score = 0 ;
var gameState = "onSling";

var backgroundImg ;

function preload(){
  polygon_img=loadImage("polygon.png");
  getBackgroundImg() ;
}

var bg = "bg.png" ;

function setup(){
    var canvas = createCanvas(2500,1000);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(330,235,30,40);
    box2 = new Box(360,235,30,40);
    box3 = new Box(390,235,30,40);
    box4 = new Box(420,235,30,40);
    box5 = new Box(450,235,30,40) ;
    box6 = new Box(360,195,30,40) ;
    box7 = new Box(390,195,30,40) ;
    box8 = new Box(420,195,30,40) ;
    box9 = new Box(390,155,30,30) ;
   
    box10 = new Box(880,200,30,40)
    box11 = new Box(910,200,30,40) ;
    box12 = new Box(940,200,30,40) ;
    box13 = new Box(970,200,30,40) ;
    box14 = new Box(1000,200,30,40) ;
    box15 = new Box(950,150,30,40) ;
    box16 = new Box(940,180,30,40) ;
    box17 = new Box(973,180,30,40)
    box18 = new Box(910,180,30,40)


   ground = new Ground(600,500,1290,20)
   ground1 = new Ground(400,270,280,10) ;
   ground2 = new Ground(950,210,240,10) ;

     //ball holder with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

    slingShot = new SlingShot(this.ball,{x:100,y:200}) ;
}


function draw(){
//background(230);

if(backgroundImg) 
background(backgroundImg) ;


noStroke() ;
textSize(35) ;
fill("white") ;
text("Score " +  score , width - 300 ,50) ;

Engine.update(engine);
box1.display();
box2.display();
box3.display() ;
box4.display() ;
box5.display() ;
box6.display() ; 
ground.display();
box7.display() ;
box8.display() ;
box9.display() ;
box8.display() ;
box9.display() ;
box10.display() ;
box12.display() ;
box11.display() ;
box13.display() ;
box14.display() ;
box15.display() ;
box16.display() ;
box17.display() ;
box18.display() ;

ground1.display() ;
ground2.display() ;
ground1.display() ;

imageMode(CENTER)
image(polygon_img ,ball.position.x,ball.position.y,40,40);

slingShot.display();

}


function mouseDragged(){
Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
slingShot.fly();
}    

function keyPressed(){
  if(keyCode===52){
  slingShot.attach(this.ball) ;
  }
  
  }

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = "bg.png";
  }
  else{
     bg = "bg2.jpg";
    
    }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}