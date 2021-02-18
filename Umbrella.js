class Umbrella{
    constructor(x,y) {
        var options = {
            'restitution':0.8,
            'friction':0.1,
            'density':1.0,
            isStatic:true
        }
        this.body = Bodies.ellipse(x,y,options);
        this.x = this.body.x;
        this.y = this.body.y;
        this.image = loadImage(
            "Walking Frame/walking_1.png",
            "Walking Frame/walking_2.png",
            "Walking Frame/walking_3.png",
            "Walking Frame/walking_4.png",
            "Walking Frame/walking_5.png",
            "Walking Frame/walking_6.png",
            "Walking Frame/walking_7.png",
            "Walking Frame/walking_8.png"
        );
        World.add(world,this.body);
    }
    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
    updateDrops() {
        if (this.body.position.y > 400) {
            this.body.position.y = 0;
        }
    }
}