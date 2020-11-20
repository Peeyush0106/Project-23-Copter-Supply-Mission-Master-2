class ContainerPart {
    constructor(x, y, height, options, angle) {
        this.x = x;
        this.y = y;
        this.width = 40;
        this.height = height;
        this.options = options;
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, this.options);
        World.add(world, this.body);
        Matter.Body.setAngle(this.body, angle);
    }
    display(color) {
        this.color = color;
        var pos = this.body.position;
        var angle = this.body.angle;
        if (color) {
            fill(this.color);
        }
        rectMode(CENTER);
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rect(0, 0, this.width, this.height);
        pop();
    }
    
}