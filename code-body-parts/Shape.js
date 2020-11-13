/*
This is a huge class that takes its methods and properties in the parameters, properties and methods can be called from outside the parameters too. The main suggestions to use this Shape class are below : {
    If you don't want any-one of the parameters, enter "null" in it.

    The code has been written as if for ex., you are giving the radius as "null", then the computer is commanded to expect a rectangle out of the inputs.

    A Rectangle is 1, and a Cirlce is 0 in the code for this.body property below.

    To display the images of the Shape class, call the <<shapeName>>.displayImage(image, imageFilePath, imageX, imageY, imageScale, imageWidth, imageHeight);.

    Where we are checking if something is null, we are giving only two = (equal to) signs, so that if the user unknowingly uses null in double qoutes, it will take the value as null. It will not be the sensitive
}

It is much better than the Sprite class.
*/

class Shape {
    constructor(x, y, width, height, radius, fill, visible) {
        this.centerX = x;
        this.centerY = y;
        this.fill = fill;
        this.visible = visible;
        this.width = width;
        this.height = height;
        this.radius = radius;
        this.body;
        this.shape;
        this.leftX;
        this.topY;
        this.setShapeContinuousProperties();
    }
    display() {
        fill(this.fill);
        if (this.visible === true) {
            if (this.body === 1) {
                rect(this.leftX, this.topY, this.width, this.height);
            } else {
                ellipse(this.leftX, this.topY, this.radius);
            }
        }
    }
    setSpeed(xSpeed, ySpeed, maxX, maxY) {
        this.x += xSpeed;
        this.y += ySpeed;
        if (maxX) {
            if (this.x >= maxX) {
                this.x = maxX;
            }
        }
        if (maxY) {
            if (this.y >= maxY) {
                this.y = maxY;
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
    setShapeContinuousProperties() {
        if (this.radius == null) {
            // Computer understands it as a rectangle
            this.body = 1;
            this.shape = "Rectangle";
            this.leftX = this.centerX - (this.width / 2);
            this.topY = this.centerY - (this.height / 2);
        } else if (this.width == null && this.height == null) {
            // Computer understands it as an ellipse
            this.body = 0;
            this.shape = "Circle";
            this.leftX = this.centerX - (this.radius / 2);
            this.topY = this.centerY - (this.radius / 2);
        }
    }
    isTouching(target) {
        if ((target.centerX - this.centerX) <= (target.width + this.width) / 2
            && (this.centerX - (target.centerX) <= (target.width + this.width) / 2)
            && ((target.centerY - this.centerY) <= (target.height + this.height) / 2)
            && ((this.centerY - target.centerY) <= (target.height + this.height) / 2)) {
            return true;
        }
    }
}