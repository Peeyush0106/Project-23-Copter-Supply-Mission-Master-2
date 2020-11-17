function preload() {
    copterImage = loadImage(CopterImagePath);
    packImage = loadImage(PackageImagePath);
    groundImage = loadImage(GroundImagePath);
}

function setup() {
    createCanvas(800, 600);

    engine = Engine.create();
    world = engine.world;

    gameShouldRestart = false;
    packShouldStayAt150Y = true;

    // Object speeds
    copter_speed = {
        x: 4,
        y: 0
    }
    pack_speed = {
        x: 4,
        y: 0
    }

    // Options for objects
    pack_options = {
        restitution: 0.6,
        isStatic: true
    }
    ground_options = {
        isStatic: true
    }

    trolley_options = {
        isStatic: true,
        friction : 1
    }

    copter = Bodies.rectangle(-300, 150, 100, 70);
    pack = Bodies.circle(300, 150, 40, pack_options);
    ground = Bodies.rectangle(400, 550, 1600, 100, ground_options);

    trolleyRight = new MatterBody(490, 430, 20, 100, null, trolley_options, "red", true);
    trolleyLeft = new MatterBody(310, 430, 20, 100, null, trolley_options, "red", true);
    trolleyDown = new MatterBody(400, 490, 200, 20, null, trolley_options, "red", true);

    Engine.run(engine);

    World.add(world, pack);
    World.add(world, copter);
    World.add(world, ground);
}