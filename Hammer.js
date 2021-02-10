class Hammer {
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
        this.width = width;
        this.height = height;
    }
    display () {
        push();
        translate(this.body.position.x, this.body.position.y);
        pop();
    }
    
}