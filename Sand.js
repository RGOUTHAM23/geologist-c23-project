class Sand{
    constructor(x,y,radius){
        var options = {
            'restitution':0.1,
            'friction':0.5,
            'density': 2
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
       fill("red");
       ellipseMode(RADIUS);
       ellipse(pos.x,pos.y,this.radius,this.radius);
       pop()
    }
}