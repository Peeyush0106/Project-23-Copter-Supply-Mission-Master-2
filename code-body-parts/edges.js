
function createEdges(left, right, top, bottom) {
    fill("red");
    if (left) {
        var w = 1;
        var h = height;
        // var x = width + (w / 2);
        var x = 200;
        var y = (height / 2);
        leftEdge = Bodies.rectangle(x, y, w, h);
        World.add(world, leftEdge);
        leftEdge.width = w;
        leftEdge.height = h;
        rect(x, y, w, h);
    }

    if (right) {
        var w = 1;
        var h = height;
        var x = width - (w / 2);
        var y = (height / 2);
        rightEdge = Bodies.rectangle(x, y, w, h);
        World.add(world, rightEdge);
        rightEdge.width = w;
        rightEdge.height = h;
        rect(x, y, w, h);
    }

    if (top) {
        var w = width;
        var h = 1;
        var x = (width / 2);
        var y = width - (w / 2);
        topEdge = Bodies.rectangle(x, y, w, h);
        World.add(world, topEdge);
        topEdge.width = w;
        topEdge.height = h;
        rect(x, y, w, h);
    }

    if (bottom) {
        var w = width;
        var h = 1;
        var x = (width / 2);
        var y = width + (w / 2);
        bottomEdge = Bodies.rectangle(x, y, w, h);
        World.add(world, bottomEdge);
        bottomEdge.width = w;
        bottomEdge.height = h;
        rect(x, y, w, h);
    }
}

function showEdges(left1, right1, top1, bottom1) {
    if (left1) {
        var w = leftEdge.width;
        var h = leftEdge.height;
        var x = leftEdge.position.x;
        var y = leftEdge.position.y;
        rect(x, y, w, h);
    }
    if (right1) {
        var w = rightEdge.width;
        var h = rightEdge.height;
        var x = rightEdge.position.x;
        var y = rightEdge.position.y;
        rect(x, y, w, h);
    }
    if (top1) {
        var w = topEdge.width;
        var h = topEdge.height;
        var x = topEdge.position.x;
        var y = topEdge.position.y;
        rect(x, y, w, h);
    }
    if (bottom1) {
        var w = bottomEdge.width;
        var h = bottomEdge.height;
        var x = bottomEdge.position.x;
        var y = bottomEdge.position.y;
        rect(x, y, w, h);
    }
}