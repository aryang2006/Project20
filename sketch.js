var cat, catImg, catImg2, catImg3;
var mouse, mouseImg, mouseImg2;
var garden, gardenImg;

function preload() {
    //load the images here
    catImg = loadImage("cat2.png")
    catImg2 = loadImage("cat3.png")
    catImg3 = loadImage("cat4.png")
    mouseImg = loadImage("mouse2.png")
    mouseImg2 = loadImage("mouse3.png")
    gardenImg = loadImage("garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    garden = createSprite(500, 400)
    garden.addImage(gardenImg)

    cat = createSprite(800,600)
    cat.addImage(catImg)
    cat.scale = 0.4

    mouse = createSprite(200,600)
    mouse.addImage(mouseImg)
    mouse.scale = 0.3


}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    keyPressed();

    if (cat.x - mouse.x < (cat.width - mouse.width) / 2) {
        cat.velocityX = 0;
        cat.addAnimation("catLastImage", catImg3);
        cat.changeAnimation("catLastImage");
    }

    drawSprites();
}


function keyPressed(){
    if (keyCode === LEFT_ARROW) {
        cat.velocityX = -5;
        cat.addAnimation("catRunning", catImg, catImg2);
        cat.changeAnimation("catRunning");
    }
  //For moving and changing animation write code here


}
