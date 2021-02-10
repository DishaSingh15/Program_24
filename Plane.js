class Plane {
    constructor (x,y) {
        var options = {
            'density':2,
            'friction':1.0,
            'restitution':0.5,
        };
        this.body = Bodies.rectangle(x,y,options);
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        World.add(world,this.body)
    }
    display () {
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
    
}