const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var box1, box2, box3, box4, box5, box6;
var box7 , box8 , box9 , box10, box11;
var ball;
var rope;



function setup() {
    var canvas = createCanvas(1000, 500);
    engine = Engine.create();
    world = engine.world;



    ground = new Ground(500, 490, 1000, 10);
    box1 = new Box(400, 200, 60, 60);
    box2 = new Box(400, 200, 60, 60);
    box3 = new Box(400, 200, 60, 60);
    box4 = new Box(400, 200, 60, 60);
    box5 = new Box(400, 200, 60, 60);
    box6 = new Box(400, 200, 60, 60);

    box7 = new Box(450, 200, 60, 60);
    box8 = new Box(450, 200, 60, 60);
    box9 = new Box(450, 200, 60, 60);
    box10 = new Box(450, 200, 60, 60);
    

    ball = new Ball(200, 200, 100, 100);
    rope = new Rope(ball.body, {x: 200 , y:200});
}

function draw() {
    background('#FFFFFF')
    Engine.update(engine);


    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box4.display();
    box5.display();
    box6.display();

    box7.display();
    box8.display();
    box9.display();
    box10.display();

    ball.display();

    rope.display();


    ground.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body , {x: mouseX , y:mouseY});
}


