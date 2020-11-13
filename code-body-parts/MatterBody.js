class MatterBody {
    constructor(x, y, width, height, radius, options, visible) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.radius = radius;
        this.options = options;
        this.body;
        this.shape;
        this.fill;
        this.visible = visible;
        this.image;
        this.imageX;
        this.imageY;
        this.imageWidth;
        this.imageHeight;
        this.imageScale;
        this.setContinuousProperties();
        World.add(world, this.body);
    }
    setContinuousProperties() {
        if (this.width == null || this.height == null) {
            this.shape = 0;
        }
        else if (this.radius == null) {
            this.shape = 1;
        }
        else {
            this.shape = null;
        }

        if (this.shape === 1) {
            this.body = Matter.Bodies.rectangle(this.x, this.y, this.width, this.height, this.options);
        }

        else if (this.shape === 0) {
            this.body = Matter.Bodies.circle(this.x, this.y, this.radius, this.options);
        }
    }
    display(color) {
        this.fill = color;
        fill(this.fill);
        if (this.visible) {
            if (this.shape === 1) {
                var pos = this.body.position;
                var angle = this.body.angle;
                push();
                translate(pos.x, pos.y);
                rotate(angle);
                rectMode(CENTER);
                rect(0, 0, this.width, this.height);
                pop();
            } else if (this.shape === 0) {
                var pos = this.body.position;
                var angle = this.body.angle;
                push();
                translate(pos.x, pos.y);
                rotate(angle);
                ellipseMode(CENTER);
                ellipse(0, 0, this.radius);
                pop();
            }
        }
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