const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1 ,box2,box3,box4,box5; 
var platform ;
var bird ,sligshot;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
   

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    

    bird = new Bird (100,100);

    slingshot = new Slingshot (bird.body,{x:200,y:100});

    
}

function draw(){
    background("pink");
    Engine.update(engine);
    
    box1.display();
    box2.display();
    ground.display();
    box3.display();
    box4.display();
    bird.display();
    platform.display();
    slingshot.display();
}
function mouseDragged (){
   
    Matter.Body.setPosition(bird.body,{x:mouseX , y : mouseY});
    

}

function mouseReleased(){
    slingshot.fly();
}