class Drops{
    constructor(x,y) {
        var options = {
            'restitution':0.8,
            'friction':0.1,
            'density':1.0
        }
        this.body = Bodies.ellipse(x,y,options);
        this.x = this.body.x;
        this.y = this.body.y;
        World.add(world,this.body);
    }
    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        pop();
    }
    updateDrops() {
        if (this.body.position.y > 400) {
            MutationObserver.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
        }
    }
}