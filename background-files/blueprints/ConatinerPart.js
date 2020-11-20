class ConatinerPart {
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
        if (fill) {
            fill(this.color);
        }
        rectMode(CENTER);
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rect(0, 0, this.width, this.height);
        pop();
    }
    displayImage(imageName, imageX, imageY, imageScale, imageWidth, imageHeight) {
        // imageName = loadImage(imageFilePath);
        this.image = imageName;
        if (imageX) {
            this.imageX = imageX;
        }
        if (imageY) {
            this.imageY = imageY;
        }
        if (imageScale) {
            this.imageScale = imageScale;
            imageName.scale = this.imageScale;
        }
        if (imageWidth) {
            this.imageWidth = imageWidth;
            imageName.width = this.imageWidth;
        }
        if (imageHeight) {
            this.imageHeight = imageHeight;
            imageName.height = this.imageHeight;
        }
        image(imageName, this.imageX, this.imageY);
    }
}