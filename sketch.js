const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world,umbrellaObj,drops;
var maxDrops = 100;

function preload(){
    
}

function setup() {
   umbrellaObj = new Umbrella(600,350,10,10);
}

function draw(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    for(var i=0; i<maxDrops; i++) {
        drops.push(new Drops(random(0,400), random(0,400)));
    }

    umbrellaObj.display();
    
}   

