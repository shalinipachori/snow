const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var snow3Img,snow4Img,snow5;
var snow;

function preload(){
   snowBgImg = loadImage("snow3.jpg");
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  
  snow3 =new Snow()
}

function draw() {
  background(snowBgImg);  
}