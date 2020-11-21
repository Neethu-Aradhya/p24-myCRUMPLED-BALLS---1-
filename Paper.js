class Paper
{
    constructor(x,y)
    {
        var options ={
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.5
        }
         this.body =Bodies.circle(x,y,25,options);
     
         this.radius = 25;
         World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;

        push();
        translate(pos.x,pos.y)
        noStroke()
        fill("red");

        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}