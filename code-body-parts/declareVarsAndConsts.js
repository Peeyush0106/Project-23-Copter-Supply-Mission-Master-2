const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
// Some images' file Paths
const CopterImagePath = "images/helicopter.png";
const PackageImagePath = "images/package.png";
const GroundImagePath = "images/ground.jpg";

var world, engine;
var pack_options, ground_options, copter_options;

var copterImage, copterImageX, copterImageY, packImage, packImageX, packImageY, groundImage;

var packageFallX;

var copter_speed;

var groundImageX, groundImageY;

var leftEdge, rightEdge, topEdge, bottomEdge;

var gameShouldRestart;

var trolleyRight, trolleyLeft, trolleyDown, trolley_options;

var packShouldStayAt150Y;

var joined_trolley_1_options, joined_trolley_2_options, joined_trolley_3_options, trolley1, trolley2, trolley3;

var pack;

var packReleased = false;