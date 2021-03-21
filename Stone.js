class Stone{
    constructor(x,y,radius){
        var options = {
            'restitution':0.8,
            'friction':0.9,
            'density':15
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius ;
        
        World.add(world,this.body);
    }
    display(){
       var pos = this.body.position;
       push()
       stroke(3.5);
       strokeWeight("black");
       fill("blue");
       ellipseMode(RADIUS);
       ellipse(pos.x,pos.y,this.radius,this.radius);
       pop()
    }
}