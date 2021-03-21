const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var iron;
var ground;
var rubber;
var sand1, sand2 , sand3 , sand4 , sand5;
var stone;
var hammer;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    
    iron = new Iron(500,560,70,40);
    
    ground = new Ground(600,595,1200,10);
   
    rubber = new Rubber(200,560,60,40);

    sand1 = new Sand(400,550,5);

    sand2 = new Sand(400,550,5);

    sand3 = new Sand(400,550,5);

    sand4 = new Sand(400,550,5);

    sand5 = new Sand(400,550,5);

    stone = new Stone(700,560,40);

    hammer = new Hammer(200,200,90,40);
    
}

function draw(){
    background("lightBlue");

   
    Engine.update(engine);
    
    iron.display();
   
    ground.display();

    rubber.display();

    sand1.display();

    sand2.display();

    sand3.display();

    sand4.display();

    sand5.display();

    stone.display();

    hammer.display();
}