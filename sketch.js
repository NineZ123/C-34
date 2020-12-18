var ball;
var database, position;
var fbWall;

function setup(){
    database= firebase.database();
    createCanvas(500,500);
   

    var fbWallpos = database.ref("Ball/Position");
    fbWallpos.on("value",readPosition,showError);


fbWall = createSprite(250,250,10,10);
    fbWall.shapeColor = "red";
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,1);
    }
    drawSprites();
}

function changePosition(x,y){
    //ball.x = ball.x + x;
    //ball.y = ball.y + y;
    database.ref("Ball/Position").set({
        "x":position.x+x,
        "y":position.x+x
   
    });
}

function readPosition(data){
       position=data.val();
    console.log(position.x);
    fbWall.x=position.x;
    fbWall.y=position.y;

}

function showError(){
    console.log("Error in Database or Code")


}