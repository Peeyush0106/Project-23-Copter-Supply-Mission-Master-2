// This is the main brain of the program that will command the computer, so is continuously working. The human brain is the same.
function draw() {
    background(0);
    Engine.update(engine);
    setProperties();
    displayImagesAndObjects();
}