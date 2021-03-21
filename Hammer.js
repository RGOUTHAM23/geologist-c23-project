class Hammer{
    constructor(x,y,width,height){
        var options = {
            'restitution':0.5,
            'friction':5,
            'density':20
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width ;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
       var pos = this.body.position;
       push()
       translate(pos.x,pos.y);
       stroke(3.5);
       strokeWeight("white")
       fill("yellow");
       pos.x = mouseX;
       pos.y = mouseY;
       rectMode(CENTER);
       rect(0,0,this.width,this.height);
       pop()
    }
}