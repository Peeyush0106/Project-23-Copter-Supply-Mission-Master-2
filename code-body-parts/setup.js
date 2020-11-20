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

    angleMode(RADIANS)

    // Object speeds
    copter_speed = {
        x: 4,
        y: 0
    }

    // Options for objects
    pack_options = {
        restitution: 0.6,
        density: 1,
        friction: 1
        ,
        isStatic: false
    }
    ground_options = {
        isStatic: true,
        density: 10
    }

    trolley_options = {
        friction: 1,
        density: 5
    }

    copter = Bodies.rectangle(-300, 150, 100, 70);
    pack = Bodies.circle(100, 150, 30, pack_options);
    ground = Bodies.rectangle(400, 550, 1600, 200, ground_options);

    trolleyRight = new ContainerPart(480, 410, 100, trolley_options, null);
    trolleyLeft = new ContainerPart(320, 410, 100, trolley_options, null);
    trolleyDown = new ContainerPart(400, 480, 200, trolley_options, PI / 2);

    // joined_trolley_1_options = {
    //     bodyA: trolleyLeft.body,
    //     bodyB: trolleyDown.body,
    //     length: 0,
    //     stiffness: 1
    // }
    // joined_trolley_2_options = {
    //     bodyA: trolleyRight.body,
    //     bodyB: trolleyDown.body,
    //     length: 0,
    //     stiffness: 1
    // }
    // joined_trolley_3_options = {
    //     bodyA: trolleyRight.body,
    //     bodyB: trolleyLeft.body,
    //     length: 200,
    //     stiffness: 1
    // }

    // trolley1 = Constraint.create(joined_trolley_1_options);
    // trolley2 = Constraint.create(joined_trolley_2_options);
    // trolley3 = Constraint.create(joined_trolley_3_options);

    // World.add(world, trolley1);
    // World.add(world, trolley2);
    // World.add(world, trolley3);

    Engine.run(engine);

    //World.add(world, pack);
    World.add(world, copter);
    World.add(world, ground);
}