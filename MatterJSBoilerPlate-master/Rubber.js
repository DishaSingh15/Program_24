class Rubber{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.3,
            'friction':5,
            'density':1
        }
        this.body = Bodies.circle(x, y,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        pop();
      }
}